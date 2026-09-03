"use client";

import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { schemaResolver, useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  employeeLoginSchema,
  EmployeeLoginSchema,
} from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { getEmployeeHome } from "@/utils";
import { useLoginEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeLoginForm() {
  const router = useRouter();
  const { mutate, isPending } = useLoginEmployee();

  const form = useForm<EmployeeLoginSchema>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: schemaResolver(employeeLoginSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: (employee) => {
        router.push(getEmployeeHome(employee.role));
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.message
            : "Gagal login. Silakan coba lagi.";

        notifications.show({
          title: "Login gagal",
          message,
          color: "red",
        });
      },
    });
  });

  return (
    <Stack gap="md">
      <div>
        <Title order={3}>Login Internal</Title>

        <Text size="sm" c="dimmed">
          Masuk untuk mengakses portal operasional Popo Laundry.
        </Text>
      </div>

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="Masukkan email"
            type="email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Masukkan password"
            {...form.getInputProps("password")}
          />

          <Button type="submit" fullWidth loading={isPending}>
            Login
          </Button>
        </Stack>
      </form>

      <Anchor component={Link} href="/internal/forgot-password" ta="center">
        Lupa password?
      </Anchor>
    </Stack>
  );
}