
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Zap, BarChart3, Shield, Sparkles, ChevronDown } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  const [isVisible, setIsVisible] = useState({});

  // Animation for elements as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="announcement-bar py-2 px-4 text-center text-white">
        <p className="text-sm">
          Quantum named a Leader in the 2024 Gartner® Magic Quadrant™ for SaaS Management Platforms. 
          <a href="#" className="ml-1 underline">Get your complimentary copy</a>
        </p>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">Quantum</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <a href="#" className="text-sm font-medium text-white/90 hover:text-white flex items-center gap-1 nav-link">
                Solutions <ChevronDown className="h-4 w-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm font-medium text-white/90 hover:text-white flex items-center gap-1 nav-link">
                Resources <ChevronDown className="h-4 w-4" />
              </a>
            </div>
            <a href="#features" className="text-sm font-medium text-white/90 hover:text-white nav-link">Features</a>
            <a href="#pricing" className="text-sm font-medium text-white/90 hover:text-white nav-link">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-white/90 hover:text-white nav-link">Customers</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">Log in</Button>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-grid-blue text-white">
        {/* Floating elements */}
        <div className="floating-element w-64 h-64 top-20 left-10 opacity-20 float-animation"></div>
        <div className="floating-element w-96 h-96 bottom-10 right-10 opacity-10 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element w-48 h-48 top-40 right-20 opacity-15 float-animation" style={{ animationDelay: '2s' }}></div>
        
        <div className="container relative flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
              SaaS Management<br />Built For IT
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
              Where shadow IT meets its match, SaaS spend finally makes sense, and workflows power your daily tasks. Experience the open platform designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 button-hover-effect">
                Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 button-hover-effect">
                Request Demo
              </Button>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-white/70 mb-8">Trusted by the world's leading companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Your Business</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to analyze, understand, and grow your business in one powerful platform.
            </p>
          </div>

          <Tabs defaultValue="analytics" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-xl">
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-xl border bg-background shadow-lg">
              <div className="tabs-content-wrapper">
                <TabsContent value="analytics" className="w-full tab-content-animation">
                  <div className="flex flex-col md:flex-row gap-8 items-center p-6">
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold">Real-time Analytics Dashboard</h3>
                      <p className="text-muted-foreground">
                        Get instant insights with our powerful analytics dashboard. Track performance, monitor trends, and make data-driven decisions.
                      </p>
                      <ul className="space-y-2">
                        {["Custom reports", "User behavior tracking", "Conversion analytics", "Performance metrics"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="button-hover-effect">Learn More</Button>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden border shadow-lg">
                        <img 
                          src="https://placehold.co/600x400/2a2a2a/FFFFFF?text=Analytics+Dashboard" 
                          alt="Analytics Dashboard" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="automation" className="w-full tab-content-animation">
                  <div className="flex flex-col md:flex-row gap-8 items-center p-6">
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold">Workflow Automation</h3>
                      <p className="text-muted-foreground">
                        Automate repetitive tasks and streamline your workflow with our powerful automation tools.
                      </p>
                      <ul className="space-y-2">
                        {["Task automation", "Scheduled reports", "Email notifications", "Integration with 100+ tools"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="button-hover-effect">Learn More</Button>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden border shadow-lg">
                        <img 
                          src="https://placehold.co/600x400/2a2a2a/FFFFFF?text=Automation+Tools" 
                          alt="Automation Tools" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="w-full tab-content-animation">
                  <div className="flex flex-col md:flex-row gap-8 items-center p-6">
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold">Enterprise-Grade Security</h3>
                      <p className="text-muted-foreground">
                        Keep your data safe with our enterprise-grade security features and compliance standards.
                      </p>
                      <ul className="space-y-2">
                        {["End-to-end encryption", "GDPR compliance", "Role-based access control", "Regular security audits"].map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="button-hover-effect">Learn More</Button>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden border shadow-lg">
                        <img 
                          src="https://placehold.co/600x400/2a2a2a/FFFFFF?text=Security+Features" 
                          alt="Security Features" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Quantum</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a tool - we're your partner in growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((benefit, index) => (
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

      {/* Dashboard Preview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful SaaS Portfolio Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a complete overview of your SaaS portfolio, app breakdown and usage in one place.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl overflow-hidden border shadow-2xl">
              <img 
                src="https://placehold.co/1200x600/f8fafc/2563eb?text=SaaS+Portfolio+Dashboard" 
                alt="SaaS Portfolio Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              {[
                { number: "46", label: "Sanctioned apps" },
                { number: "35", label: "Commonly used apps" },
                { number: "13", label: "Newly discovered apps" },
                { number: "27", label: "Avg. apps per user" }
              ].map((stat, index) => (
                <Card key={index} className="bg-white border shadow-md">
                  <CardContent className="p-4 text-center">
                    <p className="text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((plan, index) => (
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Quantum has transformed how we analyze our business data. The insights we've gained have been invaluable.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "The automation features have saved us countless hours of manual work. Our team can now focus on what really matters.",
                author: "Michael Chen",
                role: "CTO, GrowthLabs",
                rating: 5
              },
              {
                quote: "The security features give us peace of mind knowing our sensitive data is protected. Highly recommended!",
                author: "Emily Rodriguez",
                role: "Security Director, Enterprise Co.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md card-hover-effect">
                <CardContent className="pt-6 p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-grid-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Join thousands of businesses already using Quantum to drive growth and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 button-hover-effect">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 button-hover-effect">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-white" />
                <span className="text-xl font-bold">Quantum</span>
              </div>
              <p className="text-gray-400">
                Powerful analytics for data-driven businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Integrations", "Changelog", "Documentation"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Customers", "Careers", "Blog", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Security", "Cookies", "Compliance"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Quantum Analytics. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
