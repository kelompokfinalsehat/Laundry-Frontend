"use client";

import { useState } from "react";

import { Button, Paper, Stack } from "@mantine/core";

import { notifications } from "@mantine/notifications";

import { useDebouncedValue } from "@mantine/hooks";

import { IconPlus } from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

import {
  useDeactivateLaundryItem,
  useLaundryItems,
} from "@/hooks/laundry-item.hooks";

import { LaundryItemFilters } from "./LaundryItemFilters";

import { LaundryItemTable } from "./LaundryItemTable";

import type {
  LaundryItem,
  LaundryItemQuery,
} from "@/types/api/laundry-item.types";

type LaundryItemFiltersState = Pick<LaundryItemQuery, "search">;

export function LaundryItemContent() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);

  const [filters, setFilters] = useState<LaundryItemFiltersState>({});

  const [selectedItem, setSelectedItem] = useState<LaundryItem | null>(null);

  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);

  const [sortBy, setSortBy] =
    useState<NonNullable<LaundryItemQuery["sortBy"]>>("createdAt");

  const [sortOrder, setSortOrder] =
    useState<NonNullable<LaundryItemQuery["sortOrder"]>>("desc");

  const laundryItems = useLaundryItems({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const deactivateLaundryItem = useDeactivateLaundryItem();

  const handleFilterChange = (
    key: keyof LaundryItemFiltersState,
    value: string | null,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});

    setSortBy("createdAt");

    setSortOrder("desc");

    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedItem) {
      return;
    }

    try {
      await deactivateLaundryItem.mutateAsync(selectedItem.id);

      notifications.show({
        title: "Berhasil",
        message: "Item laundry berhasil dinonaktifkan.",
        color: "green",
      });

      setSelectedItem(null);
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message:
          error instanceof Error
            ? error.message
            : "Gagal menonaktifkan item laundry.",
        color: "red",
      });
    }
  };

  return (
    <>
      <Stack gap="lg">
        <PageHeader
          title="Laundry Item"
          description="Kelola jenis item laundry yang tersedia dalam sistem."
          action={
            <Button
              leftSection={<IconPlus size={16} />}
              onClick={() =>
                router.push("/internal/super-admin/item-laundry/baru")
              }
            >
              Tambah Item
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
            <LaundryItemFilters
              filters={filters}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onChange={handleFilterChange}
              onSortByChange={(value) => {
                setSortBy(value);

                setPage(1);
              }}
              onSortOrderChange={(value) => {
                setSortOrder(value);

                setPage(1);
              }}
              onReset={handleReset}
            />

            <AsyncStateView
              isLoading={laundryItems.isLoading}
              isError={laundryItems.isError}
              error={laundryItems.error}
              data={laundryItems.data}
              onRetry={() => laundryItems.refetch()}
              isEmpty={(response) => response.data.length === 0}
              emptyTitle="Laundry item tidak ditemukan"
              emptyDescription="Tidak ada laundry item yang sesuai dengan pencarian."
            >
              {(response) => (
                <LaundryItemTable
                  data={response.data}
                  meta={response.meta}
                  onPageChange={setPage}
                  onPageSizeChange={(value) => {
                    setPageSize(value as 10 | 20 | 50);

                    setPage(1);
                  }}
                  onEdit={(item) =>
                    router.push(`/internal/super-admin/item-laundry/${item.id}`)
                  }
                  onDeactivate={(item) => setSelectedItem(item)}
                />
              )}
            </AsyncStateView>
          </Stack>
        </Paper>
      </Stack>

      <ConfirmDialog
        opened={Boolean(selectedItem)}
        title="Nonaktifkan Item Laundry"
        message={
          selectedItem
            ? `Apakah kamu yakin ingin menonaktifkan item "${selectedItem.name}"? Item yang dinonaktifkan tidak dapat digunakan untuk data baru.`
            : ""
        }
        confirmLabel="Nonaktifkan"
        loading={deactivateLaundryItem.isPending}
        onClose={() => setSelectedItem(null)}
        onConfirm={handleDeactivate}
      />
    </>
  );
}
