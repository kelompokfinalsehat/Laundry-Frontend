"use client";

import { Skeleton, Stack } from "@mantine/core";
import type { ReactNode } from "react";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";

type AsyncStateViewProps<T> = {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  data: T | undefined | null;
  onRetry?: () => void;
  isEmpty?: (data: T) => boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: { label: string; onClick: () => void };
  skeleton?: ReactNode;
  children: (data: T) => ReactNode;
};

export function AsyncStateView<T>({
  isLoading,
  isError,
  error,
  data,
  onRetry,
  isEmpty,
  emptyTitle,
  emptyDescription,
  emptyAction,
  skeleton,
  children,
}: AsyncStateViewProps<T>) {
  if (isLoading) {
    return (
      skeleton ?? (
        <Stack gap="sm">
          <Skeleton height={20} width="40%" />
          <Skeleton height={16} />
          <Skeleton height={16} />
          <Skeleton height={16} width="70%" />
        </Stack>
      )
    );
  }

  if (isError) {
    return (
      <ErrorState
        description={
          error instanceof Error ? error.message : "Terjadi kesalahan tak terduga."
        }
        onRetry={onRetry}
      />
    );
  }

  const empty =
    data == null || (isEmpty ? isEmpty(data) : Array.isArray(data) && data.length === 0);

  if (empty) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        action={emptyAction}
      />
    );
  }

  return <>{children(data as T)}</>;
}