import ReadyCTASection from "@/components/homePage/ReadyCTASection";
import HeroSection from "@/components/ourWorkPage/HeroSection";
import ServicesSection from "@/components/ourWorkPage/ServicesSection";


export default function page() {
  return (
    <main className="">
        <HeroSection/>
        {/* <section className="container mx-auto"> */}
        <section className="bg-black">
        <ServicesSection/>
        </section>
        <ReadyCTASection/>
    </main>
  )
}
