import {
  BrainCircuit,
  GraduationCap,
  Laptop,
  Route,
  type LucideIcon,
} from "lucide-react";

import { heroContent, type TrustIcon } from "@/content/home-hero";
import { cn } from "@/lib/utils";

const icons: Record<TrustIcon, LucideIcon> = {
  route: Route,
  laptop: Laptop,
  graduationCap: GraduationCap,
  brainCircuit: BrainCircuit,
};

export function HeroTrustStrip() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-5 md:flex md:items-center md:gap-0">
      {heroContent.trust.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <li
            key={item.label}
            className={cn(
              "flex min-w-0 items-center gap-2.5 md:flex-1 md:px-3",
              index === 0 && "md:pl-0",
              index > 0 && "md:border-l md:border-slate-300/80",
            )}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(11,26,61,0.25)]">
              <Icon className="size-6 text-brand-teal" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="text-[13px] font-medium leading-snug text-brand-navy">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
