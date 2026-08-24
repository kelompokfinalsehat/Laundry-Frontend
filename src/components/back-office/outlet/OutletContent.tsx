"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDebouncedValue } from "@mantine/hooks";

import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useDeleteOutlet, useOutlets } from "@/hooks/outlet.hooks";

import { OutletFilters } from "./OutletFilters";
import { OutletTable } from "./OutletTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { notifications } from "@mantine/notifications";
import type { Outlet } from "@/types/api/outlet.types";

export function OutletContent() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);

  const [search, setSearch] = useState("");

  const [debouncedSearch] = useDebouncedValue(search, 400);

  const [sortBy, setSortBy] = useState<"name" | "createdAt">("createdAt");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const outlets = useOutlets({
    page,
    pageSize,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

  const deleteOutlet = useDeleteOutlet();

  const handleDeactivate = async () => {
    if (!selectedOutlet) return null;
    await deleteOutlet.mutateAsync(selectedOutlet.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dinonaktifkan.",
          color: "green",
        });

        setSelectedOutlet(null);
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal menonaktifkan outlet.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Outlet"
        description="Kelola seluruh outlet dalam sistem."
        action={
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => router.push("/internal/super-admin/outlet/baru")}
          >
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
          <OutletFilters
            search={search}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSearchChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            onSortByChange={(value) => {
              setSortBy(value);
              setPage(1);
            }}
            onSortOrderChange={(value) => {
              setSortOrder(value);
              setPage(1);
            }}
          />

          <AsyncStateView
            isLoading={outlets.isLoading}
            isError={outlets.isError}
            error={outlets.error}
            data={outlets.data}
            onRetry={() => outlets.refetch()}
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
                onEdit={(id) =>
                  router.push(`/internal/super-admin/outlet/${id}`)
                }
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
