
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-white" />
                <span className="text-xl font-bold text-white">Quantum</span>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <button className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium flex items-center gap-1">
                    Solutions <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
                <div className="relative">
                  <button className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium flex items-center gap-1">
                    Resources <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
                <button className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium">
                  Product
                </button>
                <a href="#pricing" className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="#about" className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium">
                  About Us
                </a>
                <a href="#testimonials" className="text-white/90 hover:text-white px-1 py-2 text-sm font-medium">
                  Customers
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <a href="#" className="text-white hover:text-white/90 px-3 py-2 text-sm font-medium">
                Log in
              </a>
              <Button size="sm" className="ml-4 bg-white text-primary hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-white/90">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
