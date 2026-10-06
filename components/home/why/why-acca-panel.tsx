import type { CSSProperties } from "react";
import Image from "next/image";
import {
  BarChart3,
  Briefcase,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";

import { homeWhyContent, type AccaItemIcon } from "@/content/home-why";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const icons: Record<AccaItemIcon, LucideIcon> = {
  globe: Globe,
  briefcase: Briefcase,
  barChart: BarChart3,
  users: Users,
};

// Timeline arc (md+): a quadratic curve bowing left, drawn in the 40px (pl-10) gutter.
// The control point sits at mid-height, so y is linear in t and each item's
// dot lands exactly on the curve at its (equal-height) row's vertical centre.
const ARC = { start: 12, control: 0, end: 36, gutter: 40 } as const;
const INDENT_SCALE = 1.6;

function arcX(t: number) {
  return (
    (1 - t) ** 2 * ARC.start + 2 * t * (1 - t) * ARC.control + t ** 2 * ARC.end
  );
}

export function WhyAccaPanel() {
  const { heading, subheading, paragraph, globe, items } = homeWhyContent.acca;
  const dotXs = items.map((_, index) => arcX((index + 0.5) / items.length));
  const minDotX = Math.min(...dotXs);

  return (
    <div className="relative overflow-hidden flex flex-col rounded-3xl border border-panel-border bg-gradient-to-br from-panel-from to-panel-to p-6 sm:p-8 xl:p-7 compact:p-6 short:p-5">
      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-4xl compact:text-3xl short:text-[1.75rem]">
          {heading.navy} <span className="text-brand-teal">{heading.teal}</span>
        </h3>
        <p className={cn(typography.subheading, "mt-2 text-lg xl:mt-1 xl:text-xl compact:mt-1 compact:text-lg short:text-base")}>{subheading}</p>
        <p className="mt-2 max-w-xl xl:mt-1.5 text-sm leading-relaxed text-brand-body xl:text-base compact:mt-1.5 compact:text-sm">
          {paragraph}
        </p>

        {/* On desktop the panel matches the taller ZSkillup panel: the timeline grows into the extra height but is capped so items stay grouped */}
        <div className="mt-6 flex flex-1 flex-col compact:mt-3">
          <div className="relative pl-8 md:pl-10 lg:h-full lg:max-h-[520px]">
            {/* Decoration: soft mint circle + dotted globe with orbit lines, cropped by the panel edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-40 top-1/2 -z-10 w-[380px] -translate-y-1/2 opacity-30 sm:w-[440px] md:-right-48 md:w-[500px] md:opacity-100 xl:-right-52 xl:w-[540px] compact:-right-60 compact:w-[480px] compact:opacity-60"
            >
              <div className="absolute left-[18%] top-[-6%] aspect-square w-[88%] rounded-full bg-accent-teal-tint/70" />
              <Image
                src={globe.src}
                alt=""
                width={globe.width}
                height={globe.height}
                loading="lazy"
                className="relative h-auto w-full"
              />
            </div>

            {/* Curved arc (md+) / straight line (mobile) */}
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${ARC.gutter} 100`}
              preserveAspectRatio="none"
              className="absolute inset-y-0 left-0 hidden h-full overflow-visible text-brand-teal/60 md:block"
              style={{ width: ARC.gutter }}
            >
              <path
                d={`M${ARC.start} 0 Q${ARC.control} 50 ${ARC.end} 100`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-3 w-px -translate-x-1/2 bg-brand-teal/50 md:hidden"
            />
            {dotXs.map((x, index) => (
              <span
                key={items[index].title}
                aria-hidden="true"
                className="absolute left-[var(--dot-x)] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal md:block"
                style={
                  {
                    "--dot-x": `${x}px`,
                    top: `${((index + 0.5) / items.length) * 100}%`,
                  } as CSSProperties
                }
              />
            ))}

            <ul className="grid md:h-full md:auto-rows-fr">
              {items.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <li
                    key={item.title}
                    className="relative flex items-center gap-4 py-3 compact:py-1.5 short:py-1 md:ml-[var(--indent)]"
                    style={
                      {
                        "--indent": `${(dotXs[index] - minDotX) * INDENT_SCALE}px`,
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-5 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal md:hidden"
                    />
                    <span className="flex h-14 w-14 shrink-0 compact:h-12 compact:w-12 short:h-10 short:w-10 items-center justify-center rounded-full bg-accent-teal-tint">
                      <Icon
                        className="h-6 w-6 text-brand-teal compact:h-5 compact:w-5"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h4 className={cn(typography.featureTitle, "compact:text-base short:text-[15px]")}>
                        {item.title}
                      </h4>
                      <p className={cn(typography.featureBody, "mt-0.5 max-w-sm leading-relaxed compact:leading-snug short:text-[13px]")}>
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
