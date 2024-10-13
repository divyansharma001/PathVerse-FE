import { AiChatbot } from "@/components/AiChatbot";
import { Features } from "@/components/Features";
// import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeroSection/>
      <Features/>
      <AiChatbot/>
      {/* <FeaturesSection/> */}
      
    </div>
  );
}
