import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Calculator,
  CalendarDays,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Landmark,
  Layers,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { programCtas } from "@/content/program-bba-acca";
import { cn } from "@/lib/utils";

// Shared building blocks for program pages, matching the program-page design:
// green eyebrow + navy H2, 8px-radius buttons, 16px-radius white cards.

export const programIcons = {
  graduationCap: GraduationCap,
  calendar: CalendarDays,
  fileText: FileText,
  globe: Globe,
  briefcase: Briefcase,
  landmark: Landmark,
  brain: BrainCircuit,
  users: Users,
  bookOpen: BookOpen,
  layers: Layers,
  target: Target,
  calculator: Calculator,
} satisfies Record<string, LucideIcon>;

export type ProgramIcon = keyof typeof programIcons;

// Same horizontal rhythm as the homepage sections.
export const container = "mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-10 xl:px-16";

export const cardClass =
  "rounded-2xl border border-zs-line/70 bg-white shadow-[0_12px_40px_-12px_rgba(11,31,77,0.14)]";

export function IconCircle({
  icon,
  className,
}: {
  icon: ProgramIcon;
  className?: string;
}) {
  const Icon = programIcons[icon];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-full bg-zs-mint text-zs-green",
        className,
      )}
    >
      <Icon className="size-6" strokeWidth={1.75} />
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.04em] text-zs-green",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "mt-3 text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zs-navy md:text-[40px]",
        className,
      )}
      {...props}
    />
  );
}

const buttonBase =
  "inline-flex h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-7 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2 [&_svg]:size-[18px] [&_svg]:shrink-0";

const buttonVariants = {
  primary:
    "bg-zs-green text-white shadow-[0_10px_24px_-12px_rgba(15,107,62,0.8)] hover:bg-zs-greenHover focus-visible:ring-zs-green/40",
  secondary:
    "bg-white text-zs-navy shadow-[0_8px_28px_-8px_rgba(11,31,77,0.18)] hover:bg-zs-mintSoft focus-visible:ring-zs-green/40",
  white:
    "bg-white text-zs-greenDark hover:bg-zs-mint focus-visible:ring-white/60 focus-visible:ring-offset-zs-greenDark",
  outlineWhite:
    "border-[1.5px] border-white/70 text-white hover:bg-white/10 focus-visible:ring-white/60 focus-visible:ring-offset-zs-greenDark",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export function programButtonClass(variant: ButtonVariant, className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}

type CtaProps = { variant?: ButtonVariant; className?: string; arrow?: boolean };

/** "Talk to an Advisor" — jumps to the enquiry form. */
export function AdvisorButton({ variant = "primary", className, arrow = false }: CtaProps) {
  return (
    <a href={programCtas.advisor.href} className={programButtonClass(variant, className)}>
      {programCtas.advisor.label}
      {arrow && <ArrowRight aria-hidden="true" />}
    </a>
  );
}

/** "Download Brochure" — downloads the program brochure PDF. */
export function BrochureButton({
  variant = "primary",
  className,
  arrow = false,
  iconCircle = false,
}: CtaProps & { iconCircle?: boolean }) {
  return (
    <a
      href={programCtas.brochure.href}
      download
      className={programButtonClass(variant, className)}
    >
      {iconCircle && (
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-full bg-zs-green text-white [&_svg]:size-4"
        >
          <Download strokeWidth={2.5} />
        </span>
      )}
      {programCtas.brochure.label}
      {arrow && <ArrowRight aria-hidden="true" />}
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={programButtonClass(variant, className)}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
