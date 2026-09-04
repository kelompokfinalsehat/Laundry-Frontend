import { OutletAttendanceSummary } from "@/types/api/employee.types";
import { Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconClock, IconLogin, IconLogout, IconUser } from "@tabler/icons-react";

type Props = {
  summary: OutletAttendanceSummary;
};

export function AttendanceSummary({ summary }: Props) {
  const items = [
    { label: "Total Karyawan", value: summary.totalEmployees, icon: IconUser },
    { label: "Belum Absen", value: summary.notClockedIn, icon: IconClock },
    { label: "Sedang Bertugas", value: summary.clockedIn, icon: IconLogin },
    { label: "Sudah Pulang", value: summary.clockedOut, icon: IconLogout },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="sm">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Paper key={item.label} withBorder radius="md" p="md">
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={4}>
                <Text size="sm" c="var(--color-text-secondary)">
                  {item.label}
                </Text>
                <Text size="xl" fw={700}>
                    {item.value}
                </Text>
                <Icon size={20} />
              </Stack>
            </Group>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
}
