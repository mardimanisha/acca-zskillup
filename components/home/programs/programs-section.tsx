import { BarChart3, GraduationCap, Landmark, type LucideIcon } from "lucide-react";

import { ProgramCard } from "@/components/home/programs/program-card";
import { SectionHeader } from "@/components/shared/section-header";
import { homeProgramsContent, type ProgramCardIcon } from "@/content/home-programs";
import { cn } from "@/lib/utils";

const icons: Record<ProgramCardIcon, LucideIcon> = {
  graduationCap: GraduationCap,
  landmark: Landmark,
  barChart: BarChart3,
};

export function ProgramsSection() {
  const { eyebrow, heading, subtext, cards } = homeProgramsContent;

  return (
    // On desktop the section fills one screen below the sticky header, like the Hero and Why sections.
    <section
      aria-labelledby="programs-heading"
      className="relative overflow-hidden bg-[#F5FBFA] py-10 md:py-14 xl:flex xl:min-h-[calc(100svh-77px)] xl:items-center xl:py-8 compact:py-6 short:py-4"
    >
      {/* Decoration: soft mint circles cropped at the four corners */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-accent-teal-tint/60" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-teal-tint/60" />
        <div className="absolute -bottom-36 -left-36 h-80 w-80 rounded-full bg-accent-teal-tint/50" />
        <div className="absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-accent-teal-tint/60" />
      </div>

      <div className="relative mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader
          id="programs-heading"
          align="center"
          eyebrow={eyebrow}
          titleStart={heading.navy}
          titleHighlight={heading.teal}
          subtext={subtext}
          className="mx-auto mb-10 xl:mb-8 compact:mb-6 short:mb-4"
        />

        {/* Tablet: two columns, the third card centred on its own row */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li
              key={card.title}
              className={cn(
                index === cards.length - 1 &&
                  "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none",
              )}
            >
              <ProgramCard
                accent={card.accent}
                icon={icons[card.icon]}
                image={card.image}
                label={card.label}
                title={card.title}
                description={card.description}
                meta={card.meta}
                ctaLabel={card.cta.label}
                href={card.cta.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
