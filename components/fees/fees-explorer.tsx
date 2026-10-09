"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesColumn,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  GraduationCap,
  Landmark,
  type LucideIcon,
} from "lucide-react";

import { container } from "@/components/programs/program-ui";
import { feesCopy as copy, programInterestByFeeId, selectProgramEvent } from "@/content/fees";
import { programFees, type Plan, type ProgramFee, type ProgramFeeId } from "@/data/fees";
import { cn } from "@/lib/utils";

const tabIcons: Record<ProgramFeeId, LucideIcon> = {
  bcom: GraduationCap,
  bba: Landmark,
  acca: FileText,
};

const planIcons: LucideIcon[] = [CreditCard, CalendarDays, Clock, ChartNoAxesColumn];

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-md px-6 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 focus-visible:ring-offset-2 [&_svg]:size-4 [&_svg]:shrink-0";
const buttonPrimary = "bg-fp-green text-white hover:bg-fp-greenHover";
const buttonOutline = "border border-fp-green bg-white text-fp-green hover:bg-fp-mint";

const cardShadow = "shadow-[0_12px_36px_-16px_rgba(11,31,77,0.16)]";

/** Heading face used across /fees (serif, as in the design). */
export const feesSerif = "font-[family-name:var(--font-serif-display)] font-normal";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-xs font-semibold uppercase leading-none tracking-[0.16em] text-fp-accent",
        className,
      )}
    >
      <span aria-hidden="true" className="block h-[2px] w-6 rounded-full bg-fp-accent" />
      {children}
    </p>
  );
}

/** Pre-selects "Interested In" on the enquiry form; the link's #enquiry-form href does the scroll. */
function preselectProgram(id: ProgramFeeId) {
  window.dispatchEvent(new CustomEvent(selectProgramEvent, { detail: programInterestByFeeId[id] }));
}

