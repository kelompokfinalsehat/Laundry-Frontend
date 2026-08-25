"use client";

import { Stack, Title } from "@mantine/core";

import { useState } from "react";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import {
  useComplaints,
  useDecideComplaint,
} from "@/hooks/complaint.hooks";

import type {
  ComplaintCategory,
  ComplaintListItem,
  ComplaintQuery,
  ComplaintSortBy,
  ComplaintStatus,
  DecideComplaintPayload,
  SortOrder,
} from "@/types/api/complaint.types";

import { ComplaintDecisionModal } from "./ComplaintDecisionModal";
import { ComplaintFilters } from "./ComplaintFilters";
import { ComplaintTable } from "./ComplaintTable";

const DEFAULT_PAGE_SIZE = 10;

export function ComplaintContent() {
  const [query, setQuery] = useState<ComplaintQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  const [selectedComplaint, setSelectedComplaint] =
    useState<ComplaintListItem | null>(null);

  const [decisionModalOpened, setDecisionModalOpened] =
    useState(false);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useComplaints(query);

  const decideComplaint =
    useDecideComplaint();

  const handleQueryChange = <
    Key extends keyof ComplaintQuery,
  >(
    key: Key,
    value: ComplaintQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handleStatusChange = (
    value: ComplaintStatus | null,
  ) => {
    setQuery((previous) => ({
      ...previous,
      status: value ?? undefined,
      page: 1,
    }));
  };

  const handleCategoryChange = (
    value: ComplaintCategory | null,
  ) => {
    setQuery((previous) => ({
      ...previous,
      category: value ?? undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (
    value: ComplaintSortBy,
  ) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (
    value: SortOrder,
  ) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (
    page: number,
  ) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (
    pageSize: 10 | 20 | 50,
  ) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const handleDecide = (
    complaint: ComplaintListItem,
  ) => {
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

  const handleDecisionSubmit = async (
    payload: DecideComplaintPayload,
  ) => {
    if (!selectedComplaint) {
      return;
    }

    await decideComplaint.mutateAsync({
      complaintId: selectedComplaint.id,
      payload,
    });

    handleDecisionModalClose();
  };

  return (
    <Stack gap="lg">
      <Title order={2}>
        Keluhan Pelanggan
      </Title>

      <ComplaintFilters
        query={query}
        onChange={handleQueryChange}
        onStatusChange={handleStatusChange}
        onCategoryChange={handleCategoryChange}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
        onReset={handleReset}
      />

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={refetch}
        isEmpty={(result) =>
          result.data.length === 0
        }
      >
        {(result) => (
          <ComplaintTable
            data={result.data}
            meta={result.meta}
            onPageChange={handlePageChange}
            onPageSizeChange={
              handlePageSizeChange
            }
            onDecide={handleDecide}
          />
        )}
      </AsyncStateView>

      <ComplaintDecisionModal
        opened={decisionModalOpened}
        complaint={selectedComplaint}
        isSubmitting={
          decideComplaint.isPending
        }
        onClose={handleDecisionModalClose}
        onSubmit={handleDecisionSubmit}
      />
    </Stack>
  );
}