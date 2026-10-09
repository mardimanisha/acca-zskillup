// Fee sheet per university + program for /fees. A university appears in the selector only when
// its entry exists here AND `universities` (data/universities.ts) lists it for that degree.
//
// DUMMY AMOUNTS for layout only (not approved fees). Replace every entry with the final
// university fee sheet before launch. Amounts are whole rupees; year/semester lists are optional
// (an empty list hides that breakdown) and `emi: null` hides the EMI line.

import type { ProgramFeeId } from "@/data/fees";

export type FeeInstalment = { label: string; amount: number };

export type UniversityProgramFee = {
  slug: string;
  program: Exclude<ProgramFeeId, "acca">;
  /** Total program fee (university + ACCA learning), all years. */
  total: number;
  yearly: readonly FeeInstalment[];
  semester: readonly FeeInstalment[];
  emi: { monthly: number; months: number; note: string } | null;
  /** University-specific additional fee information, shown verbatim. */
  notes: readonly string[];
};

/** Builds equal yearly/semester instalments from a total (dummy data helper). */
function split(total: number, parts: number, unit: "Year" | "Semester"): FeeInstalment[] {
  const each = Math.round(total / parts);
  return Array.from({ length: parts }, (_, i) => ({ label: `${unit} ${i + 1}`, amount: each }));
}

function entry(
  slug: string,
  program: UniversityProgramFee["program"],
  total: number,
  emiMonths: number,
  notes: readonly string[],
): UniversityProgramFee {
  return {
    slug,
    program,
    total,
    yearly: split(total, 3, "Year"),
    semester: split(total, 6, "Semester"),
    emi: { monthly: Math.round(total / emiMonths), months: emiMonths, note: "Subject to eligibility" },
    notes,
  };
}

export const universityProgramFees: readonly UniversityProgramFee[] = [
  entry("op-jindal-global-university", "bcom", 540000, 36, [
    "University examination fee is charged per semester, in addition to the program fee.",
  ]),
  entry("chitkara-university", "bcom", 480000, 36, [
    "One-time university registration fee applies at admission.",
  ]),
  entry("manipal-university", "bcom", 600000, 36, [
    "University examination fee is charged per semester, in addition to the program fee.",
    "One-time university registration fee applies at admission.",
  ]),
  entry("sage-university", "bcom", 420000, 30, []),
  entry("upes", "bba", 510000, 36, [
    "University examination fee is charged per semester, in addition to the program fee.",
  ]),
  entry("amity-university-online", "bba", 450000, 36, [
    "One-time university registration fee applies at admission.",
  ]),
  // Added with the second batch of partners; still DUMMY like the entries above.
  entry("amrita-vishwa-vidyapeetham", "bcom", 510000, 36, []),
  entry("jain-university", "bcom", 465000, 36, []),
  entry("lovely-professional-university", "bcom", 435000, 30, []),
  entry("manipal-university-jaipur", "bcom", 495000, 36, []),
  entry("sharda-university", "bba", 470000, 36, []),
  entry("nmims-university", "bba", 570000, 36, []),
  entry("chandigarh-university", "bba", 440000, 30, []),
  entry("symbiosis-online", "bba", 555000, 36, []),
];

/** Indian digit grouping, e.g. 540000 -> "5,40,000". */
export function formatRupees(amount: number): string {
  return `₹ ${amount.toLocaleString("en-IN")}`;
}
