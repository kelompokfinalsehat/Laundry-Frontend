"use client";

import { Paper, Stack, Tabs } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { CreateOrderModal } from "./CreateOrderModal";
import { ReceptionFilters } from "./ReceptionFilters";
import { ReceptionTable } from "./ReceptionTable";
import { ReceiveOrderModal } from "./ReceiveOrderModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { useReceiveOrderHooks } from "@/hooks/reception.hooks";
import TableSkeleton from "../shared/TableSkeleton";

export function ReceptionContent() {
  const {
    stage,
    handleStageChange,
    query,
    handleQueryChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    tableMode,
    handlePageChange,
    handlePageSizeChange,
    handleReceive,
    handleCreateOrder,
    handleView,
    selectedOrderToReceive,
    receiveOrderMutation,
    setSelectedOrderToReceive,
    handleReceiveConfirm,
    selectedOrderToCreate,
    createOrderMutation,
    setSelectedOrderToCreate,
    handleCreateOrderSubmit,
  } = useReceiveOrderHooks();
  return (
    <>
      <Stack gap="lg">
        <PageHeader title="Penerimaan Pesanan" description="Kelola pesanan menunggu penerimaan dalam sistem." />
        <Tabs value={stage} onChange={handleStageChange}>
          <Tabs.List>
            <Tabs.Tab value="WAITING_RECEIPT">Menunggu Diterima</Tabs.Tab>

            <Tabs.Tab value="READY_TO_CREATE">Siap Dibuatkan Order</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <ReceptionFilters
              query={query}
              onChange={handleQueryChange}
              onSortByChange={(value) => handleQueryChange("sortBy", value)}
              onSortOrderChange={(value) => handleQueryChange("sortOrder", value)}
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
                <ReceptionTable
                  data={result.data}
                  meta={result.meta}
                  mode={tableMode}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                  onReceive={handleReceive}
                  onCreateOrder={handleCreateOrder}
                  onView={handleView}
                />
              )}
            </AsyncStateView>
          </Stack>
        </Paper>
      </Stack>
      <ReceiveOrderModal
        opened={selectedOrderToReceive !== null}
        order={selectedOrderToReceive}
        isLoading={receiveOrderMutation.isPending}
        onClose={() => setSelectedOrderToReceive(null)}
        onConfirm={handleReceiveConfirm}
      />

      <CreateOrderModal
        opened={selectedOrderToCreate !== null}
        order={selectedOrderToCreate}
        isSubmitting={createOrderMutation.isPending}
        onClose={() => setSelectedOrderToCreate(null)}
        onSubmit={handleCreateOrderSubmit}
      />
    </>
  );
}
