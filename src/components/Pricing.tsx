import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    id: 'free',
    name: 'FREE',
    description: 'Perfect for getting started',
    price: 0,
    currency: 'USD',
    interval: 'MONTHLY',
    features: [
      'Up to 3 events per month',
      'Up to 50 attendees per event',
      'Basic check-in features',
      'Email support',
    ],
    popular: false,
  },
  {
    id: 'basic',
    name: 'BASIC',
    description: 'For small organizations',
    price: 29,
    currency: 'USD',
    interval: 'MONTHLY',
    features: [
      'Up to 10 events per month',
      'Up to 200 attendees per event',
      'Advanced check-in features',
      'QR code generation',
      'Priority email support',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    description: 'For growing teams',
    price: 99,
    currency: 'USD',
    interval: 'MONTHLY',
    features: [
      'Unlimited events',
      'Up to 1000 attendees per event',
      'All check-in features',
      'Custom branding',
      'Analytics & reporting',
      'Phone & email support',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    description: 'For large organizations',
    price: 299,
    currency: 'USD',
    interval: 'MONTHLY',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment option',
      '24/7 priority support',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your organization. All plans include our core features with no hidden fees.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`relative border-border/50 bg-card hover:shadow-soft transition-all duration-300 animate-fade-in ${
                plan.popular ? 'border-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {plan.description}
                  </CardDescription>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground flex-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
