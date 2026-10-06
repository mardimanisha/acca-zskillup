import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { HeaderCtas } from "@/components/layout/header-ctas";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const { logo } = siteContent;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[76px] max-w-[1760px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16">
        <Link
          href={logo.href}
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          <Image
            src={logo.src}
            alt={siteContent.name}
            width={800}
            height={270}
            preload
            className="h-8 w-auto xl:h-9"
          />
        </Link>

        <DesktopNav />

        <HeaderCtas />

        <MobileMenu />
      </div>
    </header>
  );
}
