const ProcessSection = () => {
  const steps = ["Book a free 30-minute consultation to outline your goals", "Get matched with a coach based on your specific needs", "Your coach will deliver a 6-week work plan based on your goals", "Accept the plan and get ready to transform", "Start working with COMPACT begin your journey", "Get weekly reports about your progress after each session"];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-center">
              Discover the
              <br />
              <span className="text-primary">COMPACT method</span>
              <br />
            </h2>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-foreground leading-relaxed text-base">{step}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessSection;