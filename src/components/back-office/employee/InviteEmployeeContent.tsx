"use client";

import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { useInviteEmployee } from "@/hooks/employee.hooks";
import { InviteEmployeeFormValues } from "@/lib/validation/employee.validation";
import { InviteEmployeeForm } from "./InviteEmployeeForm";

export function InviteEmployeeContent() {
  const router = useRouter();
  const inviteEmployee = useInviteEmployee();

  const handleSubmit = async (values: InviteEmployeeFormValues) => {
    inviteEmployee.mutate(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Undangan karyawan berhasil dikirim.",
          color: "green",
        });

        router.push("/internal/super-admin/karyawan");
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal mengirim undangan.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Undang Karyawan" description="Kirim undangan untuk membuat akun karyawan baru." />

      <InviteEmployeeForm onSubmit={handleSubmit} isSubmitting={inviteEmployee.isPending} />
    </Stack>
  );
}
