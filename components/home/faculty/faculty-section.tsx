import { SectionHeader } from "@/components/shared/section-header";
import { homeFacultyContent } from "@/content/home-faculty";

import { FacultyCard } from "./faculty-card";

const REPEATS_PER_HALF = 3;

export function FacultySection() {
  const { eyebrow, heading, subtext, members } = homeFacultyContent;

  return (
    <section
      aria-labelledby="faculty-heading"
      className="relative overflow-hidden bg-white section-y"
    >
      <div className="relative mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader
          id="faculty-heading"
          align="center"
          variant="line"
          eyebrow={eyebrow}
          titleStart={heading.navy}
          titleHighlight={heading.teal}
          subtext={subtext}
          className="mx-auto"
          subtextClassName="max-w-4xl text-sm md:text-base"
        />

        {members.length > 0 && (
          // Track holds two identical halves so -50% loops seamlessly; each half repeats the members until it is wider than any viewport, otherwise a gap shows once the first half scrolls past. Copies are hidden from assistive tech.
          <div className="group mt-6 -mb-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] motion-reduce:overflow-x-auto">
            <ul
              className="flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]"
              // Longhands, not the `animation` shorthand: the shorthand would reset animation-play-state and defeat the hover pause.
              style={{
                animationName: "logo-marquee",
                animationDuration: `${members.length * REPEATS_PER_HALF * 6}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              {[0, 1].flatMap((half) =>
                Array.from({ length: REPEATS_PER_HALF }, (_, repeat) =>
                  members.map((member) => {
                    const hidden = half > 0 || repeat > 0;
                    return (
                      <li
                        key={`${half}-${repeat}-${member.name}`}
                        aria-hidden={hidden || undefined}
                        className="w-[240px] shrink-0 pr-4 sm:w-[260px]"
                      >
                        <FacultyCard member={member} hidden={hidden} />
                      </li>
                    );
                  }),
                ).flat(),
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
