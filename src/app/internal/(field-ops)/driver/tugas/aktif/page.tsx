"use client";

import { DriverActiveSummary } from "@/components/field-ops/driver/DriverActiveSummary";
import { DriverActiveTaskView } from "@/components/field-ops/driver/DriverActiveTaskView";
import { AsyncStateView } from "@/components/ui/AsyncStateView";

import { useActive, useCompleteDelivery, usePickup, useStart } from "@/hooks/driver.hooks";

import { Button, Card, Skeleton, Stack } from "@mantine/core";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  const activeQuery = useActive();

  const startMutation = useStart();
  const pickupMutation = usePickup();
  const completeMutation = useCompleteDelivery();

  return (
    <Stack gap="md">
      <Button component={Link} href="/internal/driver/tugas" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Daftar Tugas
      </Button>

      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tugas tersedia terlebih dahulu."
        skeleton={
          <Stack gap="md">
            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={24} width="45%" />
                <Skeleton height={1} />
                <Skeleton height={20} />
              </Stack>
            </Card>

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={24} width="40%" />
                <Skeleton height={20} width="60%" />
                <Skeleton height={20} />
                <Skeleton height={40} />
              </Stack>
            </Card>
          </Stack>
        }
      >
        {(assignment) => (
          <Stack gap="md">
            <DriverActiveSummary assignment={assignment} />

            <DriverActiveTaskView
              assignment={assignment}
              isStarting={startMutation.isPending}
              isPickingUp={pickupMutation.isPending}
              onStart={() => {
                startMutation.mutate(assignment.id);
              }}
              onPickup={() => {
                pickupMutation.mutate(assignment.id);
              }}
              isCompleting={completeMutation.isPending}
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
