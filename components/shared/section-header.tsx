import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
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
};

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
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Badge variant="eyebrow">{eyebrow}</Badge>
      <h2 id={id} className={cn(
          typography.h2,
          "mt-5 xl:mt-3 xl:leading-[1.1] compact:mt-2 short:text-[2.75rem]",
          titleClassName,
        )}>
        {titleStart}{" "}
        <span className={cn("text-brand-teal", stackTitle && "block")}>
          {titleHighlight}
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
