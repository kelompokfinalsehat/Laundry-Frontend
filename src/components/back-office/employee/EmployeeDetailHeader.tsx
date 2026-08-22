"use client";

import {
  ActionIcon,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import type {
  Employee,
} from "@/types/api/employee.types";

const ROLE_LABEL: Record<
  Employee["role"],
  string
> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

type Props = {
  employee: Employee;
};

export function EmployeeDetailHeader({
  employee,
}: Props) {
  const router = useRouter();

  return (
    <Group gap="md">
      <ActionIcon
        variant="default"
        onClick={() => router.back()}
      >
        <IconArrowLeft size={18} />
      </ActionIcon>

      <Stack gap={2}>
        <Text
          fw={700}
          size="xl"
        >
          {employee.name}
        </Text>

        <Text
          size="sm"
          c="var(--color-text-secondary)"
        >
          {ROLE_LABEL[employee.role]}
        </Text>
      </Stack>
    </Group>
  );
}