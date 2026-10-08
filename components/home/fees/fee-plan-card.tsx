import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FeePlan } from "@/content/home-fees";

const toneBorder: Record<FeePlan["tone"], string> = {
  green: "border-[#4CAF7A]",
  pink: "border-[#E8688F]",
  yellow: "border-[#F2D64B]",
  navy: "border-[#1B2A5C]",
};

type FeePlanCardProps = FeePlan & {
  effectiveFeeLabel: string;
  /** Single brand palette (ZSkillup green + navy) instead of the per-plan tone colours. */
  brand?: boolean;
};

export function FeePlanCard({
  title,
  price,
  originalPrice,
  note,
  effectiveFee,
  effectiveFeeLabel,
  tone,
  brand = false,
}: FeePlanCardProps) {
  return (
    <div className={cn("h-full rounded-2xl border bg-white p-5", brand ? "border-zs-green/40" : toneBorder[tone])}>
      <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 flex flex-wrap items-baseline gap-x-2.5 text-[28px] font-medium leading-tight text-brand-navy">
        ₹{price}
        {originalPrice && (
          <s className="text-sm font-normal text-brand-navy/70">
            <span className="sr-only">Original price </span>₹{originalPrice}
          </s>
        )}
      </p>
      <p className="mt-1 text-sm text-brand-navy/80">{note}</p>
      <p className={cn("mt-4 flex items-center gap-2 text-sm font-medium", brand ? "text-zs-green" : "text-green-600")}>
        <BadgeCheck aria-hidden="true" className="size-5 shrink-0" />
        {effectiveFeeLabel} {effectiveFee}
      </p>
    </div>
  );
}
