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
    <section aria-labelledby="faculty-heading" className="relative overflow-hidden bg-white py-10 md:py-14">
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
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {members.map((member) => {
              const accent = accentStyles[member.accent];
              return (
                <li key={member.name}>
                  <article className="flex h-full flex-col rounded-2xl border border-[#E6EDF2] bg-white p-3 shadow-[0_10px_30px_-18px_rgba(11,26,61,0.22)]">
                    <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl bg-[#F1F4F8]">
                      {member.image ? (
                        <Image
                          src={member.image.src}
                          alt={member.image.alt}
                          width={member.image.width}
                          height={member.image.height}
                          sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
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
                      <h3 className="text-base font-extrabold text-brand-navy">{member.name}</h3>
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
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
