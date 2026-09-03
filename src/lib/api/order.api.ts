import { api } from "./axios";
import { CreateOrderSchema } from "../validation/order.validation";
import { CreateOrderResponse } from "@/types/api/orders.types";
import { CreatePaymentResponse, ListOrderQuery, ListOrderResponse, PaymentAttempt } from "@/types/api/orders.types";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { CreateOrderPayload, OrderDetail, OrderListItem, OrderQuery } from "@/types/api/order.types";

export class OrderApi {
  async getOrders(params?: OrderQuery): Promise<PaginatedResponse<OrderListItem>> {
    const res = await api.get<PaginatedResponse<OrderListItem>>("/internal/orders", {
      params,
    });

    return res.data;
  }

  async getOrderById(orderId: string): Promise<OrderDetail> {
    const res = await api.get<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}`);

    return res.data.data;
  }

  async receiveOrder(orderId: string): Promise<OrderDetail> {
    const res = await api.post<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}/receive`);

    return res.data.data;
  }

  async createOrderAdmin(orderId: string, payload: CreateOrderPayload): Promise<OrderDetail> {
    const res = await api.post<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}/create-order`, payload);

    return res.data.data;
  }
  async createOrder(payload: CreateOrderSchema) {
    const { data } = await api.post<{ data: CreateOrderResponse }>("/order", payload);
    return data.data;
  }

  async listOrders(params: ListOrderQuery) {
    const { data } = await api.get<{
      success: boolean;
      data: ListOrderResponse["orders"];
      meta: ListOrderResponse["meta"];
    }>("/order", { params });
    return data;
  }

  async getOrderDetail(id: string) {
    const { data } = await api.get<{ data: OrderDetail }>(`/order/${id}`);
    return data.data;
  }

  async paymentAttempt(id: string) {
    const { data } = await api.post<{ data: CreatePaymentResponse }>(`/order/${id}/payment`);
    return data.data;
  }

  async getLastestPayment(id: string) {
    const { data } = await api.get<{ data: PaymentAttempt }>(`/order/${id}/payment`);
    return data.data;
  }
}
