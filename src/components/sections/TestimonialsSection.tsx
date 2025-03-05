
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
