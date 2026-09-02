import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/orderCustomer.api";
import {
  CreatePaymentResponse,
  ListOrderQuery,
} from "@/types/api/orders.types";
import { ApiError } from "@/lib/api/axios";
import { CreateComplaintSchema } from "@/lib/validation/order.validation";
import { id } from "zod/v4/locales";

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
  return useMutation<CreatePaymentResponse, ApiError, void>({
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

export function useConfirmOrder() {
  return useMutation({ mutationFn: orderApi.confirm });
}


export function useCreateComplaint(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateComplaintSchema) => {
      const formData = new FormData();

      formData.append("category", input.category);
      formData.append("description", input.description);
      formData.append("PHOTO", input.photo);

      return orderApi.complaint(id, formData);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", id],
      });
    },
  });
}