import ContactSection from "./components/contactSection";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/ui/TechStack";
import GitStats from "./components/ui/GitStats";
export default function Home() {
  return (
    <>
      <div>
          <HeroSection/>
          <TechStack/>
          <GitStats/>
      </div>
      
    </>
    
  );
}
