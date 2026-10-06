"use client";

import { Fragment, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, FileText, GraduationCap, type LucideIcon } from "lucide-react";

import { Eyebrow, SectionTitle, container } from "@/components/programs/program-ui";
import { bbaCurriculum } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

// Values sampled from the "Detailed Learning Structure" design image.
type Subject = { name: string; code?: string };

function SubjectColumn({
  icon: Icon,
  title,
  subjects,
  dot,
  className,
}: {
  icon: LucideIcon;
  title: string;
  subjects: readonly Subject[];
  dot: string;
  className?: string;
}) {
  return (
    <div className={cn("p-6 lg:p-7", className)}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E4F5EE] text-zs-green"
        >
          <Icon className="size-5" strokeWidth={2} />
        </span>
        <h3 className="text-[13px] font-extrabold uppercase tracking-[0.02em] text-zs-navy">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 pl-1 lg:pl-14">
        {subjects.map((s) => (
          <li key={s.name} className="flex items-start gap-3 text-[15px] leading-snug text-[#5F6679]">
            <span aria-hidden="true" className={cn("mt-[7px] size-1.5 shrink-0 rounded-full", dot)} />
            <span>
              {s.name}
              {s.code && (
                <span className="ml-2 inline-flex rounded-md bg-[#FEEAE8] px-1.5 py-0.5 align-[1px] text-[11px] font-bold leading-none text-[#F0474D]">
                  {s.code}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BbaCurriculum() {
  const { eyebrow, title, body, columns, outcomesLabel, a11y, semesters } = bbaCurriculum;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + semesters.length) % semesters.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const sem = semesters[active];

  return (
    <section aria-labelledby="bba-curriculum-title" className="bg-[#FBFDFD]">
      <div className={cn(container, "py-16 lg:py-20")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle id="bba-curriculum-title" className="mt-1.5">
          {title}
        </SectionTitle>
        <p className="mt-2 text-base text-zs-body">{body}</p>

        <div
          role="tablist"
          aria-label={a11y.tabs}
          className="mt-7 flex w-full gap-1 rounded-full bg-[#F1F4F5] p-1.5 sm:inline-flex sm:w-auto"
        >
          {semesters.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.tab}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`bba-sem-tab-${i}`}
                aria-selected={selected}
                aria-controls="bba-sem-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  "h-11 min-w-0 flex-1 rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-zs-green/40 sm:min-w-[68px] sm:flex-none sm:px-5",
                  selected
                    ? "bg-zs-green text-white shadow-[0_8px_18px_-8px_rgba(3,113,76,0.8)]"
                    : "text-zs-navy hover:bg-white",
                )}
              >
                {s.tab}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="bba-sem-panel"
          aria-labelledby={`bba-sem-tab-${active}`}
          className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,2fr)]"
        >
          <div className="rounded-2xl bg-[#ECF8F3] p-6 lg:p-7">
            <span className="inline-flex rounded-full bg-[#DDF0E7] px-3 py-1 text-[13px] font-semibold text-zs-navy">
              {sem.label}
            </span>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.01em] text-zs-navy">{sem.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-zs-body">{sem.meta.replace("self-study", "self‑study")}</p>
          </div>

          <div className="grid rounded-2xl border border-[#EEF1F3] bg-white shadow-[0_10px_30px_-18px_rgba(9,23,77,0.18)] md:grid-cols-2">
            <SubjectColumn icon={GraduationCap} title={columns.degree} subjects={sem.degree} dot="bg-zs-green" />
            <SubjectColumn
              icon={FileText}
              title={columns.zskillup}
              subjects={sem.zskillup}
              dot="bg-zs-orange"
              className="border-t border-[#EEF1F3] md:border-l md:border-t-0"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <p className="shrink-0 text-[13px] font-bold uppercase tracking-[0.02em] text-zs-navy/80">{outcomesLabel}</p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {sem.outcomes.map((o, i) => (
              <Fragment key={o}>
                {i > 0 && (
                  <li aria-hidden="true" className="text-zs-orange">
                    <ArrowRight className="size-4" />
                  </li>
                )}
                <li className="rounded-full bg-[#EAF8F2] px-5 py-2.5 text-sm font-semibold text-zs-navy">{o}</li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
