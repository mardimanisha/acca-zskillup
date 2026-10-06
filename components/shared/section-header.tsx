import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

type SectionHeaderProps = {
  id: string;
  /** Omit to render the eyebrow separately (e.g. with SectionEyebrow). */
  eyebrow?: string;
  titleStart: string;
  titleHighlight: string;
  subtext: string;
  align: "left" | "center";
  className?: string;
  /** Section-specific layout overrides; spacing and viewport-fit sizes are shared by default. */
  titleClassName?: string;
  subtextClassName?: string;
  /** Puts titleHighlight on its own line. */
  stackTitle?: boolean;
  /** Breaks the title onto a new line after this leading part of titleStart. */
  titleBreakAfter?: string;
  /** Hand-drawn teal swoosh under titleHighlight. */
  highlightSwoosh?: boolean;
  /**
   * 'pill' = tinted eyebrow badge; 'line' = short teal bar above plain eyebrow text;
   * 'line-right' = plain eyebrow text followed by a thin teal line on the same row;
   * 'line-left' = short teal line followed by plain eyebrow text on the same row.
   */
  variant?: EyebrowVariant;
};

type EyebrowVariant = "pill" | "line" | "line-right" | "line-left";

const eyebrowTextClass = "text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal";

type SectionEyebrowProps = {
  eyebrow: string;
  variant?: EyebrowVariant;
  className?: string;
};

export function SectionEyebrow({ eyebrow, variant = "pill", className }: SectionEyebrowProps) {
  if (variant === "line") {
    return (
      <div className={cn("contents", className)}>
        <span aria-hidden="true" className="mb-6 block h-[3px] w-12 rounded-full bg-brand-teal" />
        <span className={eyebrowTextClass}>{eyebrow}</span>
      </div>
    );
  }
  if (variant === "line-right" || variant === "line-left") {
    return (
      <div className={cn("flex items-center", className)}>
        {variant === "line-left" && (
          <span aria-hidden="true" className="mr-3 block h-px w-8 bg-brand-teal" />
        )}
        <span className={eyebrowTextClass}>{eyebrow}</span>
        {variant === "line-right" && (
          <span aria-hidden="true" className="ml-4 block h-px w-24 bg-brand-teal/40" />
        )}
      </div>
    );
  }
  return (
    <Badge variant="eyebrow" className={className}>
      {eyebrow}
    </Badge>
  );
}

function splitTitle(titleStart: string, breakAfter?: string): [string, string | null] {
  if (!breakAfter || !titleStart.startsWith(breakAfter)) return [titleStart, null];
  return [breakAfter, titleStart.slice(breakAfter.length).trim()];
}

export function SectionHeader({
  id,
  eyebrow,
  titleStart,
  titleHighlight,
  subtext,
  align,
  className,
  titleClassName,
  subtextClassName,
  stackTitle = false,
  titleBreakAfter,
  highlightSwoosh = false,
  variant = "pill",
}: SectionHeaderProps) {
  const centered = align === "center";
  const [titleFirst, titleRest] = splitTitle(titleStart, titleBreakAfter);

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <SectionEyebrow eyebrow={eyebrow} variant={variant} />}
      <h2 id={id} className={cn(
          typography.h2,
          "xl:leading-[1.1] short:text-[2.75rem]",
          eyebrow && "mt-5 xl:mt-3 compact:mt-2",
          titleClassName,
        )}>
        {titleFirst}
        {titleRest !== null && (
          <>
            <br />
            {titleRest}
          </>
        )}{" "}
        <span
          className={cn(
            "text-brand-teal",
            stackTitle && "block",
            highlightSwoosh && "relative inline-block pb-2",
          )}
        >
          {titleHighlight}
          {highlightSwoosh && (
            <svg
              aria-hidden="true"
              viewBox="0 0 300 16"
              preserveAspectRatio="none"
              fill="none"
              className="absolute -bottom-1 left-0 h-3 w-[104%]"
            >
              <path
                d="M4 11C70 5 160 3 228 6c24 1 44 3 56 5"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M262 3c14 2 26 5 34 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </h2>
      <p
        className={cn(
          typography.sectionSubtext,
          "mt-5 max-w-3xl leading-relaxed xl:mt-3 xl:max-w-5xl compact:mt-3 short:mt-2 short:text-base",
          centered && "mx-auto",
          subtextClassName,
        )}
      >
        {subtext}
      </p>
    </div>
  );
}
