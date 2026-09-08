"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { LaundryItemFilters } from "./LaundryItemFilters";
import { LaundryItemTable } from "./LaundryItemTable";
import { LaundryItemModal } from "./LaundryItemModal";
import { useLaundryItemHooks } from "@/hooks/laundry-item.hooks";
import TableSkeleton from "../shared/TableSkeleton";

export function LaundryItemContent() {
  const {
    form,
    setPage,
    handleReset,
    laundryItems,
    setPageSize,
    setSelectedItem,
    selectedItem,
    deactivateLaundryItem,
    handleDeactivate,

    itemModalOpened,
    editingItem,
    handleCreate,
    handleEdit,
    handleCloseItemModal,
    handleSubmitItem,
    isItemSubmitting,
  } = useLaundryItemHooks();

  return (
    <>
      <Stack gap="lg">
        <PageHeader
          title="Laundry Item"
          description="Kelola jenis item laundry yang tersedia dalam sistem."
          action={
            <Button
              leftSection={<IconPlus size={16} />}
              onClick={handleCreate}
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
              form={form}
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
              skeleton={<TableSkeleton />}
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
                  onEdit={handleEdit}
                  onDeactivate={(item) =>
                    setSelectedItem(item)
                  }
                />
              )}
            </AsyncStateView>
          </Stack>
        </Paper>
      </Stack>

      <LaundryItemModal
        opened={itemModalOpened}
        onClose={handleCloseItemModal}
        initialValues={{
          name: editingItem?.name ?? "",
        }}
        onSubmit={handleSubmitItem}
        isSubmitting={isItemSubmitting}
        title={
          editingItem
            ? "Edit Item Laundry"
            : "Tambah Item Laundry"
        }
        submitLabel={
          editingItem
            ? "Simpan Perubahan"
            : "Tambah Item"
        }
      />

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