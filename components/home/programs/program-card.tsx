import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Accent } from "@/lib/accent";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const accentClasses: Record<
  Accent,
  { text: string; area: string; circle: string; dot: string }
> = {
  teal: {
    text: "text-accent-teal-icon",
    area: "from-accent-teal-tint to-accent-teal-tint/60",
    circle: "bg-accent-teal-icon/10",
    dot: "bg-accent-teal-icon",
  },
  purple: {
    text: "text-accent-purple-icon",
    area: "from-accent-purple-tint to-accent-purple-tint/60",
    circle: "bg-accent-purple-icon/10",
    dot: "bg-accent-purple-icon",
  },
  orange: {
    text: "text-accent-orange-icon",
    area: "from-accent-orange-tint to-accent-orange-tint/60",
    circle: "bg-accent-orange-icon/10",
    dot: "bg-accent-orange-icon",
  },
};

// Arc in a 400×224 box: rises from the bottom-left and flattens out towards the
// centre, fading as it goes. The dot sits on the curve at ARC_DOT_T.
const ARC = { x0: 20, y0: 224, cx: 60, cy: 120, x1: 210, y1: 96 } as const;
const ARC_BOX = { width: 400, height: 224 } as const;
const ARC_DOT_T = 0.55;

function arcPoint(t: number) {
  const a = (1 - t) ** 2;
  const b = 2 * t * (1 - t);
  const c = t ** 2;
  return {
    x: a * ARC.x0 + b * ARC.cx + c * ARC.x1,
    y: a * ARC.y0 + b * ARC.cy + c * ARC.y1,
  };
}

const arcDot = arcPoint(ARC_DOT_T);

type ProgramCardProps = {
  accent: Accent;
  icon: LucideIcon;
  image: { src: string; alt: string; width: number; height: number };
  label: string;
  title: string;
  description: string;
  meta: readonly string[];
  ctaLabel: string;
  href: string;
  comingSoon?: boolean;
};

export function ProgramCard({
  accent,
  icon: Icon,
  image,
  label,
  title,
  description,
  meta,
  ctaLabel,
  href,
  comingSoon = false,
}: ProgramCardProps) {
  const colors = accentClasses[accent];
  const gradientId = `program-arc-${accent}`;

  return (
    <Card className="h-full gap-0 rounded-2xl border-[#E6F0EE] bg-white p-4 shadow-[0_10px_40px_-18px_rgba(11,26,61,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(11,26,61,0.2)]">
      {/* Image area */}
      <div
        className={cn(
          "relative h-48 overflow-hidden rounded-xl bg-gradient-to-br md:h-56 compact:h-48 short:h-40",
          colors.area,
        )}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className={cn("absolute -right-10 -top-12 h-36 w-36 rounded-full", colors.circle)}
          />
          <div
            className={cn("absolute -bottom-20 left-[30%] h-44 w-44 rounded-full", colors.circle)}
          />
          <svg
            viewBox={`0 0 ${ARC_BOX.width} ${ARC_BOX.height}`}
            preserveAspectRatio="none"
            className={cn("absolute inset-0 h-full w-full", colors.text)}
          >
            <defs>
              <linearGradient
                id={gradientId}
                gradientUnits="userSpaceOnUse"
                x1={ARC.x0}
                y1={ARC.y0}
                x2={ARC.x1}
                y2={ARC.y1}
              >
                <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M${ARC.x0} ${ARC.y0} Q${ARC.cx} ${ARC.cy} ${ARC.x1} ${ARC.y1}`}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 320px, 270px"
          className="absolute bottom-0 left-[56%] h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
        />

        {/* Arc dot and icon sit above the photo */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
            colors.dot,
          )}
          style={{
            left: `${(arcDot.x / ARC_BOX.width) * 100}%`,
            top: `${(arcDot.y / ARC_BOX.height) * 100}%`,
          }}
        />
        <span
          aria-hidden="true"
          className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Icon className="h-7 w-7 text-brand-teal" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-2 pb-1 pt-5 short:pt-4">
        <p className={cn(typography.cardLabel, colors.text)}>{label}</p>
        <h3 className={cn(typography.cardTitle, "mt-1")}>{title}</h3>
        <p className={cn(typography.body, "mt-2 leading-relaxed")}>{description}</p>
        <ul className={cn(typography.meta, "mt-4 flex flex-wrap items-center gap-x-2 gap-y-1")}>
          {meta.map((item, index) => (
            <li key={item} className="flex items-center gap-x-2">
              {index > 0 && (
                <span aria-hidden="true" className={cn("h-1 w-1 rounded-full", colors.dot)} />
              )}
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 short:pt-4">
          {comingSoon ? (
            <Button variant="brandOutlineRect" disabled>
              {ctaLabel}
            </Button>
          ) : (
            <Button asChild variant="brandOutlineRect">
              <Link href={href}>
                {ctaLabel}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
