"use client";

import { Paper, Stack } from "@mantine/core";

import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import TableSkeleton from "../shared/TableSkeleton";

import { AttendanceFilters } from "./AttendanceFilters";
import { AttendanceTable } from "./AttandanceTable";
import { AttendanceSummary } from "./AttendanceSummary";

import { useEmployeeAttendanceHooks } from "@/hooks/employee.hooks";

export function AttendanceContent() {
  const {
    form,
    handleReset,
    attendance,
    setPage,
    setPageSize,
    sortBy,
    sortOrder,
    handleSort,
  } = useEmployeeAttendanceHooks();

  return (
    <Stack gap="lg">
      <PageHeader
        title="Monitoring Absensi"
        description="Pantau kehadiran worker dan driver pada outlet."
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <AttendanceFilters
            form={form}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={attendance.isLoading}
            isError={attendance.isError}
            error={attendance.error}
            data={attendance.data}
            onRetry={() =>
              attendance.refetch()
            }
            isEmpty={(response) =>
              response.data.data.length === 0
            }
            emptyTitle="Data absensi tidak ditemukan"
            emptyDescription="Tidak ada data absensi yang sesuai dengan filter."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <>
                <AttendanceSummary
                  summary={
                    response.data.summary
                  }
                />

                <AttendanceTable
                  data={response.data.data}
                  meta={response.meta}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onSort={handleSort}
                  onPageChange={setPage}
                  onPageSizeChange={(value) => {
                    setPageSize(
                      value as
                        | 10
                        | 20
                        | 50
                        | 100,
                    );

                    setPage(1);
                  }}
                />
              </>
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}