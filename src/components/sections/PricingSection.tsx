
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom reporting"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden card-hover-effect ${plan.popular ? 'border-primary shadow-lg' : 'bg-white'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg pulse-animation">
                    Most Popular
                  </div>
                </div>
              )}
              <CardContent className="pt-6 p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full button-hover-effect ${plan.popular ? '' : 'hover:bg-primary/10'}`} variant={plan.popular ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
