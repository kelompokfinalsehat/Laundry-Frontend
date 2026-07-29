import '@mantine/core/styles.css';

import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from '@mantine/core';


export const metadata: Metadata = {
  title: 'Laundry App',
  description: 'Aplikasi laundry pickup',
};


const theme = createTheme({
  /** custom theme override kamu di sini */
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}