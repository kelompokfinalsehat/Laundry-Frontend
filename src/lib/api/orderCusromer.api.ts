import {
  CreateOrderResponse,
  ListOrderQuery,
  ListOrderResponse,
  OrderDetail,
  OrderListItem,
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
}
