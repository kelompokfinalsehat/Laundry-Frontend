"use client";

import { Stack } from "@mantine/core";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import { useOrder } from "@/hooks/order.hooks";

import { OrderDetailHeader } from "./OrderDetailHeader";
import { OrderInformationSection } from "./OrderInformationSection";
import { OrderCustomerSection } from "./OrderCustomerSection";
import { OrderPickupSection } from "./OrderPickupSection";
import { OrderItemsSection } from "./OrderItemsSection";
import { OrderBillSection } from "./OrderBillSection";
import { DriverAssignmentsSection } from "./DriverAssignmentsSection";
import { WorkerAssignmentsSection } from "./WorkerAssignmentsSection";
import { OrderComplaintSection } from "./OrderComplaintSection";

type Props = {
  orderId: string;
};

export function OrderDetailContent({
  orderId,
}: Props) {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrder(orderId);

  return (
    <AsyncStateView
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={refetch}
    >
      {(order) => (
        <Stack gap="lg">
          <OrderDetailHeader
            order={order}
          />

          <OrderInformationSection
            order={order}
          />

          <OrderCustomerSection
            customer={order.customer}
          />

          <OrderPickupSection
            order={order}
          />

          <OrderItemsSection
            orderItems={order.orderItems}
          />

          <OrderBillSection
            bill={order.bill}
          />

          <DriverAssignmentsSection
            assignments={order.driverAssignments}
          />

          <WorkerAssignmentsSection
            assignments={order.workerAssignments}
          />

          <OrderComplaintSection
            complaint={order.complaint}
          />
        </Stack>
      )}
    </AsyncStateView>
  );
}