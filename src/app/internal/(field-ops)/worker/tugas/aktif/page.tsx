"use client";

import {
  Card,
  Skeleton,
  Stack,
} from "@mantine/core";

import { useRouter } from "next/navigation";

import { WorkerActiveContent } from "@/components/field-ops/worker/WorkerActiveContent";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import {
  useCompleteWorkerAssignment,
  useRequestWorkerBypass,
  useValidateWorkerQuantities,
  useWorkerActiveAssignment,
} from "@/hooks/worker.hooks";

import { ApiError } from "@/lib/api/axios";

export default function Page() {
  const router = useRouter();

  const activeQuery =
    useWorkerActiveAssignment();

  const validateMutation =
    useValidateWorkerQuantities();

  const bypassMutation =
    useRequestWorkerBypass();

  const completeMutation =
    useCompleteWorkerAssignment();

  const validationErrorCode =
    validateMutation.error instanceof ApiError
      ? validateMutation.error.code
      : null;

  return (
    <AsyncStateView
      isLoading={activeQuery.isPending}
      isError={activeQuery.isError}
      error={activeQuery.error}
      data={activeQuery.data}
      onRetry={() =>
        activeQuery.refetch()
      }
      emptyTitle="Belum ada tugas aktif"
      emptyDescription="Ambil tugas dari daftar tugas tersedia terlebih dahulu."
      skeleton={
        <Card
          withBorder
          shadow="sm"
          radius="lg"
          p="lg"
        >
          <Stack gap="md">
            <Skeleton
              height={24}
              width="45%"
            />

            <Skeleton height={1} />

            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </Stack>
        </Card>
      }
    >
      {(assignment) => (
        <WorkerActiveContent
          assignment={assignment}
          isValidating={
            validateMutation.isPending
          }
          isRequestingBypass={
            bypassMutation.isPending
          }
          isCompleting={
            completeMutation.isPending
          }
          validationErrorCode={
            validationErrorCode
          }

          onValidateQuantities={(
            items,
          ) => {
            validateMutation.mutate({
              assignmentId:
                assignment.id,
              items,
            });
          }}

          onRequestBypass={(
            items,
          ) => {
            bypassMutation.mutate(
              {
                assignmentId:
                  assignment.id,
                items,
              },
              {
                onSuccess: () => {
                  validateMutation.reset();
                },
              },
            );
          }}

          onComplete={() => {
            console.log(
              "COMPLETE CLICK",
              assignment.id,
            );

            completeMutation.mutate(
              assignment.id,
              {
                onSuccess: () => {
                  router.push(
                    "/internal/worker/tugas",
                  );
                },
              },
            );
          }}
        />
      )}
    </AsyncStateView>
  );
}