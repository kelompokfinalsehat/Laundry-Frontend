import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/orderCusromer.api";
import { CreatePaymentResponse, ListOrderQuery } from "@/types/api/orders.types";
import { ApiError } from "@/lib/api/axios";

const orderApi = new OrderApi();

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

export function useCreatePayment(id: string) {
  return useMutation<
    CreatePaymentResponse,
    ApiError,
    void
  >({
    mutationFn: () => orderApi.paymentAttempt(id),
  });
}

export function useLatestPayment(id: string) {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => orderApi.getLastestPayment(id),
    enabled: !!id,
  });
}
