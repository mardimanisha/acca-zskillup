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
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

import { feesSerif } from "@/components/fees/fees-ui";
import {
  UniversityFeeSection,
  UniversityPicker,
  universitiesForProgram,
} from "@/components/fees/university-fees";
import { TbaBadge } from "@/components/shared/tba-badge";
import { container } from "@/components/programs/program-ui";
import { toBeAnnounced } from "@/content/site";
import { feesCopy as copy, programInterestByFeeId, selectProgramEvent } from "@/content/fees";
import {
  programFees,
  type Plan,
  type ProgramFee,
  type ProgramFeature,
  type ProgramFeeId,
} from "@/data/fees";
import { cn } from "@/lib/utils";

const tabIcons: Record<ProgramFeeId, LucideIcon> = {
  bcom: GraduationCap,
  bba: Landmark,
  acca: FileText,
};

const planIcons: LucideIcon[] = [CreditCard, CalendarDays, Clock, ChartNoAxesColumn];

const featureIcons = {
  graduationCap: GraduationCap,
  fileText: FileText,
  users: Users,
  video: Video,
  clock: Clock,
  chart: ChartNoAxesColumn,
} satisfies Record<
  ProgramFeature["icon"],
  LucideIcon
>;

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-6 text-[15px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:ring-offset-2 [&_svg]:size-4 [&_svg]:shrink-0";
const buttonPrimary = "bg-gradient-to-r from-brand-tealLight to-brand-tealDark text-white shadow-[0_10px_24px_-10px_rgba(11,95,87,0.7)] hover:brightness-110";
const buttonOutline = "border-[1.5px] border-brand-teal bg-white text-brand-teal hover:bg-brand-teal/5 hover:text-brand-tealDark";

const eyebrowClass = "flex items-center gap-2 text-xs font-bold uppercase leading-none tracking-[0.04em] text-fp-green";

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
    <li className="flex flex-col rounded-[14px] bg-white p-6 shadow-[0_14px_40px_-18px_rgba(11,31,77,0.18)] lg:p-7">
      <span
        aria-hidden="true"
        className="flex size-16 items-center justify-center rounded-full bg-[#DDF1E8] text-fp-green [&_svg]:size-7"
      >
        <Icon strokeWidth={1.6} />
      </span>
      {plan.title && <h3 className="mt-6 text-[15px] font-bold leading-snug text-fp-navy">{plan.title}</h3>}
      {plan.amount && (
        <p className={cn(feesSerif, "mt-3 text-[30px] leading-none text-fp-navy xl:text-[34px]")}>₹ {plan.amount}</p>
      )}
      {plan.unit && <p className="mt-3 text-sm text-fp-body">{plan.unit}</p>}
      {features.length > 0 && (
        <ul className="mt-8 space-y-3.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-snug text-fp-navy/80">
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
        <div className="mt-auto pt-8">
          <a
            href={copy.help.cta.href}
            onClick={() => preselectProgram(programId)}
            className={cn(buttonBase, "h-11 w-full text-sm", index === 0 ? buttonPrimary : buttonOutline)}
          >
            {plan.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      )}
    </li>
  );
}

