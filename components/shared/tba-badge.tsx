import { toBeAnnounced } from "@/content/site";
import { cn } from "@/lib/utils";

/** Small pill marking a program (ACCA Only) that is not yet open. */
export function TbaBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-accent-orange-tint px-2 py-0.5 text-[11px] font-semibold leading-none text-accent-orange-icon",
        className,
      )}
    >
      {toBeAnnounced}
    </span>
  );
}
