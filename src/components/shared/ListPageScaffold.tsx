"use client";
import { useState } from "react";
import { TextInput, Stack } from "@mantine/core";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServerListNotice } from "@/components/ui/ServerListNotice";
import { ServerDataTable } from "@/components/ui/ServerDataTable";
import { ServerPagination } from "@/components/ui/ServerPagination";

type Row = { id: string; name: string; status: string };
export function ListPageScaffold({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(20);
  const data: Row[] = [];
  return (
    <Stack>
      <PageHeader title={title} description={description} />
      <ServerListNotice />
      <TextInput
        label="Pencarian"
        placeholder="Query dikirim ke backend (debounce 300–500 ms)"
      />
      <ServerDataTable
        data={data}
        rowKey={(r) => r.id}
        columns={[
          { key: "name", label: "Nama", render: (r) => r.name },
          { key: "status", label: "Status", render: (r) => r.status },
        ]}
      />
      <ServerPagination
        page={page}
        pageSize={pageSize}
        totalItems={0}
        totalPages={0}
        onPageChange={setPage}
        onPageSizeChange={(s) => {
          setPage(1);
          setPageSize(s);
        }}
      />
    </Stack>
  );
}
