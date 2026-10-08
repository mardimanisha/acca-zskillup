import { ArrowLeftRight, ArrowRight, Briefcase, ChartColumnIncreasing, Check, ChevronsLeft, ChevronsRight, GraduationCap } from "lucide-react";

import {
  AdvisorButton,
  BrochureButton,
  Eyebrow,
  IconCircle,
  LinkButton,
  SectionTitle,
  cardClass,
  container,
} from "@/components/programs/program-ui";
import type {
  CareersContent,
  ComparisonContent,
  FeatureGridContent,
  FinalCtaContent,
  LevelsContent,
  SectionTone,
  WhoForContent,
} from "@/content/program-types";
import { cn } from "@/lib/utils";

// Generic program-page sections: eyebrow + H2 pattern, white / light-mint alternation,
// 16px-radius white cards with mint icon circles.

const toneClass: Record<SectionTone, string> = {
  white: "bg-white",
  mint: "bg-zs-mint",
};

type SectionProps<T> = { id: string; content: T; tone: SectionTone };

function SectionHead({
  id,
  eyebrow,
  title,
  body,
}: {
  id: string;
  eyebrow: string;
  title?: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow id={title ? undefined : id}>{eyebrow}</Eyebrow>
      {title && <SectionTitle id={id}>{title}</SectionTitle>}
      {body && (
        <p className={cn("text-base leading-relaxed text-zs-body md:text-[17px]", title ? "mt-4" : "mt-3")}>{body}</p>
      )}
    </div>
  );
}

