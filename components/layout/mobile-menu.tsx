"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TbaBadge } from "@/components/shared/tba-badge";
import { siteContent } from "@/content/site";
import { isNavActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

const linkClass =
  "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-navy transition-colors hover:bg-brand-teal/10 hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { nav, ctas, a11y } = siteContent;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={a11y.openMenu}
          className="text-brand-navy hover:bg-brand-teal/10 hover:text-brand-teal focus-visible:ring-brand-teal lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm gap-0 p-0">
        <SheetTitle className="sr-only">{a11y.menuTitle}</SheetTitle>
        <div className="flex h-[76px] items-center border-b border-slate-200 px-6">
          <Image
            src={siteContent.logo.src}
            alt={siteContent.name}
            width={800}
            height={270}
            className="h-8 w-auto"
          />
        </div>

        <nav aria-label={a11y.mainNav} className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isNavActive(pathname, item.href);

              if ("children" in item && item.children) {
                const isOpen = expanded === item.label;
                const groupId = `mobile-nav-${item.href.replace(/\W/g, "")}`;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={groupId}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className={cn(linkClass, active && "text-brand-teal")}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-4 transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <ul
                      id={groupId}
                      hidden={!isOpen}
                      className="mt-1 space-y-1 border-l-2 border-brand-teal/20 pl-3 ml-3"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          {child.comingSoon ? (
                            <span
                              aria-disabled="true"
                              className={cn(linkClass, "cursor-default py-2.5 text-[15px] text-brand-navy/60 hover:bg-transparent hover:text-brand-navy/60")}
                            >
                              {child.label}
                              <TbaBadge />
                            </span>
                          ) : (
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              className={cn(linkClass, "py-2.5 text-[15px]")}
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        linkClass,
                        active && "bg-brand-teal/10 text-brand-teal",
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-slate-200 p-6">
          <Button asChild variant="brand" className="w-full">
            <Link href={ctas.advisor.href} onClick={() => setOpen(false)}>
              <MessageCircle aria-hidden="true" />
              {ctas.advisor.label}
            </Link>
          </Button>
          <Button asChild variant="brandOutline" className="w-full">
            <Link href={ctas.brochure.href} onClick={() => setOpen(false)}>
              {ctas.brochure.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
