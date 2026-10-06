import Image from "next/image";
import { ArrowRight, Award, BadgeCheck, Download, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";

import { container } from "@/components/programs/program-ui";
import {
  UniEyebrow,
  UniIconCircle,
  serif,
  uniButtonClass,
} from "@/components/universities/university-ui";
import { universityPageCopy } from "@/content/university-page";
import type { UniversityPage } from "@/data/universities/types";
import { cn } from "@/lib/utils";

const copy = universityPageCopy.hero;

// Image edge + dark-green swoosh, in 0–1 (clip) and 0–100 (overlay) units of the photo box.
// Desktop: curved left edge. Tablet/mobile: the same swoosh turned into a top curve.
function HeroClipDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <clipPath id="uni-hero-clip-side" clipPathUnits="objectBoundingBox">
          <path d="M0.17,0 C0.05,0.36 0.12,0.76 0.36,1 L1,1 L1,0 Z" />
        </clipPath>
        <clipPath id="uni-hero-clip-top" clipPathUnits="objectBoundingBox">
          <path d="M0,0.16 C0.32,0.03 0.68,0.01 1,0.07 L1,1 L0,1 Z" />
        </clipPath>
        <linearGradient id="uni-swoosh-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B4A2E" />
          <stop offset="0.55" stopColor="#0E6B3F" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0E6B3F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="uni-swoosh-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0B4A2E" />
          <stop offset="0.6" stopColor="#0E6B3F" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0E6B3F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroPhoto({ src, alt, clip, sizes }: { src: string; alt: string; clip: string; sizes: string }) {
  return (
    <div className="absolute inset-0" style={{ clipPath: `url(#${clip})` }}>
      <Image src={src} alt={alt} fill preload sizes={sizes} className="object-cover object-center" />
    </div>
  );
}

const trustIcons: Record<keyof UniversityPage["trustMarkers"], LucideIcon> = {
  ugc: Award,
  naac: BadgeCheck,
  ranking: TrendingUp,
  other: ShieldCheck,
};

function TrustMarkers({ markers }: { markers: UniversityPage["trustMarkers"] }) {
  const items = (Object.keys(trustIcons) as (keyof typeof trustIcons)[])
    .map((key) => ({ key, icon: trustIcons[key], text: markers[key].trim() }))
    .filter((item) => item.text);

  if (!items.length) return null;

  return (
    <div className={cn(container, "relative pb-10 pt-8 lg:pb-12 lg:pt-10")}>
      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-y-7 lg:flex lg:gap-0">
        {items.map((item, i) => (
          <li
            key={item.key}
            className={cn(
              "flex items-center gap-4 lg:flex-1 lg:px-8 lg:first:pl-0",
              i % 2 === 1 && "sm:border-l sm:border-uni-line sm:pl-8",
              i > 0 && "lg:border-l lg:border-uni-line",
            )}
          >
            <UniIconCircle icon={item.icon} className="size-14 [&_svg]:size-6" />
            <span className="text-base font-bold leading-snug text-uni-navy">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UniversityHero({ university: u }: { university: UniversityPage }) {
  const alt = universityPageCopy.a11y.heroAlt(u);
  const hasBody = Boolean(u.officialDegreeName.trim());

  return (
    <section
      aria-labelledby="uni-hero-title"
      className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_0%_0%,#EEF6F0_0%,rgba(238,246,240,0)_60%),linear-gradient(180deg,#F8FBF8_0%,#FCFBF7_100%)]"
    >
      {u.heroImage && <HeroClipDefs />}

      <div className="relative">
        {/* Desktop photo: right ~45%, curved dark-green swoosh on its left edge. */}
        {u.heroImage && (
          <div className="absolute inset-y-0 right-0 hidden w-[47%] lg:block">
            <HeroPhoto src={u.heroImage} alt={alt} clip="uni-hero-clip-side" sizes="47vw" />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <path d="M5,0 C-7,36 2,74 27,100 L36,100 C12,76 5,36 17,0 Z" fill="url(#uni-swoosh-side)" />
              <path
                d="M17,0 C5,36 12,76 36,100"
                fill="none"
                stroke="#FFFFFF"
                strokeOpacity="0.7"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        )}

        <div className={cn(container, "relative")}>
          <div className="pb-10 pt-12 md:pt-16 lg:w-[55%] lg:pb-16 lg:pr-10 lg:pt-20 xl:pb-20 xl:pt-24">
            {u.logo && (
              <Image
                src={u.logo}
                alt={universityPageCopy.a11y.logoAlt(u)}
                width={240}
                height={96}
                className="mb-6 h-12 w-auto object-contain object-left"
              />
            )}
            <UniEyebrow>{copy.eyebrow}</UniEyebrow>
            <h1 id="uni-hero-title" className={cn(serif, "mt-5 font-semibold tracking-[-0.015em] text-uni-navy")}>
              <span className="block text-[28px] leading-[1.2] sm:text-[34px] xl:text-[40px]">
                {copy.titleLine1(u)}
              </span>
              <span className="mt-1 block text-[40px] leading-[1.08] sm:text-5xl xl:text-[60px]">
                {u.universityName}
              </span>
            </h1>
            {hasBody && (
              <p className="mt-6 max-w-[560px] text-base leading-[1.7] text-uni-body md:text-[17px]">
                {copy.body(u)}
              </p>
            )}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={universityPageCopy.enquiryHref} className={uniButtonClass("primary", "w-full sm:w-auto")}>
                {copy.advisor}
                <ArrowRight aria-hidden="true" />
              </a>
              {u.brochureUrl && (
                <a
                  href={u.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={uniButtonClass("secondary", "w-full pr-7 sm:w-auto")}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-full bg-uni-navy text-white [&_svg]:size-4"
                  >
                    <Download strokeWidth={2.5} />
                  </span>
                  {copy.brochure}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tablet/mobile photo: below the text, swoosh as a top curve. */}
        {u.heroImage && (
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:hidden">
            <HeroPhoto src={u.heroImage} alt={alt} clip="uni-hero-clip-top" sizes="100vw" />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <path d="M0,6 C32,-5 68,-6 100,0 L100,7 C68,1 32,3 0,16 Z" fill="url(#uni-swoosh-top)" />
              <path
                d="M0,16 C32,3 68,1 100,7"
                fill="none"
                stroke="#FFFFFF"
                strokeOpacity="0.7"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        )}
      </div>

      <TrustMarkers markers={u.trustMarkers} />
    </section>
  );
}
