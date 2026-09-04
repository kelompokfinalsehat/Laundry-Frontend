"use client";

import { useParams, useRouter } from "next/navigation";
import { Stack, Title, Anchor, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { ComplaintForm } from "@/components/customer/order/complaint/complaintForm";
import { ComplaintDetail } from "@/components/customer/order/complaint/complaintDetail";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOrderDetail } from "@/hooks/order/order.hooks";

export default function ComplaintPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(params.id);

  function handleBack() {
    router.replace(`/pesanan/${params.id}`);
  }

  return (
    <Stack gap="xl" mx="auto" p={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft stroke={2} />
          Kembali ke Detail Pesanan
        </Group>
      </Anchor>

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={order}
        onRetry={() => refetch()}
        emptyTitle="Order tidak ditemukan"
        emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
      >
        {(order) =>
          order.complaint ? (
            <>
              <Title order={3} style={{ color: "var(--color-text-primary)" }}>
                Status Komplain
              </Title>
              <ComplaintDetail complaint={order.complaint} />
            </>
          ) : (
            <>
              <Title order={3} style={{ color: "var(--color-text-primary)" }}>
                Ajukan Komplain
              </Title>
              <ComplaintForm
                id={params.id}
                onSuccess={() => router.replace(`/pesanan/${params.id}/komplain`)}
                onCancel={handleBack}
              />
            </>
          )
        }
      </AsyncStateView>
    </Stack>
  );
}
