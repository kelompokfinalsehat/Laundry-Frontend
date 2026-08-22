import {
  Badge,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import type {
  Employee,
} from "@/types/api/employee.types";

type Props = {
  employee: Employee;
};

const ACCOUNT_STATUS = {
  INVITED: {
    label: "Diundang",
    color: "yellow",
  },
  ACTIVE: {
    label: "Aktif",
    color: "green",
  },
  INACTIVE: {
    label: "Tidak Aktif",
    color: "gray",
  },
} as const;

const WORK_STATUS = {
  OFF_DUTY: {
    label: "Off Duty",
    color: "gray",
  },
  AVAILABLE: {
    label: "Tersedia",
    color: "blue",
  },
  BUSY: {
    label: "Sibuk",
    color: "orange",
  },
} as const;

export function EmployeeStatus({
  employee,
}: Props) {
  const account =
    ACCOUNT_STATUS[employee.accountStatus] ?? {
      label: employee.accountStatus ?? "-",
      color: "gray",
    };

  const work =
    WORK_STATUS[employee.workStatus] ?? {
      label: employee.workStatus ?? "-",
      color: "gray",
    };

  return (
    <Group grow align="stretch">
      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="xs">
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Status Akun
          </Text>

          <Badge
            w="fit-content"
            color={account.color}
            variant="light"
          >
            {account.label}
          </Badge>
        </Stack>
      </Paper>

      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="xs">
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Status Kerja
          </Text>

          <Badge
            w="fit-content"
            color={work.color}
            variant="light"
          >
            {work.label}
          </Badge>
        </Stack>
      </Paper>
    </Group>
  );
}