import { BarChart3, FileText, GraduationCap, type LucideIcon } from "lucide-react";

import { FeeCard } from "@/components/home/fees/fee-card";
import { FeePlanCard } from "@/components/home/fees/fee-plan-card";
import { FeesIncludes } from "@/components/home/fees/fees-includes";
import { SectionHeader } from "@/components/shared/section-header";
import { homeFeesContent, type FeeProgram } from "@/content/home-fees";

const icons: Record<FeeProgram["icon"], LucideIcon> = {
  GraduationCap,
  FileText,
  BarChart3,
};

export function FeesSection() {
  const { eyebrow, heading, subtext, feeLabel, feeStatus, programs, plans, effectiveFeeLabel, includes } = homeFeesContent;

  return (
    <section aria-labelledby="fees-heading" className="relative overflow-hidden bg-white py-12 md:py-14">
      {/* Decoration: soft mint organic shape cropped at the top-right */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 -top-64 h-[560px] w-[720px] rotate-[-12deg] rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-panel-from" />
        <div className="absolute -right-16 -top-28 size-[320px] rounded-full bg-panel-to/70" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: the includes panel sits in the right column beside the header and cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10">
          <SectionHeader
            id="fees-heading"
            variant="line-right"
            align="left"
            eyebrow={eyebrow}
            titleStart={`${heading.line1} ${heading.line2Navy}`}
            titleBreakAfter={heading.line1}
            titleHighlight={heading.line2Teal}
            highlightSwoosh
            subtext={subtext}
            subtextClassName="xl:max-w-3xl"
            className="mb-4 lg:col-span-8 lg:mb-0"
          />

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-8 lg:self-end">
            {programs.map((program) => (
              <li key={program.title}>
                <FeeCard
                  icon={icons[program.icon]}
                  title={program.title}
                  description={program.description}
                  feeLabel={feeLabel}
                  fee={program.fee}
                  feeStatus={feeStatus}
                  ctaLabel={program.cta.label}
                  href={program.cta.href}
                />
              </li>
            ))}
          </ul>

          <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:self-end">
            <FeesIncludes
              title={includes.title}
              intro={includes.intro}
              items={includes.items}
              ctaLabel={includes.cta.label}
              href={includes.cta.href}
            />
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {plans.map((plan) => (
              <li key={plan.title}>
                <FeePlanCard {...plan} effectiveFeeLabel={effectiveFeeLabel} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
