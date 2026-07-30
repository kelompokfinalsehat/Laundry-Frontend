'use client';
import { Loader, Table, Text } from '@mantine/core';
import { EmptyState } from './EmptyState';

export type Column<T> = { key:string; label:string; render:(row:T)=>React.ReactNode };
export function ServerDataTable<T>({ data, columns, loading=false, rowKey }: { data:T[]; columns:Column<T>[]; loading?:boolean; rowKey:(row:T)=>string }) {
  if (loading) return <Loader />;
  if (!data.length) return <EmptyState />;
  return <Table.ScrollContainer minWidth={700}><Table striped highlightOnHover withTableBorder><Table.Thead><Table.Tr>{columns.map(c=><Table.Th key={c.key}>{c.label}</Table.Th>)}</Table.Tr></Table.Thead><Table.Tbody>{data.map(row=><Table.Tr key={rowKey(row)}>{columns.map(c=><Table.Td key={c.key}>{c.render(row)}</Table.Td>)}</Table.Tr>)}</Table.Tbody></Table></Table.ScrollContainer>;
}
