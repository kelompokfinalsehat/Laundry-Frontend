"use client";

import { Stack } from "@mantine/core";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useEmployee } from "@/hooks/employee.hooks";

import { EmployeeActions } from "./EmployeeActions";
import { EmployeeDetailHeader } from "./EmployeeDetailHeader";
import { EmployeeInformation } from "./EmployeeInformation";
import { EmployeeOutlet } from "./EmployeeOutlet";
import { EmployeeStatus } from "./EmployeeStatus";

type Props = {
  userId: string;
};

export function EmployeeDetailContent({ userId }: Props) {
  const employeeQuery = useEmployee(userId);

  return (
    <AsyncStateView
      isLoading={employeeQuery.isLoading}
      isError={employeeQuery.isError}
      error={employeeQuery.error}
      data={employeeQuery.data}
      onRetry={() => employeeQuery.refetch()}
      emptyTitle="Karyawan tidak ditemukan"
      emptyDescription="Data karyawan yang kamu cari tidak tersedia atau mungkin sudah dihapus."
    >
      {(employee) => (
        <Stack gap="lg">
          <EmployeeDetailHeader employee={employee} />

          <EmployeeInformation employee={employee} />

          <EmployeeStatus employee={employee} />

          <EmployeeOutlet employee={employee} />

          <EmployeeActions employee={employee} />
        </Stack>
      )}
    </AsyncStateView>
  );
}
