import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FeesIncludesProps = {
  title: string;
  intro: string;
  items: readonly string[];
  ctaLabel: string;
  href: string;
};

export function FeesIncludes({ title, intro, items, ctaLabel, href }: FeesIncludesProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E3F1ED] bg-[#F1FAF7] p-7">
      <h3 className={typography.cardTitle}>{title}</h3>
      <p className={cn(typography.featureBody, "mt-3")}>{intro}</p>

      {/* Below xl the panel spans full width, so the checklist splits into two columns */}
      <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 xl:grid-cols-1">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CircleCheck
              aria-hidden="true"
              className="h-5 w-5 shrink-0 fill-brand-teal text-white"
            />
            <span className={typography.body}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Button asChild variant="brandOutlineRect">
          <Link href={href}>
            {ctaLabel}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
