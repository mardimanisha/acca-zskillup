import {
  Eyebrow,
  IconCircle,
  LinkButton,
  SectionTitle,
  cardClass,
  container,
} from "@/components/programs/program-ui";
import { bbaComparison, programCtas } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

export function BbaComparison() {
  const { eyebrow, title, cards } = bbaComparison;

  return (
    <section aria-labelledby="bba-compare-title" className="bg-white">
      <div className={cn(container, "py-16 lg:py-24")}>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle id="bba-compare-title">{title}</SectionTitle>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              aria-current={card.current ? "page" : undefined}
              className={cn(
                cardClass,
                "p-7 sm:p-8",
                card.current && "border-zs-green ring-1 ring-zs-green",
              )}
            >
              <IconCircle icon={card.icon} />
              <h3 className="mt-5 text-2xl font-extrabold text-zs-navy">{card.title}</h3>
              <p className="mt-3 text-base leading-[1.75] text-zs-body">{card.body}</p>
            </article>
          ))}
        </div>

        <LinkButton href={programCtas.comparePrograms.href} className="mt-10">
          {programCtas.comparePrograms.label}
        </LinkButton>
      </div>
    </section>
  );
}
