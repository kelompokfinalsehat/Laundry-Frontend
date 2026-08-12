"use client";
import {Box} from "@mantine/core";
import Header from "../shared/Headers/Header";

export function CustomerAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <Box component="main">
        {children}
      </Box>
    </>
  );
}
