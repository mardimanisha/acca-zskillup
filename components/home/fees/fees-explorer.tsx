"use client";

import { useState, type ReactNode } from "react";
import { BarChart3, FileText, GraduationCap, type LucideIcon } from "lucide-react";

import { FeePlanCard } from "@/components/home/fees/fee-plan-card";
import { TbaBadge } from "@/components/shared/tba-badge";
import type { FeeProgram } from "@/content/home-fees";
import { cn } from "@/lib/utils";

const icons: Record<FeeProgram["icon"], LucideIcon> = {
  GraduationCap,
  FileText,
  BarChart3,
};

type FeesExplorerProps = {
  programs: readonly FeeProgram[];
  effectiveFeeLabel: string;
  /** Third column on xl screens (the "what's included" panel); drops below the first two columns otherwise. */
  aside?: ReactNode;
};

// Layout mirrors the curriculum journey: program cards on a dotted timeline (left), a white
// panel (middle) that shows the fee plans for the selected program, and the includes panel (right).
export function FeesExplorer({ programs, effectiveFeeLabel, aside }: FeesExplorerProps) {
  const [index, setIndex] = useState(0);
  const program = programs[index];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-x-8 xl:grid-cols-[minmax(0,290px)_minmax(0,1fr)_minmax(0,310px)]">
      <div className="relative lg:pl-12">
        <span
          aria-hidden="true"
          className="absolute bottom-[calc((100%-48px)/6)] left-[11px] top-[calc((100%-48px)/6)] hidden border-l-2 border-dotted border-uni-cur-timeline lg:block"
        />
        {/* lg: rows share the column height equally so all three columns end on the same line */}
        <ul aria-label="Programs" className="grid h-full gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:auto-rows-fr lg:gap-6">
          {programs.map((p, i) => {
            const Icon = icons[p.icon];
            const active = i === index;
            return (
              <li key={p.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-12 top-1/2 hidden size-[22px] -translate-y-1/2 rounded-full border-[3px] border-uni-hero-icon bg-white lg:block"
                />
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "gradient-fade flex h-full w-full items-center gap-4 rounded-xl px-5 py-5 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 sm:flex-col sm:items-start sm:gap-3 lg:flex-row lg:items-center lg:gap-4 lg:py-6",
                    active
                      ? "is-on text-white shadow-[0_18px_36px_-20px_rgba(14,124,112,0.9)]"
                      : "bg-white text-uni-hero-stat shadow-[0_14px_36px_-22px_rgba(10,15,75,0.28)] hover:bg-uni-hero-mint/60",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-14 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                      active ? "bg-uni-cur-activeIcon text-white" : "bg-uni-hero-mint text-uni-hero-icon",
                    )}
                  >
                    <Icon className="size-7" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold leading-tight">
                      {p.title}
                      {p.comingSoon && <TbaBadge />}
                    </span>
                    <span className={cn("mt-1 block text-[15px] leading-snug", active ? "text-white/85" : "text-uni-cur-meta")}>
                      {p.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        aria-live="polite"
        className="flex flex-col rounded-2xl bg-white p-4 shadow-[0_20px_50px_-28px_rgba(10,15,75,0.28)] ring-1 ring-uni-cur-line sm:p-6"
      >
        <h3 className="sr-only">{program.title} fee plans</h3>
        <ul className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-fr">
          {program.plans.map((plan) => (
            <li key={plan.title}>
              <FeePlanCard {...plan} effectiveFeeLabel={effectiveFeeLabel} />
            </li>
          ))}
        </ul>
      </div>

      {aside && <div className="lg:col-span-2 xl:col-span-1">{aside}</div>}
    </div>
  );
}
