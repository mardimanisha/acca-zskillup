import { notFound } from "next/navigation";

// ACCA Only is "To Be Announced": the page is hidden until launch. The copy lives in
// content/program-acca-only.ts; restore the page body from git history when it opens.
export default function AccaOnlyPage() {
  notFound();
}
