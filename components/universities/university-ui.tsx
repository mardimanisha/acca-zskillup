import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// Shared building blocks for /universities/[slug], matching the university page design:
// green 13px uppercase eyebrow, serif navy headings, 8px-radius buttons, 16px-radius white cards.

/** Heading face: the homepage font (Plus Jakarta Sans via font-sans). Name kept for existing call sites. */
export const serif = "font-sans";

/** Official logos (public/logos/trust) for the bodies named in the trust strip and recognitions card. */
export const trustLogos = {
  ugc: { src: "/logos/trust/ugc.png", width: 76, height: 80 },
  naac: { src: "/logos/trust/naac.png", width: 96, height: 100 },
  nirf: { src: "/logos/trust/nirf.png", width: 154, height: 104 },
} as const;

export const uniCard =
  "rounded-2xl bg-white shadow-[0_18px_50px_-20px_rgba(11,31,77,0.22)] ring-1 ring-uni-line/60";

export const sectionPadding = "py-16 md:py-20 lg:py-24";

export const sectionTone = {
  white: "bg-white",
  cream: "bg-uni-cream",
} as const;

export type SectionTone = keyof typeof sectionTone;

export function UniEyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-green", className)}
      {...props}
    />
  );
}

/** Eyebrow used as the section's only heading (sections that have no H2 copy). */
export function UniEyebrowHeading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-uni-green", className)}
      {...props}
    />
  );
}

export function UniIconCircle({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-uni-mint text-uni-green [&_svg]:size-[22px]",
        className,
      )}
    >
      <Icon strokeWidth={1.75} />
    </span>
  );
}

const buttonBase =
  "inline-flex h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-7 text-[15px] font-bold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 [&_svg]:shrink-0";

const buttonVariants = {
  primary:
    "bg-uni-green text-white shadow-[0_12px_26px_-12px_rgba(14,107,63,0.85)] hover:bg-uni-greenHover focus-visible:ring-uni-green/40 [&_svg]:size-[18px]",
  secondary:
    "bg-white pl-3 text-uni-navy shadow-[0_10px_30px_-10px_rgba(11,31,77,0.2)] hover:bg-uni-cream focus-visible:ring-uni-green/40",
} as const;

export function uniButtonClass(variant: keyof typeof buttonVariants, className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}
