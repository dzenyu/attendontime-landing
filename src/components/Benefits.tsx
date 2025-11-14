import { Clock, DollarSign, TrendingUp, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and reduce event setup time by up to 80%.",
    stat: "80%",
    statLabel: "Time Saved",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Eliminate manual processes and reduce operational costs significantly.",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    icon: TrendingUp,
    title: "Increase Efficiency",
    description: "Streamlined workflows mean faster check-ins and happier attendees.",
    stat: "3x",
    statLabel: "Faster Check-in",
  },
  {
    icon: Heart,
    title: "Improve Experience",
    description: "Create memorable events with seamless technology that just works.",
    stat: "95%",
    statLabel: "Satisfaction Rate",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              AttendOnTime
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of organizations that trust us to deliver exceptional event experiences.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="text-4xl font-bold text-primary">{benefit.stat}</div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
