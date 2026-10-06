import { WhyAccaPanel } from "@/components/home/why/why-acca-panel";
import { WhyZSkillupPanel } from "@/components/home/why/why-zskillup-panel";
import { SectionHeader } from "@/components/shared/section-header";
import { homeWhyContent } from "@/content/home-why";

export function WhySection() {
  const { eyebrow, heading, subtext } = homeWhyContent;

  return (
    // On desktop the section fills at least one screen below the sticky header, like the hero,
    // with generous vertical padding so it reads as separate from the sections around it.
    <section
      aria-labelledby="why-heading"
      className="bg-white py-16 md:py-20 xl:flex xl:min-h-[calc(100svh-77px)] xl:items-center xl:py-24 compact:py-20 short:py-16"
    >
      <div className="mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader
          id="why-heading"
          align="center"
          eyebrow={eyebrow}
          titleStart={heading.navy}
          titleHighlight={heading.teal}
          subtext={subtext}
          className="mx-auto mb-10 xl:mb-4 compact:mb-3"
        />

        {/* Panels stack vertically at every size: Why ACCA, then Why ZSkillup */}
        <div className="grid grid-cols-1 gap-6 compact:gap-4">
          <WhyAccaPanel />
          <WhyZSkillupPanel />
        </div>
      </div>
    </section>
  );
}
