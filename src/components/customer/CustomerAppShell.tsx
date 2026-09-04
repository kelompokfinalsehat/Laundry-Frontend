"use client";
import {Box} from "@mantine/core";
import Header from "../shared/Headers/Header";
import Footer from "../shared/Footer";

export function CustomerAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Box
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box component="main" style={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
