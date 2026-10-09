// Groups a program's semesters into the year cards shown on the program and university
// curriculum sections (S1+S2 = Year 1, ...), so both pages derive them the same way.

import type { CurriculumContent } from "@/content/program-types";

const SEMESTERS_PER_YEAR = 2;

export type ProgramSemester = CurriculumContent["semesters"][number];

/** "S1: Commerce & Accounting Foundations" -> "Commerce & Accounting Foundations". */
export const yearSubtitle = (title: string) => title.replace(/^S\d+:\s*/, "");

/** "Semester 01" -> "Semester 1". */
export const semesterLabel = (label: string) => label.replace(/\s0?(\d)$/, " $1");

export function curriculumYears(semesters: readonly ProgramSemester[]) {
  return Array.from({ length: Math.ceil(semesters.length / SEMESTERS_PER_YEAR) }, (_, i) => {
    const items = semesters.slice(i * SEMESTERS_PER_YEAR, (i + 1) * SEMESTERS_PER_YEAR);
    return { title: `Year ${i + 1}`, subtitle: yearSubtitle(items[0].title), semesters: items };
  });
}
