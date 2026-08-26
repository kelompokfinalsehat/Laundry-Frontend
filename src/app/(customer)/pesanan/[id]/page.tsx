import { Box, Paper } from "@mantine/core";
import { OrderDetailView } from "@/components/customer/order/orderDetail";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;

  console.log("PAGE ID:", id);
  
  return (
    <Box mx="auto" py={{ base: 16, sm: 32 }}>
      <OrderDetailView id={id} />
    </Box>
  );
}