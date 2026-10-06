import { BarChart3, FileText, GraduationCap, type LucideIcon } from "lucide-react";

import { FeeCard } from "@/components/home/fees/fee-card";
import { FeesIncludes } from "@/components/home/fees/fees-includes";
import { SectionHeader } from "@/components/shared/section-header";
import { homeFeesContent, type FeeProgram } from "@/content/home-fees";

const icons: Record<FeeProgram["icon"], LucideIcon> = {
  GraduationCap,
  FileText,
  BarChart3,
};

export function FeesSection() {
  const { eyebrow, heading, subtext, feeLabel, feeStatus, programs, includes } = homeFeesContent;

  return (
    <section aria-labelledby="fees-heading" className="relative overflow-hidden bg-white py-20">
      {/* Decoration: soft mint organic shape cropped at the top-right */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 -top-64 h-[560px] w-[720px] rotate-[-12deg] rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-panel-from" />
        <div className="absolute -right-16 -top-28 size-[320px] rounded-full bg-panel-to/70" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
          className="mb-10"
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-8">
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

          <div className="lg:col-span-4">
            <FeesIncludes
              title={includes.title}
              intro={includes.intro}
              items={includes.items}
              ctaLabel={includes.cta.label}
              href={includes.cta.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
