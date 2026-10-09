import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  ChartColumn,
  Coins,
  Database,
  FileText,
  Globe,
  Landmark,
  Laptop,
  Lightbulb,
  MessageSquareText,
  Percent,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  UserRound,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { container } from "@/components/programs/program-ui";
import { serif } from "@/components/universities/university-ui";
import { careersCopy as copy } from "@/content/careers";
import { hiringNetwork } from "@/data/hiringNetwork";
import { cn } from "@/lib/utils";

// Sections of /careers, matching the careers design: green accent bar + 13px eyebrow,
// two-tone headings, pastel and white cards with tinted icon circles, blob-masked photos.

type Tone = "purple" | "orange" | "blue" | "green" | "yellow";
type CardTone = "lavender" | "peach" | "blue" | "mint";

const toneClass: Record<Tone, string> = {
  purple: "bg-[#EEE9FC] text-[#7C5CE0]",
  orange: "bg-[#FDEEDD] text-[#F2994A]",
  blue: "bg-[#E6F0FE] text-[#3B82F6]",
  green: "bg-[#E1F5EE] text-cr-green",
  yellow: "bg-[#FFF5D1] text-[#E0A100]",
};

const cardToneClass: Record<CardTone, string> = {
  lavender: "bg-cr-lavender",
  peach: "bg-cr-peach",
  blue: "bg-cr-sky",
  mint: "bg-cr-mint",
};

/** "in" is a generic glyph, not the LinkedIn logo. */
function InGlyph({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("text-[17px] font-extrabold leading-none tracking-[-0.04em]", className)}>
      in
    </span>
  );
}

const icons = {
  users: Users,
  landmark: Landmark,
  globe: Globe,
  building: Building2,
  laptop: Laptop,
  document: FileText,
  percent: Percent,
  coins: Coins,
  database: Database,
  shield: ShieldCheck,
  chart: ChartColumn,
  growth: TrendingUp,
  gear: Settings,
  book: BookOpen,
  bulb: Lightbulb,
  briefcase: Briefcase,
  person: UserRound,
  chat: MessageSquareText,
  group: UsersRound,
  target: Target,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof icons | "in";

function IconCircle({
  icon,
  tone,
  className,
}: {
  icon: IconName;
  tone: Tone;
  className?: string;
}) {
  const Icon = icon === "in" ? null : icons[icon];
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-12 shrink-0 items-center justify-center rounded-full", toneClass[tone], className)}
    >
      {Icon ? <Icon className="size-[22px]" strokeWidth={1.75} /> : <InGlyph />}
    </span>
  );
}

function AccentBar({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("block h-[3px] w-10 rounded-full bg-cr-green", className)} />;
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <>
      <AccentBar className={className} />
      <p className="mt-3.5 text-[13px] font-semibold uppercase leading-none tracking-[0.18em] text-cr-green">
        {children}
      </p>
    </>
  );
}

/** Navy first part, green second part. `stacked` puts them on separate lines. */
function TwoToneTitle({
  as: Tag,
  line1,
  line2,
  stacked = true,
  className,
  ...props
}: { as: "h1" | "h2"; line1: string; line2: string; stacked?: boolean } & ComponentProps<"h1">) {
  return (
    <Tag className={cn(serif, "font-bold tracking-[-0.02em]", className)} {...props}>
      <span className={cn(stacked && "block", "text-cr-navy")}>{line1}</span>
      {!stacked && " "}
      <span className={cn(stacked && "block", "text-cr-green")}>{line2}</span>
    </Tag>
  );
}

const h2Size = "text-[30px] leading-[1.15] sm:text-[36px] lg:text-[40px] xl:text-[44px]";

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-md px-7 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-cr-green/40 focus-visible:ring-offset-2 [&_svg]:size-[17px] [&_svg]:shrink-0";

const whiteCard = "rounded-xl bg-white shadow-[0_12px_34px_-14px_rgba(11,31,77,0.18)] ring-1 ring-cr-navy/[0.04]";

