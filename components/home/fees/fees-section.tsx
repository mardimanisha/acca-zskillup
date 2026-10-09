import { FeesExplorer } from "@/components/home/fees/fees-explorer";
import { FeesIncludes } from "@/components/home/fees/fees-includes";
import { SectionHeader } from "@/components/shared/section-header";
import { homeFeesContent } from "@/content/home-fees";

export function FeesSection() {
  const { eyebrow, heading, subtext, programs, plans, effectiveFeeLabel, includes } = homeFeesContent;

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

          <div className="lg:col-span-12">
            <FeesExplorer programs={programs} plans={plans} effectiveFeeLabel={effectiveFeeLabel} />
          </div>

          <div className="lg:col-span-12">
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
