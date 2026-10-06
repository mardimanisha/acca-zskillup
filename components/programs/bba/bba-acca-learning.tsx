import { Check } from "lucide-react";

import {
  Eyebrow,
  IconCircle,
  SectionTitle,
  cardClass,
  container,
} from "@/components/programs/program-ui";
import { bbaAccaLearning } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

export function BbaAccaLearning() {
  const { eyebrow, title, levels, highlight, footnote } = bbaAccaLearning;

  return (
    <section aria-labelledby="bba-acca-title" className="bg-zs-mint">
      <div className={cn(container, "py-16 lg:py-24")}>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle id="bba-acca-title">{title}</SectionTitle>
        </div>

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

        <p className="mt-10 rounded-2xl bg-zs-green px-6 py-5 text-center text-lg font-bold text-white sm:text-xl">
          {highlight}
        </p>
        <p className="mt-4 text-[13px] leading-relaxed text-zs-body">{footnote}</p>
      </div>
    </section>
  );
}
