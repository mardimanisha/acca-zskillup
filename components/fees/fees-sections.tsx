import {
  ArrowRight,
  BookOpen,
  ChartNoAxesColumn,
  ChevronRight,
  FileText,
  GraduationCap,
  Headset,
  Landmark,
  MessageSquareText,
  PhoneCall,
  Laptop,
  Users,
  type LucideIcon,
} from "lucide-react";

import { feesSerif } from "@/components/fees/fees-ui";
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
  landmark: Landmark,
};

function IconCircle({ name }: { name: string }) {
  const Icon = icons[name];
  return (
    <span
      aria-hidden="true"
      className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#DDF1E8] text-fp-green [&_svg]:size-7"
    >
      <Icon strokeWidth={1.6} />
    </span>
  );
}

export function FeesIncluded() {
  const { included } = copy;
  return (
    <section aria-labelledby={included.id} className="bg-white">
      <div className={cn(container, "section-y")}>
        <h2
          id={included.id}
          className={cn(feesSerif, "text-[30px] leading-[1.15] text-fp-navy md:text-[40px]")}
        >
          {included.title}
        </h2>
        <p className="mt-3 max-w-[820px] text-base leading-[1.65] text-[#4A5280]">{included.subtitle}</p>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-0">
          {included.items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center px-3 text-center lg:border-l lg:border-fp-line lg:first:border-l-0"
            >
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
      <div className={cn(container, "section-y")}>
        <h2 id={charges.id} className={cn(feesSerif, "text-[30px] leading-[1.15] text-fp-navy md:text-[40px]")}>
          {charges.title}
        </h2>
        <p className="mt-3 max-w-[640px] text-base leading-[1.7] text-[#4A5280]">{charges.intro}</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {charges.cards.map((card) => (
            <li
              key={card.key}
              className="flex items-start gap-5 rounded-xl border border-fp-line/70 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(11,31,77,0.14)] sm:gap-7 sm:p-8"
            >
              {card.key === "acca" ? (
                // Stand-in tile; replace with the official ACCA logo file.
                <span
                  aria-hidden="true"
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-[#E4002B] text-[13px] font-bold tracking-wide text-white"
                >
                  ACCA
                </span>
              ) : (
                <IconCircle name="landmark" />
              )}
              <div>
                <h3 className={cn(feesSerif, "text-[20px] leading-tight text-fp-navy")}>{card.title}</h3>
                <ul className="mt-4 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-[#4A5280]">
                      <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-fp-green" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                {card.note && <p className="mt-5 max-w-[300px] text-[13px] leading-snug text-[#6C7499]">{card.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const helpIcons = { message: MessageSquareText, fileText: FileText, phone: PhoneCall } satisfies Record<
  string,
  LucideIcon
>;

export function FeesHelp() {
  const { help } = copy;
  return (
    <section aria-labelledby={help.id} className="relative overflow-hidden bg-gradient-to-br from-[#EEF8F4] via-white to-[#E9F6F0]">
      {/* Decorative shapes. */}
      <span aria-hidden="true" className="absolute -right-24 -top-20 size-72 rounded-full bg-[#D6EFE4]/70" />
      <svg
        aria-hidden="true"
        viewBox="0 0 160 160"
        className="absolute -bottom-16 -left-16 hidden size-56 text-[#F0DDB8] sm:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="0" cy="160" r="60" />
        <circle cx="0" cy="160" r="85" />
        <circle cx="0" cy="160" r="110" />
        <circle cx="0" cy="160" r="135" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-10 px-4 section-y sm:px-6 lg:grid-cols-[1.2fr_auto_1fr] lg:gap-10">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase leading-none tracking-[0.04em] text-fp-green">
            <span aria-hidden="true" className="block h-[2px] w-3 bg-fp-green" />
            {help.eyebrow}
          </p>
          <h2 id={help.id} className={cn(feesSerif, "mt-4 text-[30px] leading-[1.2] text-fp-navy md:text-[38px]")}>
            {help.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[400px] text-base leading-[1.7] text-[#4A5280]">{help.body}</p>
          <a
            href={help.cta.href}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-tealLight to-brand-tealDark text-white shadow-[0_10px_24px_-10px_rgba(11,95,87,0.7)] hover:brightness-110 px-6 text-[15px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:ring-offset-2 sm:w-auto [&_svg]:size-4"
          >
            {help.cta.label}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <span aria-hidden="true" className="hidden h-[140px] w-px bg-fp-green/40 lg:block" />

        <ul className="space-y-6">
          {help.points.map((point) => {
            const Icon = helpIcons[point.icon];
            return (
              <li key={point.label} className="flex items-center gap-5 text-[15px] text-[#4A5280]">
                <Icon aria-hidden="true" className="size-8 shrink-0 text-fp-green" strokeWidth={1.5} />
                {point.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
