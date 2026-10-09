"use client";

import { useState } from "react";
import { Award, ChartColumnIncreasing, GraduationCap, type LucideIcon } from "lucide-react";

import { Eyebrow, SectionTitle, container } from "@/components/programs/program-ui";
import { curriculumYears, semesterLabel } from "@/content/curriculum-years";
import type { CurriculumContent, CurriculumSubject } from "@/content/program-types";
import { cn } from "@/lib/utils";

// Layout follows the "Curriculum Journey" design (same as the university page): year cards on a
// dotted timeline and a white card with pill semester tabs above bulleted subject lists (red
// ACCA-code chips), degree and ZSkillup subjects combined in one list. Semesters are paired into years (S1+S2 = Year 1, ...).

const yearIcons: readonly LucideIcon[] = [GraduationCap, ChartColumnIncreasing, Award];

/** Shared with the university pages so both curricula render subjects identically. */
export function SubjectList({ subjects }: { subjects: readonly CurriculumSubject[] }) {
  return (
    <ul className="mt-5 grid content-start gap-3 border-t border-uni-cur-line pt-5 sm:grid-cols-2">
      {subjects.map((s) => (
        <li
          key={s.name}
          className="flex items-start gap-3 rounded-xl bg-uni-cur-tabIdle/60 px-4 py-3.5 text-[15px] leading-snug text-[#5F6679]"
        >
          <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-zs-green" />
          <span>
            {s.name}
            {s.code && (
              <span className="ml-2 inline-flex rounded-md bg-[#FEEAE8] px-1.5 py-0.5 align-[1px] text-[11px] font-bold leading-none text-[#F0474D]">
                {s.code}
              </span>
            )}
            {s.badge && (
              <span className="ml-2 inline-flex rounded-full bg-uni-cur-peach px-2.5 py-0.5 align-[1px] text-[11px] font-semibold leading-none text-uni-cur-peachText">
                {s.badge}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ProgramCurriculum({ content }: { content: CurriculumContent }) {
  const { eyebrow, title, body, a11y, semesters } = content;
  const [yearIndex, setYearIndex] = useState(0);
  const [semIndex, setSemIndex] = useState(0);

  const years = curriculumYears(semesters);

  const year = years[yearIndex];
  const sem = year.semesters[Math.min(semIndex, year.semesters.length - 1)];

  return (
    <section
      aria-labelledby="program-curriculum-title"
      className="relative overflow-hidden bg-[#FBFDFD] bg-[radial-gradient(50%_60%_at_100%_0%,rgba(230,244,236,0.8)_0%,rgba(230,244,236,0)_100%)]"
    >
      <div className={cn(container, "relative section-y")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle id="program-curriculum-title" className="mt-1.5">
          {title}
        </SectionTitle>
        {body && <p className="mt-2 text-base text-zs-body">{body}</p>}

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,330px)_minmax(0,760px)] lg:justify-center lg:gap-9">
          {/* Years: dotted timeline + cards (stacked on desktop, a row of cards below). */}
          <div className="relative lg:pl-12">
            <span
              aria-hidden="true"
              className="absolute bottom-[52px] left-[11px] top-[52px] hidden border-l-2 border-dotted border-uni-cur-timeline lg:block"
            />
            <ul aria-label={a11y.years} className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              {years.map((y, i) => {
                const Icon = yearIcons[i % yearIcons.length];
                const active = i === yearIndex;
                return (
                  <li key={y.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-12 top-1/2 hidden size-[22px] -translate-y-1/2 rounded-full border-[3px] border-uni-hero-icon bg-[#FBFDFD] lg:block"
                    />
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setYearIndex(i);
                        setSemIndex(0);
                      }}
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
                        <span className="block text-lg font-bold leading-tight">{y.title}</span>
                        <span
                          className={cn(
                            "mt-1 block text-[15px] leading-snug",
                            active ? "text-white/85" : "text-uni-cur-meta",
                          )}
                        >
                          {y.subtitle}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Semester tabs + subject table. */}
          <div className="flex flex-col rounded-2xl bg-white p-4 shadow-[0_20px_50px_-28px_rgba(10,15,75,0.28)] ring-1 ring-uni-cur-line sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div aria-label={a11y.tabs} role="group" className="flex flex-wrap gap-2">
                {year.semesters.map((s, i) => {
                  const active = i === semIndex;
                  return (
                    <button
                      key={s.tab}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSemIndex(i)}
                      className={cn(
                        "gradient-fade h-11 rounded-full px-7 text-[15px] font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40",
                        active
                          ? "is-on text-white"
                          : "bg-uni-cur-tabIdle text-uni-cur-text hover:bg-uni-hero-mint",
                      )}
                    >
                      {semesterLabel(s.label)}
                    </button>
                  );
                })}
              </div>
            </div>
            <SubjectList subjects={sem.subjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
