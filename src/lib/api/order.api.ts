import type {
  ApiResponse,
  PaginatedResponse,
} from "@/types/api";

import type {
  CreateOrderPayload,
  OrderDetail,
  OrderListItem,
  OrderQuery,
} from "@/types/api/order.types";

import { api } from "./axios";

export class OrderApi {
  async getOrders(
    params?: OrderQuery,
  ): Promise<PaginatedResponse<OrderListItem>> {
    const res = await api.get<
      PaginatedResponse<OrderListItem>
    >("/internal/orders", {
      params,
    });

    return res.data;
  }

  async getOrderById(
    orderId: string,
  ): Promise<OrderDetail> {
    const res = await api.get<
      ApiResponse<OrderDetail>
    >(`/internal/orders/${orderId}`);

    return res.data.data;
  }

  async receiveOrder(
    orderId: string,
  ): Promise<OrderDetail> {
    const res = await api.post<
      ApiResponse<OrderDetail>
    >(`/internal/orders/${orderId}/receive`);

    return res.data.data;
  }

  async createOrder(
    orderId: string,
    payload: CreateOrderPayload,
  ): Promise<OrderDetail> {
    const res = await api.post<
      ApiResponse<OrderDetail>
    >(
      `/internal/orders/${orderId}/create-order`,
      payload,
    );

    return res.data.data;
  }
}