"use client";

import {
  Button,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import {
  IconMailForward,
  IconPlayerPlay,
  IconUserOff,
} from "@tabler/icons-react";

import {
  useActivateEmployee,
  useDeactivateEmployee,
  useResendInvitation,
} from "@/hooks/employee.hooks";

import type { Employee } from "@/types/api/employee.types";

type Props = {
  employee: Employee;
};

export function EmployeeActions({ employee }: Props) {
  const [
    confirmOpened,
    {
      open: openConfirm,
      close: closeConfirm,
    },
  ] = useDisclosure(false);

  const resendInvitation = useResendInvitation();
  const activateEmployee = useActivateEmployee();
  const deactivateEmployee = useDeactivateEmployee();

  const isActive =
    employee.accountStatus === "ACTIVE";

  const isInactive =
    employee.accountStatus === "INACTIVE";

  const isInvited =
    employee.accountStatus === "INVITED";

  const handleResendInvitation = () => {
    resendInvitation.mutate(employee.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message:
            "Undangan berhasil dikirim ulang.",
          color: "green",
        });
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal mengirim ulang undangan.",
          color: "red",
        });
      },
    });
  };

  const handleStatusAction = () => {
    const mutation = isActive
      ? deactivateEmployee
      : activateEmployee;

    mutation.mutate(employee.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: isActive
            ? "Karyawan berhasil dinonaktifkan."
            : "Karyawan berhasil diaktifkan.",
          color: "green",
        });

        closeConfirm();
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Terjadi kesalahan.",
          color: "red",
        });
      },
    });
  };

  if (!isInvited && !isActive && !isInactive) {
    return null;
  }

  const statusLoading =
    activateEmployee.isPending ||
    deactivateEmployee.isPending;

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
          <div>
            <Text fw={600}>
              Tindakan Karyawan
            </Text>

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              Kelola status akun dan undangan
              karyawan.
            </Text>
          </div>

          <Group>
            {isInvited && (
              <Button
                variant="light"
                leftSection={
                  <IconMailForward size={18} />
                }
                loading={
                  resendInvitation.isPending
                }
                onClick={
                  handleResendInvitation
                }
              >
                Kirim Ulang Undangan
              </Button>
            )}

            {isActive && (
              <Button
                color="red"
                variant="light"
                leftSection={
                  <IconUserOff size={18} />
                }
                onClick={openConfirm}
              >
                Nonaktifkan Karyawan
              </Button>
            )}

            {isInactive && (
              <Button
                color="green"
                variant="light"
                leftSection={
                  <IconPlayerPlay size={18} />
                }
                onClick={openConfirm}
              >
                Aktifkan Karyawan
              </Button>
            )}
          </Group>
        </Stack>
      </Paper>

      <Modal
        opened={confirmOpened}
        onClose={closeConfirm}
        title={
          isActive
            ? "Nonaktifkan Karyawan"
            : "Aktifkan Karyawan"
        }
        centered
      >
        <Stack gap="md">
          <Text size="sm">
            {isActive
              ? `Apakah kamu yakin ingin menonaktifkan ${employee.name}?`
              : `Apakah kamu yakin ingin mengaktifkan ${employee.name}?`}
          </Text>

          {isActive && (
            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              Karyawan tidak akan dapat login,
              clock in, atau mengambil pekerjaan
              baru.
            </Text>
          )}

          <Group justify="flex-end">
            <Button
              variant="default"
              onClick={closeConfirm}
              disabled={statusLoading}
            >
              Batal
            </Button>

            <Button
              color={
                isActive
                  ? "red"
                  : "green"
              }
              loading={statusLoading}
              onClick={handleStatusAction}
            >
              {isActive
                ? "Ya, Nonaktifkan"
                : "Ya, Aktifkan"}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}