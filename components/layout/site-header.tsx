import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const { logo, ctas } = siteContent;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[76px] max-w-[1760px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16">
        <Link
          href={logo.href}
          className="rounded-md text-[26px] font-extrabold leading-none tracking-tight text-brand-tealDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 xl:text-[30px]"
        >
          {logo.wordmark}
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <Button
            asChild
            variant="brand"
            className="h-10 px-4 text-sm xl:h-12 xl:px-6 xl:text-[15px]"
          >
            <Link href={ctas.advisor.href}>
              <MessageCircle aria-hidden="true" />
              {ctas.advisor.label}
            </Link>
          </Button>
          <Button
            asChild
            variant="brandOutline"
            className="h-10 px-4 text-sm xl:h-12 xl:px-6 xl:text-[15px]"
          >
            <Link href={ctas.brochure.href}>
              {ctas.brochure.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
