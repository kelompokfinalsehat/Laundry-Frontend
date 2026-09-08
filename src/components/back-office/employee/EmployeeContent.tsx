"use client";

import { useState } from "react";
import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useEmployeeHooks } from "@/hooks/employee.hooks";
import { EmployeeFilters } from "./EmployeeFilters";
import { EmployeeTable } from "./EmployeeTable";
import { InviteEmployeeModal } from "./InviteEmployeeModal";
import TableSkeleton from "../shared/TableSkeleton";

export function EmployeeContent() {
  const {
    router,
    filters,
    sortBy,
    sortOrder,
    outlets,
    handleFilterChange,
    setSortBy,
    setPage,
    setSortOrder,
    handleReset,
    employees,
    setPageSize,
    inviteEmployee,
  } = useEmployeeHooks();

  const [inviteOpened, setInviteOpened] = useState(false);

  const handleInviteSubmit = (values: Parameters<typeof inviteEmployee.mutate>[0]) => {
    inviteEmployee.mutate(values, {
      onSuccess: () => {
        setInviteOpened(false);
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Karyawan"
        description="Kelola akun internal dan penempatan karyawan."
        action={
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => setInviteOpened(true)}
          >
            Undang Karyawan
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
          <EmployeeFilters
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
            outlets={outlets.data?.data ?? []}
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
            isLoading={employees.isLoading}
            isError={employees.isError}
            error={employees.error}
            data={employees.data}
            onRetry={() => employees.refetch()}
            isEmpty={(response) => response.data.length === 0}
            emptyTitle="Karyawan tidak ditemukan"
            emptyDescription="Tidak ada karyawan yang sesuai dengan filter yang dipilih."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <EmployeeTable
                data={response.data}
                meta={response.meta}
                onPageChange={setPage}
                onPageSizeChange={(value) => {
                  setPageSize(value);
                  setPage(1);
                }}
                onView={(employeeId) =>
                  router.push(
                    `/internal/super-admin/karyawan/${employeeId}`,
                  )
                }
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>

      <InviteEmployeeModal
        opened={inviteOpened}
        onClose={() => setInviteOpened(false)}
        onSubmit={handleInviteSubmit}
        isSubmitting={inviteEmployee.isPending}
      />
    </Stack>
  );
}