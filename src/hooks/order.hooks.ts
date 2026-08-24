import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { OrderApi } from "@/lib/api/order.api";

import type { CreateOrderPayload, OrderQuery } from "@/types/api/order.types";

const orderApi = new OrderApi()
export const ORDERS_QUERY_KEY = ["orders"] as const;

export function useOrders(params: OrderQuery) {
  return useQuery({
    queryKey: [...ORDERS_QUERY_KEY, params],
    queryFn: () => orderApi.getOrders(params),
  });
}

export function useOrder(orderId: string) {
  return useQuery({
    queryKey: [...ORDERS_QUERY_KEY, "detail", orderId],
    queryFn: () => orderApi.getOrderById(orderId),
    enabled: Boolean(orderId),
  });
}

export function useReceiveOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) => orderApi.receiveOrder(orderId),

    onSuccess: async (_, orderId) => {
      await queryClient.invalidateQueries({
        queryKey: ORDERS_QUERY_KEY,
      });

      await queryClient.invalidateQueries({
        queryKey: [...ORDERS_QUERY_KEY, "detail", orderId],
      });
    },
  });
}

type CreateOrderVariables = {
  orderId: string;
  payload: CreateOrderPayload;
};

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, payload }: CreateOrderVariables) =>
      orderApi.createOrder(orderId, payload),

    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ORDERS_QUERY_KEY,
      });

      await queryClient.invalidateQueries({
        queryKey: [...ORDERS_QUERY_KEY, "detail", variables.orderId],
      });
    },
  });
}
