import {
  BrainCircuit,
  ClipboardCheck,
  GraduationCap,
  Headset,
  Users,
  type LucideIcon,
} from "lucide-react";

import { WhyZSkillupCard } from "@/components/home/why/why-zskillup-card";
import { homeWhyContent, type ZSkillupCardIcon } from "@/content/home-why";
import { cn } from "@/lib/utils";

const icons: Record<ZSkillupCardIcon, LucideIcon> = {
  graduationCap: GraduationCap,
  brainCircuit: BrainCircuit,
  headset: Headset,
  users: Users,
  clipboardCheck: ClipboardCheck,
};

const DOT_GRID_COUNT = 24; // 6 × 4

export function WhyZSkillupPanel() {
  const { heading, subheading, paragraph, cards } = homeWhyContent.zskillup;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-panel-border bg-gradient-to-br from-panel-from to-panel-to p-6 sm:p-8 xl:p-7 compact:p-6 short:p-5">
      {/* Decoration: quarter-circle + dot grid, top-right */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 -top-36 h-80 w-80 rounded-full bg-accent-teal-tint/80" />
        <div className="absolute right-8 top-8 hidden grid-cols-6 gap-2.5 sm:grid">
          {Array.from({ length: DOT_GRID_COUNT }, (_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-brand-teal/25" />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-4xl compact:text-3xl short:text-[1.75rem]">
            {heading.navy}{" "}
            <span className="text-brand-teal">{heading.teal}</span>
          </h3>
          <p className="mt-2 text-lg font-medium text-brand-body xl:mt-1 xl:text-xl compact:mt-1 compact:text-lg short:text-base">
            {subheading}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-brand-body xl:mt-1.5 xl:text-base compact:mt-1.5 compact:text-sm short:leading-snug">
            {paragraph}
          </p>
        </div>

        {/* Mobile: 1 per row · tablet: 3 + 2 · desktop: all five in one row */}
        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-6 lg:max-w-none lg:grid-cols-5 xl:mt-5 compact:mt-4 compact:gap-3">
          {cards.map((card, index) => (
            <li
              key={card.number}
              className={cn(
                "md:col-span-2 lg:col-span-1",
                index === 3 && "md:col-start-2 lg:col-start-auto",
              )}
            >
              <WhyZSkillupCard
                icon={icons[card.icon]}
                title={card.title}
                description={card.description}
                number={card.number}
                accent={card.accent}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
