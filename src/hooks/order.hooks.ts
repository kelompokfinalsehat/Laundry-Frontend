import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/orderCusromer.api";
import { ListOrderQuery } from "@/types/api/orders.types";


const orderApi = new OrderApi()
 
export function useCreateOrder() {
  return useMutation({ mutationFn: orderApi.createOrder });
}
 
export function useOrders(query: ListOrderQuery) {
  return useQuery({
    queryKey: ["orders", query],
    queryFn: () => orderApi.listOrders(query),
  });
}
 
export function useOrderDetail(id: string) {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => orderApi.getOrderDetail(id),
    enabled: !!id,
  });
}