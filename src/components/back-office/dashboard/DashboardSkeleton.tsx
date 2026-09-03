import { Box, Card, Group, SimpleGrid, Skeleton, Stack } from "@mantine/core";

export default function DashboardSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 6 }}>
        <Box style={{ gridColumn: "span 4" }}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={300} />
            </Group>
          </Card>
        </Box>
        <Box style={{ gridColumn: "span 2" }} h={"100%"}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }} h="100%">
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Box>
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
        <Box style={{ gridColumn: "span 3" }} h={'100%'}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }} h={'100%'}>
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Box>
        <Stack style={{ gridColumn: "span 2" }}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"40%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"40%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Stack>
      </SimpleGrid>
    </>
  );
}
