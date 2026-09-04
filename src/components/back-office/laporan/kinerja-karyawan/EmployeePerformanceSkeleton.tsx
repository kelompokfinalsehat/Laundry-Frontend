import { Card, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import TableSkeleton from "../../shared/TableSkeleton";

export function EmployeePerformanceSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ gridColumn: "span 2" }}>
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
      </SimpleGrid>
      <TableSkeleton />
    </>
  );
}
