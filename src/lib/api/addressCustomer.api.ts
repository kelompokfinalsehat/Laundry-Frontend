import { Address } from "@/types/api/address.types";
import {
  CreateAddressSchema,
  UpdateAddressSchema,
} from "../validation/address.validation";
import { api } from "./axios";

export class AddressApi {
  async createAddress(payload: CreateAddressSchema) {
    const { data } = await api.post<{ data: Address }>("/address", payload);
    return data.data;
  }

  async getAddresses() {
    const { data } = await api.get<{ data: Address[] }>("/address");
    return data.data;
  }

  async updateAddress(id: string, payload: UpdateAddressSchema) {
    const { data } = await api.patch<{ data: Address }>(
      `/address/${id}`,
      payload,
    );
    return data.data;
  }

  async deleteAddress(id: string) {
    const { data } = await api.delete<{ data: string }>(`/address/${id}`);
    return data.data;
  }

  async setPrimaryAddress(id: string) {
    const { data } = await api.patch<{ data: string }>(
      `/address/${id}/set-primary`,
    );
    return data.data;
  }
}
