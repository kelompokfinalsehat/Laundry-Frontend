import {
  Complaint,
  ConfirmResponse,
  CreateOrderResponse,
  CreatePaymentResponse,
  ListOrderQuery,
  ListOrderResponse,
  OrderDetail,
  PaymentAttempt,
} from "@/types/api/orders.types";
import { CreateOrderSchema } from "../validation/order.validation";
import { api } from "./axios";

export class OrderApi {
  async createOrder(payload: CreateOrderSchema) {
    const { data } = await api.post<{ data: CreateOrderResponse }>(
      "/order",
      payload,
    );
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
    const { data } = await api.post<{ data: CreatePaymentResponse }>(
      `/order/${id}/payment`,
    );
    return data.data;
  }

  async getLastestPayment(id: string) {
    const { data } = await api.get<{ data: PaymentAttempt }>(
      `/order/${id}/payment`,
    );
    return data.data;
  }

  async confirm(id: string) {
    const { data } = await api.patch<ConfirmResponse>(`/order/${id}/confirm`);
    return data;
  }

  async complaint(id: string, formData: FormData) {
    const { data } = await api.post<{ data: Complaint }>(
      `/order/${id}/complaint`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data.data;
  }
}
