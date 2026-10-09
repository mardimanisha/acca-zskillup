"use client";

import { useState } from "react";
import {
  ArrowRight,
  Award,
  ChartColumnIncreasing,
  Download,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow, SectionTitle, container } from "@/components/programs/program-ui";
import { universityPageCopy } from "@/content/university-page";
import type { UniversityPage } from "@/data/universities/types";
import { cn } from "@/lib/utils";

const copy = universityPageCopy.curriculum;

// Matches the program pages' curriculum: year cards on a dotted timeline (active = solid green),
// white card with pill semester tabs above a bulleted subject list (red ACCA-code chips, peach
// badge for subjects taught outside the university).

const yearIcons: readonly LucideIcon[] = [GraduationCap, ChartColumnIncreasing, Award];

const filled = (value: string) => value.trim().length > 0;

function visibleYears(u: UniversityPage) {
  return u.curriculum
    .map((year) => ({
      ...year,
      semesters: year.semesters
        .map((sem) => ({ ...sem, subjects: sem.subjects.filter((s) => filled(s.name)) }))
        .filter((sem) => sem.subjects.length),
    }))
    .filter((year) => year.semesters.length);
}

/** Subjects taught by anyone other than the university (the ZSkillup add-ons) get the peach "Employability" badge. */
function TaughtByBadge({ value, university }: { value: string; university: string }) {
  if (!filled(value) || university.toLowerCase().includes(value.trim().toLowerCase())) return null;
  return (
    <span className="ml-2 inline-flex rounded-full bg-uni-cur-peach px-2.5 py-0.5 align-[1px] text-[11px] font-semibold leading-none text-uni-cur-peachText">
      {copy.externalBadge}
    </span>
  );
}

export function UniversityCurriculum({ university: u }: { university: UniversityPage }) {
  const years = visibleYears(u);
  const [yearIndex, setYearIndex] = useState(0);
  const [semIndex, setSemIndex] = useState(0);

  const year = years[Math.min(yearIndex, years.length - 1)];
  const sem = year.semesters[Math.min(semIndex, year.semesters.length - 1)];
  const subjects = sem.subjects;
  const summary = copy.summary(
    subjects.length,
    subjects.reduce((t, s) => t + s.classHours, 0),
    subjects.reduce((t, s) => t + s.selfStudyHours, 0),
  );

  return (
    <section
      aria-labelledby="uni-curriculum-title"
      className="relative overflow-hidden bg-[#FBFDFD] bg-[radial-gradient(50%_60%_at_100%_0%,rgba(230,244,236,0.8)_0%,rgba(230,244,236,0)_100%)]"
    >
      <div className={cn(container, "relative py-16 md:py-20 lg:py-[72px]")}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <SectionTitle id="uni-curriculum-title" className="mt-1.5">
              {copy.title}
            </SectionTitle>
          </div>
          {filled(u.curriculumPdf) && (
            <a
              href={u.curriculumPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border-[1.5px] border-brand-teal bg-white text-brand-teal hover:bg-brand-teal/5 hover:text-brand-tealDark px-6 text-[15px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:ring-offset-2"
            >
              <Download aria-hidden="true" className="size-[18px] text-brand-teal" strokeWidth={2.25} />
              {copy.download}
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,330px)_minmax(0,760px)] lg:justify-center lg:gap-9">
          {/* Years: dotted timeline + cards (stacked on desktop, a row of cards below). */}
          <div className="relative lg:pl-12">
            <span
              aria-hidden="true"
              className="absolute bottom-[52px] left-[11px] top-[52px] hidden border-l-2 border-dotted border-uni-cur-timeline lg:block"
            />
            <ul aria-label={copy.a11y.years} className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
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
                        "gradient-fade flex h-full w-full items-center gap-4 rounded-xl px-5 py-5 text-left sm:flex-col sm:items-start sm:gap-3 lg:flex-row lg:items-center lg:gap-4 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 lg:py-6",
                        active
                          ? "is-on text-white shadow-[0_18px_36px_-20px_rgba(14,124,112,0.9)]"
                          : "bg-white text-uni-hero-stat shadow-[0_14px_36px_-22px_rgba(10,15,75,0.28)] hover:bg-uni-hero-mint/60",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex size-14 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                          active ? "bg-uni-cur-activeIcon text-white" : "bg-uni-hero-mint text-brand-teal",
                        )}
                      >
                        <Icon className="size-7" strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-bold leading-tight">{y.title}</span>
                        {filled(y.subtitle) && (
                          <span
                            className={cn(
                              "mt-1 block text-[15px] leading-snug",
                              active ? "text-white/85" : "text-uni-cur-meta",
                            )}
                          >
                            {y.subtitle}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Semester tabs + subject table. */}
          <div className="rounded-2xl bg-white p-4 shadow-[0_20px_50px_-28px_rgba(10,15,75,0.28)] ring-1 ring-uni-cur-line sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div aria-label={copy.a11y.semesters} role="group" className="flex flex-wrap gap-2">
                {year.semesters.map((s, i) => {
                  const active = i === semIndex;
                  return (
                    <button
                      key={s.title}
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
                      {s.title}
                    </button>
                  );
                })}
              </div>
              <p className="text-sm text-uni-cur-meta">{summary}</p>
            </div>

            <ul className="mt-5 space-y-3 border-t border-uni-cur-line pt-5">
              {subjects.map((s) => (
                <li key={s.name} className="flex items-start gap-3 text-[15px] leading-snug text-[#5F6679]">
                  <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-zs-green" />
                  <span>
                    {s.name}
                    {filled(s.accaCode) && (
                      <span className="ml-2 inline-flex rounded-md bg-[#FEEAE8] px-1.5 py-0.5 align-[1px] text-[11px] font-bold leading-none text-[#F0474D]">
                        {s.accaCode}
                      </span>
                    )}
                    <TaughtByBadge value={s.taughtBy} university={u.universityName} />
                  </span>
                </li>
              ))}
            </ul>

            {filled(u.curriculumPdf) && (
              <div className="mt-4 flex justify-end">
                <a
                  href={u.curriculumPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-uni-cur-link hover:underline"
                >
                  {copy.viewFull}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
