"use client";

import { useState } from "react";

import { container } from "@/components/programs/program-ui";
import { UniversityCard } from "@/components/universities/landing/universities-landing";
import { universitiesLandingCopy as copy } from "@/content/universities-landing";
import type { UniversityListing } from "@/data/universities";
import { cn } from "@/lib/utils";

type ProgramFilter = "all" | UniversityListing["degree"];

const chipBase =
  "inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] px-4 py-2 text-left text-[14px] font-semibold leading-snug transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:ring-offset-2";

export function UniversitiesExplorer({ universities }: { universities: readonly UniversityListing[] }) {
  const [program, setProgram] = useState<ProgramFilter>("all");

  if (!universities.length) return null;

  const degrees = Array.from(new Set(universities.map((u) => u.degree)));
  const options: { id: ProgramFilter; label: string; count: number }[] = [
    { id: "all", label: copy.filter.all, count: universities.length },
    ...degrees.map((degree) => ({
      id: degree,
      label: `${degree} ${copy.filter.programSuffix}`,
      count: universities.filter((u) => u.degree === degree).length,
    })),
  ];
  const visible = program === "all" ? universities : universities.filter((u) => u.degree === program);

  return (
    <section id={copy.cards.id} className="scroll-mt-[76px] bg-ul-mint">
      <div className={cn(container, "section-y")}>
        {/* Filter panel sits fully below the hero, not overlapping it. */}
        <div className="relative z-10 rounded-2xl bg-white p-4 shadow-[0_18px_44px_-20px_rgba(10,23,88,0.28)] ring-1 ring-ul-navy/[0.05] sm:p-5 lg:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
            <p className="shrink-0 text-[13px] font-semibold uppercase leading-none tracking-[0.18em] text-ul-green lg:pt-4">
              {copy.filter.label}
            </p>
            <div role="group" aria-label={copy.filter.label} className="flex flex-1 flex-wrap gap-2.5">
              {options.map((option) => {
                const active = option.id === program;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setProgram(option.id)}
                    className={cn(
                      chipBase,
                      active
                        ? "border-brand-teal bg-brand-teal text-white shadow-[0_8px_20px_-10px_rgba(11,95,87,0.7)]"
                        : "border-ul-line bg-white text-ul-navy hover:border-brand-teal hover:bg-brand-teal/5",
                    )}
                  >
                    {option.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-bold",
                        active ? "bg-white/20 text-white" : "bg-ul-mint text-ul-green",
                      )}
                    >
                      {option.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div role="status" aria-live="polite" className="mb-4 mt-6 text-sm font-medium text-ul-meta">
          {copy.filter.result(visible.length)}
          {program !== "all" && (
            <button
              type="button"
              onClick={() => setProgram("all")}
              className="ml-3 font-semibold text-brand-teal underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40"
            >
              {copy.filter.reset}
            </button>
          )}
        </div>

        {visible.length ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[18px] xl:gap-6">
            {visible.map((u) => (
              <UniversityCard key={`${u.slug}-${u.degree}`} university={u} />
            ))}
          </ul>
        ) : (
          <p className="rounded-xl bg-white p-8 text-center text-ul-body">{copy.filter.empty}</p>
        )}
      </div>
    </section>
  );
}
