import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
