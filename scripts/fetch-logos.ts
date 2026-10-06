/**
 * Downloads confirmed partner logos (content/partners.ts) into /public.
 * Only downloads from the partner's own official domain; the site never hotlinks.
 *
 *   npm run fetch-logos
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { hiringNetwork, universityPartners, type PartnerLogo } from "../content/partners";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const MIN_PNG_WIDTH = 400;

type Result = { name: string; status: "downloaded" | "skipped"; reason?: string };

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** logoUrl host must equal, or be a subdomain of, the officialSite host. */
function isOfficialHost(logo: PartnerLogo): boolean {
  const site = hostOf(logo.officialSite);
  const asset = hostOf(logo.logoUrl);
  if (!site || !asset) return false;
  return asset === site || asset.endsWith(`.${site}`);
}

/** Reads the width from a PNG IHDR chunk. */
function pngWidth(buf: Buffer): number | null {
  const signature = "89504e470d0a1a0a";
  if (buf.length < 24 || buf.subarray(0, 8).toString("hex") !== signature) return null;
  return buf.readUInt32BE(16);
}

async function fetchLogo(logo: PartnerLogo): Promise<Result> {
  const skip = (reason: string): Result => ({ name: logo.name, status: "skipped", reason });

  if (!isOfficialHost(logo)) {
    return skip(`logoUrl host "${hostOf(logo.logoUrl)}" is not the official site "${hostOf(logo.officialSite)}"`);
  }
  if (!logo.file.startsWith("/logos/")) {
    return skip(`file "${logo.file}" must live under /logos/`);
  }

  let res: Response;
  try {
    res = await fetch(logo.logoUrl, { redirect: "follow" });
  } catch (error) {
    return skip(`request failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!res.ok) return skip(`HTTP ${res.status}`);

  // Redirects must not leave the official domain either.
  if (!isOfficialHost({ ...logo, logoUrl: res.url })) {
    return skip(`redirected off the official site to "${hostOf(res.url)}"`);
  }

  const contentType = (res.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (!contentType.startsWith("image/")) return skip(`content-type "${contentType || "unknown"}" is not an image`);

  const buf = Buffer.from(await res.arrayBuffer());
  const ext = path.extname(logo.file).toLowerCase();

  if (contentType === "image/svg+xml") {
    if (ext !== ".svg") return skip(`got SVG but file "${logo.file}" is not .svg`);
  } else if (contentType === "image/png") {
    if (ext !== ".png") return skip(`got PNG but file "${logo.file}" is not .png`);
    const width = pngWidth(buf);
    if (width === null) return skip("invalid PNG data");
    if (width < MIN_PNG_WIDTH) return skip(`PNG is ${width}px wide (minimum ${MIN_PNG_WIDTH}px); use an SVG or larger PNG`);
  } else {
    return skip(`unsupported image type "${contentType}" (use SVG, or PNG ≥ ${MIN_PNG_WIDTH}px)`);
  }

  const target = path.join(PUBLIC_DIR, logo.file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, buf);
  return { name: logo.name, status: "downloaded" };
}

async function main(): Promise<void> {
  const entries = [...universityPartners, ...hiringNetwork];
  if (entries.length === 0) {
    console.log("No confirmed partners in content/partners.ts — nothing to download.");
    return;
  }

  const results: Result[] = [];
  for (const logo of entries) {
    const result = await fetchLogo(logo);
    if (result.status === "skipped") console.warn(`⚠ ${logo.name}: ${result.reason}`);
    results.push(result);
  }

  const downloaded = results.filter((r) => r.status === "downloaded");
  const skipped = results.filter((r) => r.status === "skipped");

  console.log(`\nDownloaded: ${downloaded.length}`);
  for (const r of downloaded) console.log(`  ✓ ${r.name}`);
  console.log(`Skipped: ${skipped.length}`);
  for (const r of skipped) console.log(`  ✗ ${r.name} — ${r.reason}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
