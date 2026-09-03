import { OrderDetailContent } from "@/components/back-office/order/OrderDetailContent";

type Props = {
  params: Promise<{
    orderId: string;
  }>;
};

export default async function Page({
  params,
}: Props) {
  const { orderId } = await params;

  return (
    <OrderDetailContent
      orderId={orderId}
    />
  );
}