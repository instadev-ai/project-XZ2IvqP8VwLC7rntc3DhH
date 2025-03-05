
import { Card, CardContent } from "@/components/ui/card";

const DashboardSection = () => {
  const stats = [
    { number: "46", label: "Sanctioned apps" },
    { number: "35", label: "Commonly used apps" },
    { number: "13", label: "Newly discovered apps" },
    { number: "27", label: "Avg. apps per user" }
  ];

  return (
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
            {stats.map((stat, index) => (
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
  );
};

export default DashboardSection;
