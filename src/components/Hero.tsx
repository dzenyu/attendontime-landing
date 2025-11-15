import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Trusted by 1000+ Organizations
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Event Management
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Streamline your events from creation to check-in with our comprehensive platform. 
              Real-time attendee management, seamless registration, and effortless organization—all in one place.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Events Managed</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-muted-foreground">Attendees Checked In</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="AttendOnTime event management platform dashboard"
              className="relative rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
