import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { PricingApi } from "@/lib/api/pricing.api";

import type {
  CreateLaundryPricingPayload,
  CreateShippingRatePayload,
  ShippingRateQuery,
  UpdateLaundryPricingPayload,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";

const pricingApi = new PricingApi();

export const LAUNDRY_PRICING_QUERY_KEY = ["laundry-pricing"];

export const SHIPPING_RATES_QUERY_KEY = ["shipping-rates"];

export function useLaundryPricing() {
  return useQuery({
    queryKey: LAUNDRY_PRICING_QUERY_KEY,

    queryFn: () => pricingApi.getLaundryPricing(),
  });
}

export function useCreateLaundryPricing() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateLaundryPricingPayload) =>
      pricingApi.createLaundryPricing(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_PRICING_QUERY_KEY,
      });
    },
  });
}

export function useUpdateLaundryPricing() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      pricingId,
      payload,
    }: {
      pricingId: string;
      payload: UpdateLaundryPricingPayload;
    }) => pricingApi.updateLaundryPricing(pricingId, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_PRICING_QUERY_KEY,
      });
    },
  });
}

export function useShippingRates(params?: ShippingRateQuery) {
  return useQuery({
    queryKey: [...SHIPPING_RATES_QUERY_KEY, params],

    queryFn: () => pricingApi.getShippingRates(params),
  });
}

export function useShippingRate(shippingRateId: string) {
  return useQuery({
    queryKey: [...SHIPPING_RATES_QUERY_KEY, "detail", shippingRateId],

    queryFn: () => pricingApi.getShippingRateById(shippingRateId),

    enabled: Boolean(shippingRateId),
  });
}

export function useCreateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateShippingRatePayload) =>
      pricingApi.createShippingRate(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });
    },
  });
}

export function useUpdateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      shippingRateId,
      payload,
    }: {
      shippingRateId: string;
      payload: UpdateShippingRatePayload;
    }) => pricingApi.updateShippingRate(shippingRateId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...SHIPPING_RATES_QUERY_KEY,
          "detail",
          variables.shippingRateId,
        ],
      });
    },
  });
}

export function useDeactivateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (shippingRateId: string) =>
      pricingApi.deactivateShippingRate(shippingRateId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });
    },
  });
}
