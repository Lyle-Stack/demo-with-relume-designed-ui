import type { Metadata } from "next";
import "./globals.css";

// TODO: change metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="relative min-h-svh w-full">{children}</body>
    </html>
  );
}
