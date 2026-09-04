"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOutletHooks } from "@/hooks/outlet.hooks";
import { OutletFilters } from "./OutletFilters";
import { OutletTable } from "./OutletTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import TableSkeleton from "../shared/TableSkeleton";

export function OutletContent() {
  const { form, router, setPage, handleReset, outlets, setPageSize, setSelectedOutlet, selectedOutlet, deleteOutlet, handleDeactivate } = useOutletHooks();
  return (
    <Stack gap="lg">
      <PageHeader
        title="Outlet"
        description="Kelola seluruh outlet dalam sistem."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={() => router.push("/internal/super-admin/outlet/baru")}>
            Tambah Outlet
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
          <OutletFilters form={form} onReset={handleReset} />

          <AsyncStateView
            isLoading={outlets.isLoading}
            isError={outlets.isError}
            error={outlets.error}
            data={outlets.data}
            onRetry={() => outlets.refetch()}
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <OutletTable
                data={response.data}
                meta={response.meta}
                onPageChange={setPage}
                onPageSizeChange={(size) => {
                  setPageSize(size);
                  setPage(1);
                }}
                onEdit={(id) => router.push(`/internal/super-admin/outlet/${id}`)}
                onDelete={(outlet) => setSelectedOutlet(outlet)}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ConfirmDialog
        opened={Boolean(selectedOutlet)}
        title="Nonaktifkan Outlet"
        message={
          selectedOutlet
            ? `Apakah kamu yakin ingin menonaktifkan outlet "${selectedOutlet.name}"? Outlet yang dinonaktifkan tidak akan dapat digunakan kembali untuk operasional.`
            : ""
        }
        confirmLabel="Nonaktifkan"
        loading={deleteOutlet.isPending}
        onClose={() => setSelectedOutlet(null)}
        onConfirm={handleDeactivate}
      />
    </Stack>
  );
}
