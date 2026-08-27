"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useBypassDetailHooks } from "@/hooks/bypass.hooks";
import { ApproveBypassModal } from "./ApproveBypassModal";
import { BypassDetailHeader } from "./BypassDetailHeader";
import { BypassDecisionSection } from "./BypassDecisionSection";
import { BypassDifferenceTable } from "./BypassDifferenceTable";
import { BypassRequestInformation } from "./BypassRequestInformation";
import { RejectBypassModal } from "./RejectBypassModal";

type Props = {
  bypassId: string;
};

export function BypassDetailContent({ bypassId }: Props) {
  const {
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
  } = useBypassDetailHooks(bypassId);
  return (
    <>
      <AsyncStateView
        isLoading={bypassQuery.isLoading}
        isError={bypassQuery.isError}
        error={bypassQuery.error}
        data={bypassQuery.data}
        onRetry={() => bypassQuery.refetch()}
        emptyTitle="Permintaan bypass tidak ditemukan"
        emptyDescription="Data permintaan bypass yang kamu cari tidak tersedia."
      >
        {(response) => {
          const bypass = response.data;

          return (
            <Stack gap="lg">
              <BypassDetailHeader bypass={bypass} />

              <BypassRequestInformation bypass={bypass} />

              <BypassDifferenceTable differences={bypass.differences} />

              <BypassDecisionSection
                status={bypass.status}
                isApproving={approveBypass.isPending}
                isRejecting={rejectBypass.isPending}
                onApprove={() => setApproveModalOpened(true)}
                onReject={() => setRejectModalOpened(true)}
              />
            </Stack>
          );
        }}
      </AsyncStateView>

      <ApproveBypassModal
        opened={approveModalOpened}
        isSubmitting={approveBypass.isPending}
        onClose={handleApproveModalClose}
        onSubmit={handleApprove}
      />

      <RejectBypassModal opened={rejectModalOpened} isSubmitting={rejectBypass.isPending} onClose={handleRejectModalClose} onConfirm={handleReject} />
    </>
  );
}
