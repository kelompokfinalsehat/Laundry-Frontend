"use client";

import { Button, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { inviteEmployeeSchema, type InviteEmployeeFormValues } from "@/lib/validation/employee.validation";

type Props = {
  onSubmit: (values: InviteEmployeeFormValues) => void;
  isSubmitting?: boolean;
};

export function InviteEmployeeForm({ onSubmit, isSubmitting = false }: Props) {
  const router = useRouter();

  const form = useForm<InviteEmployeeFormValues>({
    initialValues: {
      name: "",
      email: "",
      role: "WORKER",
    },

    validate: schemaResolver(inviteEmployeeSchema),
  });

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      maw={600}
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Nama Karyawan" placeholder="Masukkan nama karyawan" withAsterisk {...form.getInputProps("name")} />

          <TextInput label="Email" placeholder="nama@email.com" type="email" withAsterisk {...form.getInputProps("email")} />

          <Select
            label="Role"
            withAsterisk
            data={[
              {
                value: "OUTLET_ADMIN",
                label: "Outlet Admin",
              },
              {
                value: "WORKER",
                label: "Worker",
              },
              {
                value: "DRIVER",
                label: "Driver",
              },
            ]}
            {...form.getInputProps("role")}
          />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={() => router.back()} disabled={isSubmitting}>
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              Kirim Undangan
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
