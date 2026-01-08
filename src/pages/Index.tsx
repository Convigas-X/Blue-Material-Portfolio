import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import VenturesSection from "@/components/VenturesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <VenturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
