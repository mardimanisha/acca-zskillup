import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { WhyAccent } from "@/content/home-why";
import { cn } from "@/lib/utils";

const accentClasses: Record<
  WhyAccent,
  { icon: string; tint: string; band: string; badge: string }
> = {
  teal: {
    icon: "text-accent-teal-icon",
    tint: "bg-accent-teal-tint",
    band: "text-accent-teal-tint",
    badge: "bg-accent-teal-badge",
  },
  purple: {
    icon: "text-accent-purple-icon",
    tint: "bg-accent-purple-tint",
    band: "text-accent-purple-tint",
    badge: "bg-accent-purple-badge",
  },
  orange: {
    icon: "text-accent-orange-icon",
    tint: "bg-accent-orange-tint",
    band: "text-accent-orange-tint",
    badge: "bg-accent-orange-badge",
  },
};

type WhyZSkillupCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
  accent: WhyAccent;
};

export function WhyZSkillupCard({
  icon: Icon,
  title,
  description,
  number,
  accent,
}: WhyZSkillupCardProps) {
  const colors = accentClasses[accent];

  return (
    // Default: stacked card with a curved bottom band (as in the design).
    // `compact` (short desktop screens): still stacked and centred, but tighter, with the badge top-right and no band.
    <Card className="relative h-full gap-0 overflow-hidden rounded-2xl border-slate-100 bg-white px-5 pb-16 pt-5 text-center shadow-[0_20px_60px_-15px_rgba(11,26,61,0.2)] xl:pt-4 compact:px-4 compact:pb-4 compact:pt-4 short:px-3.5 short:pb-3 short:pt-3">
      <div className="flex flex-col items-center">
        <span
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-full xl:h-12 xl:w-12 compact:h-10 compact:w-10",
            colors.tint,
          )}
        >
          <Icon
            className={cn("h-6 w-6 compact:h-5 compact:w-5", colors.icon)}
            aria-hidden="true"
          />
        </span>
        <h4 className="mt-3 text-base font-bold leading-snug text-brand-navy xl:mt-2 compact:mt-2 compact:text-[15px]">
          {title}
        </h4>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-brand-body xl:mt-1 xl:leading-snug compact:mt-2 compact:text-[13px] short:mt-1.5">
        {description}
      </p>

      {/* Curved tinted band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-12 compact:hidden"
      >
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className={cn("absolute inset-0 h-full w-full", colors.band)}
        >
          <path d="M0 0 Q50 30 100 0 V40 H0 Z" fill="currentColor" />
        </svg>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-2 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white shadow-sm",
          "compact:bottom-auto compact:left-auto compact:right-3 compact:top-3 compact:h-7 compact:w-7 compact:translate-x-0 compact:border-0 compact:text-xs",
          colors.badge,
        )}
      >
        {number}
      </span>
    </Card>
  );
}
