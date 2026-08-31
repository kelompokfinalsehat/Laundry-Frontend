"use client";
import { DriverActiveSummary } from "@/components/field-ops/driver/DriverActiveSummary";
import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive } from "@/hooks/driver.hooks";
import { Button, Card, Skeleton, Stack } from "@mantine/core";
import Link from "next/link";
export default function Page() {
  const activeQuery = useActive();
  return (
    <FieldOpsHome>
      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tersedia terlebih dahulu."
        skeleton={
          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Skeleton height={24} width="45%" />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Stack>
          </Card>
        }
      >
        {(assignment) => (
          <Stack gap="sm">
            <DriverActiveSummary assignment={assignment} />

            <Button component={Link} href="/internal/driver/tugas/aktif" variant="light">
              Lihat Tugas Aktif
            </Button>
          </Stack>
        )}
      </AsyncStateView>
    </FieldOpsHome>
  );
}
