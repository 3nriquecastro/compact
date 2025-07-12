import { Users, Target, Zap, TrendingUp } from "lucide-react";

const WhySection = () => {
  const features = [
    {
      icon: Users,
      title: "Experience",
      description: "We work with 10 coaches who specialize in different aspects of communication."
    },
    {
      icon: Target,
      title: "Personalization",
      description: "We create a customized program tailored specifically to each client."
    },
    {
      icon: Zap,
      title: "Full service",
      description: "Everything from coach allocation to session delivery is managed by our team."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "We send weekly reports after each session to systematize your progress."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why work with COMPACT?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;