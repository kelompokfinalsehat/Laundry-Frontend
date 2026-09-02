import { Box} from "@mantine/core";
import { BillDetailView } from "@/components/customer/order/billDetailView";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  
  return (
    <Box mx="auto" py={{ base: 16, sm: 32 }}>
      <BillDetailView id={id} />
    </Box>
  );
}