import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";
import { siteContent } from "@/content/site";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.name,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
