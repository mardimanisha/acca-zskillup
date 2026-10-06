import { FacultySection } from "@/components/home/faculty/faculty-section";
import { LearningSection } from "@/components/home/learning/learning-section";
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
    </>
  );
}
