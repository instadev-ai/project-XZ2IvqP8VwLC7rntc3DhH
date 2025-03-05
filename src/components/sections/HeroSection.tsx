
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-grid-blue text-white">
      {/* Floating elements */}
      <div className="floating-element w-64 h-64 top-20 left-10 opacity-20 float-animation"></div>
      <div className="floating-element w-96 h-96 bottom-10 right-10 opacity-10 float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="floating-element w-48 h-48 top-40 right-20 opacity-15 float-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            SaaS Management<br />
            Built For <span className="gradient-text gradient-blue-purple">IT</span>
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
  );
};

export default HeroSection;
