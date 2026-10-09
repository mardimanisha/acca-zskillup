import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { exemptionsLine, heroContent } from "@/content/home-hero";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function HeroContent() {
  const { eyebrow, headline, subtext, ctas } = heroContent;

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-eyebrow xl:text-[13px]">
        {eyebrow.muted}{" "}
        <span className="font-bold text-brand-teal">{eyebrow.highlight}</span>
      </p>

      {/* Shared h1 scale; the xl/short/tight overrides keep the one-line second row and the hero fitting one screen */}
      <h1
        className={cn(
          typography.h1,
          "mt-4 xl:text-[3.25rem] xl:leading-[1.12] short:mt-3 short:text-[2.625rem] tight:mt-2 tight:text-[2.375rem]",
        )}
      >
        <span className="block">{headline.line1}</span>
        <span className="block xl:whitespace-nowrap">
          <span className="text-brand-teal">{headline.line2Highlight}</span>{" "}
          {headline.line2Rest}
        </span>
      </h1>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-body md:text-[17px] xl:text-lg short:mt-3 short:text-base tight:mt-2 tight:text-[15px]">
        {subtext}
      </p>

      <p className="mt-5 short:mt-3 tight:mt-2">
        <span className="text-base font-bold text-brand-tealDark [text-shadow:0_0_6px_rgba(14,124,112,0.55),0_0_16px_rgba(14,124,112,0.35)] short:text-[15px]">
          {exemptionsLine}
        </span>
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row short:mt-3 tight:mt-2.5">
        <Button asChild variant="brand" className="w-full sm:w-auto">
          <Link href={ctas.advisor.href}>{ctas.advisor.label}</Link>
        </Button>
        <Button asChild variant="brandOutline" className="w-full sm:w-auto">
          <Link href={ctas.brochure.href}>
            {ctas.brochure.label}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
