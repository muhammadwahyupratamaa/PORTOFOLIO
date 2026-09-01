import type { Metadata } from "next";
import "./globals.css";
import LiquidGlassNavbar from "@/components/ui/liquid-glass-navbar";
import SiteIntro from "@/components/ui/site-intro";
import SmokeBackground from "@/components/ui/smoke-background";

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
      <body className="bg-[#031c26]">
        <SmokeBackground />
        <div className="relative z-10">
          <SiteIntro />
          <LiquidGlassNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
