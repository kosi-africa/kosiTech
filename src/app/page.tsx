import AvailableSection from "@/components/homePage/AvailableSection";
import HeroSection from "@/components/homePage/HeroSection";
import ProjectShowCaseSection from "@/components/homePage/ProjectShowCaseSection";
import ReadyCTASection from "@/components/homePage/ReadyCTASection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AvailableSection />
      <ProjectShowCaseSection />
      <ReadyCTASection />
    </main>
  );
}
