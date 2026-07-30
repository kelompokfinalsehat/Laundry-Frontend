import { Alert, Text } from '@mantine/core';
export function ServerListNotice() { return <Alert color="yellow" title="Aturan list wajib" mb="md"><Text fw={700}>Pagination, filtering, dan sorting diproses server.</Text><Text size="sm">Frontend hanya mengirim query URL; jangan mengambil seluruh data lalu memakai Array.filter/sort/slice.</Text></Alert>; }
