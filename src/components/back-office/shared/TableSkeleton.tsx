import { Box, Paper, SimpleGrid, Skeleton } from "@mantine/core";
import React from "react";

export default function TableSkeleton() {
  return (
    <Paper p="md">
      <SimpleGrid cols={{ base: 8 }} verticalSpacing="md">
        <Box style={{ gridColumn: "span 2" }}>
          <Skeleton height={20} width={"40%"} />
        </Box>
        <Box style={{ gridColumn: "span 3" }}>
          <Skeleton height={20} width={"40%"} />
        </Box>
        <Skeleton height={20} width={"40%"} />
        <Skeleton height={20} width={"40%"} />
        <Skeleton height={20} width={"40%"} />
        {Array.from({ length: 8 }, (_, index) => (
          <React.Fragment key={index}>
            <Box style={{ gridColumn: "span 2" }}>
              <Skeleton height={20} width={"60%"} />
            </Box>
            <Box style={{ gridColumn: "span 3" }}>
              <Skeleton height={20} width={"80%"} />
            </Box>
            <Skeleton height={20} width={"40%"} />
            <Skeleton height={20} width={"60%"} />
            <Skeleton height={20} width={"40%"} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Paper>
  );
}
