import Image from "next/image";
import { ArrowRight, Award, BadgeCheck, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";

import { container } from "@/components/programs/program-ui";
import { Button } from "@/components/ui/button";
import { serif, trustLogos as logos } from "@/components/universities/university-ui";
import { exemptionsLine } from "@/content/home-hero";
import { universityPageCopy } from "@/content/university-page";
import type { UniversityPage } from "@/data/universities/types";
import { cn } from "@/lib/utils";

type TrustLogo = { src: string; width: number; height: number };

const copy = universityPageCopy.hero;

// Values sampled from the university hero design (1347px-wide export, scaled to 1440px):
// photo = right 50% of the hero; a near-white veil with a convex right edge sweeps over the
// photo's left side (0% → 27% of the photo width, top → bottom), and a teal-green swoosh
// runs along the upper part of that edge, fading out by ~40% of the height.

function SwooshDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        {/* Veil: matches the hero background on the left, mint-tinted and slightly translucent at its edge. */}
        <linearGradient id="uni-hero-veil" x1="0" y1="0" x2="27" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FCFBF7" />
          <stop offset="0.6" stopColor="#F4FAF5" />
          <stop offset="1" stopColor="#E3F4EA" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="uni-hero-swoosh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E7C70" />
          <stop offset="0.5" stopColor="#12877A" stopOpacity="0.75" />
          <stop offset="1" stopColor="#7FD3B8" stopOpacity="0" />
        </linearGradient>
        {/* Tablet/mobile: the same treatment turned into a top curve. */}
        <linearGradient id="uni-hero-veil-top" x1="0" y1="0" x2="0" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FCFBF7" />
          <stop offset="0.6" stopColor="#F4FAF5" />
          <stop offset="1" stopColor="#E3F4EA" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="uni-hero-swoosh-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0E7C70" />
          <stop offset="0.5" stopColor="#12877A" stopOpacity="0.75" />
          <stop offset="1" stopColor="#7FD3B8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// "other" has no single logo, so it keeps an icon.
const trustLogos: Partial<Record<keyof UniversityPage["trustMarkers"], TrustLogo>> = {
  ugc: logos.ugc,
  naac: logos.naac,
  ranking: logos.nirf,
};

const trustIcons: Record<keyof UniversityPage["trustMarkers"], LucideIcon> = {
  ugc: Award,
  naac: BadgeCheck,
  ranking: TrendingUp,
  other: ShieldCheck,
};

/** Design's stats strip: white band, mint icon circles, bold navy text, thin dividers. */
function TrustMarkers({ markers }: { markers: UniversityPage["trustMarkers"] }) {
  const items = (Object.keys(trustIcons) as (keyof typeof trustIcons)[])
    .map((key) => ({ key, icon: trustIcons[key], logo: trustLogos[key], text: markers[key].trim() }))
    .filter((item) => item.text);

  if (!items.length) return null;

  return (
    <div className="relative bg-white">
      <ul className={cn(container, "grid gap-6 py-8 sm:grid-cols-2 sm:gap-y-7 lg:flex lg:gap-0 lg:py-7")}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <li
              key={item.key}
              className={cn(
                "flex items-center gap-4 lg:flex-1 lg:px-8 lg:first:pl-0",
                i % 2 === 1 && "sm:border-l sm:border-uni-hero-line sm:pl-8",
                i > 0 && "lg:border-l lg:border-uni-hero-line",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-14 shrink-0 items-center justify-center rounded-full",
                  item.logo ? "bg-white p-2 ring-1 ring-uni-hero-line" : "bg-uni-hero-mint text-uni-hero-icon",
                )}
              >
                {item.logo ? (
                  <Image src={item.logo.src} alt="" width={item.logo.width} height={item.logo.height} className="size-full object-contain" />
                ) : (
                  <Icon className="size-[26px]" strokeWidth={1.6} />
                )}
              </span>
              <span className="text-[17px] font-bold leading-snug text-uni-hero-stat">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function UniversityHero({ university: u }: { university: UniversityPage }) {
  const alt = universityPageCopy.a11y.heroAlt(u);
  const hasBody = Boolean(u.officialDegreeName.trim());

  return (
    <section aria-labelledby="uni-hero-title" className="relative overflow-hidden bg-uni-hero-bg">
      {u.heroImage && <SwooshDefs />}

      <div className="relative">
        {/* Desktop photo: right half, under the veil + swoosh. */}
        {u.heroImage && (
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <Image src={u.heroImage} alt={alt} fill preload sizes="50vw" className="object-cover object-center" />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <path d="M0,0 C12,25 20,60 27,100 L27,101 L0,101 Z" fill="url(#uni-hero-veil)" />
              <path d="M0,0 L7,0 C9,10 10.5,20 11.5,32 C8,21 4,9 0,0 Z" fill="url(#uni-hero-swoosh)" />
            </svg>
          </div>
        )}

        {/* Soft mint glow across the top, laid over the photo's veil so the two blend seamlessly. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_75%_at_25%_0%,rgba(226,241,228,0.8)_0%,rgba(226,241,228,0)_100%)]"
        />

        <div className={cn(container, "relative")}>
          <div className="pb-10 pt-12 md:pt-10 lg:min-h-[440px] lg:w-1/2 lg:pb-7 lg:pr-10 lg:pt-10 xl:min-h-[460px]">
            {u.logo && (
              <Image
                src={u.logo}
                alt={universityPageCopy.a11y.logoAlt(u)}
                width={320}
                height={128}
                className="mb-6 h-16 w-auto object-contain object-left md:h-20"
              />
            )}
            <p className="text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-hero-eyebrow">
              {copy.eyebrow}
            </p>
            <h1 id="uni-hero-title" className={cn(serif, "mt-4 tracking-[-0.015em]")}>
              <span className="block text-[28px] font-semibold leading-[1.25] text-uni-hero-ink sm:text-[34px] lg:text-[34px] xl:text-[40px]">
                {copy.titleLine1(u)}
              </span>
              <span className="mt-1 block text-[36px] font-bold leading-[1.12] text-uni-hero-navy sm:text-[44px] lg:text-[42px] xl:text-[50px]">
                {u.universityName}
              </span>
            </h1>
            {hasBody && (
              <p className="mt-4 max-w-[600px] text-base leading-[1.5] text-uni-hero-body xl:text-[17px]">
                {copy.body(u)}
              </p>
            )}
            <p className="mt-5">
              <span className="text-base font-bold text-uni-hero-deep [text-shadow:0_0_6px_rgba(1,87,67,0.08),0_0_16px_rgba(1,87,67,0.04)] xl:text-[17px]">
                {exemptionsLine}
              </span>
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="brand" className="w-full sm:w-auto">
                <a href={universityPageCopy.enquiryHref}>{copy.advisor}</a>
              </Button>
              {u.brochureUrl && (
                <Button asChild variant="brandOutline" className="w-full sm:w-auto">
                  <a href={u.brochureUrl} target="_blank" rel="noopener noreferrer">
                    {copy.brochure}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tablet/mobile photo: below the text, veil + swoosh as a top curve. */}
        {u.heroImage && (
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:hidden">
            <Image src={u.heroImage} alt={alt} fill preload sizes="100vw" className="object-cover object-center" />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <path d="M0,0 C25,12 60,20 100,22 L100,0 Z" fill="url(#uni-hero-veil-top)" />
              <path d="M0,0 L0,7 C10,9 20,10.5 32,11.5 C21,8 9,4 0,0 Z" fill="url(#uni-hero-swoosh-top)" />
            </svg>
          </div>
        )}
      </div>

      <TrustMarkers markers={u.trustMarkers} />
    </section>
  );
}
