import Image from "next/image";

import {
  BrochureButton,
  Eyebrow,
  IconCircle,
  SectionTitle,
  cardClass,
  container,
} from "@/components/programs/program-ui";
import type { WhyContent } from "@/content/program-types";
import { cn } from "@/lib/utils";

export function ProgramWhy({ content, brochureHref }: { content: WhyContent; brochureHref: string }) {
  const { eyebrow, titleLines, body, image, items } = content;

  return (
    <section aria-labelledby="program-why-title" className="relative overflow-hidden bg-zs-mintSoft">
      {/* Faded campus / city backdrop. */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zs-mintSoft via-zs-mintSoft/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zs-mintSoft to-transparent" />
        <div className="absolute inset-0 bg-zs-mintSoft/70 lg:hidden" />
      </div>

      <div
        className={cn(
          container,
          "relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16 lg:py-24",
        )}
      >
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle id="program-why-title">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </SectionTitle>
          {body && <p className="mt-4 max-w-xl text-base leading-relaxed text-zs-body md:text-[17px]">{body}</p>}
          <BrochureButton href={brochureHref} arrow className="mt-8" />
        </div>

        <ul className={cn(cardClass, "divide-y divide-zs-line p-2 sm:p-4")}>
          {items.map((item) => (
            <li key={item.title} className="flex gap-4 p-4 sm:gap-5">
              <IconCircle icon={item.icon} />
              <div>
                <h3 className="text-lg font-bold text-zs-navy">{item.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-zs-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
