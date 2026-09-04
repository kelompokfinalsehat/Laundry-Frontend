import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "rinseBlue",
  colors: {
    rinseBlue: [
      "#e6f0f4",
      "#c2dbe4",
      "#9dc5d3",
      "#78afc2",
      "#549ab1",
      "#2c6e8c",
      "#245a71",
      "#1c4557",
      "#14313d",
      "#0c1c23",
    ],
  },
  defaultRadius: "md",
  radius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
  },
  shadows: {
    sm: '0 1px 2px rgba(38, 49, 58, 0.06)',
    md: '0 4px 12px rgba(38, 49, 58, 0.08)',
  },
  fontFamily: "var(--font-body), sans-serif",
headings: { fontFamily: "var(--font-display), sans-serif" },
});
