import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemsSection from "@/components/ProblemsSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <ProblemsSection />
      <WhySection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
