"use client";

import { Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useComplaintHooks } from "@/hooks/complaint.hooks";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComplaintDecisionModal } from "./ComplaintDecisionModal";
import { ComplaintFilters } from "./ComplaintFilters";
import { ComplaintTable } from "./ComplaintTable";
import TableSkeleton from "../shared/TableSkeleton";

export function ComplaintContent({ role }: { role: string }) {
  const {
    query,
    canDecideComplaint,
    selectedComplaint,
    decideComplaint,

    decisionModalOpened,
    data,
    isLoading,
    isError,
    error,
    refetch,
    handleDecisionModalClose,
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
  } = useComplaintHooks(role);
  return (
    <Stack gap="lg">
      <PageHeader title="Keluhan Pelanggan" description="Kelola keluhan pengguna dalam sistem." />
      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
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
            isEmpty={(result) => result.data.length === 0}
            skeleton={<TableSkeleton />}
          >
            {(result) => (
              <ComplaintTable
                data={result.data}
                meta={result.meta}
                canDecide={canDecideComplaint}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onDecide={handleDecide}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ComplaintDecisionModal
        opened={decisionModalOpened}
        complaint={selectedComplaint}
        isSubmitting={decideComplaint.isPending}
        onClose={handleDecisionModalClose}
        onSubmit={handleDecisionSubmit}
      />
    </Stack>
  );
}
