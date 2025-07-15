import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences that solve real problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and quote */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3"></div>
                  <div className="absolute inset-0 bg-background rounded-2xl border-2 border-primary/20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop"
                      alt="About me"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg italic text-foreground">
                    "Creating digital solutions that make a difference in people's lives is what drives me every day."
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Hi, I'm <span className="text-primary">Alex Johnson</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With over 8 years of experience in web development and design, I specialize in creating 
                  user-centered digital experiences that combine beautiful design with powerful functionality.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I believe in the power of clean code, intuitive design, and continuous learning. 
                  When I'm not coding, you'll find me exploring new technologies, mentoring junior developers, 
                  or working on open-source projects.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">∞</div>
                  <div className="text-sm text-muted-foreground">Coffee Cups</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;