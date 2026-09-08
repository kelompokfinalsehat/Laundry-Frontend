"use client";

import { Button, Group, Modal, Select, Stack, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import {
  inviteEmployeeSchema,
  type InviteEmployeeFormValues,
} from "@/lib/validation/employee.validation";

type Props = {
  opened: boolean;
  onClose: () => void;
  onSubmit: (values: InviteEmployeeFormValues) => void;
  isSubmitting?: boolean;
};

export function InviteEmployeeModal({
  opened,
  onClose,
  onSubmit,
  isSubmitting = false,
}: Props) {
  const form = useForm<InviteEmployeeFormValues>({
    initialValues: {
      name: "",
      email: "",
      role: "WORKER",
    },

    validate: schemaResolver(inviteEmployeeSchema),
  });

  const handleClose = () => {
    if (isSubmitting) return;

    form.reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Undang Karyawan"
      centered
      closeOnClickOutside={!isSubmitting}
      closeOnEscape={!isSubmitting}
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Nama Karyawan"
            placeholder="Masukkan nama karyawan"
            withAsterisk
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
            placeholder="nama@email.com"
            type="email"
            withAsterisk
            {...form.getInputProps("email")}
          />

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
            <Button
              variant="default"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              Kirim Undangan
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}