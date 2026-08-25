"use client";

import { Button, Group, Paper, Stack, Title } from "@mantine/core";

import { IconPlus } from "@tabler/icons-react";

import { useState } from "react";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import {
  useCreateShippingRate,
  useDeactivateShippingRate,
  useShippingRates,
  useUpdateShippingRate,
} from "@/hooks/pricing.hooks";

import type {
  CreateShippingRatePayload,
  ShippingRate,
  ShippingRateQuery,
  ShippingRateSortBy,
  SortOrder,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";

import { ShippingRateFilters } from "./ShippingRateFilters";
import { ShippingRateModal } from "./ShippingRateModal";
import { ShippingRateTable } from "./ShippingRateTable";
import { DeactivateShippingRateModal } from "./DeactivateShippingRateModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { notifications } from "@mantine/notifications";

const DEFAULT_PAGE_SIZE = 10;

export function ShippingRateContent() {
  const [query, setQuery] = useState<ShippingRateQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: "maxDistanceMeters",
    sortOrder: "asc",
  });

  const [modalOpened, setModalOpened] = useState(false);

  const [selectedShippingRate, setSelectedShippingRate] =
    useState<ShippingRate | null>(null);

  const [deactivateModalOpened, setDeactivateModalOpened] = useState(false);

  const [shippingRateToDeactivate, setShippingRateToDeactivate] =
    useState<ShippingRate | null>(null);

  const { data, isLoading, isError, error, refetch } = useShippingRates(query);

  const createShippingRate = useCreateShippingRate();

  const updateShippingRate = useUpdateShippingRate();

  const deactivateShippingRate = useDeactivateShippingRate();

  const isSubmitting =
    createShippingRate.isPending || updateShippingRate.isPending;

  const handleQueryChange = <Key extends keyof ShippingRateQuery>(
    key: Key,
    value: ShippingRateQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value || undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (value: ShippingRateSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (value: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      sortBy: "maxDistanceMeters",
      sortOrder: "asc",
    });
  };

  const handleCreateClick = () => {
    setSelectedShippingRate(null);
    setModalOpened(true);
  };

  const handleEdit = (shippingRate: ShippingRate) => {
    setSelectedShippingRate(shippingRate);
    setModalOpened(true);
  };

  const handleModalClose = () => {
    if (isSubmitting) {
      return;
    }

    setModalOpened(false);
    setSelectedShippingRate(null);
  };

  const handleCreate = async (payload: CreateShippingRatePayload) => {
    await createShippingRate.mutateAsync(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Tarif shipping berhasil dibuat.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message:
            err instanceof Error
              ? err.message
              : "Gagal membuat tarif shipping baru.",
          color: "red",
        });
      },
    });

    handleModalClose();
  };

  const handleUpdate = async (
    shippingRateId: string,
    payload: UpdateShippingRatePayload,
  ) => {
    await updateShippingRate.mutateAsync(
      {
        shippingRateId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Tarif shipping diupdate.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message:
              err instanceof Error
                ? err.message
                : "Gagal update tarif shipping.",
            color: "red",
          });
        },
      },
    );

    handleModalClose();
  };

  const handleDeactivateClick = (shippingRate: ShippingRate) => {
    setShippingRateToDeactivate(shippingRate);

    setDeactivateModalOpened(true);
  };

  const handleDeactivateConfirm = async (shippingRate: ShippingRate) => {
    await deactivateShippingRate.mutateAsync(shippingRate.id, {
        onSuccess: () => {
            notifications.show({
                title: "Berhasil",
                message: "Berhasil menonaktifkan tarif shipping.",
                color: "green"
            })
        }, onError: (err) => {
            notifications.show({
                title: "Gagal",
                message: err instanceof Error ? err.message : "Gagal menonaktifkan tarif shipping",
                color: "red"
            })
        }
    });

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };

  const handleDeactivateModalClose = () => {
    if (deactivateShippingRate.isPending) {
      return;
    }

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Harga Shipping"
        description="Kelola tarif shipping yang digunakan dalam sistem."
        action={
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={handleCreateClick}
          >
            Tambah Tarif
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
        <Stack gap="md">
          <ShippingRateFilters
            filters={{
              search: query.search,
            }}
            sortBy={query.sortBy ?? "maxDistanceMeters"}
            sortOrder={query.sortOrder ?? "asc"}
            onChange={handleQueryChange}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data}
            onRetry={refetch}
            isEmpty={(result) => result.data.length === 0}
          >
            {(result) => (
              <ShippingRateTable
                data={result.data}
                meta={result.meta}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onEdit={handleEdit}
                onDeactivate={handleDeactivateClick}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ShippingRateModal
        opened={modalOpened}
        shippingRate={selectedShippingRate}
        isSubmitting={isSubmitting}
        onClose={handleModalClose}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
      <DeactivateShippingRateModal
        opened={deactivateModalOpened}
        shippingRate={shippingRateToDeactivate}
        isSubmitting={deactivateShippingRate.isPending}
        onClose={handleDeactivateModalClose}
        onConfirm={handleDeactivateConfirm}
      />
    </Stack>
  );
}
