
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
