import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeBootstrap } from "@/presentation/theme-toggle/theme-preference";
import "./globals.css";

const plex = localFont({
  src: "../presentation/fonts/plex-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-plex",
  adjustFontFallback: "Arial",
});
const source = localFont({
  src: "../presentation/fonts/source-serif-latin.woff2",
  weight: "400 500",
  display: "swap",
  variable: "--font-source",
  adjustFontFallback: "Times New Roman",
});

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
      <body className={`${plex.variable} ${source.variable}`}>{children}</body>
    </html>
  );
}
