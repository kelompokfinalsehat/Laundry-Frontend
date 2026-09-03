"use client";

import { WorkerActiveSummary } from "@/components/field-ops/worker/WorkerActiveSummary";
import { WorkerActiveTaskView } from "@/components/field-ops/worker/WorkerActiveTaskView";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive, useComplete, useRequestBypass, useValidateQuantities } from "@/hooks/worker.hooks";
import { ApiError } from "@/lib/api/axios";
import { Button, Card, Skeleton, Stack } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  const activeQuery = useActive();

  const validateMutation = useValidateQuantities();
  const bypassMutation = useRequestBypass();
  const completeMutation = useComplete();

  const validationErrorCode = validateMutation.error instanceof ApiError ? validateMutation.error.code : null;

  return (
    <Stack>
      <Button component={Link} href="/internal/worker/tugas" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Daftar Tugas
      </Button>
      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tersedia terlebih dahulu."
        skeleton={
          <Card withBorder shadow="sm" radius="lg" p="lg">
            <Stack gap="md">
              <Skeleton height={24} width="45%" />
              <Skeleton height={1} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={120} />
            </Stack>
          </Card>
        }
      >
        {(assignment) => (
          <Stack gap={"md"}>
            <WorkerActiveSummary assignment={assignment} />
            <WorkerActiveTaskView
              assignment={assignment}
              isValidating={validateMutation.isPending}
              isRequestingBypass={bypassMutation.isPending}
              isCompleting={completeMutation.isPending}
              validationErrorCode={validationErrorCode}
              onValidate={(payload) => {
                validateMutation.mutate({
                  assignmentId: assignment.id,
                  payload,
                });
              }}
              onRequestBypass={(payload) => {
                bypassMutation.mutate(
                  {
                    assignmentId: assignment.id,
                    payload,
                  },
                  {
                    onSuccess: () => {
                      validateMutation.reset();
                    },
                  },
                );
              }}
              onComplete={() => {
                completeMutation.mutate(assignment.id);
              }}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
