import { LearningFeatures } from "@/components/home/learning/learning-features";
import { LearningVisual } from "@/components/home/learning/learning-visual";
import { SectionHeader } from "@/components/shared/section-header";
import { homeLearningContent } from "@/content/home-learning";

const DOT_GRID_COUNT = 24; // 6 × 4

export function LearningSection() {
  const { eyebrow, heading, subtext } = homeLearningContent;

  return (
    <section
      aria-labelledby="learning-heading"
      className="relative overflow-hidden bg-gradient-to-r from-white to-[#F5FBFA] py-12 md:py-14"
    >
      {/* Decoration: large mint wave in the bottom-right corner */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 h-48 w-[70%] text-accent-teal-tint/70 md:h-64 lg:w-[55%]"
      >
        <path d="M0 300 C180 280 380 230 600 60 V300 Z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-4 sm:px-6 lg:px-10 xl:grid-cols-12 xl:items-stretch xl:gap-10 xl:px-16 min-[106.25rem]:gap-12">
        {/* Below xl: content first, visual below. xl+: side by side, with type and spacing
            tightened so the content fits the visual's height; the feature rows then stretch to fill
            it. The title scales with the column (container query) so each part stays on one line. */}
        <div className="@container mx-auto w-full max-w-2xl xl:order-2 xl:col-span-6 xl:flex xl:max-w-none xl:flex-col">
          <SectionHeader
            id="learning-heading"
            align="left"
            eyebrow={eyebrow}
            titleStart={heading.navy}
            titleHighlight={heading.teal}
            subtext={subtext}
            stackTitle
            titleClassName="xl:text-[length:min(3rem,6.4cqi)] short:text-[length:min(2.75rem,6.4cqi)]"
            subtextClassName="max-w-xl xl:max-w-2xl xl:text-base min-[106.25rem]:text-lg"
            className="mb-10 xl:mb-5 min-[106.25rem]:mb-6"
          />
          <LearningFeatures />
        </div>

        <div className="relative mx-auto w-full max-w-2xl xl:order-1 xl:col-span-6 xl:max-w-none xl:self-center">
          {/* Decoration: lavender blobs behind the visual + teal dot grid near its top */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-[6%] h-56 w-56 rounded-full bg-accent-purple-tint/80 blur-2xl" />
            <div className="absolute -right-8 top-[42%] h-64 w-48 rounded-full bg-accent-purple-tint/80 blur-2xl" />
            <div className="absolute left-[58%] top-2 grid grid-cols-6 gap-2.5">
              {Array.from({ length: DOT_GRID_COUNT }, (_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-brand-teal/25" />
              ))}
            </div>
          </div>
          <LearningVisual />
        </div>
      </div>
    </section>
  );
}
