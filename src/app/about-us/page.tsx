import HeroSection from "@/components/aboutUsPage/HeroSection";
import ImpactSection from "@/components/aboutUsPage/ImpactSection";
import PartnersSection from "@/components/aboutUsPage/PartnersSection";
import ProblemSection from "@/components/aboutUsPage/ProblemSection";
import ProgressSection from "@/components/aboutUsPage/ProgressSection";
import ServicesSection from "@/components/aboutUsPage/ServicesSection";
import SolutionSection from "@/components/aboutUsPage/SolutionSection";
import ReadyCTASection from "@/components/homePage/ReadyCTASection";


export default function page() {
  return (
    <main className="container mx-auto">
      <HeroSection/>
      <ProblemSection/>
      <SolutionSection/>
      <ServicesSection/>
      <ImpactSection/>
      <ProgressSection/>
      <PartnersSection/>
      <ReadyCTASection/>
    </main>
  )
}
