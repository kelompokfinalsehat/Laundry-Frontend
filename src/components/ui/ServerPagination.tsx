'use client';
import { Group, Pagination, Select, Text } from '@mantine/core';

export function ServerPagination({ page, pageSize, totalItems, totalPages, onPageChange, onPageSizeChange }: { page:number; pageSize:number; totalItems:number; totalPages:number; onPageChange:(page:number)=>void; onPageSizeChange:(size:10|20|50)=>void }) {
  return <Group justify="space-between" mt="md"><Text size="sm" c="dimmed">Total {totalItems} data</Text><Group><Select aria-label="Jumlah per halaman" w={90} value={String(pageSize)} data={['10','20','50']} onChange={(v)=>onPageSizeChange(Number(v) as 10|20|50)} /><Pagination value={page} total={Math.max(totalPages,1)} onChange={onPageChange} /></Group></Group>;
}
