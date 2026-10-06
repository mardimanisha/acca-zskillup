import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FeeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  feeLabel: string;
  /** null = not announced yet; shows the status pill instead of a price. */
  fee: string | null;
  feeStatus: string;
  ctaLabel: string;
  href: string;
};

export function FeeCard({
  icon: Icon,
  title,
  description,
  feeLabel,
  fee,
  feeStatus,
  ctaLabel,
  href,
}: FeeCardProps) {
  return (
    <Card className="h-full gap-0 rounded-2xl border-[#E6F0EE] bg-white p-6 shadow-[0_10px_40px_-18px_rgba(11,26,61,0.18)]">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E3F4F1]"
      >
        <Icon className="h-7 w-7 text-brand-teal" />
      </span>

      <h3 className={cn(typography.cardTitle, "mt-5")}>{title}</h3>
      <p className={cn(typography.body, "mt-2")}>{description}</p>

      <Separator className="my-5 bg-[#E6F0EE]" />

      <p className={typography.fieldLabel}>{feeLabel}</p>
      <div className="mt-2 flex min-h-[48px] items-center gap-3">
        {fee === null ? (
          <span className="rounded-lg bg-[#E3F4F1] px-4 py-2 text-sm font-semibold text-brand-teal">
            {feeStatus}
          </span>
        ) : (
          <p className={typography.priceText}>₹{" "}{fee}</p>
        )}
      </div>

      <div className="mt-auto pt-6">
        <Button asChild variant="brandRect">
          <Link href={href}>
            {ctaLabel}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
