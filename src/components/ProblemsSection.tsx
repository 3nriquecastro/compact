import { MessageSquare, Users, Presentation, Mic, Heart, Handshake } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "Lack of Strategic Communication",
      description: "Individuals and teams who wish to create an impactful communication plan that will bring clarity to external and internal communication."
    },
    {
      icon: Users,
      title: "Underdeveloped Leadership and Team Communication",
      description: "Teams whose performance suffers because of misaligned goals and weak leadership communication systems."
    },
    {
      icon: Presentation,
      title: "Low Impact Pitching and Presentation",
      description: "Leaders who lose funding and sales opportunities because their style or content doesn't stick with the audience."
    },
    {
      icon: Mic,
      title: "Unrealised Ambitions of Becoming a Public Speaker",
      description: "Experts who wish to share their knowledge to inspire and influence audiences"
    },
    {
      icon: Heart,
      title: "Communication Anxiety and Low Confidence",
      description: "Speakers are looking for sustainable solutions for stress, anxiety, or confidence issues during public speaking or high-pressure interactions."
    },
    {
      icon: Handshake,
      title: "Limited Interpersonal and Networking Abilities",
      description: "Professionals who lack effective networking skills, struggle with small talk, or fail to create and sustain business relationships."
    }
  ];

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What problems do we solve?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <div key={index} className="group relative h-40 w-full perspective-1000">
              <div className="relative h-full w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front side */}
                <div className="absolute inset-0 bg-primary p-6 rounded-lg text-primary-foreground backface-hidden flex flex-col items-center justify-center text-center">
                  <problem.icon className="w-8 h-8 mb-3" />
                  <h3 className="text-lg font-bold leading-tight">
                    {problem.title}
                  </h3>
                </div>
                
                {/* Back side */}
                <div className="absolute inset-0 bg-primary p-6 rounded-lg text-primary-foreground backface-hidden rotate-y-180 flex items-center justify-center">
                  <p className="text-sm leading-relaxed text-center">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;