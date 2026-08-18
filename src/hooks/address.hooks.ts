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
