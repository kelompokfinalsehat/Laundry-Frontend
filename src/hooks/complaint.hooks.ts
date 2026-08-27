import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { ComplaintApi } from "@/lib/api/complaint.api";

import type {
  ComplaintListItem,
  ComplaintQuery,
  ComplaintSortBy,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";
import {
  ComplaintCategory,
  ComplaintStatus,
  Role,
  SortOrder,
} from "@/types/api";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";

const complaintApi = new ComplaintApi();

export const COMPLAINTS_QUERY_KEY = ["complaints"];

export function useComplaints(params?: ComplaintQuery) {
  return useQuery({
    queryKey: [...COMPLAINTS_QUERY_KEY, params],

    queryFn: () => complaintApi.getComplaints(params),
  });
}

export function useComplaint(complaintId: string) {
  return useQuery({
    queryKey: [...COMPLAINTS_QUERY_KEY, "detail", complaintId],

    queryFn: () => complaintApi.getComplaintById(complaintId),

    enabled: Boolean(complaintId),
  });
}

export function useDecideComplaint() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      complaintId,
      payload,
    }: {
      complaintId: string;
      payload: DecideComplaintPayload;
    }) => complaintApi.decideComplaint(complaintId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: COMPLAINTS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...COMPLAINTS_QUERY_KEY, "detail", variables.complaintId],
      });
    },
  });
}

export function useComplaintHooks(role: String) {
  const canDecideComplaint = role === "OUTLET_ADMIN";
  const [query, setQuery] = useState<ComplaintQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const [selectedComplaint, setSelectedComplaint] =
    useState<ComplaintListItem | null>(null);
  const [decisionModalOpened, setDecisionModalOpened] = useState(false);
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useComplaints({
    ...query,
    search: debouncedSearch,
  });
  const decideComplaint = useDecideComplaint();

  const handleQueryChange = <Key extends keyof ComplaintQuery>(
    key: Key,
    value: ComplaintQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handleStatusChange = (value: ComplaintStatus | null) => {
    setQuery((previous) => ({
      ...previous,
      status: value ?? undefined,
      page: 1,
    }));
  };

  const handleCategoryChange = (value: ComplaintCategory | null) => {
    setQuery((previous) => ({
      ...previous,
      category: value ?? undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (value: ComplaintSortBy) => {
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
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const handleDecide = (complaint: ComplaintListItem) => {
    setSelectedComplaint(complaint);
    setDecisionModalOpened(true);
  };

  const handleDecisionModalClose = () => {
    if (decideComplaint.isPending) {
      return;
    }

    setDecisionModalOpened(false);
    setSelectedComplaint(null);
  };

  const handleDecisionSubmit = async (payload: DecideComplaintPayload) => {
    if (!selectedComplaint) {
      return;
    }

    await decideComplaint.mutateAsync({
      complaintId: selectedComplaint.id,
      payload,
    });

    handleDecisionModalClose();
  };
  return {
    query,
    canDecideComplaint,
    decisionModalOpened,
    data,
    isLoading,
    isError,
    error,
    selectedComplaint,
    decideComplaint,
    handleDecisionModalClose,
    refetch,
    handleQueryChange,
    handleCategoryChange,
    handleStatusChange,
    handleSortByChange,
    handleSortOrderChange,
    handlePageChange,
    handlePageSizeChange,
    handleReset,
    handleDecide,
    handleDecisionSubmit,
  };
}