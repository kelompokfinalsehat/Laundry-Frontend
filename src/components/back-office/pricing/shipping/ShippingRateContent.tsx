"use client";

import { IconPlus } from "@tabler/icons-react";
import { Button, Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useShippingRateHooks } from "@/hooks/pricing.hooks";
import { ShippingRateFilters } from "./ShippingRateFilters";
import { ShippingRateModal } from "./ShippingRateModal";
import { ShippingRateTable } from "./ShippingRateTable";
import { DeactivateShippingRateModal } from "./DeactivateShippingRateModal";

export function ShippingRateContent() {
  const {
    handleCreateClick,
    query,
    handleQueryChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleEdit,
    handleDeactivateClick,
    modalOpened,
    selectedShippingRate,
    isSubmitting,
    handleModalClose,
    handleCreate,
    handleUpdate,
    deactivateModalOpened,
    shippingRateToDeactivate,
    deactivateShippingRate,
    handleDeactivateModalClose,
    handleDeactivateConfirm,
  } = useShippingRateHooks();
  return (
    <Stack gap="lg">
      <PageHeader
        title="Harga Shipping"
        description="Kelola tarif shipping yang digunakan dalam sistem."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={handleCreateClick}>
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
