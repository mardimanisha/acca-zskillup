import Image from "next/image";

import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { homeFacultyContent } from "@/content/home-faculty";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function FacultySection() {
  const { eyebrow, heading, subtext, members } = homeFacultyContent;

  return (
    <section aria-labelledby="faculty-heading" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader
          id="faculty-heading"
          align="center"
          eyebrow={eyebrow}
          titleStart={heading.navy}
          titleHighlight={heading.teal}
          subtext={subtext}
          className="mx-auto mb-10"
        />

        {members.length > 0 && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <li key={member.name}>
                <Card className="h-full gap-0 overflow-hidden rounded-2xl border-[#E6F0EE] bg-white p-4 shadow-[0_10px_40px_-18px_rgba(11,26,61,0.18)]">
                  <div className="relative h-56 overflow-hidden rounded-xl bg-accent-teal-tint">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      width={member.image.width}
                      height={member.image.height}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="px-2 pb-1 pt-5">
                    <h3 className={typography.cardTitle}>{member.name}</h3>
                    <p className={cn(typography.cardLabel, "mt-1 text-accent-teal-icon")}>
                      {member.role}
                    </p>
                    <p className={cn(typography.body, "mt-2")}>{member.credentials}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
