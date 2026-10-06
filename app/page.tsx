import { SiteFooter } from "@/components/layout/site-footer";
import { FeesSection } from "@/components/home/fees/fees-section";
import { FacultySection } from "@/components/home/faculty/faculty-section";
import { LearningSection } from "@/components/home/learning/learning-section";
import { PartnersSection } from "@/components/home/partners/partners-section";
import { HeroSection } from "@/components/home/hero/hero-section";
import { ProgramsSection } from "@/components/home/programs/programs-section";
import { WhySection } from "@/components/home/why/why-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ProgramsSection />
      <LearningSection />
      <FacultySection />
      <PartnersSection />
      <FeesSection />
      <SiteFooter />
    </>
  );
}
