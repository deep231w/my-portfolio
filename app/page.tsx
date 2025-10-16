import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import GitStats from "./components/GitStats";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <div className="relative ">
      <HeroSection />
      <Experience/>
      <TechStack />
      <GitStats />
      <ProjectSection/>
      <ContactMe/>
    </div>
  );
} 
