import { Calendar, Users, QrCode, BarChart3, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Event Creation",
    description: "Create and manage events effortlessly with our intuitive interface. Set dates, venues, and customize every detail.",
  },
  {
    icon: Users,
    title: "Attendee Registration",
    description: "Streamlined registration process with customizable forms. Collect the data you need, when you need it.",
  },
  {
    icon: QrCode,
    title: "Real-time Check-in",
    description: "Lightning-fast QR code scanning for seamless attendee check-in. Track attendance in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive reporting and analytics to understand your events better and make data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with data encryption, secure access controls, and compliance certifications.",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Built on modern microservices to handle events of any size—from small meetups to large conferences.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Manage Events
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to simplify event management and create exceptional experiences for organizers and attendees alike.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

