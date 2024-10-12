import ReadyCTASection from "@/components/homePage/ReadyCTASection";
import HeroSection from "@/components/servicesPage/HeroSection";
import ServicesSection from "@/components/servicesPage/ServicesSection";

export default function page() {
  return (
    <main className="">
      <HeroSection />
      <section className="bg-black">
        <ServicesSection />
      </section>
      <ReadyCTASection />
    </main>
  );
}
