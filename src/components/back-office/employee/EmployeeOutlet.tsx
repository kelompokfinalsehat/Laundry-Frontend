"use client";

import { useState } from "react";

import {
  ActionIcon,
  Button,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";

import {
  IconBuildingStore,
  IconEdit,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";

import {
  useAssignEmployee,
} from "@/hooks/employee.hooks";

import type { Employee } from "@/types/api/employee.types";
import { useOutlets } from "@/hooks/outlet.hooks";

type Props = {
  employee: Employee;
};

export function EmployeeOutlet({ employee }: Props) {
  const [opened, { open, close }] =
    useDisclosure(false);

  const [outletId, setOutletId] =
    useState<string | null>(
      employee.currentOutlet?.id ?? null,
    );

  const { data: outletsResponse } =
    useOutlets({
      page: 1,
      pageSize: 50,
      sortBy: "name",
      sortOrder: "asc",
    });

  const assignEmployee =
    useAssignEmployee();

  const outlets =
    outletsResponse?.data ?? [];

  const outletOptions = outlets.map(
    (outlet) => ({
      value: outlet.id,
      label: outlet.name,
    }),
  );

  const canManageOutlet =
    employee.accountStatus === "ACTIVE" &&
    employee.workStatus !== "BUSY";

  const getDisabledReason = () => {
    if (employee.accountStatus === "INVITED") {
      return "Karyawan harus mengaktifkan akun terlebih dahulu.";
    }

    if (employee.accountStatus === "INACTIVE") {
      return "Aktifkan akun karyawan terlebih dahulu.";
    }

    if (employee.workStatus === "BUSY") {
      return "Karyawan sedang memiliki pekerjaan aktif.";
    }

    return null;
  };

  const disabledReason =
    getDisabledReason();

  const handleOpen = () => {
    if (!canManageOutlet) return;

    setOutletId(
      employee.currentOutlet?.id ?? null,
    );

    open();
  };

  const handleAssign = () => {
    if (!outletId) return;

    assignEmployee.mutate(
      {
        employeeId: employee.id,
        outletId,
      },
      {
        onSuccess: () => {
          close();
        },
      },
    );
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <Group justify="space-between">
            <Group gap="sm">
              <IconBuildingStore size={20} />

              <div>
                <Text fw={600}>
                  Penempatan Outlet
                </Text>

                <Text
                  size="sm"
                  c="var(--color-text-secondary)"
                >
                  Outlet tempat karyawan
                  ditempatkan saat ini
                </Text>
              </div>
            </Group>

            <Tooltip
              label={disabledReason}
              disabled={!disabledReason}
            >
              <ActionIcon
                variant="subtle"
                color="rinseBlue"
                onClick={handleOpen}
                disabled={!canManageOutlet}
                aria-label="Kelola penempatan outlet"
              >
                <IconEdit size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>

          <div>
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Outlet Saat Ini
            </Text>

            <Text fw={500}>
              {employee.currentOutlet?.name ??
                "Belum ditempatkan"}
            </Text>
          </div>

          {!canManageOutlet &&
            disabledReason && (
              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                {disabledReason}
              </Text>
            )}
        </Stack>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => {
          if (!assignEmployee.isPending) {
            close();
          }
        }}
        title={
          employee.currentOutlet
            ? "Pindahkan Outlet"
            : "Tempatkan ke Outlet"
        }
        centered
        closeOnClickOutside={
          !assignEmployee.isPending
        }
        closeOnEscape={
          !assignEmployee.isPending
        }
      >
        <Stack gap="md">
          <Text size="sm">
            {employee.currentOutlet
              ? "Pilih outlet baru untuk karyawan ini."
              : "Pilih outlet tempat karyawan akan ditempatkan."}
          </Text>

          <Select
            label="Outlet"
            placeholder="Pilih outlet"
            searchable
            data={outletOptions}
            value={outletId}
            onChange={setOutletId}
            disabled={
              assignEmployee.isPending
            }
            nothingFoundMessage="Outlet tidak ditemukan"
          />

          <Group
            justify="flex-end"
            mt="sm"
          >
            <Button
              variant="default"
              onClick={close}
              disabled={
                assignEmployee.isPending
              }
            >
              Batal
            </Button>

            <Button
              onClick={handleAssign}
              loading={
                assignEmployee.isPending
              }
              disabled={!outletId}
            >
              {employee.currentOutlet
                ? "Pindahkan"
                : "Tempatkan"}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}