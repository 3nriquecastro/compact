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
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What problems do we solve?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-primary p-8 rounded-lg text-primary-foreground hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <problem.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {problem.title}
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;