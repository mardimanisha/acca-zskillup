import Image from "next/image";
import {
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Landmark,
  Laptop,
  Layers,
  ShieldCheck,
  Trophy,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { container } from "@/components/programs/program-ui";
import {
  UniEyebrow,
  UniEyebrowHeading,
  UniIconCircle,
  sectionPadding,
  sectionTone,
  serif,
  uniButtonClass,
  uniCard,
  type SectionTone,
} from "@/components/universities/university-ui";
import { WorldMap } from "@/components/universities/world-map";
import { universityPageCopy as copy } from "@/content/university-page";
import type { UniversityPage } from "@/data/universities/types";
import { cn } from "@/lib/utils";

const filled = (value: string) => value.trim().length > 0;

/* ── Why <university> ─────────────────────────────────────────────── */

const uspIcons: readonly LucideIcon[] = [GraduationCap, FileText, Users, Laptop];

const recognitionIcons: Record<keyof UniversityPage["recognitions"], LucideIcon> = {
  ugcStatus: Landmark,
  naac: BadgeCheck,
  nirf: Trophy,
  qsThe: Globe,
  other: ShieldCheck,
};

export function hasWhyContent(u: UniversityPage) {
  return (
    u.usps.some((usp) => filled(usp.title) || filled(usp.text)) ||
    Object.values(u.recognitions).some(filled)
  );
}

export function UniversityWhy({ university: u }: { university: UniversityPage }) {
  const usps = u.usps
    .map((usp, i) => ({ ...usp, icon: uspIcons[i % uspIcons.length] }))
    .filter((usp) => filled(usp.title) || filled(usp.text));

  const recognitions = (Object.keys(recognitionIcons) as (keyof typeof recognitionIcons)[])
    .map((key) => ({ key, icon: recognitionIcons[key], text: u.recognitions[key].trim() }))
    .filter((r) => r.text);

  return (
    <section aria-labelledby="uni-why-title" className="relative overflow-hidden bg-uni-cream">
      {/* Soft warm swoosh, as in the design background. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <path d="M0,520 C360,380 760,160 1440,120 L1440,0 L0,0 Z" fill="#FFFFFF" fillOpacity="0.45" />
      </svg>

      <div
        className={cn(
          container,
          sectionPadding,
          "relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:gap-16",
        )}
      >
        <div>
          <UniEyebrow>{copy.why.eyebrow(u)}</UniEyebrow>
          <h2
            id="uni-why-title"
            className={cn(
              serif,
              "mt-5 text-[32px] font-semibold leading-[1.12] tracking-[-0.015em] text-uni-navy md:text-[42px] xl:text-[48px]",
            )}
          >
            {copy.why.title[0]} <br className="hidden sm:block" />
            {copy.why.title[1]}
          </h2>

          {usps.length > 0 && (
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {usps.map((usp, i) => (
                <li
                  key={i}
                  className={cn(
                    "lg:px-7 lg:first:pl-0",
                    i > 0 && "lg:border-l lg:border-uni-line",
                  )}
                >
                  <UniIconCircle icon={usp.icon} className="size-14 [&_svg]:size-6" />
                  {filled(usp.title) && (
                    <h3 className="mt-5 text-[15px] font-bold leading-snug text-uni-navy">{usp.title}</h3>
                  )}
                  {filled(usp.text) && (
                    <p className="mt-2 text-sm leading-relaxed text-uni-body">{usp.text}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {recognitions.length > 0 && (
          <aside aria-labelledby="uni-recognition-title" className={cn(uniCard, "p-7 lg:mt-2")}>
            {u.logo && (
              <Image
                src={u.logo}
                alt={copy.a11y.logoAlt(u)}
                width={240}
                height={96}
                className="h-14 w-auto object-contain object-left"
              />
            )}
            <h3
              id="uni-recognition-title"
              className={cn("text-lg font-bold leading-snug text-uni-navy", u.logo && "mt-5")}
            >
              {copy.why.cardTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {recognitions.map(({ key, icon: Icon, text }) => (
                <li key={key} className="flex items-start gap-3.5">
                  <Icon aria-hidden="true" className="mt-px size-6 shrink-0 text-uni-green" strokeWidth={1.6} />
                  <span className="text-sm font-medium leading-snug text-uni-navy">{text}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ── Why this integrated pathway (dark-green band) ────────────────── */

const pathwayIcons: Record<(typeof copy.pathway.cards)[number]["icon"], LucideIcon> = {
  graduationCap: GraduationCap,
  landmark: Landmark,
  brain: BrainCircuit,
  briefcase: Briefcase,
};

export function UniversityPathway() {
  const { eyebrow, title, cards } = copy.pathway;

  return (
    <section aria-labelledby="uni-pathway-title" className="relative overflow-hidden bg-uni-greenDark text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_30%,rgba(255,255,255,0.08),transparent_70%)]"
      />
      <WorldMap className="absolute -right-[6%] top-4 hidden w-[58%] max-w-[920px] text-white/20 md:block" />

      <div className={cn(container, sectionPadding, "relative")}>
        <UniEyebrow className="text-[#A8D9BC]">{eyebrow}</UniEyebrow>
        <h2
          id="uni-pathway-title"
          className="mt-4 max-w-3xl text-[28px] font-bold leading-[1.2] tracking-[-0.02em] md:text-4xl xl:text-[42px]"
        >
          {title}
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = pathwayIcons[card.icon];
            return (
              <li
                key={card.title}
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-7 backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full bg-white/10 text-[#BFE6CF]"
                >
                  <Icon className="size-[22px]" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{card.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── Program overview ─────────────────────────────────────────────── */

export function UniversityOverview({ university: u, tone }: { university: UniversityPage; tone: SectionTone }) {
  const { eyebrow, labels, fixed } = copy.overview;
  const items: { label: string; value: string; icon: LucideIcon }[] = [
    { label: labels.degree, value: u.officialDegreeName, icon: GraduationCap },
    { label: labels.duration, value: fixed.duration, icon: Clock },
    { label: labels.semesters, value: fixed.semesters, icon: Layers },
    { label: labels.mode, value: fixed.mode, icon: Laptop },
    { label: labels.eligibility, value: u.eligibility, icon: UserCheck },
    { label: labels.examinationMode, value: u.examinationMode, icon: ClipboardCheck },
    { label: labels.intake, value: u.intake, icon: CalendarDays },
    { label: labels.program, value: fixed.program, icon: BookOpen },
  ].filter((item) => filled(item.value));

  return (
    <section aria-labelledby="uni-overview-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <UniEyebrowHeading id="uni-overview-title">{eyebrow}</UniEyebrowHeading>
        <dl className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className={cn(uniCard, "flex flex-col gap-4 p-5 sm:p-6")}>
              <UniIconCircle icon={item.icon} className="size-11 [&_svg]:size-5" />
              <div>
                <dt className="text-[13px] font-medium text-uni-body">{item.label}</dt>
                <dd className="mt-1 text-base font-bold leading-snug text-uni-navy sm:text-[17px]">
                  {item.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Curriculum (Year → Semester → subjects) ──────────────────────── */

export function hasCurriculum(u: UniversityPage) {
  return u.curriculum.some((year) => year.semesters.some((sem) => sem.subjects.some(filled)));
}

export function UniversityCurriculum({ university: u, tone }: { university: UniversityPage; tone: SectionTone }) {
  const years = u.curriculum
    .map((year) => ({
      ...year,
      semesters: year.semesters
        .map((sem) => ({ ...sem, subjects: sem.subjects.filter(filled) }))
        .filter((sem) => sem.subjects.length),
    }))
    .filter((year) => year.semesters.length);

  return (
    <section aria-labelledby="uni-curriculum-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <UniEyebrowHeading id="uni-curriculum-title">{copy.curriculum.eyebrow}</UniEyebrowHeading>
        <div className="mt-10 space-y-4">
          {years.map((year, i) => (
            <details key={year.title || i} open={i === 0} className={cn(uniCard, "group overflow-hidden")}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-uni-green/40 sm:px-8 [&::-webkit-details-marker]:hidden">
                <h3 className={cn(serif, "text-xl font-semibold text-uni-navy sm:text-2xl")}>{year.title}</h3>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-uni-green transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="grid gap-4 border-t border-uni-line px-6 py-6 sm:px-8 md:grid-cols-2">
                {year.semesters.map((sem, j) => (
                  <div key={sem.title || j} className="rounded-xl bg-uni-cream p-5 sm:p-6">
                    {filled(sem.title) && (
                      <h4 className="text-[13px] font-bold uppercase tracking-[0.08em] text-uni-green">
                        {sem.title}
                      </h4>
                    )}
                    <ul className={cn("space-y-2.5", filled(sem.title) && "mt-4")}>
                      {sem.subjects.map((subject) => (
                        <li key={subject} className="flex items-start gap-3 text-[15px] leading-snug text-uni-navy">
                          <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-uni-green" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Admission process ────────────────────────────────────────────── */

export function UniversityAdmission({ tone }: { tone: SectionTone }) {
  const { eyebrow, steps } = copy.admission;

  return (
    <section aria-labelledby="uni-admission-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <UniEyebrowHeading id="uni-admission-title">{eyebrow}</UniEyebrowHeading>
        <ol className="mt-12 lg:grid lg:grid-cols-5">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={step.number} className="flex gap-5 lg:block">
                <span
                  aria-hidden="true"
                  className={cn(serif, "w-14 shrink-0 text-[40px] font-semibold leading-none text-uni-green lg:w-auto lg:text-[56px]")}
                >
                  {step.number}
                </span>
                {/* Timeline: vertical rule on mobile/tablet, horizontal dot + rule on desktop. */}
                <div aria-hidden="true" className="mt-6 hidden items-center lg:flex">
                  <span className="size-3 shrink-0 rounded-full bg-uni-green ring-[5px] ring-uni-mint" />
                  {!last && <span className="ml-2 h-px flex-1 bg-uni-line" />}
                </div>
                <div
                  className={cn(
                    "border-l border-uni-line pl-5 lg:mt-6 lg:border-0 lg:pl-0 lg:pr-8",
                    last ? "pb-0" : "pb-9 lg:pb-0",
                  )}
                >
                  <h3 className="text-base font-bold leading-snug text-uni-navy lg:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-uni-body lg:text-[15px]">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ── Fees ─────────────────────────────────────────────────────────── */

export function UniversityFees({ university: u, tone }: { university: UniversityPage; tone: SectionTone }) {
  const { fees } = copy;
  const rows = [
    { label: fees.total, value: filled(u.fees.total) ? `${fees.currency} ${u.fees.total}` : "" },
    { label: fees.semester, value: filled(u.fees.semester) ? `${fees.currency} ${u.fees.semester}` : "" },
    { label: fees.paymentOptions, value: u.fees.paymentOptions },
  ].filter((row) => filled(row.value));

  return (
    <section aria-labelledby="uni-fees-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <div className={cn(uniCard, "mx-auto max-w-3xl p-7 sm:p-10")}>
          <h2
            id="uni-fees-title"
            className={cn(serif, "text-[26px] font-semibold leading-tight tracking-[-0.01em] text-uni-navy sm:text-[32px]")}
          >
            {fees.title(u)}
          </h2>
          {rows.length > 0 && (
            <dl className="mt-7 divide-y divide-uni-line border-y border-uni-line">
              {rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="text-[15px] text-uni-body">{row.label}</dt>
                  <dd className="text-lg font-bold text-uni-navy sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <a href={copy.enquiryHref} className={uniButtonClass("primary", "mt-8 w-full sm:w-auto")}>
            {fees.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
