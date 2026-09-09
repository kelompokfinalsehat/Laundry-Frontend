"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useHistoryDetail } from "@/hooks/driver.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Badge, Button, Card, Divider, Group, Paper, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconArrowLeft, IconClock, IconMapPin, IconPhone, IconTruckDelivery, IconUser } from "@tabler/icons-react";

import Link from "next/link";
import { useParams } from "next/navigation";

export function DriverHistoryDetail() {
  const { assignmentId } = useParams<{ assignmentId: string }>();

  const detailQuery = useHistoryDetail(assignmentId);

  return (
    <Stack gap="md">
      <Button component={Link} href="/internal/driver/riwayat" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Riwayat
      </Button>

      <AsyncStateView
        isLoading={detailQuery.isPending}
        isError={detailQuery.isError}
        error={detailQuery.error}
        data={detailQuery.data}
        onRetry={() => detailQuery.refetch()}
        skeleton={
          <Stack gap="md">
            <Skeleton height={120} radius="lg" />
            <Skeleton height={190} radius="lg" />
            <Skeleton height={120} radius="lg" />
            <Skeleton height={180} radius="lg" />
          </Stack>
        }
      >
        {(assignment) => {
          const taskTypeLabel = assignment.taskType === "PICKUP" ? "Penjemputan" : "Pengantaran";

          return (
            <Stack gap="md">
              {/* Summary */}
              <Card withBorder shadow="sm" radius="lg" p="lg">
                <Stack gap="md">
                  <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon size={44} radius="xl" variant="light" color="var(--color-primary)">
                        <IconTruckDelivery size={22} />
                      </ThemeIcon>

                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">
                          Riwayat Tugas
                        </Text>

                        <Text fw={700} size="lg">
                          {assignment.order.orderCode}
                        </Text>
                      </Stack>
                    </Group>

                    <Badge variant="light" color={assignment.taskType === "PICKUP" ? "orange" : "blue"} size="lg">
                      {taskTypeLabel}
                    </Badge>
                  </Group>

                  <Divider />

                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      Status
                    </Text>

                    <Badge variant="light" color="green">
                      Selesai
                    </Badge>
                  </Group>
                </Stack>
              </Card>

              {/* Customer */}
              <Card withBorder radius="lg" p="lg">
                <Stack gap="md">
                  <Text fw={600}>Informasi Pelanggan</Text>

                  <Paper withBorder radius="md" p="md">
                    <Stack gap="md">
                      <Group gap="sm" align="flex-start" wrap="nowrap">
                        <ThemeIcon variant="light" radius="xl" color="var(--color-primary)">
                          <IconUser size={17} />
                        </ThemeIcon>

                        <Stack gap={2}>
                          <Text size="xs" c="dimmed">
                            Nama Pelanggan
                          </Text>

                          <Text size="sm" fw={600}>
                            {assignment.order.customer.name}
                          </Text>
                        </Stack>
                      </Group>

                      <Divider />

                      <Group gap="sm" align="flex-start" wrap="nowrap">
                        <ThemeIcon variant="light" radius="xl" color="var(--color-primary)">
                          <IconMapPin size={17} />
                        </ThemeIcon>

                        <Stack gap={2}>
                          <Text size="xs" c="dimmed">
                            Alamat
                          </Text>

                          <Text
                            size="sm"
                            style={{
                              lineHeight: 1.5,
                            }}
                          >
                            {assignment.order.addressSnapshot}
                          </Text>
                        </Stack>
                      </Group>

                      <Group gap="sm" align="flex-start" wrap="nowrap">
                        <ThemeIcon variant="light" radius="xl" color="var(--color-primary)">
                          <IconPhone size={17} />
                        </ThemeIcon>

                        <Stack gap={2}>
                          <Text size="xs" c="dimmed">
                            Nomor Telepon
                          </Text>

                          <Text
                            component="a"
                            href={`tel:${assignment.order.addressPhoneSnapshot}`}
                            size="sm"
                            fw={500}
                            style={{
                              color: "var(--color-primary-dark)",
                              textDecoration: "none",
                            }}
                          >
                            {assignment.order.addressPhoneSnapshot}
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Stack>
              </Card>

              {/* Outlet */}
              <Card withBorder radius="lg" p="lg">
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="var(--color-primary)">
                      <IconMapPin size={18} />
                    </ThemeIcon>

                    <Text fw={600}>Outlet</Text>
                  </Group>

                  <Divider />

                  <Stack gap={4}>
                    <Text size="sm" fw={600}>
                      {assignment.outlet.name}
                    </Text>

                    <Text
                      size="sm"
                      c="dimmed"
                      style={{
                        lineHeight: 1.5,
                      }}
                    >
                      {assignment.outlet.address}
                    </Text>
                  </Stack>
                </Stack>
              </Card>

              {/* Timeline */}
              <Card withBorder radius="lg" p="lg">
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="var(--color-primary)">
                      <IconClock size={18} />
                    </ThemeIcon>

                    <Text fw={600}>Riwayat Waktu</Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between" align="flex-start">
                    <Text size="sm" c="dimmed">
                      Tugas Diambil
                    </Text>

                    <Stack gap={0} align="flex-end">
                      <Text size="sm" fw={500}>
                        {formatFieldOpsDate(assignment.assignedAt)}
                      </Text>

                      <Text size="xs" c="dimmed">
                        {formatFieldOpsTime(assignment.assignedAt)}
                      </Text>
                    </Stack>
                  </Group>

                  {assignment.taskType === "PICKUP" && (
                    <Group justify="space-between" align="flex-start">
                      <Text size="sm" c="dimmed">
                        Laundry Diambil
                      </Text>

                      <Stack gap={0} align="flex-end">
                        <Text size="sm" fw={500}>
                          {formatFieldOpsDate(assignment.pickedUpAt)}
                        </Text>

                        <Text size="xs" c="dimmed">
                          {formatFieldOpsTime(assignment.pickedUpAt)}
                        </Text>
                      </Stack>
                    </Group>
                  )}

                  {assignment.taskType === "DELIVERY" && (
                    <Group justify="space-between" align="flex-start">
                      <Text size="sm" c="dimmed">
                        Laundry Diantar
                      </Text>

                      <Stack gap={0} align="flex-end">
                        <Text size="sm" fw={500}>
                          {formatFieldOpsDate(assignment.deliveredAt)}
                        </Text>

                        <Text size="xs" c="dimmed">
                          {formatFieldOpsTime(assignment.deliveredAt)}
                        </Text>
                      </Stack>
                    </Group>
                  )}

                  <Group justify="space-between" align="flex-start">
                    <Text size="sm" c="dimmed">
                      Tugas Selesai
                    </Text>

                    <Stack gap={0} align="flex-end">
                      <Text size="sm" fw={500}>
                        {formatFieldOpsDate(assignment.completedAt)}
                      </Text>

                      <Text size="xs" c="dimmed">
                        {formatFieldOpsTime(assignment.completedAt)}
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
