import type { Metadata } from "next";
import "./globals.css";
import LiquidGlassNavbar from "@/components/ui/liquid-glass-navbar";
import SiteIntro from "@/components/ui/site-intro";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteIntro />
        <LiquidGlassNavbar />
        {children}
      </body>
    </html>
  );
}
