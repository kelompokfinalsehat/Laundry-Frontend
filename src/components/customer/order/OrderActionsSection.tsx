import Link from "next/link";
import { Anchor, Button, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { OrderTimeline } from "./orderTimeLine";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderActionsSection({
  order,
  isConfirming,
  onConfirmReceived,
}: {
  order: OrderDetail;
  isConfirming: boolean;
  onConfirmReceived: () => void;
}) {
  function handleConfirmClick() {
    modals.openConfirmModal({
      title: "Konfirmasi order diterima?",
      children: (
        <Text size="sm">
          Pastikan laundry sudah kamu terima dengan baik. Tindakan ini tidak
          dapat dibatalkan.
        </Text>
      ),
      labels: { confirm: "Ya, Sudah Diterima", cancel: "Batal" },
      confirmProps: {
        style: {
          backgroundColor: "var(--color-accent)",
          color: "var(--color-text-on-accent)",
        },
      },
      onConfirm: onConfirmReceived,
    });
  }

  return (
    <Stack gap="xl">
      <div>
        <Text fw={600} mb="md" style={{ color: "var(--color-text-primary)" }}>
          Tracking
        </Text>
        <OrderTimeline timeline={order.timeline} complaint={order.complaint} />
      </div>

      {order.complaint && (
        <Anchor
          component={Link}
          href={`/pesanan/${order.id}/komplain`}
          fw={600}
        >
          Lihat status komplain kamu →
        </Anchor>
      )}

      {order.allowedActions.canConfirmReceived &&
        order.complaint?.status !== "OPEN" && (
          <Button
            onClick={handleConfirmClick}
            disabled={isConfirming}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            {isConfirming ? "Mengonfirmasi..." : "Konfirmasi Diterima"}
          </Button>
        )}

      {order.allowedActions.canFileComplaint && !order.complaint && (
        <Button
          component={Link}
          href={`/pesanan/${order.id}/komplain`}
          variant="outline"
        >
          Ajukan Komplain
        </Button>
      )}
    </Stack>
  );
}
