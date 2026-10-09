"use client";

import Image from "next/image";
import { ArrowRight, Check, Info } from "lucide-react";

import { feesSerif } from "@/components/fees/fees-ui";
import { container } from "@/components/programs/program-ui";
import { universities } from "@/data/universities";
import {
  formatRupees,
  universityProgramFees,
  type UniversityProgramFee,
} from "@/data/university-fees";
import type { ProgramFeeId } from "@/data/fees";
import { cn } from "@/lib/utils";

type DegreeProgramId = Exclude<ProgramFeeId, "acca">;

const degreeByProgram: Record<DegreeProgramId, "B.Com" | "BBA"> = { bcom: "B.Com", bba: "BBA" };

export type FeeUniversity = {
  slug: string;
  name: string;
  logo: string;
  fee: UniversityProgramFee;
};

export function isDegreeProgram(id: ProgramFeeId): id is DegreeProgramId {
  return id !== "acca";
}

/** Universities offering the program that have a fee sheet, in the /universities display order. */
export function universitiesForProgram(id: ProgramFeeId): FeeUniversity[] {
  if (!isDegreeProgram(id)) return [];
  return universities
    .filter((u) => u.published && u.degree === degreeByProgram[id])
    .flatMap((u) => {
      const fee = universityProgramFees.find((f) => f.slug === u.slug && f.program === id);
      return fee ? [{ slug: u.slug, name: u.officialName, logo: u.logo, fee }] : [];
    });
}

const ring =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-fp-green/40 focus-visible:ring-offset-2";