// Blob geometry in 0–1 units; the clip paths use objectBoundingBox so the photo and its
// swoosh layer stay aligned at any size.
const ctaBlobs = {
  swoosh: "M0.02,0 C-0.01,0.30 0.06,0.62 0.16,0.80 C0.21,0.90 0.27,0.96 0.32,1 L1,1 L1,0 Z",
  photo: "M0.125,0 C0.03,0.20 0.00,0.42 0.05,0.62 C0.10,0.80 0.20,0.92 0.33,1 L1,1 L1,0 Z",
};

export function CareersBlobDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <clipPath id="cr-cta-photo" clipPathUnits="objectBoundingBox">
          <path d={ctaBlobs.photo} />
        </clipPath>
        <linearGradient id="cr-cta-swoosh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#CDEFE4" />
          <stop offset="0.12" stopColor="#E3F6F0" />
          <stop offset="0.25" stopColor="#FFFFFF" />
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
  alt,
  clip,
  sizes,
  className,
  preload = false,
}: {
  src: string;
  alt: string;
  clip: string;
  sizes: string;
  className: string;
  preload?: boolean;
}) {
  return (
    <div className={cn("absolute", className)} style={{ clipPath: `url(#${clip})` }}>
      <Image src={src} alt={alt} fill preload={preload} sizes={sizes} className="object-cover object-center" />
    </div>
  );
}

