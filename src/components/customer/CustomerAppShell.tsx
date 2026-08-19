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
    <>
      <Header />

      <Box component="main">
        {children}
      </Box>

      <Footer/>
    </>
  );
}
