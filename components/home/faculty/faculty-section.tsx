import { Trophy } from "lucide-react";
import Image from "next/image";

import { SectionHeader } from "@/components/shared/section-header";
import { homeFacultyContent } from "@/content/home-faculty";
import { cn } from "@/lib/utils";

const accentStyles = {
  purple: {
    bar: "bg-[#6B2FA0]",
    creds: "text-[#6B2FA0]",
    badge: "bg-[#F3EAFB] text-[#5B2A86]",
    trophy: "text-[#6B2FA0]",
  },
  orange: {
    bar: "bg-[#F59E0B]",
    creds: "text-accent-teal-icon",
    badge: "bg-[#E6F6F1] text-[#0B6B57]",
    trophy: "text-brand-teal",
  },
} as const;

function initials(name: string) {
  return name
    .replace(/^Prof\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

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
          subtext={subtext[0]}
          className="mx-auto"
          subtextClassName="max-w-4xl text-sm md:text-base"
        />
        <p className="mx-auto mt-3 mb-10 max-w-4xl text-center text-sm leading-relaxed text-brand-body md:text-base">
          {subtext[1]}
        </p>

        {members.length > 0 && (
          // Track holds the members twice so -50% loops seamlessly; the copy is hidden from assistive tech.
          <div className="group -my-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] motion-reduce:overflow-x-auto">
            <ul
              className="flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]"
              style={{
                animation: `logo-marquee ${members.length * 6}s linear infinite`,
              }}
            >
              {[false, true].flatMap((hidden) =>
                members.map((member) => {
                  const accent = accentStyles[member.accent];
                  return (
                    <li
                      key={`${hidden}-${member.name}`}
                      aria-hidden={hidden || undefined}
                      className="w-[240px] shrink-0 pr-4 sm:w-[260px]"
                    >
                      <article className="flex h-full flex-col rounded-2xl border border-[#E6EDF2] bg-white p-3 shadow-[0_10px_30px_-18px_rgba(11,26,61,0.22)]">
                        <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl bg-[#F1F4F8]">
                          {member.image ? (
                            <Image
                              src={member.image.src}
                              alt={member.image.alt}
                              width={member.image.width}
                              height={member.image.height}
                              sizes="260px"
                              // The track extends past the viewport; lazy loading would leave off-screen cards blank.
                              loading="eager"
                              className="h-full w-full object-cover object-top"
                            />
                          ) : (
                            <div
                              aria-hidden="true"
                              className="flex h-full w-full items-center justify-center text-5xl font-extrabold text-brand-navy/25"
                            >
                              {initials(member.name)}
                            </div>
                          )}
                          <span className={cn("absolute inset-x-0 bottom-0 h-1", accent.bar)} />
                        </div>

                        <div className="flex flex-1 flex-col px-1 pt-4">
                          <h3 className="text-base font-extrabold text-brand-navy">
                            {member.name}
                          </h3>
                          <p className={cn("mt-1 text-sm font-bold", accent.creds)}>
                            {member.credentials.join("  |  ")}
                          </p>
                          <p
                            className={cn(
                              "mt-3 inline-flex items-center gap-1.5 self-start rounded-md px-2.5 py-1.5 text-xs font-semibold",
                              accent.badge,
                            )}
                          >
                            <Trophy aria-hidden="true" className={cn("size-3.5", accent.trophy)} />
                            {member.achievement}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-brand-body">
                            {member.experience}
                          </p>
                        </div>
                      </article>
                    </li>
                  );
                }),
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
