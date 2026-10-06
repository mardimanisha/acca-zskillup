"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteContent } from "@/content/site";
import { isNavActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

const itemClass =
  "relative inline-flex h-10 items-center rounded-md bg-transparent px-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-transparent hover:text-brand-teal focus:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal data-[state=open]:bg-transparent data-[state=open]:text-brand-teal xl:px-4 xl:text-[15px]";

const activeBarClass =
  "after:absolute after:inset-x-2.5 after:-bottom-[9px] after:h-[3px] after:rounded-full after:bg-brand-teal xl:after:inset-x-4";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu
      aria-label={siteContent.a11y.mainNav}
      className="hidden lg:flex"
      viewport={false}
    >
      <NavigationMenuList className="gap-0">
        {siteContent.nav.map((item) => {
          const active = isNavActive(pathname, item.href);

          if ("children" in item && item.children) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={cn(itemClass, active && activeBarClass)}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!rounded-2xl !border-slate-200 !p-2 !shadow-[0_20px_60px_-15px_rgba(11,26,61,0.2)]">
                  <ul className="grid w-56 gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-brand-teal/10 hover:text-brand-teal focus:bg-brand-teal/10 focus:text-brand-teal"
                          >
                            {child.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild active={active}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    itemClass,
                    active && cn("text-brand-navy", activeBarClass),
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
