export type PartnerLogo = {
  /** Official name, used as alt text. */
  name: string;
  /** Official website, e.g. https://www.example.edu */
  officialSite: string;
  /** Direct URL of the official logo file on the official site / press kit. */
  logoUrl: string;
  /** Local path written by `npm run fetch-logos`, e.g. /logos/universities/example.svg */
  file: string;
};

// Add an entry only after the partnership / logo-usage permission is confirmed in writing.
export const universityPartners: PartnerLogo[] = [];

// Add an entry only after the partnership / logo-usage permission is confirmed in writing.
export const hiringNetwork: PartnerLogo[] = [];
