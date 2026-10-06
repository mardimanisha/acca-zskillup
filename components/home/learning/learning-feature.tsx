import type { LucideIcon } from "lucide-react";

import type { Accent } from "@/lib/accent";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const accentClasses: Record<Accent, { icon: string; tint: string }> = {
  teal: { icon: "text-accent-teal-icon", tint: "bg-accent-teal-tint" },
  purple: { icon: "text-accent-purple-icon", tint: "bg-accent-purple-tint" },
  orange: { icon: "text-accent-orange-icon", tint: "bg-accent-orange-tint" },
};

type LearningFeatureProps = {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
};

export function LearningFeature({
  icon: Icon,
  accent,
  title,
  description,
}: LearningFeatureProps) {
  const colors = accentClasses[accent];

  return (
    <div className="flex items-start gap-4 xl:gap-3 min-[106.25rem]:gap-4">
      <span
        aria-hidden="true"
        className={cn(
          "flex h-14 w-14 flex-shrink-0 xl:h-12 xl:w-12 min-[106.25rem]:h-14 min-[106.25rem]:w-14 items-center justify-center rounded-2xl",
          colors.tint,
        )}
      >
        <Icon className={cn("h-7 w-7 xl:h-6 xl:w-6 min-[106.25rem]:h-7 min-[106.25rem]:w-7", colors.icon)} />
      </span>
      <div>
        <h3 className={cn(typography.featureTitle, "leading-snug xl:text-base min-[106.25rem]:text-lg")}>{title}</h3>
        <p className={cn(typography.featureBody, "mt-1 leading-relaxed xl:text-[13px] xl:leading-snug min-[106.25rem]:text-sm")}>
          {description}
        </p>
      </div>
    </div>
  );
}
