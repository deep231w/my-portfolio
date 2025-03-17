import HeroSection from "./components/HeroSection";
import TechStack from "./components/ui/TechStack";
import GitStats from "./components/ui/GitStats";
import ProjectCards from "./components/ProjectCards";
import ContactMe from "./components/ContactMe";
export default function Home() {
  return (
    <div className="relative ">
      <HeroSection />
      <TechStack />
      <GitStats />
      <ProjectCards/>
      <ContactMe/>
    </div>
  );
} 
