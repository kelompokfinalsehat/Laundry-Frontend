"use client";

import { Button, Group, Stack, Title } from "@mantine/core";

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

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useShippingRates(query);

  const createShippingRate =
    useCreateShippingRate();

  const updateShippingRate =
    useUpdateShippingRate();

  const deactivateShippingRate =
    useDeactivateShippingRate();

  const isSubmitting =
    createShippingRate.isPending ||
    updateShippingRate.isPending;

  const handleQueryChange = <
    Key extends keyof ShippingRateQuery,
  >(
    key: Key,
    value: ShippingRateQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value || undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (
    value: ShippingRateSortBy,
  ) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (
    value: SortOrder,
  ) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (
    page: number,
  ) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (
    pageSize: 10 | 20 | 50,
  ) => {
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

  const handleEdit = (
    shippingRate: ShippingRate,
  ) => {
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

  const handleCreate = async (
    payload: CreateShippingRatePayload,
  ) => {
    await createShippingRate.mutateAsync(
      payload,
    );

    handleModalClose();
  };

  const handleUpdate = async (
    shippingRateId: string,
    payload: UpdateShippingRatePayload,
  ) => {
    await updateShippingRate.mutateAsync({
      shippingRateId,
      payload,
    });

    handleModalClose();
  };

  const handleDeactivate = async (
    shippingRate: ShippingRate,
  ) => {
    await deactivateShippingRate.mutateAsync(
      shippingRate.id,
    );
  };

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <div>
          <Title order={2}>
            Harga Shipping
          </Title>
        </div>

        <Button
          leftSection={
            <IconPlus size={18} />
          }
          onClick={handleCreateClick}
        >
          Tambah Tarif
        </Button>
      </Group>

      <ShippingRateFilters
        filters={{
          search: query.search,
        }}
        sortBy={
          query.sortBy ??
          "maxDistanceMeters"
        }
        sortOrder={
          query.sortOrder ??
          "asc"
        }
        onChange={handleQueryChange}
        onSortByChange={
          handleSortByChange
        }
        onSortOrderChange={
          handleSortOrderChange
        }
        onReset={handleReset}
      />

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={refetch}
        isEmpty={(result) =>
          result.data.length === 0
        }
      >
        {(result) => (
          <ShippingRateTable
            data={result.data}
            meta={result.meta}
            onPageChange={
              handlePageChange
            }
            onPageSizeChange={
              handlePageSizeChange
            }
            onEdit={handleEdit}
            onDeactivate={
              handleDeactivate
            }
          />
        )}
      </AsyncStateView>

      <ShippingRateModal
        opened={modalOpened}
        shippingRate={
          selectedShippingRate
        }
        isSubmitting={isSubmitting}
        onClose={handleModalClose}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
    </Stack>
  );
}