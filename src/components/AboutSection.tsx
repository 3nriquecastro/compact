import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
         
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and quote */}
            <div className="space-y-8">
              <div className="relative -mt-4">
                <div className="w-96 h-96 mx-auto relative"> 
                  <div className="absolute inset-0 bg-background rounded-2xl overflow-hidden">
                    <img 
                      src="/nikoimage.jpg"
                      alt="Nikola - COMPACT founder"
                      className="w-full h-full object-cover border-0"
                      style={{ border: 'none', outline: 'none', objectPosition: 'center 15%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  What's Behind COMPACT?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Hi, I'm Nikola.
                  </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ever since I can remember, I've been passionate about helping people leverage their unique talents and optimising performance.
                  These values are at the core of everything I do.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At COMPACT, alongside my dedicated team, I empower brilliant thinkers and ambitious professionals to ensure 
                  their ideas achieve the impact they truly deserve. By combining personalised coaching with systematic strategies,
                 we deliver measurable, meaningful results.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-2">
                 Let’s connect and amplify your impact.
                </p>          
              </div>
                  {/* CTA */}
              <div className="pt-2">
                <a 
                  href="https://www.linkedin.com/in/nikola-wojcik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Connect 
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;