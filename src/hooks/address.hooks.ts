import { AddressApi } from "@/lib/api/addressCustomer.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const addressApi = new AddressApi();

const ADDRESSES_QUERY_KEY = ["addresses"];

export function useAddresses() {
  return useQuery({
    queryKey: ADDRESSES_QUERY_KEY,
    queryFn: addressApi.getAddresses,
  });
}

export function useCreateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.createAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: Parameters<typeof addressApi.updateAddress>[1];
    }) => addressApi.updateAddress(id, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.deleteAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useSetPrimaryAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.setPrimaryAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useProvinces() {
  return useQuery({
    queryKey: ["regions", "provinces"],
    queryFn: addressApi.getProvince,
    staleTime: Infinity,
  });
}

export function useCities(provinceId: string | null) {
  return useQuery({
    queryKey: ["regions", "cities", provinceId],
    queryFn: () => addressApi.getCities(provinceId),
    enabled: !!provinceId,
  });
}

export function useDistrict(cityId: string | null) {
  return useQuery({
    queryKey: ["regions", "districts", cityId],
    queryFn: () => addressApi.getDistrict(cityId),
    enabled: !!cityId,
  });
}

export function useSubDistrict(districtsId: string | null) {
  return useQuery({
    queryKey: ["regions", "subDistricts", districtsId],
    queryFn: () => addressApi.getSubDistricts(districtsId),
    enabled: !!districtsId,
  });
}
