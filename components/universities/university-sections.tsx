import Image from "next/image";
import {
  ArrowRight,
  Download,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CalendarDays,
  ChartColumnIncreasing,
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

import { FeePlanCard } from "@/components/home/fees/fee-plan-card";
import { container } from "@/components/programs/program-ui";
import {
  UniEyebrow,
  sectionPadding,
  sectionTone,
  serif,
  trustLogos,
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

const recognitionLogos: Partial<Record<keyof UniversityPage["recognitions"], (typeof trustLogos)[keyof typeof trustLogos]>> = {
  ugcStatus: trustLogos.ugc,
  naac: trustLogos.naac,
  nirf: trustLogos.nirf,
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
    .map((key) => ({ key, icon: recognitionIcons[key], logo: recognitionLogos[key], text: u.recognitions[key].trim() }))
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
              {recognitions.map(({ key, icon: Icon, logo, text }) => (
                <li key={key} className="flex items-center gap-4">
                  {logo ? (
                    <Image src={logo.src} alt="" width={logo.width} height={logo.height} className="size-9 shrink-0 object-contain" />
                  ) : (
                    <Icon aria-hidden="true" className="size-8 shrink-0 text-uni-hero-recIcon" strokeWidth={1.5} />
                  )}
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
  const last = cards.length - 1;

  // Homepage heading face (Plus Jakarta Sans via font-sans), not the university serif.
  return (
    <section aria-labelledby="uni-pathway-title" className={sectionTone[tone]}>
      <div className={cn(container, sectionPadding)}>
        <UniEyebrow className="text-uni-hero-eyebrow">{eyebrow}</UniEyebrow>
        <h2
          id="uni-pathway-title"
          className="mt-5 max-w-3xl font-sans text-[30px] font-extrabold leading-[1.15] tracking-tight text-uni-hero-ink md:text-[38px] xl:text-[44px]"
        >
          {title}
        </h2>

        <ol className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-y-0">
          {cards.map((card, i) => {
            const Icon = pathwayIcons[card.icon];
            return (
              <li key={card.title} className="flex flex-col">
                {/* Icon row: the connector runs through every circle from the first to the last. */}
                <div className="flex items-center" aria-hidden="true">
                  {i > 0 && <span className="hidden h-px w-8 bg-uni-hero-icon/50 lg:block" />}
                  <span className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-uni-hero-icon/60">
                    <span className="flex size-[58px] items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon">
                      <Icon className="size-6" strokeWidth={1.6} />
                    </span>
                  </span>
                  {i < last && <span className="hidden h-px flex-1 bg-uni-hero-icon/50 lg:block" />}
                </div>

                <div
                  className={cn(
                    "mt-8 lg:pr-6",
                    i > 0 && "lg:border-l lg:border-uni-hero-icon/30 lg:pl-8",
                  )}
                >
                  <span className="block text-[17px] font-bold leading-none text-uni-hero-icon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold leading-snug text-uni-hero-uspTitle">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-uni-hero-body">{card.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ── Program overview (dark-green "Program Highlights" band) ──────── */

// Values sampled from the "Program Highlights" design image (1342px export, scaled to 1440px):
// deep teal-green band with a brighter green glow bottom-left, dotted world map top-right,
// card-less 4×2 grid: mint icon circle, grey index number, label and bold white value, with
// hairline dividers between cells and a full-width rule between the two rows.
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

        <dl className="mt-10 grid sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                "flex items-start gap-4 border-white/20 py-7 sm:px-6 xl:gap-5 xl:px-8",
                // Hairlines: rule between rows, vertical divider between cells in a row.
                i > 0 && "border-t",
                i < 2 && "sm:border-t-0",
                i >= 2 && "sm:border-t",
                i % 2 === 1 ? "sm:border-l" : "sm:pl-0",
                i < 4 ? "lg:border-t-0" : "lg:border-t",
                i % 4 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l",
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon xl:size-[60px]"
              >
                <item.icon className="size-6 xl:size-7" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <span aria-hidden="true" className="block text-[13px] leading-none text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="mt-2.5 text-sm text-white/80">{item.label}</dt>
                <dd className="mt-1 text-base font-bold leading-snug text-white xl:text-[17px]">{item.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Admission process ────────────────────────────────────────────── */

// Values sampled from the "Clear Division of Expertise" design image (1346px export, scaled
// to 1440px): campus photo panel bleeding off the left edge (~52% wide) with the heading on a
// dark bottom fade; on the right a roadmap: numbered nodes (alternating blue / green) on a vertical
// route line, each beside a white card with a 3px left accent, navy title and grey text.
const admissionAccents = ["border-uni-adm-blue", "border-uni-adm-green"] as const;
const admissionNodes = ["border-uni-adm-blue bg-white text-uni-adm-blue", "border-uni-adm-green bg-white text-uni-adm-green"] as const;
const admissionNodesFilled = ["bg-uni-adm-blue", "bg-uni-adm-green"] as const;

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
        {/* Roadmap: a vertical route line through numbered nodes, one card per step. */}
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-[22px] top-10 w-0.5 rounded-full bg-[linear-gradient(180deg,#1F6FB8_0%,#16A07A_100%)] opacity-35"
          />
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.number} className="relative pb-5 pl-[68px] last:pb-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border-[3px] text-[15px] font-extrabold leading-nonefff)]#fff)]",
                    admissionNodes[i % admissionNodes.length],
                    isLast && "text-white",
                    isLast && admissionNodesFilled[i % admissionNodes.length],
                  )}
                >
                  {step.number}
                </span>
                <div
                  className={cn(
                    "rounded-xl border-l-[3px] bg-white py-5 pl-6 pr-6 shadow-[0_14px_36px_-24px_rgba(10,15,75,0.3)]",
                    admissionAccents[i % admissionAccents.length],
                  )}
                >
                  <h3 className="text-[17px] font-bold leading-snug text-uni-adm-title">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-uni-adm-text">{step.text}</p>
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

// Same four plan cards as the homepage fee section (coloured outline, price with struck-through
// list price, note and a green "effective fee" line) under a plain "Fee Structure" heading.
export function UniversityFees({ university: u }: { university: UniversityPage }) {
  const { fees } = copy;
  const plans = u.fees.plans;

  return (
    <section aria-labelledby="uni-fees-title" className="bg-uni-fee-bg">
      <div className={cn(container, "py-16 md:py-20 lg:py-[72px]")}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="uni-fees-title"
            className="font-sans text-[28px] font-extrabold leading-[1.15] tracking-tight text-uni-hero-navy md:text-[34px]"
          >
            {fees.title}
          </h2>
          <a
            href={copy.enquiryHref}
            className="inline-flex h-[52px] shrink-0 items-center justify-center gap-3 rounded-[10px] border border-uni-cur-border bg-white px-6 text-[15px] font-bold text-uni-hero-stat shadow-[0_10px_28px_-18px_rgba(10,15,75,0.3)] transition-colors hover:bg-uni-hero-mint focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40"
          >
            {fees.cta}
            <ArrowRight aria-hidden="true" className="size-[18px] text-uni-hero-icon" />
          </a>
        </div>

        {plans.length > 0 && (
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {plans.map((plan) => (
              <li key={plan.title}>
                <FeePlanCard {...plan} brand effectiveFeeLabel={fees.effectiveLabel} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ── Closing call to action ──────────────────────────────────────── */

const journeyIcons: Record<(typeof copy.journey.features)[number]["icon"], LucideIcon> = {
  globe: Globe,
  users: Users,
  chart: ChartColumnIncreasing,
};

// Values sampled from the "Ready to start your journey?" design band: pale mint background with
// green quarter-circle accents in the corners, serif heading, solid + white buttons, and a
// translucent feature panel on the right.
export function UniversityJourney({ university: u }: { university: UniversityPage }) {
  const { eyebrow, title, body, features } = copy.journey;

  return (
    <section aria-labelledby="uni-journey-title" className="relative overflow-hidden bg-uni-fee-band">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-32 size-56 rounded-full bg-[radial-gradient(circle_at_70%_30%,#3FC3A8,#06AE95)] opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-[radial-gradient(circle_at_30%_70%,#7DD4BE,#3FB89C)] opacity-70"
      />

      <div
        className={cn(
          container,
          "relative grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-center lg:py-[72px]",
        )}
      >
        <div>
          <p className="text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-hero-eyebrow">{eyebrow}</p>
          <h2
            id="uni-journey-title"
            className={cn(serif, "mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.015em] text-uni-hero-navy md:text-[38px] xl:text-[42px]")}
          >
            {title}
          </h2>
          <p className="mt-3 max-w-[560px] text-base leading-relaxed text-uni-hero-body xl:text-[17px]">{body}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={copy.enquiryHref}
              className="inline-flex h-[56px] w-full items-center justify-center gap-2.5 rounded-[10px] bg-uni-hero-button px-8 text-base font-bold text-white shadow-[0_12px_26px_-14px_rgba(0,122,96,0.9)] transition-all hover:-translate-y-0.5 hover:bg-uni-hero-buttonHover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 focus-visible:ring-offset-2 sm:w-auto"
            >
              {copy.hero.advisor}
              <ArrowRight aria-hidden="true" className="size-[18px]" />
            </a>
            {filled(u.brochureUrl) && (
              <a
                href={u.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[56px] w-full items-center justify-center gap-3 rounded-[10px] bg-white px-8 text-base font-bold text-uni-hero-stat shadow-[0_10px_30px_-14px_rgba(10,15,75,0.2)] transition-all hover:-translate-y-0.5 hover:bg-uni-hero-mint focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-uni-hero-button/40 focus-visible:ring-offset-2 sm:w-auto"
              >
                <Download aria-hidden="true" className="size-5 text-uni-hero-icon" strokeWidth={2.25} />
                {copy.hero.brochure}
              </a>
            )}
          </div>
        </div>

        <ul className="grid gap-6 rounded-2xl bg-white/60 p-7 ring-1 ring-white/80 backdrop-blur-sm sm:grid-cols-3 sm:gap-0 sm:p-8">
          {features.map((f, i) => {
            const Icon = journeyIcons[f.icon];
            return (
              <li
                key={f.text}
                className={cn("flex items-center gap-4 sm:block sm:px-6 sm:first:pl-0 sm:last:pr-0", i > 0 && "sm:border-l sm:border-uni-cur-border/70")}
              >
                <span
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center rounded-full bg-uni-hero-mint text-uni-hero-icon"
                >
                  <Icon className="size-7" strokeWidth={1.6} />
                </span>
                <p className="text-[15px] leading-snug text-uni-adm-text sm:mt-4">
                  {f.lead}
                  <br className="hidden sm:block" /> <span className="text-uni-adm-title">{f.text}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
