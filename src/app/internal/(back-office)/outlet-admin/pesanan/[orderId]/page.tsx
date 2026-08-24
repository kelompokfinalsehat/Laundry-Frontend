import { OrderDetailContent } from "@/components/back-office/order/OrderDetailContent";
import { FeaturePlaceholder } from "@/components/shared/FeaturePlaceholder";
export default async function Page({params}: {params: Promise<{orderId: string}>}) {
    const {orderId} = await params
  return <OrderDetailContent orderId={orderId} />
}
