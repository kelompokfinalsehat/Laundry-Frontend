"use client";

import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useCreateOutlet } from "@/hooks/outlet.hooks";
import { CreateOutletPayload } from "@/types/api/outlet.types";
import { notifications } from "@mantine/notifications";

export function CreateOutletContent() {
  const router = useRouter();
  const createOutlet = useCreateOutlet();

  const handleSubmit = async (values: CreateOutletPayload) => {
    await createOutlet.mutateAsync(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dibuat.",
          color: "green",
        });

        router.push("/internal/super-admin/outlet");
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error ? error.message : "Gagal membuat outlet.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Tambah Outlet"
        description="Tambahkan outlet baru ke dalam sistem."
      />

      <OutletForm
        onSubmit={handleSubmit}
        isSubmitting={createOutlet.isPending}
      />
    </Stack>
  );
}