/** Step 2 of the hero: pick the university. Options depend on the selected program. */
export function UniversityPicker({
  options,
  selected,
  onSelect,
}: {
  options: FeeUniversity[];
  selected: string;
  onSelect: (slug: string) => void;
}) {
  if (options.length === 0) return null;
  return (
    <div className="mt-8">
      <p id="fees-university-label" className="text-sm font-bold text-fp-navy">
        Select your university
        <span className="ml-2 font-normal text-fp-body">
          {options.length} {options.length === 1 ? "option" : "options"} for this program
        </span>
      </p>
      <ul
        role="radiogroup"
        aria-labelledby="fees-university-label"
        className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {options.map((u) => {
          const on = u.slug === selected;
          return (
            <li key={u.slug}>
              <button
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => onSelect(u.slug)}
                className={cn(
                  "flex h-full w-full items-center gap-3 rounded-xl border-[1.5px] p-3 text-left transition-colors",
                  ring,
                  on
                    ? "border-fp-green bg-fp-mint"
                    : "border-transparent bg-white shadow-[0_8px_24px_-14px_rgba(11,31,77,0.14)] hover:bg-fp-mintSoft",
                )}
              >
                <span className="relative size-10 shrink-0 overflow-hidden rounded-md bg-white">
                  <Image src={u.logo} alt="" fill sizes="40px" className="object-contain p-0.5" />
                </span>
                <span className="min-w-0 flex-1 text-[13px] font-bold leading-tight text-fp-navy">{u.name}</span>
                {on && (
                  <span
                    aria-hidden="true"
                    className="flex size-5 shrink-0 items-center justify-center rounded-full bg-fp-green text-white"
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Breakdown({ title, items }: { title: string; items: readonly { label: string; amount: number }[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-sm font-bold text-fp-navy">{title}</h4>
      <ul className="mt-3 divide-y divide-fp-line rounded-xl border border-fp-line bg-white">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
            <span className="text-fp-body">{item.label}</span>
            <span className="font-semibold text-fp-navy">{formatRupees(item.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Fee detail for one university + program, plus a side-by-side comparison of every option. */
export function UniversityFeeSection({
  programName,
  options,
  selected,
  onSelect,
  ctaHref,
  onCta,
}: {
  programName: string;
  options: FeeUniversity[];
  selected: string;
  onSelect: (slug: string) => void;
  ctaHref: string;
  onCta: () => void;
}) {
  const current = options.find((o) => o.slug === selected) ?? options[0];
  if (!current) return null;
  const { fee } = current;
  const lowest = Math.min(...options.map((o) => o.fee.total));

  return (
    <section aria-labelledby="fees-university-title" className="bg-fp-mintSoft">
      <div className={cn(container, "section-y")}>
        <h2 id="fees-university-title" className={cn(feesSerif, "text-[30px] leading-[1.15] text-fp-navy md:text-[38px]")}>
          Fee Structure
        </h2>
        <p className="mt-3 max-w-[760px] text-base leading-[1.65] text-[#4A5280]">
          Showing {programName} fees at <strong className="text-fp-navy">{current.name}</strong>. Fees differ by
          university, so choose another below to compare.
        </p>

        <div aria-live="polite" className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="rounded-2xl bg-white p-6 shadow-[0_14px_40px_-18px_rgba(11,31,77,0.18)] lg:p-8">
            <p className="text-sm font-semibold text-fp-body">Total program fee</p>
            <p className={cn(feesSerif, "mt-2 text-[38px] leading-none text-fp-navy sm:text-[44px]")}>
              {formatRupees(fee.total)}
            </p>
            <p className="mt-2 text-sm text-fp-body">{current.name} · {programName}</p>

            {fee.emi && (
              <div className="mt-6 rounded-xl bg-fp-mint p-4">
                <p className="text-sm font-semibold text-fp-body">Monthly EMI</p>
                <p className={cn(feesSerif, "mt-1 text-[26px] leading-none text-fp-navy")}>
                  {formatRupees(fee.emi.monthly)}
                  <span className="text-base font-semibold text-fp-body"> / month</span>
                </p>
                <p className="mt-2 text-sm text-fp-body">
                  {fee.emi.months} months{fee.emi.note ? ` · ${fee.emi.note}` : ""}
                </p>
              </div>
            )}

            <a
              href={ctaHref}
              onClick={onCta}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-tealLight to-brand-tealDark px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(11,95,87,0.7)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-teal/40 focus-visible:ring-offset-2"
            >
              Get {current.name} Fee Details
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_14px_40px_-18px_rgba(11,31,77,0.18)] lg:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Breakdown title="Year-wise fee" items={fee.yearly} />
              <Breakdown title="Semester-wise fee" items={fee.semester} />
            </div>
            {fee.notes.length > 0 && (
              <div className="mt-6 rounded-xl bg-fp-mintSoft p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-fp-navy">
                  <Info aria-hidden="true" className="size-4 text-fp-green" />
                  Additional fee information
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-fp-body">
                  {fee.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <h3 className="mt-12 text-lg font-bold text-fp-navy">Compare universities</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl bg-white shadow-[0_14px_40px_-18px_rgba(11,31,77,0.18)]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">{programName} fees by university. Select a row to view its details.</caption>
            <thead>
              <tr className="border-b border-fp-line text-fp-body">
                <th scope="col" className="px-4 py-3 font-semibold">University</th>
                <th scope="col" className="px-4 py-3 font-semibold">Total fee</th>
                <th scope="col" className="px-4 py-3 font-semibold">Per year</th>
                <th scope="col" className="px-4 py-3 font-semibold">Per semester</th>
                <th scope="col" className="px-4 py-3 font-semibold">Monthly EMI</th>
              </tr>
            </thead>
            <tbody>
              {options.map((o) => {
                const on = o.slug === current.slug;
                return (
                  <tr
                    key={o.slug}
                    className={cn("border-b border-fp-line last:border-b-0", on && "bg-fp-mint")}
                  >
                    <th scope="row" className="px-4 py-3 font-bold text-fp-navy">
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => onSelect(o.slug)}
                        className={cn("rounded text-left hover:underline", ring)}
                      >
                        {o.name}
                      </button>
                      {o.fee.total === lowest && options.length > 1 && (
                        <span className="ml-2 rounded-full bg-fp-green px-2 py-0.5 text-[11px] font-semibold text-white">
                          Lowest
                        </span>
                      )}
                    </th>
                    <td className="px-4 py-3 font-semibold text-fp-navy">{formatRupees(o.fee.total)}</td>
                    <td className="px-4 py-3 text-fp-navy">
                      {o.fee.yearly[0] ? formatRupees(o.fee.yearly[0].amount) : "—"}
                    </td>
                    <td className="px-4 py-3 text-fp-navy">
                      {o.fee.semester[0] ? formatRupees(o.fee.semester[0].amount) : "—"}
                    </td>
                    <td className="px-4 py-3 text-fp-navy">{o.fee.emi ? formatRupees(o.fee.emi.monthly) : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
