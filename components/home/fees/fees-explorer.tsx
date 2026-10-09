"use client";

import { useState } from "react";
import { BarChart3, FileText, GraduationCap, type LucideIcon } from "lucide-react";

import { FeePlanCard } from "@/components/home/fees/fee-plan-card";
import { TbaBadge } from "@/components/shared/tba-badge";
import type { FeePlan, FeeProgram } from "@/content/home-fees";
import { cn } from "@/lib/utils";

const icons: Record<FeeProgram["icon"], LucideIcon> = {
  GraduationCap,
  FileText,
  BarChart3,
};

type FeesExplorerProps = {
  programs: readonly FeeProgram[];
  plans: readonly FeePlan[];
  effectiveFeeLabel: string;
};

// Layout mirrors the curriculum journey: program cards on a dotted timeline (left) and a white
// panel (right) that shows the fee plans for the selected program.
export function FeesExplorer({ programs, plans, effectiveFeeLabel }: FeesExplorerProps) {
  const [index, setIndex] = useState(0);
  const program = programs[index];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:gap-9">
      <div className="relative lg:pl-12">
        <span
          aria-hidden="true"
          className="absolute bottom-[52px] left-[11px] top-[52px] hidden border-l-2 border-dotted border-uni-cur-timeline lg:block"
        />
        <ul aria-label="Programs" className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
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
                    "flex h-full w-full items-center gap-4 rounded-xl px-5 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 sm:flex-col sm:items-start sm:gap-3 lg:flex-row lg:items-center lg:gap-4 lg:py-6",
                    active
                      ? "bg-uni-cur-active text-white shadow-[0_18px_36px_-20px_rgba(2,111,88,0.9)]"
                      : "bg-white text-uni-hero-stat shadow-[0_14px_36px_-22px_rgba(10,15,75,0.28)] hover:bg-uni-hero-mint/60",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-14 shrink-0 items-center justify-center rounded-full",
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
        className="rounded-2xl bg-white p-4 shadow-[0_20px_50px_-28px_rgba(10,15,75,0.28)] ring-1 ring-uni-cur-line sm:p-6"
      >
        <h3 className="sr-only">{program.title} fee plans</h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {plans.map((plan) => (
            <li key={plan.title}>
              <FeePlanCard {...plan} effectiveFeeLabel={effectiveFeeLabel} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
