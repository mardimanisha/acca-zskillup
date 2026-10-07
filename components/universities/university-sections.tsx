import Image from "next/image";
import {
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CalendarDays,
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

  // Values sampled from the "Why choose" design image (1357px export, scaled to 1440px):
  // warm cream band with a mint wash top-right, tall pale-mint card on the right spanning
  // almost the full band height, icon-circle USP columns separated by hairline dividers.
  return (
    <section aria-labelledby="uni-why-title" className="relative overflow-hidden bg-uni-hero-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(38%_80%_at_88%_10%,rgba(222,243,232,0.9)_0%,rgba(222,243,232,0)_100%)]"
      />
      {/* Soft lighter sweeps, as in the design background. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <path d="M560,0 C700,140 860,330 1040,480 L1440,480 L1440,0 Z" fill="#FFFFFF" fillOpacity="0.35" />
        <path d="M0,300 C260,250 520,300 760,480 L0,480 Z" fill="#FFFFFF" fillOpacity="0.3" />
      </svg>

      <div
        className={cn(
          container,
          "relative grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_386px] lg:items-stretch lg:gap-14 lg:py-7",
        )}
      >
        <div className="lg:py-6">
          <p className="text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-hero-eyebrow">
            {copy.why.eyebrow(u)}
          </p>
          <h2
            id="uni-why-title"
            className={cn(
              serif,
              "mt-5 text-[30px] font-semibold leading-[1.12] tracking-[-0.015em] text-uni-hero-ink md:text-[38px] xl:text-[43px]",
            )}
          >
            {copy.why.title[0]} <br className="hidden sm:block" />
            {copy.why.title[1]}
          </h2>

          {usps.length > 0 && (
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
              {usps.map((usp, i) => (
                <li
                  key={i}
                  className={cn(
                    "lg:px-8 lg:py-2 lg:first:pl-0",
                    i > 0 && "lg:border-l lg:border-[#ECECE7]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-[60px] items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon"
                  >
                    <usp.icon className="size-7" strokeWidth={1.6} />
                  </span>
                  {filled(usp.title) && (
                    <h3 className="mt-6 text-[15px] font-bold leading-[1.45] text-uni-hero-uspTitle">{usp.title}</h3>
                  )}
                  {filled(usp.text) && (
                    <p className="mt-1.5 text-sm leading-relaxed text-uni-hero-body">{usp.text}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {recognitions.length > 0 && (
          <aside
            aria-labelledby="uni-recognition-title"
            className="rounded-2xl bg-uni-hero-card px-8 py-9 shadow-[0_24px_60px_-34px_rgba(10,60,40,0.25)] ring-1 ring-[#E3F2EA]"
          >
            {u.logo && (
              <Image
                src={u.logo}
                alt={copy.a11y.logoAlt(u)}
                width={240}
                height={96}
                className="mx-auto h-[68px] w-auto object-contain mix-blend-multiply"
              />
            )}
            <h3
              id="uni-recognition-title"
              className={cn("text-[17px] font-bold leading-snug text-uni-hero-stat", u.logo && "mt-7")}
            >
              {copy.why.cardTitle}
            </h3>
            <ul className="mt-6 space-y-5">
              {recognitions.map(({ key, icon: Icon, text }) => (
                <li key={key} className="flex items-center gap-4">
                  <Icon aria-hidden="true" className="size-8 shrink-0 text-uni-hero-recIcon" strokeWidth={1.5} />
                  <span className="text-[15px] font-bold leading-snug text-uni-hero-uspTitle">{text}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ── Why this integrated pathway ──────────────────────────────────── */

const pathwayIcons: Record<(typeof copy.pathway.cards)[number]["icon"], LucideIcon> = {
  graduationCap: GraduationCap,
  landmark: Landmark,
  brain: BrainCircuit,
  briefcase: Briefcase,
};

export function UniversityPathway({ tone }: { tone: SectionTone }) {
  const { eyebrow, title, cards } = copy.pathway;

  return (
    <section aria-labelledby="uni-pathway-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <UniEyebrow className="text-uni-hero-eyebrow">{eyebrow}</UniEyebrow>
        <h2
          id="uni-pathway-title"
          className={cn(
            serif,
            "mt-5 max-w-3xl text-[30px] font-semibold leading-[1.12] tracking-[-0.015em] text-uni-hero-ink md:text-[38px] xl:text-[43px]",
          )}
        >
          {title}
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = pathwayIcons[card.icon];
            return (
              <li key={card.title} className={cn(uniCard, "p-7")}>
                <span
                  aria-hidden="true"
                  className="flex size-14 items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon"
                >
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[17px] font-bold leading-snug text-uni-hero-uspTitle">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-uni-hero-body">{card.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── Program overview (dark-green "Program Highlights" band) ──────── */

// Values sampled from the "Program Highlights" design image (1342px export, scaled to 1440px):
// deep teal-green band with a brighter green glow bottom-left, dotted world map top-right,
// off-white 12px-radius cards (grey index number, mint icon circle, navy/grey text) and a
// thin rule with white dots under the card row.
export function UniversityOverview({ university: u }: { university: UniversityPage }) {
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
    <section aria-labelledby="uni-overview-title" className="relative overflow-hidden bg-uni-band text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_0%_100%,rgba(1,120,80,0.9)_0%,rgba(1,120,80,0)_100%)]"
      />
      <WorldMap className="absolute -right-[4%] -top-[2%] hidden w-[46%] max-w-[760px] text-white/25 md:block" />

      <div className={cn(container, "relative py-16 md:py-20 lg:py-[72px]")}>
        <h2
          id="uni-overview-title"
          className="text-[13px] font-bold uppercase leading-none tracking-[0.14em] text-uni-band-eyebrow"
        >
          {eyebrow}
        </h2>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="relative flex items-center gap-4 rounded-xl bg-uni-band-card py-5 pl-5 pr-5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] xl:gap-5 xl:py-6 xl:pl-6"
            >
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon xl:size-[60px]"
              >
                <item.icon className="size-6 xl:size-7" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <dt className="pr-6 text-sm text-uni-band-label">{item.label}</dt>
                <dd className="mt-1 text-base font-bold leading-snug text-uni-band-title xl:text-[17px]">{item.value}</dd>
              </div>
              <span aria-hidden="true" className="absolute right-4 top-3.5 text-[15px] leading-none text-uni-band-num/80">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </dl>

        {/* Decorative rule with a dot under each column, as in the design. */}
        <div aria-hidden="true" className="relative mt-6 hidden h-2.5 lg:block">
          <span className="absolute inset-x-[12.5%] top-1/2 h-px -translate-y-1/2 bg-white/25" />
          {[12.5, 37.5, 62.5, 87.5].map((left) => (
            <span
              key={left}
              className="absolute top-0 size-2.5 -translate-x-1/2 rounded-full bg-white"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Admission process ────────────────────────────────────────────── */

// Values sampled from the "Clear Division of Expertise" design image (1346px export, scaled
// to 1440px): campus photo panel bleeding off the left edge (~52% wide) with the heading on a
// dark bottom fade; stacked white cards on the right with a 3px rounded left accent
// (alternating blue / green), navy title, grey text and a large green figure top-right.
const admissionAccents = ["border-uni-adm-blue", "border-uni-adm-green"] as const;

export function UniversityAdmission({ university: u }: { university: UniversityPage }) {
  const { eyebrow, steps } = copy.admission;

  return (
    <section aria-labelledby="uni-admission-title" className="relative overflow-hidden bg-uni-band-card">
      {/* Photo panel: full-bleed on the left from lg, a banner above the steps below lg. */}
      <div className="relative h-[260px] overflow-hidden bg-uni-band sm:h-[320px] lg:absolute lg:inset-y-10 lg:left-0 lg:h-auto lg:w-[49%]">
        {u.heroImage && (
          <Image
            src={u.heroImage}
            alt={copy.a11y.heroAlt(u)}
            fill
            sizes="(min-width: 1024px) 49vw, 100vw"
            className="object-cover object-center"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,15,0)_35%,rgba(10,20,15,0.55)_70%,rgba(10,20,15,0.85)_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-7 sm:px-8 lg:px-10 lg:pb-10 xl:pl-16">
          <h2
            id="uni-admission-title"
            className={cn(serif, "text-[30px] font-semibold leading-[1.1] tracking-[0.01em] text-white md:text-[36px] xl:text-[40px]")}
          >
            {eyebrow}
          </h2>
        </div>
      </div>

      {/* Same side gutters as `container`; on lg the steps start 44px right of the photo panel. */}
      <div className="relative mx-auto max-w-[1760px] px-4 py-10 sm:px-6 lg:py-14 lg:pl-[calc(49%+44px)] lg:pr-10 xl:pr-16">
        <ol className="space-y-3.5">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className={cn(
                "flex items-start justify-between gap-5 rounded-xl border-l-[3px] bg-white py-5 pl-6 pr-6 shadow-[0_14px_36px_-24px_rgba(10,15,75,0.3)] sm:pl-7",
                admissionAccents[i % admissionAccents.length],
              )}
            >
              <div className="min-w-0">
                <h3 className="text-[17px] font-bold leading-snug text-uni-adm-title">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-uni-adm-text">{step.text}</p>
              </div>
              <span aria-hidden="true" className="shrink-0 text-[32px] font-bold leading-none text-uni-adm-num xl:text-[36px]">
                {step.number}
              </span>
            </li>
          ))}
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
