import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import GitStats from "./components/GitStats";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
export default function Home() {
  return (
    <div className="relative ">
      <HeroSection />
      <TechStack />
      <GitStats />
      <ProjectSection/>
      <ContactMe/>
    </div>
  );
} 
