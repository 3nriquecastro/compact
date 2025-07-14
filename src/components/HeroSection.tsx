import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-compact-gradient flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-foreground/20 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-24 animate-fade-in">
        {/* Logo with enhanced design */}
        <div className="relative">
          <div className="relative p-12 inline-block backdrop-blur-sm bg-white/5 shadow-2xl">
            {/* Corner lines - only top-left and bottom-right */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-primary-foreground"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-primary-foreground"></div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary-foreground tracking-widest mb-4 drop-shadow-2xl">
              COMPACT
            </h1>
            <div className="text-xl md:text-2xl text-primary-foreground font-light tracking-wide">
              Communication with Impact
            </div>
          </div>
        </div>
        
        {/* Main tagline with enhanced styling */}
        <div className="space-y-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Empowering business professionals to communicate with 
            <span className="font-semibold text-primary-glow"> more impact</span>, 
            <span className="font-semibold text-primary-glow"> clarity</span> and 
            <span className="font-semibold text-primary-glow"> personal power</span>.
          </p>
        
          {/* Enhanced CTA Button */}
          <div className="pt-8">
            <Button variant="compact" size="lg" className="group text-lg px-12 py-6 shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
              Book a Consultation
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scrolling ticker banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm overflow-hidden">
        <div className="animate-scroll whitespace-nowrap py-3 text-sm font-medium text-primary-foreground">
          COMMUNICATION WITH IMPACT • BUSINESS EXCELLENCE • PROFESSIONAL GROWTH • LEADERSHIP DEVELOPMENT • COMMUNICATION WITH IMPACT • BUSINESS EXCELLENCE • PROFESSIONAL GROWTH • LEADERSHIP DEVELOPMENT •
        </div>
      </div>
    </section>
  );
};

export default HeroSection;