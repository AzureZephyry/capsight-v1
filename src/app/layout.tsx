import type { Metadata } from "next";
import { themeBootstrap } from "@/presentation/theme-toggle/theme-preference";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapSight",
  description: "Closed-Loop Production Capacity Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