function PlanCard({ plan, index, programId }: { plan: Plan; index: number; programId: ProgramFeeId }) {
  const Icon = planIcons[index % planIcons.length];
  const features = plan.features.filter(Boolean);

  return (
    <li className={cn("flex flex-col rounded-xl border border-fp-line/70 bg-white p-6", cardShadow)}>
      <span
        aria-hidden="true"
        className="flex size-11 items-center justify-center rounded-full bg-fp-mint text-fp-green [&_svg]:size-5"
      >
        <Icon strokeWidth={1.75} />
      </span>
      {plan.title && <h3 className="mt-5 text-[17px] font-bold leading-snug text-fp-navy">{plan.title}</h3>}
      {plan.amount && (
        <p className="mt-3 text-[32px] font-bold leading-none tracking-[-0.01em] text-fp-navy">₹ {plan.amount}</p>
      )}
      {plan.unit && <p className="mt-2 text-sm text-fp-body">{plan.unit}</p>}
      {features.length > 0 && (
        <ul className="mt-5 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-fp-body">
              <span
                aria-hidden="true"
                className="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full bg-fp-green text-white"
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      {plan.ctaLabel && (
        <div className="mt-auto pt-6">
          <a
            href={copy.help.cta.href}
            onClick={() => preselectProgram(programId)}
            className={cn(buttonBase, "w-full", index === 0 ? buttonPrimary : buttonOutline)}
          >
            {plan.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      )}
    </li>
  );
}

/** Photo clipped to the blob shape, with the dark-green swoosh behind it (bleeds off the right edge). */
function PanelArt({ className, clipId }: { className?: string; clipId: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.46,0 C0.16,0.02 0,0.26 0.01,0.54 C0.02,0.82 0.18,1 0.42,1 L0.93,1 L0.93,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path d="M0.62,0.04 C0.84,0.06 1,0.2 1,0.2 L1,1 L0.55,1 C0.78,0.9 0.9,0.6 0.62,0.04 Z" fill="#0E5A3A" />
      </svg>
      <div className="absolute inset-0" style={{ clipPath: `url(#${clipId})` }}>
        <Image
          src={copy.heroImage}
          alt={copy.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-[50%_20%]"
        />
      </div>
    </div>
  );
}

function ProgramPanel({ program }: { program: ProgramFee }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className={cn(container, "relative lg:flex lg:min-h-[420px] lg:items-center")}>
        <div className="py-10 sm:py-12 lg:w-[52%] lg:py-16">
          <h2 className={cn(feesSerif, "text-[34px] leading-[1.1] tracking-[-0.01em] text-fp-navy sm:text-[42px] xl:text-[48px]")}>
            {program.name}
          </h2>
          <p className="mt-3 text-base text-fp-body">{program.meta}</p>
          {program.fee && (
            <p className="mt-6 text-[34px] font-bold leading-none tracking-[-0.01em] text-fp-navy sm:text-[40px]">
              ₹ {program.fee}
            </p>
          )}
          {program.paymentStructure && (
            <p className="mt-3 max-w-[460px] text-base leading-[1.6] text-fp-body">{program.paymentStructure}</p>
          )}
          <a
            href={copy.help.cta.href}
            onClick={() => preselectProgram(program.id)}
            className={cn(buttonBase, buttonPrimary, "mt-8 w-full sm:w-auto")}
          >
            {program.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Desktop art: right 46%, bleeding off the right edge. */}
      <PanelArt clipId="fees-photo-lg" className="absolute inset-y-0 right-0 hidden w-[46%] lg:block" />
      {/* Tablet/mobile art: below the text. */}
      <PanelArt clipId="fees-photo-sm" className="ml-auto aspect-[4/3] w-full max-w-[640px] lg:hidden" />
    </section>
  );
}

export function FeesExplorer({ initialId }: { initialId: ProgramFeeId }) {
  const [activeId, setActiveId] = useState<ProgramFeeId>(initialId);
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = programFees.find((p) => p.id === activeId) ?? programFees[0];
  const tabId = (id: ProgramFeeId) => `${uid}-tab-${id}`;
  const panelId = `${uid}-panel`;

  function select(id: ProgramFeeId) {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("program", id);
    window.history.replaceState(null, "", url);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = programFees.length - 1;
    const next =
      event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    select(programFees[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <section aria-labelledby="fees-hero-title" className="relative overflow-hidden bg-gradient-to-b from-white to-fp-mintSoft">
        {/* Faint background photo, fading out towards the text. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] bg-cover bg-center opacity-100 [mask-image:linear-gradient(to_right,transparent,black_60%)] sm:block"
          style={{ backgroundImage: "url(/images/fees/hero-bg.jpg)" }}
        />
        <div className={cn(container, "relative pb-10 pt-12 sm:pt-16 lg:pb-12 lg:pt-16")}>
          <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
          <h1
            id="fees-hero-title"
            className={cn(feesSerif, "mt-5 text-[36px] leading-[1.18] tracking-[-0.01em] sm:text-[44px] xl:text-[52px]")}
          >
            <span className="block text-fp-navy">{copy.hero.titleLine1}</span>
            <span className="block text-fp-green">{copy.hero.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-base leading-[1.65] text-fp-body xl:text-[17px]">{copy.hero.body}</p>

          <div
            role="tablist"
            aria-label={copy.hero.eyebrow}
            className="-mx-4 mt-8 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {programFees.map((program, index) => {
              const Icon = tabIcons[program.id];
              const selected = program.id === activeId;
              return (
                <button
                  key={program.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(program.id)}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(program.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cn(
                    "flex min-w-[250px] shrink-0 snap-start items-center gap-3 rounded-xl p-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 sm:min-w-0 sm:p-3 lg:px-6 lg:py-5",
                    selected
                      ? "border-[1.5px] border-fp-green bg-fp-mint"
                      : "border-[1.5px] border-transparent bg-white shadow-[0_8px_24px_-14px_rgba(11,31,77,0.14)] hover:bg-fp-mintSoft",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green lg:size-14 [&_svg]:size-5 lg:[&_svg]:size-6"
                  >
                    <Icon strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={cn(feesSerif, "block text-[17px] leading-tight text-fp-navy")}>{program.name}</span>
                    <span className="mt-1 block text-xs leading-snug text-fp-body">{program.meta}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full",
                      selected ? "bg-fp-green text-white" : "bg-[#F1F4F8] text-fp-navy",
                    )}
                  >
                    <ChevronRight className="size-4" strokeWidth={2.25} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div role="tabpanel" id={panelId} aria-labelledby={tabId(activeId)} tabIndex={-1}>
        <div key={activeId} className="animate-in fade-in duration-300">
          <ProgramPanel program={active} />

          <section aria-labelledby={copy.plans.id} className="bg-fp-mintSoft">
            <div className={cn(container, "py-14 lg:py-20")}>
              <Eyebrow>{copy.plans.eyebrow}</Eyebrow>
              <h2
                id={copy.plans.id}
                className={cn(feesSerif, "mt-4 max-w-[900px] text-[30px] leading-[1.15] text-fp-navy md:text-[38px]")}
              >
                {copy.plans.title}
              </h2>
              <p className="mt-4 max-w-[760px] text-base leading-[1.65] text-fp-body">{copy.plans.subtitle}</p>

              {active.plans.length > 0 && (
                <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {active.plans.map((plan, index) => (
                    <PlanCard key={`${plan.title}-${index}`} plan={plan} index={index} programId={active.id} />
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
