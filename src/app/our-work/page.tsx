import ReadyCTASection from "@/components/homePage/ReadyCTASection";
import HeroSection from "@/components/ourWorkPage/HeroSection";
import ServicesSection from "@/components/ourWorkPage/ServicesSection";


export default function page() {
  return (
    <main className="container mx-auto ">
        <HeroSection/>
        <ServicesSection/>
        <ReadyCTASection/>
    </main>
  )
}
