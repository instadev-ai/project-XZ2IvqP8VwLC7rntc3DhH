
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Integration Hub Image */}
          <div className="mb-16 max-w-3xl mx-auto">
            <img 
              src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/66765c88-9ffe-433e-b88a-37d269532bc8/XZ2IvqP8VwLC7rntc3DhH/1741192112099-pasted-image-1741192058521.png" 
              alt="Integration Hub" 
              className="w-full h-auto"
            />
          </div>
          
          {/* CTA Content with Grid Background */}
          <div className="w-full bg-[url('https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/66765c88-9ffe-433e-b88a-37d269532bc8/XZ2IvqP8VwLC7rntc3DhH/1741192112100-pasted-image-1741192093025.png')] bg-contain py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Get a 14 Day Head Start on SaaS Management
              </h2>
              <p className="text-xl mb-2 text-gray-700">
                Test drive the leading SMP for IT.
              </p>
              <p className="text-xl mb-8 text-gray-700">
                No Credit Card. No Phone Calls. No Hassle
              </p>
              <Button size="lg" className="!bg-primary !text-white px-8 py-6 text-lg h-auto">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
