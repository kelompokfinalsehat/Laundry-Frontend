import {
  Address,
  PreviewLocationResult,
  Region,
} from "@/types/api/address.types";
import {
  CreateAddressSchema,
  PreviewLocationInput,
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

  async getProvince() {
    const { data } = await api.get<{ data: Region[] }>("/regions/provinces");
    return data.data;
  }

  async getCities(provinceId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/cities/${provinceId}`,
    );
    return data.data;
  }

  async getDistrict(cityId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/districts/${cityId}`,
    );
    return data.data;
  }

  async getSubDistricts(districtsId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/sub-districts/${districtsId}`,
    );
    return data.data;
  }

  async getPreviewLocation(payload: PreviewLocationInput) {
    const { data } = await api.post<{
      data: PreviewLocationResult;
    }>("/regions/preview-location", payload);
    return data.data;
  }
}
