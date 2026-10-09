import type { PartnerLogo } from "@/content/partners";

// DEMO DATA — layout preview only. NOT confirmed partners.
// Shown only in development (`next dev`) while the real lists in content/partners.ts are empty;
// never rendered in production builds. Delete this file and public/logos/demo/ before launch.
// Logos were copied once from each institution's own website (D Y Patil and RV University
// serve theirs from their own CDN buckets). Local edits: VIT white logo recoloured blue;
// Sharda NAAC badge and LPU "25 Years" mark cropped off.

const demo = (slug: string, ext: string, name: string, officialSite: string, logoUrl: string): PartnerLogo => ({
  name,
  officialSite,
  logoUrl,
  file: `/logos/demo/universities/${slug}.${ext}`,
});

export const demoUniversityPartners: PartnerLogo[] = [
  demo("amity", "png", "Amity University", "https://www.amity.edu", "https://www.amity.edu/images/logo-amity.png"),
  demo("chitkara", "svg", "Chitkara University", "https://www.chitkara.edu.in", "https://www.chitkara.edu.in/chitkara-university-logo.svg"),
  demo("dy-patil", "svg", "D Y Patil University", "https://www.dypatil.edu", "https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/static-images/icons/logo.svg"),
  demo("jain", "png", "Jain University", "https://www.jainuniversity.ac.in", "https://www.jainuniversity.ac.in/jain/home/assets/images/jain-logo.png"),
  demo("manipal-trim", "png", "Manipal Academy of Higher Education", "https://www.manipal.edu", "https://www.manipal.edu/content/dam/manipal/mu/vd-assests/ColoredLogo.png"),
  demo("iit-bombay", "png", "IIT Bombay", "https://www.iitb.ac.in", "https://www.iitb.ac.in/sites/default/files/IITBLogo.png"),
  demo("srm", "svg", "SRM Institute of Science and Technology", "https://www.srmist.edu.in", "https://www.srmist.edu.in/wp-content/uploads/2022/01/srm-logo.svg"),
  demo("sharda-color", "png", "Sharda University", "https://www.sharda.ac.in", "https://www.sharda.ac.in/attachments/site_logo/logo22.png"),
  demo("vit-blue", "png", "Vellore Institute of Technology", "https://vit.ac.in", "https://vit.ac.in/wp-content/uploads/2023/06/header-logo.webp"),
  demo("lpu-crop", "svg", "Lovely Professional University", "https://www.lpu.in", "https://www.lpu.in/images/logo/lpu-logo.svg"),
];

// Hiring logos: copied once from each company's own website or brand CDN. Local edits: Deloitte
// wordmark recoloured black, EY black background removed, Accenture whitespace trimmed.
const hiring = (slug: string, ext: string, name: string, officialSite: string, logoUrl: string): PartnerLogo => ({
  name,
  officialSite,
  logoUrl,
  file: `/logos/demo/hiring/${slug}.${ext}`,
});

export const demoHiringNetwork: PartnerLogo[] = [
  hiring("deloitte-dark", "svg", "Deloitte", "https://www.deloitte.com", "https://www.deloitte.com/content/dam/assets-shared/logos/svg/a-d/deloitte.svg"),
  hiring("ey-light", "png", "EY", "https://www.ey.com", "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/generic/images/ey-logo-black.png"),
  hiring("kpmg", "svg", "KPMG", "https://kpmg.com", "https://kpmg.com/content/dam/kpmgsites/jp/images/logo.svg"),
  hiring("accenture", "png", "Accenture", "https://www.accenture.com", "https://www.accenture.com/content/dam/accenture/final/images/icons/symbol/Acc_Logo_Black_Purple_RGB.png"),
  hiring("jp-morgan", "svg", "JPMorganChase", "https://www.jpmorganchase.com", "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/logos/jpmc-logo.svg"),
  hiring("goldman-sachs", "png", "Goldman Sachs", "https://www.goldmansachs.com", "https://www.goldmansachs.com/images/gs-wordmark-black.png"),
  hiring("citi", "svg", "Citi", "https://www.citigroup.com", "https://www.citigroup.com (inline logo on homepage)"),
  hiring("hsbc", "svg", "HSBC", "https://www.hsbc.co.in", "https://www.hsbc.co.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"),
  hiring("hdfc-bank", "svg", "HDFC Bank", "https://www.hdfcbank.com", "https://www.hdfc.bank.in/content/dam/hdfcbankpws/home-page/hdfc-bank-logo.svg"),
  hiring("icici-bank", "svg", "ICICI Bank", "https://www.icicibank.com", "https://www.icicibank.com/content/dam/icicibank-revamp/images/footer-images/icici-footer-logo.svg"),
];

