"use client";

import {
  Card,
  Skeleton,
  Stack,
} from "@mantine/core";

import { useRouter } from "next/navigation";

import { DriverActiveContent } from "@/components/field-ops/driver/DriverActiveContent";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import {
  useCompleteDriverDelivery,
  useConfirmDriverPickup,
  useDriverActiveAssignment,
  useStartDriverAssignment,
} from "@/hooks/driver.hooks";

export default function Page() {
  const router = useRouter();

  const activeQuery =
    useDriverActiveAssignment();

  const startMutation =
    useStartDriverAssignment();

  const pickupMutation =
    useConfirmDriverPickup();

  const completeDeliveryMutation =
    useCompleteDriverDelivery();

  return (
    <AsyncStateView
      isLoading={
        activeQuery.isPending
      }
      isError={
        activeQuery.isError
      }
      error={
        activeQuery.error
      }
      data={
        activeQuery.data
      }
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

            <Skeleton
              height={1}
            />

            <Skeleton
              height={20}
            />

            <Skeleton
              height={20}
            />

            <Skeleton
              height={120}
            />

            <Skeleton
              height={40}
            />
          </Stack>
        </Card>
      }
    >
      {(assignment) => (
        <DriverActiveContent
          assignment={
            assignment
          }

          isStarting={
            startMutation.isPending
          }

          isConfirmingPickup={
            pickupMutation.isPending
          }

          isCompletingDelivery={
            completeDeliveryMutation.isPending
          }

          onStart={() => {
            startMutation.mutate(
              assignment.id,
            );
          }}

          onConfirmPickup={() => {
            pickupMutation.mutate(
              assignment.id,
            );
          }}

          onCompleteDelivery={() => {
            completeDeliveryMutation.mutate(
              assignment.id,
              {
                onSuccess: () => {
                  router.push(
                    "/internal/driver/tugas",
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