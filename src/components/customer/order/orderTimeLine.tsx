"use client";

import { Accordion, Stack, Group, Text, ThemeIcon, Badge } from "@mantine/core";
import type { Complaint, TimelineEntry } from "@/types/api/orders.types";

const COMPLAINT_STATUS_LABELS: Record<Complaint["status"], string> = {
  OPEN: "Komplain Diajukan — Menunggu Ditinjau",
  IN_REVIEW: "Komplain Sedang Ditinjau",
  RESOLVED: "Komplain Selesai Ditangani",
  REJECTED: "Komplain Ditolak",
};

const COMPLAINT_COLORS: Record<Complaint["status"], string> = {
  OPEN: "var(--color-warning, #f59f00)",
  IN_REVIEW: "var(--color-warning, #f59f00)",
  RESOLVED: "var(--color-success, #1a7f37)",
  REJECTED: "var(--color-error)",
};

// Pengelompokan tampilan timeline jadi 3 kategori (beda dari statusGroup
// filter list order) — murni untuk keperluan UI accordion di halaman detail.
const TIMELINE_CATEGORIES = [
  {
    key: "PICKUP",
    label: "Pickup",
    statuses: [
      "SCHEDULED",
      "WAITING_DRIVER_PICKUP",
      "ON_THE_WAY_TO_OUTLET",
      "ARRIVED_AT_OUTLET",
    ],
  },
  {
    key: "PROSES",
    label: "Proses Laundry",
    statuses: ["WASHING", "IRONING", "PACKING", "WAITING_PAYMENT"],
  },
  {
    key: "PENGIRIMAN",
    label: "Pengiriman",
    statuses: [
      "READY_FOR_DELIVERY",
      "ON_THE_WAY_TO_CUSTOMER",
      "WAITING_CUSTOMER_CONFIRMATION",
      "RECEIVED_BY_CUSTOMER",
    ],
  },
] as const;

type OrderTimelineProps = {
  timeline: TimelineEntry[];
  complaint?: Complaint | null;
};

function TimelineEntries({ entries }: { entries: TimelineEntry[] }) {
  return (
    <Stack gap="md">
      {entries.map((entry, index) => {
        const isDone = entry.isCompleted || entry.isCurrent;
        return (
          <Group key={entry.status} align="flex-start" gap="sm" wrap="nowrap">
            <Stack gap={0} align="center">
              <ThemeIcon
                size={20}
                radius="xl"
                style={{
                  backgroundColor: isDone ? "var(--color-primary)" : "var(--color-border)",
                }}
              >
                {entry.isCurrent ? "●" : isDone ? "✓" : ""}
              </ThemeIcon>
              {index < entries.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 28,
                    backgroundColor: entry.isCompleted ? "var(--color-primary)" : "var(--color-border)",
                  }}
                />
              )}
            </Stack>
            <Stack gap={0} pb="sm">
              <Text
                size="sm"
                fw={entry.isCurrent ? 700 : 500}
                c={isDone ? "var(--color-text-primary)" : "var(--color-text-secondary)"}
              >
                {entry.label}
              </Text>
              {entry.timestamp && (
                <Text size="xs" c="var(--color-text-secondary)">
                  {new Date(entry.timestamp).toLocaleString("id-ID")}
                </Text>
              )}
            </Stack>
          </Group>
        );
      })}
    </Stack>
  );
}

export function OrderTimeline({ timeline, complaint }: OrderTimelineProps) {
  // Status paling akhir (RECEIVED_BY_CUSTOMER) tetap ditandai isCurrent saat
  // itu jadi status akhir order — tidak ada langkah berikutnya lagi. Kalau
  // entry terakhir sudah completed ATAU current, anggap seluruh order tuntas,
  // supaya semua kategori ikut ditandai "Selesai", bukan macet di "Berlangsung".
  const lastEntry = timeline[timeline.length - 1];
  const isOrderFullyDone = Boolean(lastEntry?.isCompleted || lastEntry?.isCurrent);

  const groups = TIMELINE_CATEGORIES.map((category) => {
    const entries = category.statuses
      .map((status) => timeline.find((t) => t.status === status))
      .filter((t): t is TimelineEntry => Boolean(t));

    const isCompleted = isOrderFullyDone || entries.every((e) => e.isCompleted);
    const isCurrent = !isOrderFullyDone && entries.some((e) => e.isCurrent);

    return { ...category, entries, isCompleted, isCurrent };
  });

  const defaultOpenKey =
    groups.find((g) => g.isCurrent)?.key ??
    (isOrderFullyDone ? groups[groups.length - 1]?.key : groups[0]?.key);

  return (
    <Stack gap="md">
      <Accordion
        defaultValue={defaultOpenKey}
        variant="separated"
        radius="md"
        styles={{
          item: {
            border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
            backgroundColor: "var(--color-surface)",
          },
        }}
      >
        {groups.map((group) => (
          <Accordion.Item key={group.key} value={group.key}>
            <Accordion.Control>
              <Group justify="space-between" pr="sm">
                <Text
                  fw={600}
                  style={{
                    color: group.isCurrent
                      ? "var(--color-primary)"
                      : "var(--color-text-primary)",
                  }}
                >
                  {group.label}
                </Text>
                <Badge
                  style={{
                    backgroundColor: group.isCompleted
                      ? "var(--color-success-light, #e6f4ea)"
                      : group.isCurrent
                        ? "var(--color-primary-light)"
                        : "var(--color-border)",
                    color: group.isCompleted
                      ? "var(--color-success, #1a7f37)"
                      : group.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                  }}
                >
                  {group.isCompleted ? "Selesai" : group.isCurrent ? "Berlangsung" : "Menunggu"}
                </Badge>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <TimelineEntries entries={group.entries} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      {complaint && (
        <Group align="flex-start" gap="sm" wrap="nowrap" pt="xs">
          <ThemeIcon
            size={20}
            radius="xl"
            style={{ backgroundColor: COMPLAINT_COLORS[complaint.status] }}
          >
            ●
          </ThemeIcon>
          <Stack gap={0}>
            <Text size="sm" fw={700} style={{ color: COMPLAINT_COLORS[complaint.status] }}>
              {COMPLAINT_STATUS_LABELS[complaint.status]}
            </Text>
            <Text size="xs" c="var(--color-text-secondary)">
              {new Date(complaint.createdAt).toLocaleString("id-ID")}
            </Text>
          </Stack>
        </Group>
      )}
    </Stack>
  );
}