/** Photo clipped to the blob shape, with the green circle behind it (bleeds off the right edge). */
function PanelArt({ className, clipId, badge }: { className?: string; clipId: string; badge: string }) {
  const badgeLines = badge.split(/(?<=\.)\s+/).filter(Boolean);
  return (
    <div className={cn("relative", className)}>
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.46,0 C0.18,0 0.02,0.2 0.02,0.45 C0.02,0.7 0.1,1 0.22,1 L0.92,1 L0.92,0.04 C0.8,0 0.65,0 0.46,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <span
        aria-hidden="true"
        className="absolute -right-[8%] top-[10%] h-[72%] w-[24%] rounded-full bg-brand-teal"
      />
      <div className="absolute inset-0" style={{ clipPath: `url(#${clipId})` }}>
        <Image
          src={copy.heroImage}
          alt={copy.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="-scale-x-100 object-cover object-[50%_20%]"
        />
      </div>
      {badgeLines.length > 0 && (
        <div className="absolute bottom-[8%] left-[8%] flex items-center gap-4 rounded-2xl bg-white/90 py-4 pl-4 pr-8 shadow-[0_16px_40px_-16px_rgba(11,31,77,0.3)] backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green"
          >
            <GraduationCap className="size-5" strokeWidth={1.75} />
          </span>
          <p className={cn(feesSerif, "text-[15px] leading-snug text-fp-navy sm:text-[18px]")}>
            {badgeLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span aria-hidden="true" className="mt-2 block h-px w-10 bg-fp-accent" />
          </p>
        </div>
      )}
    </div>
  );
}

function ProgramPanel({ program }: { program: ProgramFee }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className={cn(container, "relative lg:flex lg:min-h-[480px] lg:items-center")}>
        <div className="py-10 md:py-10 lg:w-[52%]">
          <p className={eyebrowClass}>
            <span aria-hidden="true" className="block h-[2px] w-3 bg-fp-green" />
            {copy.panel.eyebrow}
          </p>
          <h2 className={cn(feesSerif, "mt-4 text-[34px] leading-[1.1] text-fp-navy sm:text-[42px] xl:text-[48px]")}>
            {program.name}
            {program.id === "acca" && <TbaBadge className="ml-3 align-middle text-xs" />}
          </h2>
          <p className="mt-3 text-base text-brand-body">{program.meta}</p>
          {program.description && (
            <p className="mt-5 max-w-[470px] text-base leading-[1.7] text-brand-body">{program.description}</p>
          )}
          {program.fee && (
            <p className="mt-6 text-[34px] font-bold leading-none tracking-[-0.01em] text-fp-navy sm:text-[40px]">
              ₹ {program.fee}
            </p>
          )}
          {program.paymentStructure && (
            <p className="mt-3 max-w-[460px] text-base leading-[1.6] text-fp-body">{program.paymentStructure}</p>
          )}
          {program.features.length > 0 && (
            <ul className="mt-8 grid max-w-[520px] grid-cols-3">
              {program.features.map((feature) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <li key={feature.label} className="border-l border-fp-line px-4 first:border-l-0 first:pl-0">
                    <span
                      aria-hidden="true"
                      className="flex size-14 items-center justify-center rounded-full bg-fp-mint text-fp-green [&_svg]:size-6"
                    >
                      <Icon strokeWidth={1.6} />
                    </span>
                    <span className="mt-3 block text-sm leading-snug text-brand-body">{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          )}
          {program.id === "acca" ? (
            <button
              type="button"
              disabled
              className={cn(buttonBase, buttonPrimary, "mt-8 w-full opacity-60 sm:w-auto")}
            >
              {toBeAnnounced}
            </button>
          ) : (
            <a
              href={copy.help.cta.href}
              onClick={() => preselectProgram(program.id)}
              className={cn(buttonBase, buttonPrimary, "mt-8 w-full sm:w-auto")}
            >
              {program.ctaLabel}
              <ArrowRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Desktop art: right 46%, bleeding off the right edge. */}
      <PanelArt
        clipId="fees-photo-lg"
        badge={program.badge}
        className="absolute inset-y-0 right-0 hidden w-[46%] lg:block"
      />
      {/* Tablet/mobile art: below the text. */}
      <PanelArt
        clipId="fees-photo-sm"
        badge={program.badge}
        className="ml-auto aspect-[4/3] w-full max-w-[640px] lg:hidden"
      />
    </section>
  );
}

/** "Why Choose {program}?" band: photo with mint shapes on the left, checklist on the right. */
function WhyChoose({ program }: { program: ProgramFee }) {
  const { why } = copy;
  return (
    <section
      aria-labelledby={why.id}
      className="relative overflow-hidden bg-gradient-to-br from-[#E9F6F0] via-[#F4FAF7] to-[#E6F4EC]"
    >
      {/* Decorative soft circles. */}
      <span aria-hidden="true" className="absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-white/50" />
      <span aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full bg-[#D6EFE4]/50" />

      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-8 px-4 section-y sm:px-6 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
        <div className="relative mx-auto aspect-[490/390] w-full max-w-[560px] lg:mx-0">
          <span aria-hidden="true" className="absolute left-0 top-[30%] h-[56%] w-[13%] rounded-2xl bg-[#FBEEDD]" />
          <span aria-hidden="true" className="absolute right-0 top-[2%] h-[98%] w-[42%] rounded-[44px] bg-[#CFEBDD]/80" />
          <div className="absolute left-[9%] top-[2%] h-[94%] w-[75%] overflow-hidden rounded-[30px] shadow-[0_24px_60px_-26px_rgba(11,31,77,0.4)]">
            <Image
              src={why.image}
              alt={why.imageAlt}
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover object-[75%_50%]"
            />
          </div>
          <span aria-hidden="true" className="absolute bottom-[7%] right-[8%] size-[22%] rounded-full bg-[#B4E0CC]/85" />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="absolute right-[11%] top-[40%] size-6 text-fp-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 8V4h4M21 8V4h-4M3 16v4h4M21 16v4h-4" />
          </svg>
          <div className="absolute left-[40%] top-[5%] flex w-[52%] items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_18px_44px_-18px_rgba(11,31,77,0.3)] sm:gap-4 sm:px-5">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green"
            >
              <FileText className="size-5" strokeWidth={1.75} />
            </span>
            <p className={cn(feesSerif, "text-[15px] leading-snug text-fp-navy sm:text-[18px]")}>
              {why.badge.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div>
          <span aria-hidden="true" className="block h-[2px] w-8 bg-fp-accent" />
          <h2 id={why.id} className={cn(feesSerif, "mt-5 text-[34px] leading-[1.2] text-fp-navy md:text-[42px]")}>
            <span className="block">{why.titlePrefix}</span>
            <span className="block">{program.name}?</span>
          </h2>
          <p className="mt-4 max-w-[440px] text-[17px] leading-[1.7] text-[#6C7499]">{why.subtitle}</p>
          <ul className="mt-7 space-y-[18px]">
            {why.items.map((item) => (
              <li key={item} className="flex items-center gap-4 text-[17px] text-fp-navy">
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-fp-green text-white"
                >
                  <Check className="size-4" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FeesExplorer({
  initialId,
  initialUniversity,
}: {
  initialId: ProgramFeeId;
  initialUniversity?: string;
}) {
  const [activeId, setActiveId] = useState<ProgramFeeId>(initialId);
  const [universitySlug, setUniversitySlug] = useState(initialUniversity ?? "");
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = programFees.find((p) => p.id === activeId) ?? programFees[0];
  const tabId = (id: ProgramFeeId) => `${uid}-tab-${id}`;
  const panelId = `${uid}-panel`;
  const universityOptions = universitiesForProgram(activeId);
  // Fall back to the first option when the chosen university doesn't offer this program.
  const activeUniversity = universityOptions.find((o) => o.slug === universitySlug) ?? universityOptions[0];

  function syncUrl(program: ProgramFeeId, university: string | undefined) {
    const url = new URL(window.location.href);
    url.searchParams.set("program", program);
    if (university) url.searchParams.set("university", university);
    else url.searchParams.delete("university");
    window.history.replaceState(null, "", url);
  }

  function select(id: ProgramFeeId) {
    setActiveId(id);
    const options = universitiesForProgram(id);
    syncUrl(id, (options.find((o) => o.slug === universitySlug) ?? options[0])?.slug);
  }

  function selectUniversity(slug: string) {
    setUniversitySlug(slug);
    syncUrl(activeId, slug);
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
      <section
        aria-labelledby="fees-hero-title"
        className="relative overflow-hidden bg-gradient-to-b from-white to-fp-mintSoft"
      >
        {/* Faint background photo, fading out towards the text. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] bg-cover bg-center opacity-100 [mask-image:linear-gradient(to_right,transparent,black_60%)] sm:block"
          style={{ backgroundImage: "url(/images/fees/hero-bg.jpg)" }}
        />
        <div className={cn(container, "relative pb-10 pt-12 sm:pt-10 lg:pb-10 lg:pt-10")}>
          <p className={eyebrowClass}>
            <span aria-hidden="true" className="block h-[2px] w-3 bg-fp-green" />
            {copy.hero.eyebrow}
          </p>
          <h1
            id="fees-hero-title"
            className={cn(feesSerif, "mt-4 text-[32px] leading-[1.2] sm:text-[38px] xl:text-[44px]")}
          >
            <span className="block text-fp-navy">{copy.hero.titleLine1}</span>
            <span className="block">
              <span className="text-fp-navy">and </span>
              <span className="text-fp-green">{copy.hero.titleLine2.replace(/^and /, "")}</span>
            </span>
          </h1>
          <p className="mt-5 max-w-[500px] text-base leading-[1.7] text-brand-body">{copy.hero.body}</p>

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
                    "flex min-w-[250px] shrink-0 snap-start items-center gap-3 rounded-xl p-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 sm:min-w-0 sm:p-3 lg:px-5 lg:py-5",
                    selected
                      ? "border-[1.5px] border-fp-green bg-fp-mint"
                      : "border-[1.5px] border-transparent bg-white shadow-[0_8px_24px_-14px_rgba(11,31,77,0.14)] hover:bg-fp-mintSoft",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#DDF1E8] text-fp-green lg:size-[52px] [&_svg]:size-5 lg:[&_svg]:size-6"
                  >
                    <Icon strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] font-bold leading-tight text-fp-navy">
                      {program.name}
                      {program.id === "acca" && <TbaBadge />}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-fp-body">{program.meta}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "gradient-fade flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out duration-300",
                      selected ? "is-on text-white" : "bg-[#F0F3FA] text-fp-navy",
                    )}
                  >
                    <ChevronRight className="size-4" strokeWidth={2.25} />
                  </span>
                </button>
              );
            })}
          </div>

          <UniversityPicker
            options={universityOptions}
            selected={activeUniversity?.slug ?? ""}
            onSelect={selectUniversity}
          />
        </div>
      </section>

      <div role="tabpanel" id={panelId} aria-labelledby={tabId(activeId)} tabIndex={-1}>
        <div key={activeId} className="animate-in fade-in duration-300">
          <ProgramPanel program={active} />

          {activeUniversity ? (
            <UniversityFeeSection
              programName={active.name}
              options={universityOptions}
              selected={activeUniversity.slug}
              onSelect={selectUniversity}
              ctaHref={copy.help.cta.href}
              onCta={() => preselectProgram(active.id)}
            />
          ) : (
            <section aria-labelledby={copy.plans.id} className="bg-fp-mintSoft">
              <div className={cn(container, "section-y")}>
                <h2
                  id={copy.plans.id}
                  className={cn(feesSerif, "text-[30px] leading-[1.15] text-fp-navy md:text-[38px]")}
                >
                  {copy.plans.title}
                </h2>
                <p className="mt-3 max-w-[760px] text-base leading-[1.65] text-[#4A5280]">{copy.plans.subtitle}</p>

                {active.plans.length > 0 && (
                  <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {active.plans.map((plan, index) => (
                      <PlanCard key={`${plan.title}-${index}`} plan={plan} index={index} programId={active.id} />
                    ))}
                  </ul>
                )}
              </div>
            </section>
          )}

          <WhyChoose program={active} />
        </div>
      </div>
    </>
  );
}
