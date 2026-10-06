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
        <div className="absolute -right-36 -top-36 h-80 w-80 rounded-full bg-accent-teal-tint/80" />
        <div className="absolute right-8 top-8 hidden grid-cols-6 gap-2.5 sm:grid">
          {Array.from({ length: DOT_GRID_COUNT }, (_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-brand-teal/25" />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Short desktop screens: intro paragraph sits beside the heading to save height */}
        <div className="short:grid short:grid-cols-[auto_minmax(0,1fr)] short:items-center short:gap-x-6 short:pr-20">
          <div>
            <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-4xl compact:text-3xl short:text-[1.75rem]">
              {heading.navy}{" "}
              <span className="text-brand-teal">{heading.teal}</span>
            </h3>
            <p className="mt-2 text-lg font-medium text-brand-body xl:mt-1 xl:text-xl compact:mt-1 compact:text-lg short:text-base">
              {subheading}
            </p>
          </div>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-body xl:mt-1.5 xl:max-w-3xl xl:text-base compact:mt-1.5 compact:text-sm short:mt-0 short:leading-snug">
            {paragraph}
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-6 xl:mt-3 xl:gap-3 compact:mt-3 compact:gap-3">
          {cards.map((card, index) => (
            <li
              key={card.number}
              className={cn("md:col-span-2", index === 3 && "md:col-start-2")}
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
