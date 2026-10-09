import Image from "next/image";

import { HeroForm } from "@/components/home/hero/hero-form";
import {
  AdvisorButton,
  BrochureButton,
  IconCircle,
  container,
} from "@/components/programs/program-ui";
import { exemptionsLine, type programInterestOptions } from "@/content/home-hero";
import type { HeroContent } from "@/content/program-types";
import { cn } from "@/lib/utils";

// Values below are sampled from the hero design image (scaled to a 72px H1).
// Homepage button size (h-12, 15px), design shape (10px radius, solid green).
const buttonSize = "h-12 rounded-[10px] px-6 text-[15px] transition-all hover:-translate-y-0.5";
const cardShadow = "shadow-[0_18px_48px_-16px_rgba(9,23,77,0.22)]";

const toneClass = {
  mint: "bg-zs-mint text-zs-green",
  peach: "bg-zs-peach text-zs-orange",
} as const;

/** Campus background + student. Uses separate layers once both assets are supplied. */
function HeroPhoto({
  image,
  className,
  sizes,
  preload = false,
}: {
  image: HeroContent["image"];
  className?: string;
  sizes: string;
  preload?: boolean;
}) {

  if (image.background && image.student) {
    return (
      <div className={cn("absolute inset-0", className)}>
        <Image src={image.background} alt="" fill preload={preload} sizes={sizes} className="object-cover object-center" />
        <div className="absolute inset-y-0 left-1/2 w-[70%] -translate-x-1/2 lg:left-[62%] lg:w-[42%]">
          <Image
            src={image.student}
            alt={image.alt}
            fill
            preload={preload}
            sizes="(min-width: 1024px) 42vw, 70vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={image.composite}
      alt={image.alt}
      fill
      preload={preload}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}

export function ProgramHero({
  content,
  brochureHref,
  defaultProgram,
}: {
  content: HeroContent;
  brochureHref: string;
  defaultProgram?: (typeof programInterestOptions)[number];
}) {
  const { eyebrow, title, subtitle, body, image, features, stats } = content;

  return (
    <section
      aria-labelledby="program-hero-title"
      // Fits one screen on desktop, like the homepage hero (77px = header height).
      className="relative overflow-hidden bg-white xl:flex xl:h-[calc(100svh-77px)] xl:min-h-[540px] xl:flex-col"
    >
      {/* Desktop photo layer: ends at the stats strip's vertical midpoint (strip padding-bottom +
          55px half-height). The composite is the design's own hero photo (1111x505 source, 30px of
          sky added on top): the student sits at 65.3% of its width and the design's stats line at
          79.6% of its height. The photo is anchored so that line lands on our stats strip's top
          edge, the student stays at ~65% of the viewport, and it grows with the hero's height
          (up to 140vw) so it still fills tall screens; anything left above fades into white. */}
      <div
        className="absolute inset-x-0 top-0 bottom-[95px] hidden overflow-hidden lg:block xl:bottom-[87px] short:bottom-[79px] tight:bottom-[71px]"
        style={{ containerType: "size" }}
      >
        <div
          className="absolute"
          style={{
            ["--w" as string]: "max(100vw, min(calc((100cqh - 55px) / 0.3617), 140vw))",
            width: "var(--w)",
            height: "calc(var(--w) * 0.4545)",
            left: "calc(56vw - var(--w) * 0.653)",
            bottom: "calc(55px - var(--w) * 0.0928)",
          }}
        >
          <HeroPhoto image={image} preload sizes="140vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-white to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white to-transparent" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_34%,rgba(255,255,255,0.8)_40%,rgba(255,255,255,0.25)_46%,rgba(255,255,255,0)_50%)]"
        />
      </div>

      <div
        className={cn(
          container,
          "relative grid gap-10 pt-10 lg:pb-[34px] lg:pt-11 xl:flex-1 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center xl:gap-8 xl:py-6 short:py-4 tight:py-3",
        )}
      >
        <div className="max-w-[600px]">
          <p className="inline-flex rounded-full bg-zs-mint px-4 py-2.5 text-xs font-normal leading-none tracking-[0.01em] text-zs-pillText xl:text-[13px]">
            {eyebrow}
          </p>
          {/* Same type scale as the homepage hero h1, including its short/tight screen sizes. */}
          <h1
            id="program-hero-title"
            className="mt-4 whitespace-nowrap text-[44px] font-extrabold leading-[1.12] tracking-[-0.02em] text-zs-navy md:text-5xl xl:text-[3.25rem] short:mt-3 short:text-[2.625rem] tight:mt-2 tight:text-[2.375rem]"
          >
            {title.start}
            <span className="text-zs-green">{title.highlight}</span>
          </h1>
          <p className="mt-3 text-lg font-bold leading-snug text-zs-navy xl:text-xl short:mt-2 short:text-lg tight:text-base">
            {subtitle}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zs-body md:text-[17px] xl:text-lg short:mt-3 short:text-base tight:mt-2 tight:text-[15px]">
            {body}
          </p>
          <p className="mt-5 short:mt-3 tight:mt-2">
            <span className="text-base font-bold text-zs-green [text-shadow:0_0_6px_rgba(3,113,76,0.55),0_0_16px_rgba(3,113,76,0.35)] short:text-[15px]">
              {exemptionsLine}
            </span>
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row short:mt-3 tight:mt-2.5">
            <AdvisorButton arrow className={cn(buttonSize, "w-full sm:w-auto")} />
            <BrochureButton
              href={brochureHref}
              variant="secondary"
              iconCircle
              className={cn(buttonSize, "w-full pl-4 pr-6 sm:w-auto")}
            />
          </div>

          {/* Four compact feature cards; they shrink with the screen height so the hero stays on one screen. */}
          <ul className="mt-6 grid max-w-[600px] gap-2.5 sm:grid-cols-2 short:mt-4 short:gap-2 tight:mt-3 tight:gap-1.5">
            {features.map((feature) => (
              <li
                key={feature.label}
                className={cn(
                  cardShadow,
                  "flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 px-3.5 py-2.5 backdrop-blur short:py-2 tight:py-1.5",
                )}
              >
                <IconCircle icon={feature.icon} className="size-10 [&_svg]:size-[18px] short:size-8 tight:hidden" />
                <span className="text-[13px] font-semibold leading-snug text-zs-navy">{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile/tablet photo, then the form (right column on desktop, over the photo's right edge). */}
        <div className="relative lg:static">
          <div className="relative -mx-4 mb-8 h-[300px] sm:-mx-6 sm:h-[380px] lg:hidden">
            <HeroPhoto image={image} sizes="100vw" className="object-[66%_25%]" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
          </div>
          <div className="w-full max-w-xl xl:max-w-none">
            <HeroForm defaultProgram={defaultProgram} />
          </div>
        </div>
      </div>

      {/* Stats strip, overlapping the bottom edge of the hero photo. */}
      <div className={cn(container, "relative z-10 mt-6 pb-10 lg:mt-0 xl:pb-8 short:pb-6 tight:pb-4")}>
        <ul
          className={cn(
            cardShadow,
            "grid grid-cols-2 gap-y-5 rounded-[14px] border border-white/70 bg-white px-2 py-5 sm:px-4 lg:grid-cols-4 lg:px-0 lg:py-[21px]",
          )}
        >
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={cn(
                "flex items-center gap-3 px-3 sm:gap-4 sm:px-5 lg:px-7",
                i % 2 === 1 && "border-l border-zs-line",
                i > 0 && "lg:border-l lg:border-zs-line",
              )}
            >
              <IconCircle
                icon={stat.icon}
                className={cn("size-12 sm:size-14 lg:size-[68px] lg:[&_svg]:size-8", toneClass[stat.tone])}
              />
              <span className="text-base font-bold text-zs-navy sm:text-lg">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