// Hiring marquee (home partners section, two scrolling rows). `file` is a logo where one was
// available (the files above, or simple-icons marks in public/logos/demo/hiring-more/); companies
// without one render as a text wordmark. Same DEMO status as above: not confirmed partners.
export type MarqueeCompany = { name: string; file?: string; showName?: boolean; /** Zoom for artwork with built-in padding, so it matches the other logos. */ scale?: number };

// Logos that are only a symbol (no company name in the artwork) get the name printed underneath.
const SYMBOL_ONLY = new Set(["Barclays", "Deutsche Bank", "Bank of America", "American Express", "Unilever", "Shell", "Razorpay", "PhonePe", "Zerodha", "Mastercard"]);
const SCALE: Record<string, number> = { "Baker Tilly": 1.5, Protiviti: 1.4, Paytm: 1.35, Siemens: 1.6 };
const m = (name: string, file?: string): MarqueeCompany => ({ name, file, showName: file ? SYMBOL_ONLY.has(name) : undefined, scale: SCALE[name] });
const PNG = new Set(["rsm", "ubs", "alvarez-marsal", "groww"]);
const more = (slug: string) => `/logos/demo/hiring-more/${slug}.${PNG.has(slug) ? "png" : "svg"}`;

export const demoHiringMarquee: MarqueeCompany[][] = [
  [
    m("Deloitte", "/logos/demo/hiring/deloitte-dark.svg"),
    m("PwC", more("pwc")),
    m("EY", "/logos/demo/hiring/ey-light.png"),
    m("KPMG", "/logos/demo/hiring/kpmg.svg"),
    m("JPMorgan Chase", "/logos/demo/hiring/jp-morgan.svg"),
    m("Goldman Sachs", "/logos/demo/hiring/goldman-sachs.png"),
    m("HSBC", "/logos/demo/hiring/hsbc.svg"),
    m("Citi", "/logos/demo/hiring/citi.svg"),
    m("Barclays", more("barclays")),
    m("Deutsche Bank", more("deutschebank")),
    m("Standard Chartered", more("standard-chartered")),
    m("Morgan Stanley", more("morgan-stanley")),
    m("Wells Fargo", more("wellsfargo")),
    m("American Express", more("americanexpress")),
    m("UBS", more("ubs")),
    m("Northern Trust"),
    m("State Street", more("state-street")),
    m("Bank of America", more("bankofamerica")),
    m("BNY", more("bny")),
    m("NatWest Group", more("natwest")),
    m("Accenture", "/logos/demo/hiring/accenture.png"),
    m("Unilever", more("unilever")),
    m("Shell", more("shell")),
    m("Siemens", more("siemens")),
    m("Procter & Gamble", more("pg")),
    m("IBM", more("ibm")),
  ],
  [
    m("Microsoft", more("microsoft")),
    m("Amazon", more("amazon")),
    m("PepsiCo", more("pepsico")),
    m("Nestlé", more("nestle")),
    m("Grant Thornton", more("grant-thornton")),
    m("BDO", more("bdo")),
    m("RSM", more("rsm")),
    m("Mazars", more("mazars")),
    m("Baker Tilly", more("baker-tilly")),
    m("Protiviti", more("protiviti")),
    m("Alvarez & Marsal", more("alvarez-marsal")),
    m("FTI Consulting", more("fti")),
    m("Razorpay", more("razorpay")),
    m("PhonePe", more("phonepe")),
    m("Paytm", more("paytm")),
    m("CRED"),
    m("Groww", more("groww")),
    m("Zerodha", more("zerodha")),
    m("BlackRock", more("blackrock")),
    m("Fidelity International", more("fidelity")),
    m("S&P Global", more("sp-global")),
    m("Moody’s", more("moodys")),
    m("Mastercard", more("mastercard")),
    m("Visa", more("visa")),
  ],
];
