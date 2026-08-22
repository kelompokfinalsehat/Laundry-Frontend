"use client";

import {
  ActionIcon,
  Button,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

import { useUpdateEmployee } from "@/hooks/employee.hooks";
import type {
  Employee,
  EmployeeRole,
} from "@/types/api/employee.types";
import { useState } from "react";

type Props = {
  employee: Employee;
};

const ROLE_LABEL: Record<EmployeeRole, string> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

export function EmployeeInformation({
  employee,
}: Props) {
  const [
    opened,
    { open, close },
  ] = useDisclosure(false);

  const updateEmployee =
    useUpdateEmployee();

  const [name, setName] = useState(
    employee.name,
  );

  const [role, setRole] =
    useState<EmployeeRole>(employee.role);

  const handleSubmit = () => {
    updateEmployee.mutate(
      {
        employeeId: employee.id,
        payload: {
          name,
          role,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message:
              "Informasi karyawan berhasil diperbarui.",
            color: "green",
          });

          close();
        },

        onError: (error) => {
          notifications.show({
            title: "Gagal memperbarui karyawan",
            message:
              error instanceof Error
                ? error.message
                : "Terjadi kesalahan.",
            color: "red",
          });
        },
      },
    );
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={600}>
              Informasi Karyawan
            </Text>

            <ActionIcon
              variant="subtle"
              onClick={open}
              aria-label="Edit informasi"
            >
              <IconEdit size={18} />
            </ActionIcon>
          </Group>

          <Group grow>
            <Stack gap={2}>
              <Text
                size="xs"
                c="var(--color-text-secondary)"
              >
                Nama
              </Text>

              <Text size="sm" fw={500}>
                {employee.name}
              </Text>
            </Stack>

            <Stack gap={2}>
              <Text
                size="xs"
                c="var(--color-text-secondary)"
              >
                Email
              </Text>

              <Text size="sm" fw={500}>
                {employee.email}
              </Text>
            </Stack>

            <Stack gap={2}>
              <Text
                size="xs"
                c="var(--color-text-secondary)"
              >
                Role
              </Text>

              <Text size="sm" fw={500}>
                {ROLE_LABEL[employee.role]}
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Paper>

      <Modal
        opened={opened}
        onClose={close}
        title="Edit Informasi Karyawan"
        centered
      >
        <Stack gap="md">
          <TextInput
            label="Nama"
            value={name}
            onChange={(event) =>
              setName(event.currentTarget.value)
            }
          />

          <Select
            label="Role"
            value={role}
            onChange={(value) =>
              value &&
              setRole(value as EmployeeRole)
            }
            data={[
              {
                value: "OUTLET_ADMIN",
                label: "Outlet Admin",
              },
              {
                value: "WORKER",
                label: "Worker",
              },
              {
                value: "DRIVER",
                label: "Driver",
              },
            ]}
          />

          <Group justify="flex-end">
            <Button
              variant="default"
              onClick={close}
              disabled={updateEmployee.isPending}
            >
              Batal
            </Button>

            <Button
              onClick={handleSubmit}
              loading={updateEmployee.isPending}
            >
              Simpan Perubahan
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}