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

import { container } from "@/components/programs/program-ui";
import { serif } from "@/components/universities/university-ui";
import { universityPageCopy } from "@/content/university-page";
import type { CurriculumSubject, UniversityPage } from "@/data/universities/types";
import { cn } from "@/lib/utils";

const copy = universityPageCopy.curriculum;

// Values sampled from the "Curriculum Journey" design image (1348px export, scaled to 1440px):
// year cards on a dotted timeline (active = solid green), white table card with pill semester
// tabs, mint ACCA-code chips and a peach chip for subjects taught outside the university.

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

/** Subjects taught by anyone other than the university get the design's peach chip. */
function TaughtBy({ value, university }: { value: string; university: string }) {
  if (!filled(value)) return null;
  const external = !university.toLowerCase().includes(value.trim().toLowerCase());
  return external ? (
    <span className="inline-flex rounded-full bg-uni-cur-peach px-3 py-1 text-[13px] font-semibold leading-none text-uni-cur-peachText">
      {value}
    </span>
  ) : (
    <span>{value}</span>
  );
}

function CodeChip({ code }: { code: string }) {
  if (!filled(code)) {
    return (
      <span aria-hidden="true" className="text-uni-cur-meta">
        –
      </span>
    );
  }
  return (
    <span className="inline-flex min-w-8 justify-center rounded-md bg-uni-cur-chip px-1.5 py-1 text-xs font-bold leading-none text-uni-cur-text">
      {code}
    </span>
  );
}

const hours = (h: number) => (h > 0 ? copy.hours(h) : "");

export function UniversityCurriculum({ university: u }: { university: UniversityPage }) {
  const years = visibleYears(u);
  const [yearIndex, setYearIndex] = useState(0);
  const [semIndex, setSemIndex] = useState(0);

  const year = years[Math.min(yearIndex, years.length - 1)];
  const sem = year.semesters[Math.min(semIndex, year.semesters.length - 1)];
  const subjects: readonly CurriculumSubject[] = sem.subjects;
  const summary = copy.summary(
    subjects.length,
    subjects.reduce((t, s) => t + s.classHours, 0),
    subjects.reduce((t, s) => t + s.selfStudyHours, 0),
  );
  const { columns } = copy;

  return (
    <section
      aria-labelledby="uni-curriculum-title"
      className="relative overflow-hidden bg-uni-band-card bg-[radial-gradient(50%_60%_at_100%_0%,rgba(230,244,236,0.8)_0%,rgba(230,244,236,0)_100%)]"
    >
      <div className={cn(container, "relative py-16 md:py-20 lg:py-[72px]")}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-hero-eyebrow">
              {copy.eyebrow}
            </p>
            <h2
              id="uni-curriculum-title"
              className={cn(
                serif,
                "mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.015em] text-uni-hero-navy md:text-[38px] xl:text-[40px]",
              )}
            >
              {copy.title}
            </h2>
          </div>
          {filled(u.curriculumPdf) && (
            <a
              href={u.curriculumPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] shrink-0 items-center justify-center gap-3 rounded-[10px] border border-uni-cur-border bg-white px-6 text-[15px] font-bold text-uni-hero-stat shadow-[0_10px_28px_-18px_rgba(10,15,75,0.3)] transition-colors hover:bg-uni-hero-mint focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40"
            >
              <Download aria-hidden="true" className="size-[18px] text-uni-hero-icon" strokeWidth={2.25} />
              {copy.download}
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:gap-9 xl:mt-12">
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
                      className="absolute -left-12 top-1/2 hidden size-[22px] -translate-y-1/2 rounded-full border-[3px] border-uni-hero-icon bg-uni-band-card lg:block"
                    />
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setYearIndex(i);
                        setSemIndex(0);
                      }}
                      className={cn(
                        "flex h-full w-full items-center gap-4 rounded-xl px-5 py-5 text-left sm:flex-col sm:items-start sm:gap-3 lg:flex-row lg:items-center lg:gap-4 transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 lg:py-6",
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
                        "h-11 rounded-full px-7 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40",
                        active
                          ? "bg-uni-cur-tab text-white"
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

            {/* Desktop/tablet: table. */}
            <table className="mt-5 hidden w-full border-collapse text-left md:table">
              <thead>
                <tr className="border-b border-uni-cur-line text-[13px] font-medium text-uni-cur-meta">
                  <th scope="col" className="py-3 pr-4 font-medium">{columns.subject}</th>
                  <th scope="col" className="px-3 py-3 text-center font-medium">{columns.accaCode}</th>
                  <th scope="col" className="px-3 py-3 text-center font-medium">{columns.taughtBy}</th>
                  <th scope="col" className="px-3 py-3 text-center font-medium">{columns.assessedBy}</th>
                  <th scope="col" className="px-3 py-3 text-center font-medium">{columns.classHours}</th>
                  <th scope="col" className="py-3 pl-3 text-center font-medium">{columns.selfStudyHours}</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-uni-cur-text">
                {subjects.map((s) => (
                  <tr key={s.name} className="border-b border-uni-cur-line last:border-0">
                    <th scope="row" className="max-w-[280px] py-4 pr-4 font-normal leading-snug">{s.name}</th>
                    <td className="px-3 py-4 text-center"><CodeChip code={s.accaCode} /></td>
                    <td className="px-3 py-4 text-center"><TaughtBy value={s.taughtBy} university={u.universityName} /></td>
                    <td className="px-3 py-4 text-center">{s.assessedBy}</td>
                    <td className="px-3 py-4 text-center">{hours(s.classHours)}</td>
                    <td className="py-4 pl-3 text-center">{hours(s.selfStudyHours)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile: one row per subject. */}
            <ul className="mt-5 divide-y divide-uni-cur-line md:hidden">
              {subjects.map((s) => (
                <li key={s.name} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[15px] font-semibold leading-snug text-uni-cur-text">{s.name}</p>
                    <CodeChip code={s.accaCode} />
                  </div>
                  <dl className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px]">
                    {[
                      [columns.taughtBy, <TaughtBy key="t" value={s.taughtBy} university={u.universityName} />],
                      [columns.assessedBy, s.assessedBy],
                      [columns.classHours, hours(s.classHours)],
                      [columns.selfStudyHours, hours(s.selfStudyHours)],
                    ].map(([label, value]) => (
                      <div key={label as string} className="flex items-center gap-2">
                        <dt className="text-uni-cur-meta">{label}</dt>
                        <dd className="font-medium text-uni-cur-text">{value}</dd>
                      </div>
                    ))}
                  </dl>
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
