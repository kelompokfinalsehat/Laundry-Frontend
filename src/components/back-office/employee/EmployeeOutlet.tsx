import {
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

export function EmployeeOutlet({
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
      <Stack gap={4}>
        <Text fw={600}>
          Penempatan Outlet
        </Text>

        {employee.currentOutlet ? (
          <>
            <Text size="sm" fw={500}>
              {employee.currentOutlet.name}
            </Text>

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              Karyawan saat ini ditugaskan
              pada outlet ini.
            </Text>
          </>
        ) : (
          <>
            <Text size="sm">
              Belum ditugaskan ke outlet.
            </Text>

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              Penempatan outlet dapat dilakukan
              setelah karyawan memenuhi
              persyaratan assignment.
            </Text>
          </>
        )}
      </Stack>
    </Paper>
  );
}