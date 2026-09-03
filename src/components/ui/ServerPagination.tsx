"use client";

import {
  Group,
  Pagination,
  Select,
  Text,
} from "@mantine/core";

export function ServerPagination({
  page,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;

  onPageChange: (
    page: number,
  ) => void;

  onPageSizeChange: (
    size: 10 | 20 | 50,
  ) => void;
}) {
  return (
    <Group
      justify="space-between"
      align="center"
      mt="md"
      wrap="wrap"
    >
      <Text
        size="sm"
        c="var(--color-text-secondary)"
      >
        Total {totalItems} data
      </Text>

      <Group gap="sm">
        <Select
          aria-label="Jumlah per halaman"
          w={90}
          value={String(pageSize)}
          data={["10", "20", "50"]}
          onChange={(value) =>
            onPageSizeChange(
              Number(value) as
                | 10
                | 20
                | 50,
            )
          }
        />

        <Pagination
          value={page}
          total={Math.max(
            totalPages,
            1,
          )}
          onChange={onPageChange}
        />
      </Group>
    </Group>
  );
}