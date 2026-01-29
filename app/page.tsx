import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import GitStats from "./components/GitStats";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import GridLayoutStyle from "./grid-layout-style/page";
export default function Home() {
  return (
    //old ui
    // <div className="relative ">
    //   <HeroSection />
    //   <Experience/>
    //   <TechStack />
    //   <GitStats />
    //   <ProjectSection/>
    //   <ContactMe/>
    // </div>

    <div className="relative">
      <GridLayoutStyle/>
    </div>
  );
} 
