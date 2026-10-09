// Companies shown in the careers "Hiring Network" logo row.
// While this list is empty the whole section is hidden.
//
// DEMO DATA: layout preview only. These companies are NOT confirmed by ZSkillup and no logo-use
// permission is on file. Same files as content/partners.demo.ts. Before launch, replace with
// confirmed companies only (or empty the list) and delete public/logos/demo/ if unused.

export type HiringNetworkCompany = {
  /** Company name, used for the logo alt text ("{name} logo"). */
  name: string;
  /** Logo file (path under /public or absolute URL). */
  logo: string;
};

export const hiringNetwork: HiringNetworkCompany[] = [
  { name: "Deloitte", logo: "/logos/demo/hiring/deloitte-dark.svg" },
  { name: "EY", logo: "/logos/demo/hiring/ey-light.png" },
  { name: "KPMG", logo: "/logos/demo/hiring/kpmg.svg" },
  { name: "HSBC", logo: "/logos/demo/hiring/hsbc.svg" },
  { name: "J.P. Morgan", logo: "/logos/demo/hiring/jp-morgan.svg" },
  { name: "Accenture", logo: "/logos/demo/hiring/accenture.png" },
  { name: "Citi", logo: "/logos/demo/hiring/citi.svg" },
];
