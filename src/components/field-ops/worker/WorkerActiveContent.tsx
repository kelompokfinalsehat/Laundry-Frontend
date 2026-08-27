"use client";

import { useState } from "react";

import { Alert, Badge, Button, Card, Divider, Group, NumberInput, Paper, Stack, Text } from "@mantine/core";

import type { StationType, WorkerActiveAssignment, WorkerValidateQuantityItem } from "@/types/api/worker.types";

import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

/* =========================================================
   PROPS
========================================================= */

type WorkerActiveContentProps = {
  assignment: WorkerActiveAssignment;

  isValidating?: boolean;

  isRequestingBypass?: boolean;

  isCompleting?: boolean;

  validationErrorCode?: string | null;

  onValidateQuantities: (items: WorkerValidateQuantityItem[]) => void;

  onRequestBypass: (items: WorkerValidateQuantityItem[]) => void;

  onComplete: () => void;
};

/* =========================================================
   LABEL HELPERS
========================================================= */

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Washing";

    case "IRONING":
      return "Ironing";

    case "PACKING":
      return "Packing";
  }
}

function getStatusBadge(status: WorkerActiveAssignment["status"]) {
  switch (status) {
    case "ASSIGNED":
      return {
        label: "Menunggu Diproses",
        color: "yellow",
      };

    case "IN_PROGRESS":
      return {
        label: "Sedang Diproses",
        color: "blue",
      };

    case "ON_HOLD_BYPASS":
      return {
        label: "Menunggu Bypass",
        color: "orange",
      };
  }
}

/* =========================================================
   ASSIGNED CONTENT
========================================================= */