/** Hero photo: bleeds off the right edge and fades into the white page on its left. */
/** Hero photo plus the floating card; both are positioned in the photo's own proportions. */
function HeroArt({ className, sizes }: { className: string; sizes: string }) {
  return (
    <div className={cn("relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_16%)]", className)}>
      <div className="relative aspect-[1386/1224] w-full [container-type:inline-size]">
        <Image src={copy.hero.image} alt={copy.hero.imageAlt} fill preload sizes={sizes} className="object-cover" />
        <ul className="absolute left-[55%] top-[27%] flex w-[40%] flex-col gap-[2.2cqw] rounded-[clamp(12px,3cqw,24px)] bg-white/90 px-[3cqw] py-[3cqw] shadow-[0_18px_40px_-18px_rgba(11,31,77,0.3)] ring-1 ring-white/70 backdrop-blur-md">
          {copy.hero.card.map((item) => (
            <li key={item.label} className="flex items-center gap-[2.2cqw]">
              <IconCircle
                icon={item.icon}
                tone={item.tone}
                className="size-[clamp(26px,5cqw,44px)] [&_svg]:size-[clamp(13px,2.5cqw,22px)]"
              />
              <span className="whitespace-nowrap text-[clamp(10px,1.8cqw,15px)] font-semibold leading-tight text-cr-navy">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CtaArt({ className, sizes }: { className: string; sizes: string }) {
  return (
    <div className={cn("relative", className)}>
      <BlobLayer d={ctaBlobs.swoosh} fill="url(#cr-cta-swoosh)" />
      <BlobPhoto
        src={copy.cta.image}
        alt={copy.cta.imageAlt}
        clip="cr-cta-photo"
        sizes={sizes}
        className="inset-y-0 right-0 w-[92%]"
      />
    </div>
  );
}

export function CareersHero() {
  const { hero } = copy;

  return (
    <section aria-labelledby="cr-hero-title" className="relative overflow-hidden bg-white">
      {/* Desktop art: right 50%, bleeding off the top-right edge. */}
      <HeroArt className="absolute inset-y-0 right-0 hidden w-[56%] lg:block" sizes="56vw" />

      <div className={cn(container, "relative lg:flex lg:min-h-[min(42vw,680px)] lg:items-center")}>
        <div className="pb-10 pt-12 sm:pt-16 lg:w-1/2 lg:pb-14 lg:pt-20">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <TwoToneTitle
            as="h1"
            id="cr-hero-title"
            line1={hero.titleLine1}
            line2={hero.titleLine2}
            className="mt-4 text-[34px] leading-[1.12] sm:text-[44px] lg:text-[44px] xl:text-[56px]"
          />
          <p className="mt-5 max-w-[480px] text-base leading-[1.6] text-cr-body xl:max-w-[520px] xl:text-[17px]">
            {hero.body}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={hero.explore.href}
              className={cn(buttonBase, "w-full bg-cr-green text-white hover:bg-cr-greenHover sm:w-auto")}
            >
              {hero.explore.label}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              href={hero.advisor.href}
              className={cn(buttonBase, "w-full border border-cr-green bg-white text-cr-navy hover:bg-cr-mint sm:w-auto")}
            >
              {hero.advisor.label}
            </a>
          </div>
        </div>
      </div>

      {/* Tablet/mobile art: below the text, same blob shape. */}
      <HeroArt className="ml-auto aspect-[1386/1224] w-full max-w-[720px] lg:hidden" sizes="(min-width: 720px) 720px, 100vw" />
    </section>
  );
}

const industryTone: Record<Tone, { circle: string; icon: string; arrow: string }> = {
  purple: { circle: "bg-[#F6EFFE]", icon: "text-[#8E3FEA]", arrow: "border-[#E4D6FA] bg-[#FAF6FE]" },
  orange: { circle: "bg-[#FFF1E4]", icon: "text-[#F97316]", arrow: "border-[#F8DDC4] bg-[#FFF8F1]" },
  blue: { circle: "bg-[#E9F2FF]", icon: "text-[#2563EB]", arrow: "border-[#CFE1FA] bg-[#F4F8FF]" },
  green: { circle: "bg-[#E4F7EF]", icon: "text-[#12B07F]", arrow: "border-[#CDEBDD] bg-[#F3FBF7]" },
  yellow: { circle: "bg-[#FFF5D1]", icon: "text-[#E0A100]", arrow: "border-[#F3E3A8] bg-[#FFFBEA]" },
};

/** Slightly deeper circle fills so the circle reads against the pastel role cards. */
const roleCircle: Record<Tone, string> = {
  purple: "bg-[#EDE0FC]",
  orange: "bg-[#FFE8D3]",
  blue: "bg-[#DDEBFF]",
  green: "bg-[#D6F2E6]",
  yellow: "bg-[#FFEFB8]",
};

function IndustryIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = name === "in" ? Users : icons[name];
  return <Icon className={className} strokeWidth={2.25} />;
}

export function CareersIndustries() {
  const { industries } = copy;

  return (
    <section aria-labelledby="cr-industries-title" className="bg-white">
      <div className={cn(container, "py-12 lg:py-16 xl:py-20")}>
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div>
            <Eyebrow>{industries.eyebrow}</Eyebrow>
            <TwoToneTitle
              as="h2"
              id="cr-industries-title"
              line1={industries.titleLine1}
              line2={industries.titleLine2}
              className={cn("mt-4", h2Size)}
            />
          </div>

          {/* Building photos, top-right: overlapping pair. */}
          <div className="relative mt-8 h-[150px] w-full max-w-[420px] sm:h-[190px] lg:-mt-2 lg:mt-0 lg:h-[190px] lg:w-[420px] xl:h-[220px] xl:w-[500px]">
            <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-xl">
              <Image
                src={industries.images.campus.src}
                alt={industries.images.campus.alt}
                fill
                sizes="(min-width: 1280px) 310px, 260px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[88%] w-[48%] overflow-hidden rounded-xl shadow-[0_12px_30px_-12px_rgba(11,31,77,0.35)] ring-4 ring-white">
              <Image
                src={industries.images.office.src}
                alt={industries.images.office.alt}
                fill
                sizes="(min-width: 1280px) 240px, 200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards sit above the photos: the top row overlaps their lower edge. */}
        <ul className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:-mt-9 lg:gap-5">
          {industries.items.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-[0_10px_30px_-14px_rgba(11,31,77,0.16)] ring-1 ring-cr-navy/[0.03] sm:gap-5 sm:p-5 lg:min-h-[132px] lg:px-6"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-[60px] shrink-0 items-center justify-center rounded-full sm:size-[70px]",
                  industryTone[item.tone].circle,
                )}
              >
                <IndustryIcon name={item.icon} className={cn("size-8 sm:size-9", industryTone[item.tone].icon)} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-snug text-cr-navy sm:text-[17px] xl:text-lg">{item.title}</h3>
                <p className="mt-1.5 max-w-[300px] text-sm leading-[1.55] text-[#6B7299]">{item.body}</p>
              </div>
              {/* Decorative arrow, not a link. */}
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full border text-cr-navy",
                  industryTone[item.tone].arrow,
                )}
              >
                <ArrowRight className="size-4" strokeWidth={2.25} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CareersRoles() {
  const { roles } = copy;

  return (
    <section id={roles.id} aria-labelledby="cr-roles-title" className="scroll-mt-[76px] bg-white">
      <div className={cn(container, "py-12 lg:py-16 xl:py-20")}>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <Eyebrow>{roles.eyebrow}</Eyebrow>
            <TwoToneTitle
              as="h2"
              id="cr-roles-title"
              line1={roles.titleLine1}
              line2={roles.titleLine2}
              stacked={false}
              className={cn("mt-4", h2Size)}
            />
          </div>
          <p className="mt-4 max-w-[400px] text-sm leading-[1.6] text-[#6B7299] lg:mt-0 lg:pb-2">{roles.intro}</p>
        </div>

        {/* Row-aligned cards, filled column by column: items 1-3 left, items 4-6 right. */}
        <ul className="mt-8 grid gap-4 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 lg:mt-9 lg:gap-5">
          {roles.columns.flat().map((role) => (
            <li
              key={role.title}
              className={cn(
                "flex items-center gap-4 rounded-xl p-5 ring-1 ring-white/70 sm:gap-5 lg:min-h-[148px] lg:px-7",
                cardToneClass[role.card],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-[64px] shrink-0 items-center justify-center rounded-full sm:size-[72px]",
                  roleCircle[role.tone],
                )}
              >
                <IndustryIcon name={role.icon} className={cn("size-7 sm:size-8", industryTone[role.tone].icon)} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-snug text-cr-navy sm:text-[17px] xl:text-lg">{role.title}</h3>
                <ul className="mt-2.5 space-y-1 text-sm text-[#6B7299]">
                  {role.roles.map((name) => (
                    <li key={name} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-[9px] size-1 shrink-0 rounded-full bg-[#6B7299]" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative arrow, not a link. */}
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full border text-cr-navy",
                  industryTone[role.tone].arrow,
                )}
              >
                <ArrowRight className="size-4" strokeWidth={2.25} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CareersJourney() {
  const { journey } = copy;
  const last = journey.steps.length - 1;

  return (
    <section aria-labelledby="cr-journey-title" className="bg-white">
      <div className={cn(container, "py-12 lg:py-16 xl:py-20")}>
        <Eyebrow>{journey.eyebrow}</Eyebrow>
        <TwoToneTitle
          as="h2"
          id="cr-journey-title"
          line1={journey.titleLine1}
          line2={journey.titleLine2}
          stacked={false}
          className={cn("mt-4", h2Size)}
        />

        {/* Mobile: vertical list, dotted line down the left. Tablet: 3 + 2. Desktop: one row of 5. */}
        <ol className="mt-10 grid gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-5 lg:mt-12">
          {journey.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-4 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
            >
              <IconCircle icon={step.icon} tone={step.tone} className="size-16 [&_svg]:size-7" />

              {/* Vertical connector (mobile). */}
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute left-8 top-[68px] h-[calc(100%-68px+20px)] -translate-x-px border-l-2 border-dotted border-cr-green/40 sm:hidden"
                />
              )}
              {/* Horizontal connector to the next circle; none at the end of a row. */}
              {i < last && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-[calc(50%+40px)] top-8 hidden w-[calc(100%-80px+16px)] border-t-2 border-dotted border-cr-green/40",
                    i === 2 ? "lg:block" : "sm:block",
                  )}
                />
              )}

              <div className="sm:mt-4">
                <p className="text-sm font-bold text-cr-green">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-base font-bold leading-snug text-cr-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cr-body sm:mx-auto sm:max-w-[240px]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CareersReadiness() {
  const { readiness } = copy;

  return (
    <section
      aria-labelledby="cr-readiness-title"
      className="relative flex overflow-hidden bg-gradient-to-b from-cr-peach to-white lg:min-h-[calc(100svh-76px)]"
    >
      {/* Desktop: text and photo side by side; the photo is as tall as the text block and bleeds off the right edge. */}
      <div className="w-full lg:my-auto lg:flex lg:items-stretch">
        <div className={cn(container, "py-12 lg:mx-0 lg:w-[62%] lg:py-10")}>
          <Eyebrow>{readiness.eyebrow}</Eyebrow>
          <TwoToneTitle
            as="h2"
            id="cr-readiness-title"
            line1={readiness.titleLine1}
            line2={readiness.titleLine2}
            className={cn("mt-4", h2Size)}
          />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10">
            {readiness.items.map((item) => (
              <li key={item.title} className={cn(whiteCard, "flex items-start gap-4 p-5")}>
                <IconCircle icon={item.icon} tone={item.tone} />
                <div>
                  <h3 className="text-base font-bold leading-snug text-cr-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cr-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tablet/mobile photo: below the cards. */}
          <div className="relative mt-8 aspect-[4/3] overflow-hidden lg:hidden">
            <Image
              src={readiness.image}
              alt={readiness.imageAlt}
              fill
              sizes="(min-width: 640px) 90vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>

        <div className="relative hidden lg:block lg:w-[38%]">
          <Image
            src={readiness.image}
            alt={readiness.imageAlt}
            fill
            sizes="38vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

/** Logo row from data/hiringNetwork.ts. The whole section is hidden while the list is empty. */
export function CareersHiringNetwork() {
  if (!hiringNetwork.length) return null;
  const { network } = copy;

  return (
    <section aria-labelledby="cr-network-title" className="bg-white">
      <div className={cn(container, "py-12 lg:py-16")}>
        <Eyebrow>{network.eyebrow}</Eyebrow>
        <h2 id="cr-network-title" className={cn(serif, "mt-4 font-bold tracking-[-0.02em] text-cr-navy", h2Size)}>
          {network.title}
        </h2>

        <ul className="mt-8 flex items-center overflow-x-auto pb-2 [scrollbar-width:thin]">
          {hiringNetwork.map((company, i) => (
            <li
              key={company.name}
              className={cn(
                "flex h-14 min-w-[140px] flex-1 shrink-0 items-center justify-center px-6",
                i > 0 && "border-l border-cr-line",
              )}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={140}
                height={48}
                unoptimized
                className="h-9 w-auto max-w-full object-contain grayscale"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CareersCta() {
  const { cta } = copy;

  return (
    <section aria-labelledby="cr-cta-title" className="relative overflow-hidden bg-white">
      {/* Desktop art: right ~45%, bleeding off the right edge. */}
      <CtaArt className="absolute inset-y-0 right-0 hidden w-[45%] lg:block" sizes="41vw" />

      <div className={cn(container, "relative lg:flex lg:min-h-[min(30vw,480px)] lg:items-center")}>
        <div className="pb-10 pt-12 sm:pt-16 lg:w-[58%] lg:py-16">
          <TwoToneTitle
            as="h2"
            id="cr-cta-title"
            line1={cta.titleLine1}
            line2={cta.titleLine2}
            className="text-[28px] leading-[1.2] sm:text-[34px] lg:text-[36px] xl:text-[42px]"
          />
          <a
            href={cta.button.href}
            className={cn(buttonBase, "mt-7 w-full bg-cr-green text-white hover:bg-cr-greenHover sm:w-auto")}
          >
            {cta.button.label}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Tablet/mobile art: below the text, same blob shape. */}
      <CtaArt className="ml-auto aspect-[435/335] w-full max-w-[640px] lg:hidden" sizes="(min-width: 640px) 590px, 92vw" />
    </section>
  );
}
