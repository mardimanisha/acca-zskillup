import type { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { container } from "@/components/programs/program-ui";
import { serif } from "@/components/universities/university-ui";
import { universitiesLandingCopy as copy } from "@/content/universities-landing";
import type { UniversityListing } from "@/data/universities";
import { cn } from "@/lib/utils";

// Sections of /universities, matching the universities landing design:
// green accent bar + 13px eyebrow, serif two-tone headings, blob-masked photos.

function AccentBar({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("block h-[3px] w-10 rounded-full bg-ul-green", className)} />;
}

function TwoToneTitle({
  as: Tag,
  line1,
  line2,
  className,
  ...props
}: { as: "h1" | "h2"; line1: string; line2: string } & ComponentProps<"h1">) {
  return (
    <Tag className={cn(serif, "font-bold tracking-[-0.02em]", className)} {...props}>
      <span className="block text-ul-navy">{line1}</span>
      <span className="block text-ul-green">{line2}</span>
    </Tag>
  );
}

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-md px-7 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ul-green/40 focus-visible:ring-offset-2 [&_svg]:size-[17px] [&_svg]:shrink-0";

// Blob geometry in 0–1 units. The SVG layers use the whole art box; each photo clip uses
// the photo's own box (offsets below), so the cropped photo and its mask stay aligned.
const heroBlobs = {
  mint: "M0.23,0 C0.12,0.30 0.10,0.65 0.24,0.85 C0.36,1.0 0.60,1.0 1,0.965 L1,0 Z",
  lavender: "M0.486,0 C0.33,0.16 0.19,0.45 0.22,0.70 C0.245,0.90 0.36,0.985 0.48,0.96 C0.66,0.93 0.85,0.85 1,0.79 L1,0 Z",
  photo: "M0.395,0 C0.20,0.16 0.02,0.45 0.04,0.70 C0.06,0.90 0.20,0.99 0.33,0.965 C0.58,0.93 0.82,0.85 1,0.765 L1,0 Z",
};

const pathwayBlobs = {
  lavender: "M0.02,0 C-0.01,0.30 0.06,0.62 0.16,0.80 C0.21,0.90 0.27,0.96 0.32,1 L1,1 L1,0 Z",
  photo: "M0.125,0 C0.03,0.20 0.00,0.42 0.05,0.62 C0.10,0.80 0.20,0.92 0.33,1 L1,1 L1,0 Z",
};

function BlobDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <clipPath id="ul-hero-photo" clipPathUnits="objectBoundingBox">
          <path d={heroBlobs.photo} />
        </clipPath>
        <clipPath id="ul-pathway-photo" clipPathUnits="objectBoundingBox">
          <path d={pathwayBlobs.photo} />
        </clipPath>
        <linearGradient id="ul-hero-mint" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#E9F8F3" />
          <stop offset="0.5" stopColor="#DDF3EC" />
          <stop offset="1" stopColor="#D6F0E8" />
        </linearGradient>
        <linearGradient id="ul-hero-lavender" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3DDFA" />
          <stop offset="0.6" stopColor="#E6E1FA" />
          <stop offset="1" stopColor="#F1EEFC" />
        </linearGradient>
        <linearGradient id="ul-pathway-lavender" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E0D9F9" />
          <stop offset="0.1" stopColor="#EEEAFC" />
          <stop offset="0.22" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BlobLayer({ d, fill }: { d: string; fill: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      className="absolute inset-0 size-full overflow-visible"
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

function BlobPhoto({
  src,
  clip,
  sizes,
  className,
  preload = false,
}: {
  src: string;
  clip: string;
  sizes: string;
  className: string;
  preload?: boolean;
}) {
  return (
    <div className={cn("absolute", className)} style={{ clipPath: `url(#${clip})` }}>
      {/* Decorative photo: no approved alt copy. */}
      <Image src={src} alt="" fill preload={preload} sizes={sizes} className="object-cover object-center" />
    </div>
  );
}

/** Hero art: mint and lavender layers behind the blob-masked photo (design box 535×437). */
function HeroArt({ className, sizes }: { className: string; sizes: string }) {
  return (
    <div className={cn("relative", className)}>
      <BlobLayer d={heroBlobs.mint} fill="url(#ul-hero-mint)" />
      <BlobLayer d={heroBlobs.lavender} fill="url(#ul-hero-lavender)" />
      <BlobPhoto
        src={copy.hero.image}
        clip="ul-hero-photo"
        sizes={sizes}
        preload
        className="right-0 top-0 h-[97.3%] w-[75.7%]"
      />
    </div>
  );
}

/** Closing-section art: lavender edge behind the blob-masked photo (design box 435×335). */
function PathwayArt({ className, sizes }: { className: string; sizes: string }) {
  return (
    <div className={cn("relative", className)}>
      <BlobLayer d={pathwayBlobs.lavender} fill="url(#ul-pathway-lavender)" />
      <BlobPhoto src={copy.pathway.image} clip="ul-pathway-photo" sizes={sizes} className="inset-y-0 right-0 w-[92%]" />
    </div>
  );
}

export function UniversitiesHero() {
  const { hero } = copy;

  return (
    <section aria-labelledby="ul-hero-title" className="relative overflow-hidden bg-white">
      <BlobDefs />

      {/* Desktop art: right 55%, bleeding off the top-right edge. */}
      <HeroArt className="absolute inset-y-0 right-0 hidden w-[55%] lg:block" sizes="42vw" />

      <div className={cn(container, "relative lg:flex lg:min-h-[min(45vw,720px)] lg:items-center")}>
        <div className="pb-10 pt-12 sm:pt-16 lg:w-[57%] lg:pb-14 lg:pt-20">
          <AccentBar />
          <p className="mt-3.5 text-[13px] font-semibold uppercase leading-none tracking-[0.18em] text-ul-green">
            {hero.eyebrow}
          </p>
          <TwoToneTitle
            as="h1"
            id="ul-hero-title"
            line1={hero.titleLine1}
            line2={hero.titleLine2}
            className="mt-4 text-[36px] leading-[1.1] sm:text-[46px] lg:text-[50px] xl:text-[58px]"
          />
          <p className="mt-5 max-w-[460px] text-base leading-[1.6] text-ul-body xl:max-w-[500px] xl:text-[17px]">
            {hero.body}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={hero.explore.href}
              className={cn(buttonBase, "w-full bg-ul-green text-white hover:bg-ul-greenHover sm:w-auto")}
            >
              {hero.explore.label}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              href={hero.advisor.href}
              className={cn(
                buttonBase,
                "w-full border border-ul-green bg-white text-ul-navy hover:bg-ul-mint sm:w-auto",
              )}
            >
              {hero.advisor.label}
            </a>
          </div>
        </div>
      </div>

      {/* Tablet/mobile art: below the text, same blob shape. */}
      <HeroArt className="ml-auto aspect-[535/437] w-full max-w-[720px] lg:hidden" sizes="(min-width: 720px) 545px, 76vw" />
    </section>
  );
}

function UniversityCard({ university: u }: { university: UniversityListing }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_10px_30px_-14px_rgba(10,23,88,0.18)] ring-1 ring-ul-navy/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-16px_rgba(10,23,88,0.28)]">
      <div className="relative aspect-[29/9]">
        <Image
          src={u.campusImage}
          alt={copy.a11y.campusAlt(u)}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3 xl:px-6 xl:pb-6">
        <div className="flex h-[72px] items-center justify-center xl:h-20">
          <Image
            src={u.logo}
            alt={copy.a11y.logoAlt(u)}
            width={360}
            height={120}
            className="h-14 w-auto max-w-[75%] object-contain xl:h-16"
          />
        </div>
        <h2 className={cn(serif, "mt-3 text-lg font-bold leading-snug text-ul-navy xl:text-xl")}>{u.officialName}</h2>
        <p className="mt-1.5 text-[13px] text-ul-meta xl:text-sm">{copy.cards.pathway(u)}</p>
        <ul className="mt-2 flex flex-wrap items-center text-[13px] text-ul-meta xl:text-sm">
          {copy.cards.meta.map((item, i) => (
            <li key={item} className={cn(i > 0 && "ml-2.5 border-l border-ul-line pl-2.5")}>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <Link
            href={copy.cards.href(u)}
            className="inline-flex h-9 items-center gap-2 rounded-[5px] border border-ul-navy px-5 text-[13px] font-semibold text-ul-navy transition-colors hover:bg-ul-navy hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ul-navy/30 focus-visible:ring-offset-2 group-hover:bg-ul-navy group-hover:text-white xl:h-10 xl:text-sm [&_svg]:size-4"
          >
            {copy.cards.button}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </li>
  );
}

export function UniversitiesCards({ universities }: { universities: readonly UniversityListing[] }) {
  if (!universities.length) return null;

  return (
    <section id={copy.cards.id} className="scroll-mt-[76px] bg-ul-mint">
      <div className={cn(container, "py-12 lg:py-14 xl:py-16")}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[18px] xl:gap-6">
          {universities.map((u) => (
            <UniversityCard key={`${u.slug}-${u.degree}`} university={u} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function UniversitiesPathway() {
  const { pathway } = copy;

  return (
    <section aria-labelledby="ul-pathway-title" className="relative overflow-hidden bg-white">
      {/* Desktop art: right ~45%, bleeding off the right edge. */}
      <PathwayArt className="absolute inset-y-0 right-0 hidden w-[45%] lg:block" sizes="41vw" />

      <div className={cn(container, "relative lg:flex lg:min-h-[min(34.5vw,560px)] lg:items-center")}>
        <div className="pb-10 pt-12 sm:pt-16 lg:w-[56%] lg:pb-24 lg:pt-14">
          <AccentBar />
          <TwoToneTitle
            as="h2"
            id="ul-pathway-title"
            line1={pathway.titleLine1}
            line2={pathway.titleLine2}
            className="mt-5 text-[30px] leading-[1.12] sm:text-[36px] lg:text-[38px] xl:text-[44px]"
          />
          <p className="mt-4 max-w-[500px] text-base leading-[1.6] text-ul-body xl:max-w-[540px] xl:text-[17px]">
            {pathway.body}
          </p>
        </div>
      </div>

      {/* Tablet/mobile art: below the text, same blob shape. */}
      <PathwayArt className="ml-auto aspect-[435/335] w-full max-w-[640px] lg:hidden" sizes="(min-width: 640px) 590px, 92vw" />
    </section>
  );
}
