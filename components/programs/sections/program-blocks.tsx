import { Check } from "lucide-react";

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
    <section aria-labelledby={id} className={toneClass[tone]}>
      <div className={cn(container, "py-16 lg:py-24")}>
        <SectionHead id={id} eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              aria-current={card.current ? "page" : undefined}
              className={cn(cardClass, "p-7 sm:p-8", card.current && "border-zs-green ring-1 ring-zs-green")}
            >
              <IconCircle icon={card.icon} />
              <h3 className="mt-5 text-2xl font-extrabold text-zs-navy">{card.title}</h3>
              <p className="mt-3 text-base leading-[1.75] text-zs-body">{card.body}</p>
            </article>
          ))}
        </div>
        <LinkButton href={cta.href} className="mt-10">
          {cta.label}
        </LinkButton>
      </div>
    </section>
  );
}

/** Single card callout: icon + eyebrow, then a title / statement / paragraphs / bullet list. */
export function ProgramWhoFor({ id, content, tone }: SectionProps<WhoForContent>) {
  const { eyebrow, icon, title, statement, paragraphs, intro, bullets, note } = content;

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
      <div className={cn(container, "py-16 lg:py-24")}>
        <SectionHead id={id} eyebrow={eyebrow} title={title} body={intro} />
        <ul className="mt-6 flex flex-wrap gap-3">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-zs-green/20 bg-zs-mint px-5 py-2.5 text-[15px] font-semibold text-zs-green"
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
  return (
    <section aria-labelledby={id} className="bg-zs-greenDark text-white">
      <div className={cn(container, "flex flex-col items-center py-16 text-center lg:py-20")}>
        <h2 id={id} className="max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[40px]">
          {content.title}
        </h2>
        {content.body && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{content.body}</p>}
        <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <AdvisorButton variant="white" arrow />
          <BrochureButton href={brochureHref} variant="outlineWhite" />
        </div>
      </div>
    </section>
  );
}
