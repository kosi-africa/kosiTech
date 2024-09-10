import AvailableSection from "@/components/homePage/AvailableSection";
import HeroSection from "@/components/homePage/HeroSection";



export default function Home() {
  return (
    <main className="container mx-auto ">
      <HeroSection/>
      <AvailableSection/>
    </main>
  );
}
