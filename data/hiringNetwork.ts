// Companies shown in the careers "Hiring Network" logo row.
// Add an entry only after ZSkillup confirms the company and its logo-use permission.
// While this list is empty the whole section is hidden.

export type HiringNetworkCompany = {
  /** Company name, used for the logo alt text ("{name} logo"). */
  name: string;
  /** Logo file (path under /public or absolute URL). */
  logo: string;
};

export const hiringNetwork: HiringNetworkCompany[] = [];
