"use client";

import { Alert, Badge, Button, Card, Divider, Group, Stack, Text } from "@mantine/core";

import { IconMapPin, IconPhone } from "@tabler/icons-react";

import type { DriverActiveAssignment, DriverActiveState } from "@/types/api/driver.types";

import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

/* =========================================================
   PROPS
========================================================= */

type DriverActiveContentProps = {
  assignment: DriverActiveAssignment;

  isStarting?: boolean;

  isConfirmingPickup?: boolean;

  isCompletingDelivery?: boolean;

  onStart: () => void;

  onConfirmPickup: () => void;

  onCompleteDelivery: () => void;
};

/* =========================================================
   STATE UI
========================================================= */

const STATE_META: Record<
  DriverActiveState,
  {
    label: string;
    description: string;
    color: string;
  }
> = {
  PICKUP_ASSIGNED: {
    label: "Siap Penjemputan",

    description: "Mulai perjalanan menuju lokasi pelanggan.",

    color: "yellow",
  },

  PICKUP_TO_CUSTOMER: {
    label: "Menuju Pelanggan",

    description: "Ambil laundry dari pelanggan lalu konfirmasi setelah laundry diterima.",

    color: "blue",
  },

  PICKUP_TO_OUTLET: {
    label: "Menuju Outlet",

    description: "Bawa laundry kembali menuju outlet.",

    color: "orange",
  },

  DELIVERY_ASSIGNED: {
    label: "Siap Pengantaran",

    description: "Mulai perjalanan untuk mengantarkan laundry kepada pelanggan.",

    color: "yellow",
  },

  DELIVERY_TO_CUSTOMER: {
    label: "Menuju Pelanggan",

    description: "Antarkan laundry kepada pelanggan lalu selesaikan delivery setelah diterima.",

    color: "blue",
  },
};

function getTaskLabel(taskType: DriverActiveAssignment["taskType"]) {
  if (taskType === "PICKUP") {
    return "Pickup";
  }

  return "Delivery";
}

/* =========================================================
   COMPONENT
========================================================= */

export function DriverActiveContent({
  assignment,

  isStarting = false,

  isConfirmingPickup = false,

  isCompletingDelivery = false,

  onStart,

  onConfirmPickup,

  onCompleteDelivery,
}: DriverActiveContentProps) {
  const meta = STATE_META[assignment.state];

  const isSubmitting = isStarting || isConfirmingPickup || isCompletingDelivery;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=` + `${assignment.destination.latitude},${assignment.destination.longitude}`;

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

            <Badge color={meta.color} variant="light" size="lg">
              {meta.label}
            </Badge>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Jenis Tugas
            </Text>

            <Badge variant="light">{getTaskLabel(assignment.taskType)}</Badge>
          </Group>

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Status
            </Text>

            <Text size="sm" fw={500}>
              {assignment.status}
            </Text>
          </Group>

          {assignment.state === "PICKUP_ASSIGNED" && assignment.pickupScheduledAt && (
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Jadwal Pickup
              </Text>

              <Text size="sm">
                {formatFieldOpsDate(assignment.pickupScheduledAt)} · {formatFieldOpsTime(assignment.pickupScheduledAt)}
              </Text>
            </Group>
          )}
        </Stack>
      </Card>

      {/* ===================================================
          DESTINATION
      =================================================== */}

      <Card withBorder radius="lg" p="lg">
        <Stack gap="md">
          <Group gap="xs">
            <IconMapPin size={18} />

            <Text fw={600}>Tujuan</Text>
          </Group>

          <Stack gap={3}>
            <Text size="sm" fw={600}>
              {assignment.destination.name}
            </Text>

            <Text size="sm" c="dimmed">
              {assignment.destination.address}
            </Text>
          </Stack>

          {assignment.destination.phone && (
            <Group gap="xs">
              <IconPhone size={16} />

              <Text size="sm">{assignment.destination.phone}</Text>
            </Group>
          )}

          <Button component="a" href={mapsUrl} target="_blank" rel="noopener noreferrer" variant="light">
            Buka Maps
          </Button>
        </Stack>
      </Card>

      {/* ===================================================
          STATE INFORMATION
      =================================================== */}

      <Alert color={meta.color} title={meta.label}>
        {meta.description}
      </Alert>

      {/* ===================================================
          START PICKUP
      =================================================== */}

      {assignment.action === "START_PICKUP" && (
        <Button type="button" size="md" onClick={onStart} loading={isStarting} disabled={isSubmitting}>
          Mulai Penjemputan
        </Button>
      )}

      {/* ===================================================
          CONFIRM PICKUP
      =================================================== */}

      {assignment.action === "CONFIRM_PICKUP" && (
        <Button type="button" size="md" onClick={onConfirmPickup} loading={isConfirmingPickup} disabled={isSubmitting}>
          Konfirmasi Laundry Diambil
        </Button>
      )}

      {/* ===================================================
          PICKUP TO OUTLET
      =================================================== */}

      {assignment.state === "PICKUP_TO_OUTLET" && (
        <Card
          withBorder
          radius="lg"
          p="lg"
          style={{
            borderStyle: "dashed",
          }}
        >
          <Stack gap="xs" align="center">
            <Text size="sm" fw={600} ta="center">
              Laundry sudah diambil
            </Text>

            <Text size="sm" c="dimmed" ta="center">
              {assignment.message ?? "Menunggu konfirmasi dari Outlet Admin"}
            </Text>
          </Stack>
        </Card>
      )}

      {/* ===================================================
          START DELIVERY
      =================================================== */}

      {assignment.action === "START_DELIVERY" && (
        <Button type="button" size="md" onClick={onStart} loading={isStarting} disabled={isSubmitting}>
          Mulai Pengantaran
        </Button>
      )}

      {/* ===================================================
          COMPLETE DELIVERY
      =================================================== */}

      {assignment.action === "COMPLETE_DELIVERY" && (
        <Button type="button" size="md" onClick={onCompleteDelivery} loading={isCompletingDelivery} disabled={isSubmitting}>
          Selesaikan Pengantaran
        </Button>
      )}
    </Stack>
  );
}
