
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
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
  );
};

export default FeaturesSection;
