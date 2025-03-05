
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable insights that drive business growth and innovation."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast Performance",
      description: "Experience blazing fast performance with our optimized platform built for speed."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Rest easy knowing your data is protected with the highest security standards."
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Quantum</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a tool - we're your partner in growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border shadow-md hover:shadow-xl transition-all duration-300 card-hover-effect">
              <CardContent className="pt-6 p-6">
                <div className="mb-4 float-animation">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
