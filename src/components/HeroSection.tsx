import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-compact-gradient flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="border-2 border-primary-foreground px-8 py-4 inline-block">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground tracking-wider">
            COMPACT
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-primary-foreground font-light">
          Communication with Impact
        </h2>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Empowering business professionals to communicate with more impact,
          <br />
          clarity and personal power.
        </p>
        
        <div className="pt-8">
          <Button variant="compact" size="lg" className="group">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      {/* Scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8">• Personalised Approach</span>
          <span className="inline-block px-8">• Confidence for Public Speaking</span>
          <span className="inline-block px-8">• Structured Strategic Communication</span>
          <span className="inline-block px-8">• Public Speaking Experience</span>
          <span className="inline-block px-8">• Individual Strengths & Style</span>
          <span className="inline-block px-8">• Lasting Relationships</span>
          <span className="inline-block px-8">• Clarity in Communication</span>
          <span className="inline-block px-8">• Negotiation Training</span>
          <span className="inline-block px-8">• Leadership Communication</span>
          <span className="inline-block px-8">• Pitching Power</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;