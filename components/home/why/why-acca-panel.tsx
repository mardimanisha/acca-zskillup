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

export function WhyAccaPanel() {
  const { heading, subheading, paragraph, globe, items } = homeWhyContent.acca;

  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-panel-border bg-gradient-to-br from-panel-from to-panel-to px-6 py-4 sm:px-8 sm:py-5 xl:px-7 xl:py-4 compact:py-3 short:py-3">
      {/* Decoration: soft mint circle + dotted globe with orbit lines, cropped by the top-right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 w-[340px] opacity-25 md:-right-36 md:-top-40 md:w-[420px] md:opacity-40"
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

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy md:text-4xl compact:text-3xl short:text-[1.75rem]">
            {heading.navy}{" "}
            <span className="text-brand-teal">{heading.teal}</span>
          </h3>
          <p
            className={cn(
              typography.subheading,
              "mt-2 text-lg xl:mt-1 xl:text-xl compact:mt-1 compact:text-lg short:text-base",
            )}
          >
            {subheading}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-brand-body xl:mt-1.5 xl:text-base compact:mt-1.5 compact:text-sm">
            {paragraph}
          </p>
        </div>

        {/* Mobile: 1 per row · tablet: 2 × 2 · desktop: all four in one row, joined by a timeline line */}
        <div className="relative mx-auto mt-8 max-w-4xl lg:max-w-none xl:mt-6 compact:mt-5">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-brand-teal/40 lg:block compact:top-6"
          />
          <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-teal-tint ring-4 ring-panel-from compact:h-12 compact:w-12">
                    <Icon
                      className="h-6 w-6 text-brand-teal compact:h-5 compact:w-5"
                      aria-hidden="true"
                    />
                  </span>
                  <h4
                    className={cn(
                      typography.featureTitle,
                      "mt-3 compact:mt-2 compact:text-base",
                    )}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={cn(
                      typography.featureBody,
                      "mt-1 max-w-xs leading-relaxed compact:leading-snug",
                    )}
                  >
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
