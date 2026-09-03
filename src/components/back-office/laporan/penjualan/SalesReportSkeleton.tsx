import { Card, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import TableSkeleton from "../../shared/TableSkeleton";

export function SalesReportSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={index} withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
            <Stack gap={6}>
              <Skeleton height={20} width={"50%"} />
              <Skeleton height={30} width={"60%"} />
              <Skeleton height={15} width={"70%"} />
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
        <Skeleton height={300} />
      </Card>
      <TableSkeleton />
    </>
  );
}
