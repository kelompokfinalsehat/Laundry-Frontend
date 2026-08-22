"use client";

import {
  Center,
  Loader,
  Stack,
  Text,
} from "@mantine/core";

import { useEmployee } from "@/hooks/employee.hooks";

import { EmployeeDetailHeader } from "./EmployeeDetailHeader";
import { EmployeeInformation } from "./EmployeeInformation";
import { EmployeeStatus } from "./EmployeeStatus";
import { EmployeeOutlet } from "./EmployeeOutlet";

type Props = {
  userId: string;
};

export function EmployeeDetailContent({
  userId,
}: Props) {
  const {
    data: employee,
    isLoading,
    isError,
  } = useEmployee(userId);

  if (isLoading) {
    return (
      <Center py="xl">
        <Loader />
      </Center>
    );
  }

  if (isError || !employee) {
    return (
      <Center py="xl">
        <Text c="red">
          Data karyawan tidak ditemukan.
        </Text>
      </Center>
    );
  }

  return (
    <Stack gap="lg">
      <EmployeeDetailHeader
        employee={employee}
      />

      <EmployeeInformation
        employee={employee}
      />

      <EmployeeStatus
        employee={employee}
      />

      <EmployeeOutlet
        employee={employee}
      />
    </Stack>
  );
}