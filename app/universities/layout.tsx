import { Fraunces } from "next/font/google";

// Serif heading face shared by /universities and /universities/[slug].
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-uni-serif",
  display: "swap",
});

export default function UniversitiesLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>;
}
