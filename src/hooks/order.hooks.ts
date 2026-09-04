import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/order.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useOutlets } from "./outlet.hooks";
import { CreatePaymentResponse, ListOrderQuery } from "@/types/api/orders.types";
import { ApiError } from "@/lib/api/axios";
import type { CreateOrderPayload, OrderQuery } from "@/types/api/order.types";

const orderApi = new OrderApi();
export const ORDERS_QUERY_KEY = ["orders"] as const;

export function useOrderList(params: OrderQuery) {
  return useQuery({
    queryKey: [...ORDERS_QUERY_KEY, params],
    queryFn: () => orderApi.getOrders(params),
    refetchInterval: 15_000,
    refetchOnWindowFocus: true
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

export function useCreateOrderAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, payload }: CreateOrderVariables) => orderApi.createOrderAdmin(orderId, payload),

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

type OrderFiltersState = Pick<OrderQuery, "search" | "customerStatus" | "paymentStatus" | "outletId" | "startDate" | "endDate">;

export function useOrderHooks(role: string) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [filters, setFilters] = useState<OrderFiltersState>({});
  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);
  const [sortBy, setSortBy] = useState<NonNullable<OrderQuery["sortBy"]>>("createdAt");
  const [sortOrder, setSortOrder] = useState<NonNullable<OrderQuery["sortOrder"]>>("desc");

  const orders = useOrderList({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const outlets = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (key: keyof OrderFiltersState, value: string | null) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  const handleView = (orderId: string) => {
    const basePath = role === "SUPER_ADMIN" ? "/internal/super-admin/pesanan" : "/internal/outlet-admin/pesanan";

    router.push(`${basePath}/${orderId}`);
  };

  return { filters, sortBy, sortOrder, outlets, handleFilterChange, setSortBy, setPage, setSortOrder, orders, setPageSize, handleView, handleReset };
}

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
