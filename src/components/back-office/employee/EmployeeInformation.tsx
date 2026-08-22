import {
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

export function EmployeeInformation({
  employee,
}: Props) {
  return (
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
        <Text fw={600}>
          Informasi Karyawan
        </Text>

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
              {employee.role}
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}