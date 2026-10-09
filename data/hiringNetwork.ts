// Companies shown in the careers "Hiring Network" logo row.
// While this list is empty the whole section is hidden.
//
// DEMO DATA: layout preview only. These companies are NOT confirmed by ZSkillup and no logo-use
// permission is on file. Same files as content/partners.demo.ts. Before launch, replace with
// confirmed companies only (or empty the list) and delete public/logos/demo/ if unused.

export type HiringNetworkCompany = {
  /** Company name, used for the logo alt text ("{name} logo"). */
  name: string;
  /** Logo file (path under /public or absolute URL). Omit when no logo is available yet: the name is shown as text. */
  logo?: string;
  /** Print the name under the logo when the artwork is a symbol with no company name. */
  showName?: boolean;
};

export type HiringNetworkGroup = {
  category: string;
  companies: HiringNetworkCompany[];
};

export const hiringNetwork: HiringNetworkGroup[] = [
  {
    category: "Big 4",
    companies: [
      { name: "Deloitte", logo: "/logos/demo/hiring/deloitte-dark.svg" },
      { name: "PwC", logo: "/logos/demo/hiring-more/pwc.svg" },
      { name: "EY", logo: "/logos/demo/hiring/ey-light.png" },
      { name: "KPMG", logo: "/logos/demo/hiring/kpmg.svg" },
    ],
  },
  {
    category: "Banks",
    companies: [
      { name: "JPMorgan Chase", logo: "/logos/demo/hiring/jp-morgan.svg" },
      { name: "Goldman Sachs", logo: "/logos/demo/hiring/goldman-sachs.png" },
      { name: "HSBC", logo: "/logos/demo/hiring/hsbc.svg" },
      { name: "Citi", logo: "/logos/demo/hiring/citi.svg" },
      { name: "Barclays", logo: "/logos/demo/hiring-more/barclays.svg", showName: true },
      { name: "Deutsche Bank", logo: "/logos/demo/hiring-more/deutschebank.svg", showName: true },
      { name: "Standard Chartered", logo: "/logos/demo/hiring-more/standard-chartered.svg" },
      { name: "Morgan Stanley", logo: "/logos/demo/hiring-more/morgan-stanley.svg" },
    ],
  },
  {
    category: "Global Capability Centres",
    companies: [
      { name: "Wells Fargo", logo: "/logos/demo/hiring-more/wellsfargo.svg" },
      { name: "American Express", logo: "/logos/demo/hiring-more/americanexpress.svg", showName: true },
      { name: "UBS", logo: "/logos/demo/hiring-more/ubs.png" },
      { name: "Northern Trust" },
      { name: "State Street", logo: "/logos/demo/hiring-more/state-street.svg" },
      { name: "Bank of America", logo: "/logos/demo/hiring-more/bankofamerica.svg" },
      { name: "BNY", logo: "/logos/demo/hiring-more/bny.svg" },
      { name: "NatWest Group", logo: "/logos/demo/hiring-more/natwest.svg" },
    ],
  },
  {
    category: "Multinational Companies",
    companies: [
      { name: "Accenture", logo: "/logos/demo/hiring/accenture.png" },
      { name: "Unilever", logo: "/logos/demo/hiring-more/unilever.svg", showName: true },
      { name: "Shell", logo: "/logos/demo/hiring-more/shell.svg", showName: true },
      { name: "Siemens", logo: "/logos/demo/hiring-more/siemens.svg" },
      { name: "Procter & Gamble", logo: "/logos/demo/hiring-more/pg.svg" },
      { name: "IBM", logo: "/logos/demo/hiring-more/ibm.svg" },
      { name: "Microsoft", logo: "/logos/demo/hiring-more/microsoft.svg" },
      { name: "Amazon", logo: "/logos/demo/hiring-more/amazon.svg" },
      { name: "PepsiCo", logo: "/logos/demo/hiring-more/pepsico.svg" },
      { name: "Nestlé", logo: "/logos/demo/hiring-more/nestle.svg" },
    ],
  },
  {
    category: "Consulting, Accounting & Audit Firms",
    companies: [
      { name: "Grant Thornton", logo: "/logos/demo/hiring-more/grant-thornton.svg" },
      { name: "BDO", logo: "/logos/demo/hiring-more/bdo.svg" },
      { name: "RSM", logo: "/logos/demo/hiring-more/rsm.png" },
      { name: "Mazars", logo: "/logos/demo/hiring-more/mazars.svg" },
      { name: "Baker Tilly", logo: "/logos/demo/hiring-more/baker-tilly.svg" },
      { name: "Protiviti", logo: "/logos/demo/hiring-more/protiviti.svg" },
      { name: "Alvarez & Marsal", logo: "/logos/demo/hiring-more/alvarez-marsal.png" },
      { name: "FTI Consulting", logo: "/logos/demo/hiring-more/fti.svg" },
    ],
  },
  {
    category: "Fintech Companies",
    companies: [
      { name: "Razorpay", logo: "/logos/demo/hiring-more/razorpay.svg", showName: true },
      { name: "PhonePe", logo: "/logos/demo/hiring-more/phonepe.svg", showName: true },
      { name: "Paytm", logo: "/logos/demo/hiring-more/paytm.svg" },
      { name: "CRED" },
      { name: "Groww", logo: "/logos/demo/hiring-more/groww.png" },
      { name: "Zerodha", logo: "/logos/demo/hiring-more/zerodha.svg", showName: true },
    ],
  },
  {
    category: "Financial Services Companies",
    companies: [
      { name: "BlackRock", logo: "/logos/demo/hiring-more/blackrock.svg" },
      { name: "Fidelity International", logo: "/logos/demo/hiring-more/fidelity.svg" },
      { name: "S&P Global", logo: "/logos/demo/hiring-more/sp-global.svg" },
      { name: "Moody's", logo: "/logos/demo/hiring-more/moodys.svg" },
      { name: "Mastercard", logo: "/logos/demo/hiring-more/mastercard.svg", showName: true },
      { name: "Visa", logo: "/logos/demo/hiring-more/visa.svg" },
    ],
  },
];
