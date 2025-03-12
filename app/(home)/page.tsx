import ContactSection from "../components/contactSection";
import HeroSection from "../components/HeroSection";
import TechStack from "../components/ui/TechStack";
import GitStats from "../components/ui/GitStats";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="relative ">
      {/* Spotlight Background */}
      <div className="absolute inset-0 -z-10">
        <Spotlight className="top-0 left-0 w-full h-full opacity-100" fill="white" />
      </div>

      {/* Main Content */}
      <HeroSection />
      <TechStack />
      <GitStats />
    </div>
  );
}
