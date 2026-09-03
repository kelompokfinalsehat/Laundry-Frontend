import type { DriverActiveAssignment } from "@/types/api/driver.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Button, Card, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconCalendarTime, IconPackage, IconRoute, IconTruck } from "@tabler/icons-react";

import { DriverDestinationCard } from "./DriverDestinationCard";

type DriverActiveTaskViewProps = {
  assignment: DriverActiveAssignment;

  isStarting: boolean;
  isPickingUp: boolean;
  isCompleting: boolean;

  onStart: () => void;
  onPickup: () => void;
  onComplete: () => void;
};

export function DriverActiveTaskView({
  assignment,
  isStarting,
  isPickingUp,
  isCompleting,
  onStart,
  onPickup,
  onComplete,
}: DriverActiveTaskViewProps) {
  switch (assignment.state) {
    case "PICKUP_ASSIGNED":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Penjemputan"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="yellow">
                  <IconTruck size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Siap Melakukan Penjemputan</Text>

                  <Text size="sm" c="dimmed">
                    Pastikan lokasi pelanggan sudah sesuai sebelum memulai perjalanan.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Jadwal Penjemputan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickupScheduledAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickupScheduledAt)}
                  </Text>
                </Group>
              </Paper>

              <Text size="xs" c="dimmed">
                Tekan tombol di bawah saat Anda benar-benar siap menuju pelanggan.
              </Text>

              <Button
                loading={isStarting}
                onClick={onStart}
                leftSection={<IconRoute size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Mulai Penjemputan
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "PICKUP_TO_CUSTOMER":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Lokasi Pelanggan"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Menuju Pelanggan</Text>

                  <Text size="sm" c="dimmed">
                    Datangi lokasi pelanggan dan ambil laundry sesuai tugas penjemputan.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Jadwal Penjemputan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickupScheduledAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickupScheduledAt)}
                  </Text>
                </Group>
              </Paper>

              <Text size="xs" c="dimmed">
                Konfirmasi hanya setelah laundry benar-benar sudah diterima dari pelanggan.
              </Text>

              <Button
                loading={isPickingUp}
                onClick={onPickup}
                leftSection={<IconPackage size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Konfirmasi Laundry Diambil
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "PICKUP_TO_OUTLET":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Lokasi Outlet"
            name={assignment.destination.name}
            address={assignment.destination.address}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Menuju Outlet</Text>

                  <Text size="sm" c="dimmed">
                    Silakan kembali ke outlet dan tunggu Outlet Admin menyelesaikan order.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Waktu Pengambilan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickedUpAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickedUpAt)}
                  </Text>
                </Group>
              </Paper>
            </Stack>
          </Card>
        </Stack>
      );

    case "DELIVERY_ASSIGNED":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Pengantaran"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="yellow">
                  <IconTruck size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Siap Melakukan Pengantaran</Text>

                  <Text size="sm" c="dimmed">
                    Pastikan lokasi pelanggan sudah sesuai sebelum memulai perjalanan.
                  </Text>
                </Stack>
              </Group>

              <Text size="xs" c="dimmed">
                Tekan tombol di bawah saat Anda benar-benar siap menuju pelanggan.
              </Text>

              <Button
                loading={isStarting}
                onClick={onStart}
                leftSection={<IconRoute size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Mulai Pengantaran
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "DELIVERY_TO_CUSTOMER":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Pengantaran"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Sedang Mengantar</Text>

                  <Text size="sm" c="dimmed">
                    Datangi lokasi pelanggan dan serahkan laundry yang sudah selesai.
                  </Text>
                </Stack>
              </Group>

              <Text size="xs" c="dimmed">
                Konfirmasi hanya setelah laundry benar-benar telah diserahkan ke pelanggan.
              </Text>

              <Button
                loading={isCompleting}
                onClick={onComplete}
                leftSection={<IconPackage size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Selesaikan Pengantaran
              </Button>
            </Stack>
          </Card>
        </Stack>
      );
  }
}