/** Three cards of ticked lists (ACCA levels, "Beyond ACCA subjects"), with optional highlight + footnote. */
export function ProgramLevels({ id, content, tone }: SectionProps<LevelsContent>) {
  const { eyebrow, title, body, levels, highlight, footnote } = content;

  return (
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className={cn(container, "py-16 lg:py-24")}>
        <SectionHead id={id} eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <article key={level.title} className={cn(cardClass, "p-6 sm:p-7")}>
              <IconCircle icon={level.icon} />
              <h3 className="mt-5 text-xl font-extrabold text-zs-navy">{level.title}</h3>
              <ul className="mt-4 space-y-3">
                {level.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-zs-body">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-zs-green" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {highlight && (
          <p className="mt-10 rounded-2xl bg-zs-green px-6 py-5 text-center text-lg font-bold text-white sm:text-xl">
            {highlight}
          </p>
        )}
        {footnote && <p className="mt-4 text-[13px] leading-relaxed text-zs-body">{footnote}</p>}
      </div>
    </section>
  );
}

/** "ACCA-aligned learning" on the degree program pages: intro on the left, level cards on the right, exemptions banner below. */
export function ProgramAccaLearning({ id, content, tone }: SectionProps<LevelsContent>) {
  const { eyebrow, title, levels, highlight, footnote } = content;

  return (
    <section aria-labelledby={id} className={cn("relative overflow-hidden", toneClass[tone])}>
      <div className={cn(container, "py-16 lg:py-20")}>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="inline-flex rounded-full bg-[#D9EFE3] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.04em] text-zs-green">
              {eyebrow}
            </p>
            <SectionTitle id={id} className="mt-5 text-3xl md:text-[34px]">
              {title}
            </SectionTitle>
            <span aria-hidden="true" className="mt-5 block h-[3px] w-10 rounded-full bg-zs-green" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {levels.map((level) => (
              <article key={level.title} className={cn(cardClass, "relative overflow-hidden p-6")}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-10 size-32 rounded-full bg-zs-mint/80"
                />
                <div className="relative">
                  <IconCircle icon={level.icon} />
                  <h3 className="mt-5 text-xl font-extrabold text-zs-navy">{level.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {level.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-zs-body">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-zs-green" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {highlight && (
          <p className="mt-8 flex items-center justify-center gap-4 rounded-2xl bg-zs-green px-6 py-5 text-center text-base font-bold text-white sm:text-lg">
            <GraduationCap aria-hidden="true" className="size-6 shrink-0" strokeWidth={1.6} />
            <span aria-hidden="true" className="hidden h-6 w-px bg-white/30 sm:block" />
            {highlight}
          </p>
        )}
        {footnote && <p className="mt-4 text-[13px] leading-relaxed text-zs-body">{footnote}</p>}
      </div>
    </section>
  );
}

/** Four icon cards with a title and one line of body copy. */
export function ProgramFeatureGrid({ id, content, tone }: SectionProps<FeatureGridContent>) {
  const { eyebrow, title, items } = content;

  return (
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className={cn(container, "py-16 lg:py-24")}>
        <SectionHead id={id} eyebrow={eyebrow} title={title} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className={cn(cardClass, "p-6 sm:p-7")}>
              <IconCircle icon={item.icon} />
              <h3 className="mt-5 text-lg font-extrabold text-zs-navy">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-zs-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProgramComparison({ id, content, tone }: SectionProps<ComparisonContent>) {
  const { eyebrow, title, cards, cta } = content;

  return (
    <section aria-labelledby={id} className={cn("overflow-hidden", toneClass[tone])}>
      <div className={cn(container, "py-16 lg:py-20")}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow className="text-xs">{eyebrow}</Eyebrow>
            <SectionTitle id={id} className="mt-4 text-3xl md:text-[34px]">
              {title}
            </SectionTitle>
            <LinkButton href={cta.href} className="mt-10 h-12 px-6 text-sm">
              {cta.label}
              <ArrowRight aria-hidden="true" />
            </LinkButton>
          </div>

          {/* Two cards side by side with a swap badge between them; the current program is filled green. */}
          <div className="relative grid gap-5 md:grid-cols-2 md:gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                aria-current={card.current ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center rounded-2xl px-6 py-10 text-center sm:px-9 md:py-12",
                  card.current
                    ? "bg-zs-greenDark text-white shadow-[0_24px_50px_-24px_rgba(2,60,48,0.7)]"
                    : "border border-zs-line/70 bg-white text-zs-navy shadow-[0_12px_40px_-20px_rgba(11,31,77,0.18)]",
                )}
              >
                <IconCircle
                  icon={card.icon}
                  className={cn("size-16", card.current ? "bg-white/10 text-white ring-2 ring-white/70" : "bg-zs-mint text-zs-green")}
                />
                <h3 className={cn("mt-5 text-xl font-extrabold", card.current ? "text-white" : "text-zs-navy")}>
                  {card.title}
                </h3>
                <p className={cn("mt-3 text-[14px] leading-relaxed", card.current ? "text-white/90" : "text-zs-body")}>
                  {card.body}
                </p>
              </article>
            ))}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zs-navy shadow-[0_8px_24px_-6px_rgba(11,31,77,0.3)] md:flex"
            >
              <ArrowLeftRight className="size-5" strokeWidth={1.75} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Single card callout: icon + eyebrow, then a title / statement / paragraphs / bullet list. */
export function ProgramWhoFor({ id, content, tone }: SectionProps<WhoForContent>) {
  const { eyebrow, icon, title, statement, paragraphs, intro, bullets, note } = content;

  // Statement-only content renders as a dark green banner.
  if (statement && !title) {
    return (
      <section aria-labelledby={id} className={toneClass[tone]}>
        <div className={cn(container, "py-10 lg:py-14")}>
          <div className="relative overflow-hidden rounded-2xl bg-zs-greenDark px-6 py-10 sm:px-10 md:px-14 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full border border-white/5 shadow-[0_0_0_28px_rgba(255,255,255,0.02),0_0_0_56px_rgba(255,255,255,0.02)]"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <IconCircle icon={icon} className="size-20 bg-[#D9EFE3] ring-8 ring-white/10 [&_svg]:size-9" />
              <div className="max-w-4xl">
                <Eyebrow id={id} className="text-xs text-[#A8E6B8]">
                  {eyebrow}
                </Eyebrow>
                <p className="mt-3 text-xl font-bold leading-[1.5] text-white md:text-2xl">{statement}</p>
                {note && <p className="mt-5 text-sm text-white/70">{note}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className={cn(container, "py-16 lg:py-24")}>
        <div className={cn(cardClass, "flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-start md:gap-8")}>
          <IconCircle icon={icon} />
          <div className="max-w-4xl">
            <Eyebrow id={title ? undefined : id}>{eyebrow}</Eyebrow>
            {title && (
              <SectionTitle id={id} className="text-2xl md:text-[32px]">
                {title}
              </SectionTitle>
            )}
            {statement && (
              <p className="mt-3 text-xl font-bold leading-[1.5] text-zs-navy md:text-2xl">{statement}</p>
            )}
            {paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-zs-body md:text-[17px]">
                {p}
              </p>
            ))}
            {intro && <p className="mt-4 text-base font-semibold text-zs-navy md:text-[17px]">{intro}</p>}
            {bullets && (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-zs-body">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-zs-green" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {note && <p className="mt-6 text-sm text-zs-body">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramCareers({ id, content, tone }: SectionProps<CareersContent>) {
  const { eyebrow, title, intro, roles, cta } = content;

  return (
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className={cn(container, "flex flex-col items-center py-14 text-center lg:py-16")}>
        <Briefcase aria-hidden="true" className="size-6 text-zs-green" strokeWidth={1.75} />
        <Eyebrow id={title ? undefined : id} className="mt-2 text-xs">
          {eyebrow}
        </Eyebrow>
        {title && <SectionTitle id={id}>{title}</SectionTitle>}
        {intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-zs-body">{intro}</p>}
        <ul className="mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-md border border-zs-green/60 bg-white px-5 py-2 text-[13px] font-semibold text-zs-navy shadow-[0_2px_8px_-4px_rgba(15,107,62,0.35)]"
            >
              {role}
            </li>
          ))}
        </ul>
        {cta && (
          <LinkButton href={cta.href} className="mt-10">
            {cta.label}
          </LinkButton>
        )}
      </div>
    </section>
  );
}

export function ProgramFinalCta({
  id,
  content,
  brochureHref,
}: {
  id: string;
  content: FinalCtaContent;
  brochureHref: string;
}) {
  const fadeLeft = "linear-gradient(to right, #000, transparent 35%)";
  const fadeRight = "linear-gradient(to left, #000, transparent 35%)";

  return (
    <section
      aria-labelledby={id}
      className="relative overflow-hidden bg-[radial-gradient(80%_140%_at_50%_0%,#0A5A41_0%,#014331_75%)] text-white"
    >
      {/* Dotted texture on the left, diagonal streaks on the right. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1.5px, transparent 1.6px)",
          backgroundSize: "14px 14px",
          maskImage: fadeLeft,
          WebkitMaskImage: fadeLeft,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-30deg, rgba(120,230,170,0.22) 0 1px, transparent 1px 14px)",
          maskImage: fadeRight,
          WebkitMaskImage: fadeRight,
        }}
      />
      <ChevronsRight
        aria-hidden="true"
        className="absolute left-[12%] top-1/2 hidden size-9 -translate-y-1/2 text-[#3FA97F]/70 xl:block"
      />
      <ChevronsLeft
        aria-hidden="true"
        className="absolute right-[12%] top-1/2 hidden size-9 -translate-y-1/2 text-[#3FA97F]/70 xl:block"
      />

      <div className={cn(container, "relative py-16 lg:py-20")}>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-14 text-center sm:px-10">
          {/* Frame, with the top and bottom edges cut away behind the icon and the dots. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl border border-white/45 [mask-image:linear-gradient(to_right,#000_calc(50%-48px),transparent_calc(50%-48px),transparent_calc(50%+48px),#000_calc(50%+48px))] [-webkit-mask-image:linear-gradient(to_right,#000_calc(50%-48px),transparent_calc(50%-48px),transparent_calc(50%+48px),#000_calc(50%+48px))]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#CFEBDD] text-[#0B6B4A] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)]"
          >
            <ChartColumnIncreasing className="size-6" strokeWidth={1.75} />
          </span>
          <span aria-hidden="true" className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="size-1 rounded-full bg-[#7FD8AE]" />
            ))}
          </span>

          <h2 id={id} className="max-w-xl text-3xl font-bold leading-[1.25] tracking-[-0.01em] md:text-4xl">
            {content.title}
          </h2>
          {content.body && <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">{content.body}</p>}
          <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <AdvisorButton
              variant="white"
              arrow
              className="h-12 justify-between gap-6 rounded-md bg-gradient-to-b from-white to-[#E4E8E6] px-6 text-sm"
            />
            <BrochureButton
              href={brochureHref}
              variant="outlineWhite"
              className="h-12 rounded-md border-white/50 px-6 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
