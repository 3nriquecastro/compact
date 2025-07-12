import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-compact-gradient flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        {/* Logo with border frame */}
        <div className="relative">
          <div className="border-2 border-primary-foreground p-8 inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-wider mb-2">
              COMPACT
            </h1>
            <div className="text-lg md:text-xl text-primary-foreground font-light tracking-wide">
              Communication with Impact
            </div>
          </div>
        </div>
        
        {/* Main tagline */}
        <p className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto leading-relaxed">
          Empowering business professionals to communicate with more impact, clarity and personal power.
        </p>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Button variant="compact" size="lg" className="group">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;