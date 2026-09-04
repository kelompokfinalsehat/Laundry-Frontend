import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { PricingApi } from "@/lib/api/pricing.api";

import type {
  CreateLaundryPricingPayload,
  CreateShippingRatePayload,
  ShippingRate,
  ShippingRateQuery,
  ShippingRateSortBy,
  UpdateLaundryPricingPayload,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { SortOrder } from "@/types/api";
import { notifications } from "@mantine/notifications";

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
    mutationFn: (payload: CreateLaundryPricingPayload) => pricingApi.createLaundryPricing(payload),

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
    mutationFn: ({ pricingId, payload }: { pricingId: string; payload: UpdateLaundryPricingPayload }) => pricingApi.updateLaundryPricing(pricingId, payload),

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
    mutationFn: (payload: CreateShippingRatePayload) => pricingApi.createShippingRate(payload),

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
    mutationFn: ({ shippingRateId, payload }: { shippingRateId: string; payload: UpdateShippingRatePayload }) => pricingApi.updateShippingRate(shippingRateId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...SHIPPING_RATES_QUERY_KEY, "detail", variables.shippingRateId],
      });
    },
  });
}

export function useDeactivateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (shippingRateId: string) => pricingApi.deactivateShippingRate(shippingRateId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });
    },
  });
}

export function useShippingRateHooks() {
  const [query, setQuery] = useState<ShippingRateQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "maxDistanceMeters",
    sortOrder: "asc",
  });
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedShippingRate, setSelectedShippingRate] = useState<ShippingRate | null>(null);
  const [deactivateModalOpened, setDeactivateModalOpened] = useState(false);
  const [shippingRateToDeactivate, setShippingRateToDeactivate] = useState<ShippingRate | null>(null);
  const { data, isLoading, isError, error, refetch } = useShippingRates({ ...query, search: debouncedSearch });
  const createShippingRate = useCreateShippingRate();
  const updateShippingRate = useUpdateShippingRate();
  const deactivateShippingRate = useDeactivateShippingRate();
  const isSubmitting = createShippingRate.isPending || updateShippingRate.isPending;

  const handleQueryChange = <Key extends keyof ShippingRateQuery>(key: Key, value: ShippingRateQuery[Key]) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value || undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (value: ShippingRateSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (value: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      sortBy: "maxDistanceMeters",
      sortOrder: "asc",
    });
  };

  const handleCreateClick = () => {
    setSelectedShippingRate(null);
    setModalOpened(true);
  };

  const handleEdit = (shippingRate: ShippingRate) => {
    setSelectedShippingRate(shippingRate);
    setModalOpened(true);
  };

  const handleModalClose = () => {
    if (isSubmitting) {
      return;
    }

    setModalOpened(false);
    setSelectedShippingRate(null);
  };

  const handleCreate = async (payload: CreateShippingRatePayload) => {
    await createShippingRate.mutateAsync(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Tarif shipping berhasil dibuat.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal membuat tarif shipping baru.",
          color: "red",
        });
      },
    });

    handleModalClose();
  };

  const handleUpdate = async (shippingRateId: string, payload: UpdateShippingRatePayload) => {
    await updateShippingRate.mutateAsync(
      {
        shippingRateId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Tarif shipping diupdate.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message: err instanceof Error ? err.message : "Gagal update tarif shipping.",
            color: "red",
          });
        },
      },
    );

    handleModalClose();
  };

  const handleDeactivateClick = (shippingRate: ShippingRate) => {
    setShippingRateToDeactivate(shippingRate);

    setDeactivateModalOpened(true);
  };

  const handleDeactivateConfirm = async (shippingRate: ShippingRate) => {
    await deactivateShippingRate.mutateAsync(shippingRate.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Berhasil menonaktifkan tarif shipping.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal menonaktifkan tarif shipping",
          color: "red",
        });
      },
    });

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };

  const handleDeactivateModalClose = () => {
    if (deactivateShippingRate.isPending) {
      return;
    }

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };
  return {
    handleCreateClick,
    query,
    handleQueryChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleEdit,
    handleDeactivateClick,
    modalOpened,
    selectedShippingRate,
    isSubmitting,
    handleModalClose,
    handleCreate,
    handleUpdate,
    deactivateModalOpened,
    shippingRateToDeactivate,
    deactivateShippingRate,
    handleDeactivateModalClose,
    handleDeactivateConfirm,
  };
}
