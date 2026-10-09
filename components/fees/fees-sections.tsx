import {
  ArrowRight,
  BookOpen,
  ChartNoAxesColumn,
  FileText,
  GraduationCap,
  Headset,
  Landmark,
  Laptop,
  Receipt,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow, feesSerif } from "@/components/fees/fees-explorer";
import { container } from "@/components/programs/program-ui";
import { feesCopy as copy } from "@/content/fees";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  laptop: Laptop,
  fileText: FileText,
  chart: ChartNoAxesColumn,
  users: Users,
  headset: Headset,
  receipt: Receipt,
  landmark: Landmark,
};

function IconCircle({ name }: { name: string }) {
  const Icon = icons[name];
  return (
    <span
      aria-hidden="true"
      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-fp-mint text-fp-green [&_svg]:size-6"
    >
      <Icon strokeWidth={1.6} />
    </span>
  );
}

export function FeesIncluded() {
  const { included } = copy;
  return (
    <section aria-labelledby={included.id} className="bg-white">
      <div className={cn(container, "py-14 lg:py-20")}>
        <h2
          id={included.id}
          className={cn(feesSerif, "text-[30px] leading-[1.15] text-fp-navy md:text-[38px]")}
        >
          {included.title}
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 lg:grid-cols-7">
          {included.items.map((item) => (
            <li key={item.label} className="flex flex-col items-center text-center">
              <IconCircle name={item.icon} />
              <span className="mt-4 max-w-[150px] text-sm font-medium leading-snug text-fp-navy">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FeesCharges() {
  const { charges } = copy;
  return (
    <section aria-labelledby={charges.id} className="bg-fp-mintSoft">
      <div className={cn(container, "py-14 lg:py-20")}>
        <Eyebrow>{charges.eyebrow}</Eyebrow>
        <h2
          id={charges.id}
          className={cn(feesSerif, "mt-4 max-w-[720px] text-[30px] leading-[1.15] text-fp-navy md:text-[38px]")}
        >
          {charges.title}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {charges.cards.map((card) => (
            <li
              key={card.icon}
              className="flex items-start gap-5 rounded-xl border border-fp-line/70 bg-white p-6 shadow-[0_12px_36px_-16px_rgba(11,31,77,0.16)] lg:p-8"
            >
              <IconCircle name={card.icon} />
              <p className="text-base leading-[1.65] text-fp-body">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FeesHelp() {
  const { help } = copy;
  return (
    <section aria-labelledby={help.id} className="relative overflow-hidden bg-fp-mint">
      {/* Decorative mint circles. */}
      <span aria-hidden="true" className="absolute -right-24 -top-24 size-72 rounded-full bg-white/40" />
      <span aria-hidden="true" className="absolute -bottom-32 right-24 size-64 rounded-full bg-fp-green/[0.06]" />
      <div className={cn(container, "relative py-14 lg:py-16")}>
        <h2
          id={help.id}
          className={cn(feesSerif, "max-w-[640px] text-[28px] leading-[1.15] text-fp-navy md:text-[36px]")}
        >
          {help.title}
        </h2>
        <p className="mt-4 max-w-[560px] text-base leading-[1.65] text-fp-body">{help.body}</p>
        <a
          href={help.cta.href}
          className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-fp-green px-6 text-[15px] font-semibold text-white transition-colors hover:bg-fp-greenHover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 focus-visible:ring-offset-2 sm:w-auto [&_svg]:size-4"
        >
          {help.cta.label}
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
