import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeroSection/>
      <FeaturesSection/>
    </div>
  );
}
