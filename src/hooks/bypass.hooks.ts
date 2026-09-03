import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type {
  ApproveBypassPayload,
  BypassListItem,
  BypassQuery,
  BypassSortBy,
} from "@/types/api/bypass.types";
import { BypassApi } from "@/lib/api/bypass.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { SortOrder } from "@/types/api";

export const bypassKeys = {
  all: ["bypass"] as const,

  lists: () => [...bypassKeys.all, "list"] as const,

  list: (query: BypassQuery) => [...bypassKeys.lists(), query] as const,

  details: () => [...bypassKeys.all, "detail"] as const,

  detail: (bypassId: string) => [...bypassKeys.details(), bypassId] as const,
};

const bypassApi = new BypassApi();

export function useBypassRequests(query: BypassQuery) {
  return useQuery({
    queryKey: bypassKeys.list(query),

    queryFn: () => bypassApi.getBypassRequests(query),
  });
}

export function useBypassRequest(bypassId: string) {
  return useQuery({
    queryKey: bypassKeys.detail(bypassId),

    queryFn: () => bypassApi.getBypassRequestById(bypassId),

    enabled: Boolean(bypassId),
  });
}

export function useApproveBypassRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      bypassId,
      payload,
    }: {
      bypassId: string;
      payload: ApproveBypassPayload;
    }) => bypassApi.approveBypassRequest(bypassId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bypassKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: bypassKeys.detail(variables.bypassId),
      });
    },
  });
}

export function useRejectBypassRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bypassId: string) => bypassApi.rejectBypassRequest(bypassId),

    onSuccess: (_, bypassId) => {
      queryClient.invalidateQueries({
        queryKey: bypassKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: bypassKeys.detail(bypassId),
      });
    },
  });
}

type BypassFilterKey = "search" | "status" | "stationType";
export function useBypassHooks() {
  const router = useRouter();
  const [query, setQuery] = useState<BypassQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useBypassRequests({
    ...query,
    search: debouncedSearch,
  });

  const handleFilterChange = (key: BypassFilterKey, value: string | null) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value ?? undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (sortBy: BypassSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy,
      page: 1,
    }));
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder,
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
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const handleSelectBypass = (bypass: BypassListItem) => {
    router.push(`/internal/outlet-admin/bypass/${bypass.id}`);
  };

  return {
    query,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    data,
    error,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleSelectBypass,
  };
}

export function useBypassDetailHooks(bypassId: string) {
  const [approveModalOpened, setApproveModalOpened] = useState(false);

  const [rejectModalOpened, setRejectModalOpened] = useState(false);

  const bypassQuery = useBypassRequest(bypassId);

  const approveBypass = useApproveBypassRequest();

  const rejectBypass = useRejectBypassRequest();

  const handleApproveModalClose = () => {
    if (approveBypass.isPending) {
      return;
    }

    setApproveModalOpened(false);
  };

  const handleRejectModalClose = () => {
    if (rejectBypass.isPending) {
      return;
    }

    setRejectModalOpened(false);
  };

  const handleApprove = async (payload: ApproveBypassPayload) => {
    await approveBypass.mutateAsync({
      bypassId,
      payload,
    });

    setApproveModalOpened(false);
  };

  const handleReject = async () => {
    await rejectBypass.mutateAsync(bypassId);

    setRejectModalOpened(false);
  };

  return {
    bypassQuery,
    approveBypass,
    rejectBypass,
    setApproveModalOpened,
    setRejectModalOpened,
    approveModalOpened,
    handleApproveModalClose,
    handleApprove,
    rejectModalOpened,
    handleRejectModalClose,
    handleReject,
  };
}