function AssignedWorkerContent({
  assignment,
  isValidating,
  isRequestingBypass,
  validationErrorCode,
  onValidateQuantities,
  onRequestBypass,
}: {
  assignment: Extract<WorkerActiveAssignment, { status: "ASSIGNED" }>;

  isValidating: boolean;

  isRequestingBypass: boolean;

  validationErrorCode?: string | null;

  onValidateQuantities: (items: WorkerValidateQuantityItem[]) => void;

  onRequestBypass: (items: WorkerValidateQuantityItem[]) => void;
}) {
  const [quantities, setQuantities] = useState<Record<string, string | number>>(
    Object.fromEntries(assignment.order.items.map((item) => [item.orderItemId, ""])),
  );

  const quantityMismatch = validationErrorCode === "QUANTITY_MISMATCH";

  const isSubmitting = isValidating || isRequestingBypass;

  const isComplete = assignment.order.items.every((item) => {
    const value = quantities[item.orderItemId];

    if (value === "") {
      return false;
    }

    const quantity = Number(value);

    return Number.isInteger(quantity) && quantity >= 0;
  });

  function handleQuantityChange(orderItemId: string, value: string | number) {
    setQuantities((current) => ({
      ...current,

      [orderItemId]: value,
    }));
  }

  function buildItems(): WorkerValidateQuantityItem[] {
    return assignment.order.items.map((item) => ({
      orderItemId: item.orderItemId,

      submittedQuantity: Number(quantities[item.orderItemId]),
    }));
  }

  function handleValidate() {
    if (!isComplete) return;

    onValidateQuantities(buildItems());
  }

  function handleBypass() {
    if (!isComplete) return;

    onRequestBypass(buildItems());
  }

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Stack gap={2}>
          <Text fw={600}>Validasi Kuantitas</Text>

          <Text size="sm" c="dimmed">
            Masukkan jumlah aktual setiap item laundry sebelum memulai proses.
          </Text>
        </Stack>

        {assignment.order.items.map((item) => (
          <Paper key={item.orderItemId} withBorder radius="md" p="md">
            <Group justify="space-between" align="flex-end">
              <Stack gap={2}>
                <Text size="sm" fw={500}>
                  {item.laundryItem.name}
                </Text>

                <Text size="xs" c="dimmed">
                  Jumlah aktual
                </Text>
              </Stack>

              <NumberInput
                value={quantities[item.orderItemId] ?? ""}
                onChange={(value) => handleQuantityChange(item.orderItemId, value)}
                min={0}
                allowDecimal={false}
                allowNegative={false}
                placeholder="0"
                suffix=" pcs"
                w={120}
                disabled={isSubmitting}
              />
            </Group>
          </Paper>
        ))}

        {quantityMismatch && (
          <Alert color="orange" title="Kuantitas tidak sesuai">
            <Stack gap={4}>
              <Text size="sm">Jumlah aktual yang dimasukkan berbeda dengan data order.</Text>

              <Text size="sm" c="dimmed">
                Kamu masih bisa memperbaiki jumlah dan melakukan validasi kembali, atau mengajukan bypass jika jumlah aktual memang berbeda.
              </Text>
            </Stack>
          </Alert>
        )}

        {/* VALIDATE SELALU ADA */}

        <Button onClick={handleValidate} loading={isValidating} disabled={!isComplete || isRequestingBypass}>
          Validasi & Mulai Proses
        </Button>

        {/* BYPASS HANYA MUNCUL
            SETELAH MISMATCH */}

        {quantityMismatch && (
          <Button color="orange" variant="light" onClick={handleBypass} loading={isRequestingBypass} disabled={!isComplete || isValidating}>
            Ajukan Bypass
          </Button>
        )}
      </Stack>
    </Card>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function WorkerActiveContent({
  assignment,

  isValidating = false,

  isRequestingBypass = false,

  isCompleting = false,

  validationErrorCode,

  onValidateQuantities,

  onRequestBypass,

  onComplete,
}: WorkerActiveContentProps) {
  const stationLabel = getStationLabel(assignment.stationType);

  const statusBadge = getStatusBadge(assignment.status);

  return (
    <Stack gap="md">
      {/* ===================================================
          SUMMARY
      =================================================== */}

      <Card withBorder shadow="sm" radius="lg" p="lg">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                Tugas Aktif
              </Text>

              <Text fw={700} size="lg">
                {assignment.order.orderCode}
              </Text>
            </Stack>

            <Badge color={statusBadge.color} variant="light" size="lg">
              {statusBadge.label}
            </Badge>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Station
            </Text>

            <Badge variant="light">{stationLabel}</Badge>
          </Group>

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Diambil
            </Text>

            <Text size="sm">
              {formatFieldOpsDate(assignment.assignedAt)} · {formatFieldOpsTime(assignment.assignedAt)}
            </Text>
          </Group>

          {assignment.startedAt && (
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Mulai Diproses
              </Text>

              <Text size="sm">{formatFieldOpsTime(assignment.startedAt)}</Text>
            </Group>
          )}
        </Stack>
      </Card>

      {/* ===================================================
          ASSIGNED
      =================================================== */}

      {assignment.status === "ASSIGNED" && (
        <AssignedWorkerContent
          assignment={assignment}
          isValidating={isValidating}
          isRequestingBypass={isRequestingBypass}
          validationErrorCode={validationErrorCode}
          onValidateQuantities={onValidateQuantities}
          onRequestBypass={onRequestBypass}
        />
      )}

      {/* ===================================================
          IN PROGRESS
      =================================================== */}

      {assignment.status === "IN_PROGRESS" && (
        <Card withBorder radius="lg" p="lg">
          <Stack gap="md">
            <Badge color="blue" variant="light" w="fit-content">
              Sedang Diproses
            </Badge>

            <Stack gap={4}>
              <Text fw={600}>Proses {stationLabel}</Text>

              <Text size="sm" c="dimmed">
                Kuantitas telah divalidasi. Selesaikan proses {stationLabel}, kemudian tandai tugas sebagai selesai.
              </Text>
            </Stack>

            {/* INI TOMBOL COMPLETE
                YANG BENAR */}

            <Button onClick={onComplete} loading={isCompleting} disabled={isCompleting}>
              Tandai Selesai
            </Button>
          </Stack>
        </Card>
      )}

      {/* ===================================================
          ON HOLD BYPASS
      =================================================== */}

      {assignment.status === "ON_HOLD_BYPASS" && (
        <Card withBorder radius="lg" p="lg">
          <Stack gap="md">
            <Badge color="orange" variant="light" w="fit-content">
              Menunggu Persetujuan
            </Badge>

            <Text size="sm" c="dimmed">
              Penyesuaian kuantitas sedang menunggu keputusan dari Outlet Admin.
            </Text>

            <Button disabled>Menunggu Persetujuan</Button>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}
