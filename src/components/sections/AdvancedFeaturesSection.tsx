
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AdvancedFeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced SaaS Management Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools to discover, optimize, and automate your entire SaaS ecosystem.
          </p>
        </div>

        {/* Feature 1: App Discovery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Discover Every App</h3>
            <p className="text-lg text-muted-foreground">
              Reveal up to 4x more SaaS apps than expected with comprehensive AI discovery and mapping.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Shine a light on <span className="text-primary font-medium">Shadow IT</span></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Gain a trusted SaaS system of record</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Unify and act on rich insights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Reduce risk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Easily prove compliance</span>
              </li>
            </ul>
            <Button className="!bg-primary !text-white mt-4">Learn More</Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
            <img 
              src="https://placehold.co/600x400/f8fafc/2563eb?text=App+Discovery+Interface" 
              alt="App Discovery Interface" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature 2: Cost Savings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-6">
            <h3 className="text-3xl font-bold">Cut SaaS Costs</h3>
            <p className="text-lg text-muted-foreground">
              Save over 30% on SaaS spend with cost-saving recommendations and workflows.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Eliminate unused apps and licenses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Consolidate redundant tech</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Downgrade underutilized licenses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Slash renewal costs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Track and budget SaaS spend</span>
              </li>
            </ul>
            <Button className="!bg-primary !text-white mt-4">Learn More</Button>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden shadow-lg bg-white p-6">
            <img 
              src="https://placehold.co/600x400/f8fafc/2563eb?text=SaaS+Cost+Management" 
              alt="SaaS Cost Management Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature 3: Automation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Automate IT Tasks</h3>
            <p className="text-lg text-muted-foreground">
              Free up valuable time with fully customizable user, application, and cost-saving workflows.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Schedule onboarding & offboarding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Set-up real-time event triggers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Automate license and app optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Create risk management workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Automate SaaS tasks across core IT tools</span>
              </li>
            </ul>
            <Button className="!bg-primary !text-white mt-4">Learn More</Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
            <img 
              src="https://placehold.co/600x400/f8fafc/2563eb?text=Workflow+Automation" 
              alt="IT Task Automation Workflow" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature 4: API & Extensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-6">
            <h3 className="text-3xl font-bold">Extend Capabilities</h3>
            <p className="text-lg text-muted-foreground">
              Build new possibilities with the first and only fully open SaaS management platform. Leverage open APIs and robust developer community to manage your entire SaaS stack, your way.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Customize to fit your evolving needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Build and share new features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span>Seamlessly connect, analyze, and act on data from external systems—all within the platform</span>
              </li>
            </ul>
            <Button className="!bg-primary !text-white mt-4">Learn More</Button>
          </div>
          <div className="md:order-1 rounded-xl overflow-hidden shadow-lg bg-white p-6">
            <img 
              src="https://placehold.co/600x400/f8fafc/2563eb?text=API+and+Extensions" 
              alt="API and Extensions Interface" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
