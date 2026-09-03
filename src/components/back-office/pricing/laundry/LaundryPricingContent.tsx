"use client";

import { useState } from "react";
import { Button, Group, Paper, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useCreateLaundryPricing, useLaundryPricing, useUpdateLaundryPricing } from "@/hooks/pricing.hooks";
import { LaundryPricingModal } from "./LaundryPricingModal";
import type { LaundryPricing } from "@/types/api/pricing.types";

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function LaundryPricingContent() {
  const [opened, setOpened] = useState(false);
  const laundryPricing = useLaundryPricing();
  const createLaundryPricing = useCreateLaundryPricing();
  const updateLaundryPricing = useUpdateLaundryPricing();

  const handleSubmit = async (pricePerKg: number, pricing: LaundryPricing | null) => {
    try {
      if (pricing) {
        await updateLaundryPricing.mutateAsync({
          pricingId: pricing.id,
          payload: {
            pricePerKg,
          },
        });

        notifications.show({
          title: "Berhasil",
          message: "Harga laundry berhasil diperbarui.",
          color: "green",
        });
      } else {
        await createLaundryPricing.mutateAsync({
          pricePerKg,
        });

        notifications.show({
          title: "Berhasil",
          message: "Harga laundry berhasil dibuat.",
          color: "green",
        });
      }

      setOpened(false);
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message: error instanceof Error ? error.message : "Gagal menyimpan harga laundry.",
        color: "red",
      });
    }
  };

  const isSubmitting = createLaundryPricing.isPending || updateLaundryPricing.isPending;

  return (
    <>
      <Stack gap="lg">
        <PageHeader
          title="Harga Laundry"
          description="Kelola harga laundry per kilogram yang digunakan dalam sistem."
          action={
            <Button
              leftSection={laundryPricing.data ? <IconEdit size={16} /> : <IconPlus size={16} />}
              onClick={() => setOpened(true)}
              disabled={laundryPricing.isLoading || laundryPricing.isError}
            >
              {laundryPricing.data ? "Ubah Harga" : "Buat Harga"}
            </Button>
          }
        />

        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <AsyncStateView
            isLoading={laundryPricing.isLoading}
            isError={laundryPricing.isError}
            error={laundryPricing.error}
            data={laundryPricing.data}
            onRetry={() => laundryPricing.refetch()}
          >
            {(pricing) => (
              <Stack gap="xs">
                <Text size="sm" c="var(--color-text-secondary)">
                  Harga per kilogram
                </Text>

                <Group justify="space-between" align="center">
                  <Text size="xl" fw={700} c="var(--color-text-primary)">
                    {formatCurrency(pricing.pricePerKg)}
                    <Text component="span" size="sm" fw={400} c="var(--color-text-secondary)">
                      {" "}
                      / kg
                    </Text>
                  </Text>

                  <Button variant="light" leftSection={<IconEdit size={16} />} onClick={() => setOpened(true)}>
                    Ubah Harga
                  </Button>
                </Group>
              </Stack>
            )}
          </AsyncStateView>
        </Paper>
      </Stack>

      <LaundryPricingModal
        key={laundryPricing ? laundryPricing.data?.id : "new-pricing"}
        opened={opened}
        pricing={laundryPricing.data ?? null}
        isSubmitting={isSubmitting}
        onClose={() => setOpened(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
