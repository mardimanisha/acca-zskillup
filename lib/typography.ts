// Shared type scale for all homepage sections. Compose with `cn()` when a
// section needs layout-only overrides (margins, viewport-fit tweaks).
export const typography = {
  eyebrow:
    "inline-block rounded-md bg-accent-teal-tint px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal",
  h1: "text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-brand-navy",
  h2: "text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-brand-navy",
  sectionSubtext: "text-lg text-brand-body",
  subheading: "text-xl font-medium text-brand-body",
  h3Band: "text-2xl xl:text-3xl font-extrabold",
  cardTitle: "text-xl xl:text-2xl font-extrabold text-brand-navy",
  cardLabel: "text-xs font-semibold uppercase tracking-[0.2em]",
  featureTitle: "text-lg font-bold text-brand-navy",
  featureBody: "text-sm text-brand-body",
  facultyName: "text-xl font-extrabold text-brand-navy",
  body: "text-base text-brand-body",
  meta: "text-sm font-medium text-brand-body",
  priceText: "text-3xl xl:text-4xl font-extrabold text-brand-navy",
  fieldLabel: "text-sm font-semibold text-brand-navy",
} as const;
