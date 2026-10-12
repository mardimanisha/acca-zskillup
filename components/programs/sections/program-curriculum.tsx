"use client";

import { useState, type ReactNode } from "react";
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
              <>
                <span className="ml-2 inline-flex rounded-md bg-uni-hero-mint px-1.5 py-0.5 align-[1px] text-[11px] font-bold leading-none text-uni-hero-icon">
                  ACCA
                </span>
                <span className="ml-1.5 inline-flex rounded-md bg-[#FEEAE8] px-1.5 py-0.5 align-[1px] text-[11px] font-bold leading-none text-[#F0474D]">
                  {s.code}
                </span>
              </>
            )}
            {s.badge && (
              <span className="ml-2 inline-flex rounded-full bg-uni-cur-peach px-2.5 py-0.5 align-[1px] text-[11px] font-semibold leading-none text-uni-cur-peachText">
                {s.badge}
              </span>
            )}
            {!s.code && !s.badge && (
              <span className="ml-2 inline-flex rounded-full bg-[#EAECF3] px-2.5 py-0.5 align-[1px] text-[11px] font-semibold leading-none text-[#5F6679]">
                Degree Subject
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

const D = "#0E7C70";

/** Soft tonal-green scenes (rolling hills + curriculum objects), one per semester theme. 440x170 canvas. */
const scenes: readonly (() => ReactNode)[] = [
  // S1 Foundations: accounting ledger + calculator
  () => (
    <>
      <path d="M118 74L214 88V154L118 140Z" fill="url(#cg1)" />
      <path d="M310 74L214 88V154L310 140Z" fill="url(#cg1)" opacity="0.85" />
      <path d="M124 66L214 80V146L124 132Z" fill="#fff" />
      <path d="M304 66L214 80V146L304 132Z" fill="url(#cg2)" />
      <path d="M214 80V146" stroke="#8FD4C3" strokeWidth="2" />
      <path d="M138 86l60 9M138 100l60 9M138 114l44 7" stroke="#BFE5DA" strokeWidth="4" strokeLinecap="round" />
      <path d="M230 94l60-9M230 108l60-9M230 122l60-9" stroke="#fff" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
      <rect x="316" y="48" width="54" height="80" rx="9" fill="url(#cg1)" />
      <rect x="324" y="56" width="38" height="18" rx="4" fill="#fff" opacity="0.92" />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}${c}`} cx={329 + c * 12} cy={88 + r * 12} r="4" fill="#fff" opacity="0.85" />
        )),
      )}
      <ellipse cx="98" cy="150" rx="18" ry="6" fill="url(#cg1)" />
      <ellipse cx="98" cy="143" rx="18" ry="6" fill="url(#cg2)" stroke="#fff" strokeOpacity="0.6" />
    </>
  ),
  // S2 Reporting & tax: statement, percent badge and pie chart
  () => (
    <>
      <rect x="140" y="30" width="100" height="126" rx="9" fill="#fff" stroke="#BFE5DA" strokeWidth="2" />
      <rect x="152" y="44" width="44" height="9" rx="4" fill="url(#cg1)" />
      <path d="M152 68h76M152 82h76M152 96h52" stroke="#BFE5DA" strokeWidth="5" strokeLinecap="round" />
      <rect x="152" y="116" width="76" height="26" rx="6" fill="url(#cg2)" />
      <path d="M160 129h30" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="244" cy="60" r="26" fill="url(#cg1)" stroke="#fff" strokeWidth="3" />
      <circle cx="235" cy="51" r="4.5" fill="#fff" />
      <circle cx="253" cy="69" r="4.5" fill="#fff" />
      <path d="M253 49L235 71" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <circle cx="306" cy="112" r="34" fill="url(#cg2)" />
      <path d="M306 112V78A34 34 0 0 1 336 128Z" fill="url(#cg1)" />
      <path d="M306 112L336 128A34 34 0 0 1 280 140Z" fill="#fff" opacity="0.7" />
    </>
  ),
  // S3 Audit, risk & control: checklist clipboard + magnifier
  () => (
    <>
      <rect x="148" y="34" width="100" height="124" rx="11" fill="url(#cg2)" />
      <rect x="158" y="48" width="80" height="104" rx="6" fill="#fff" />
      <rect x="180" y="27" width="36" height="16" rx="6" fill="url(#cg1)" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="167" y={60 + r * 30} width="16" height="16" rx="4" fill="url(#cg1)" />
          <path d={`M170 ${68 + r * 30}l4 4 7-8`} stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d={`M192 ${68 + r * 30}h38`} stroke="#BFE5DA" strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
      <path d="M312 120l30 28" stroke="url(#cg1)" strokeWidth="11" strokeLinecap="round" />
      <circle cx="290" cy="96" r="34" fill="#fff" fillOpacity="0.6" stroke="url(#cg1)" strokeWidth="9" />
      <path d="M274 110V96M290 110V84M306 110V90" stroke="#8FD4C3" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  // S4 Strategy, marketing & sustainability reporting: globe, leaf, report bars
  () => (
    <>
      <circle cx="150" cy="100" r="46" fill="url(#cg2)" />
      <ellipse cx="150" cy="100" rx="20" ry="46" stroke="#fff" strokeOpacity="0.85" strokeWidth="2.5" fill="none" />
      <path d="M104 100h92M112 76h76M112 124h76" stroke="#fff" strokeOpacity="0.85" strokeWidth="2.5" />
      <path d="M128 82c10-10 26-8 30 2s-8 16-16 14-22-2-14-16ZM158 112c8-4 20 2 18 12s-14 10-20 4-6-12 2-16Z" fill="url(#cg1)" />
      <path d="M222 134C214 94 240 64 284 60C288 102 264 130 222 134Z" fill="url(#cg1)" />
      <path d="M226 130C242 104 258 86 278 68" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {[30, 48, 68].map((h, i) => (
        <rect key={i} x={304 + i * 26} y={156 - h} width="18" height={h} rx="4" fill={i === 2 ? "url(#cg1)" : "url(#cg2)"} />
      ))}
    </>
  ),
  // S5 Strategic Professional: boardroom org chart + idea
  () => (
    <>
      <rect x="120" y="32" width="200" height="106" rx="10" fill="#fff" stroke="#BFE5DA" strokeWidth="2" />
      <path d="M190 138l-10 20M250 138l10 20" stroke="#8FD4C3" strokeWidth="5" strokeLinecap="round" />
      <rect x="200" y="44" width="40" height="18" rx="5" fill="url(#cg1)" />
      <path d="M220 62v10M166 72h108M166 72v10M220 72v10M274 72v10" stroke="#8FD4C3" strokeWidth="3" strokeLinecap="round" />
      {[148, 202, 256].map((x) => (
        <rect key={x} x={x} y="82" width="36" height="16" rx="5" fill="url(#cg2)" />
      ))}
      {[148, 202, 256].map((x) => (
        <path key={x} d={`M${x + 18} 98v8M${x + 6} 106h24M${x + 6} 106v6M${x + 30} 106v6`} stroke="#BFE5DA" strokeWidth="3" strokeLinecap="round" />
      ))}
      {[154, 178, 208, 232, 262, 286].map((x) => (
        <rect key={x} x={x} y="114" width="18" height="10" rx="3" fill="#CDEDE3" />
      ))}
      <circle cx="354" cy="70" r="16" fill="url(#cg1)" />
      <rect x="347" y="84" width="14" height="9" rx="3" fill="url(#cg2)" />
      <path d="M354 40v-8M378 50l6-6M382 72h8M330 50l-6-6" stroke="#8FD4C3" strokeWidth="3.5" strokeLinecap="round" />
    </>
  ),
  // S6 Career transition: briefcase, CV and graduation cap
  () => (
    <>
      <g transform="rotate(-8 166 96)">
        <rect x="130" y="44" width="72" height="96" rx="7" fill="#fff" stroke="#BFE5DA" strokeWidth="2" />
        <circle cx="152" cy="66" r="11" fill="url(#cg2)" />
        <path d="M170 62h24M170 72h18M140 90h52M140 102h52M140 114h34" stroke="#BFE5DA" strokeWidth="4.5" strokeLinecap="round" />
      </g>
      <path d="M222 88v-8a8 8 0 0 1 8-8h28a8 8 0 0 1 8 8v8" stroke="url(#cg1)" strokeWidth="7" fill="none" />
      <rect x="196" y="86" width="100" height="64" rx="11" fill="url(#cg1)" />
      <rect x="196" y="110" width="100" height="7" fill="#fff" opacity="0.55" />
      <rect x="238" y="104" width="16" height="20" rx="4" fill="#fff" />
      <path d="M326 44l44 16-44 16-44-16Z" fill="url(#cg1)" />
      <path d="M302 72v16c0 8 48 8 48 0V72l-24 9Z" fill="url(#cg2)" />
      <path d="M370 60v26" stroke={D} strokeWidth="3" strokeLinecap="round" />
      <circle cx="370" cy="90" r="4.5" fill="#fff" stroke={D} strokeWidth="2" />
    </>
  ),
];

/** Dark-green banner (dotted left, hairlines right) that fills the card's spare space, with a themed graphic on top. */
function SemesterVisual({ index }: { index: number }) {
  const Scene = scenes[index % scenes.length];
  return (
    <div
      aria-hidden="true"
      className="relative isolate mt-5 min-h-[120px] flex-1 overflow-hidden rounded-xl"
      style={{ backgroundImage: "linear-gradient(135deg, #0B6B57 0%, #06503F 55%, #053D31 100%)" }}
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 1.6px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 11px)",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      {/* Positioned from the banner's top/bottom so the graphic can never change its height. */}
      <div className="absolute inset-y-3 left-1/2 aspect-[440/170] max-w-[90%] -translate-x-1/2 overflow-hidden rounded-xl bg-gradient-to-b from-[#E6F6F0] to-white ring-1 ring-white/40">
        <svg viewBox="0 0 440 170" fill="none" className="size-full">
          <defs>
            <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8FD4C3" />
              <stop offset="1" stopColor="#2F9C86" />
            </linearGradient>
            <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#CDEDE3" />
              <stop offset="1" stopColor="#8FD4C3" />
            </linearGradient>
          </defs>
          <path d="M0 170V126C70 98 130 112 200 126S340 106 440 122V170Z" fill="#D2EDE3" />
          <path d="M0 170V148C80 130 170 152 250 142S380 130 440 144V170Z" fill="#E3F5EE" />
          {Scene()}
        </svg>
      </div>
    </div>
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
            <SemesterVisual index={semesters.indexOf(sem)} />
          </div>
        </div>
      </div>
    </section>
  );
}
