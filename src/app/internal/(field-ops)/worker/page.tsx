"use client"
import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";
import { WorkerActiveSummary } from "@/components/field-ops/worker/WorkerActiveSummary";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive } from "@/hooks/worker.hooks";
import { Card, Skeleton, Stack } from "@mantine/core";

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
        {(assignment) => <WorkerActiveSummary assignment={assignment} />}
      </AsyncStateView>
    </FieldOpsHome>
  );
}
