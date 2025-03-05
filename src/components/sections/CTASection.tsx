
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
