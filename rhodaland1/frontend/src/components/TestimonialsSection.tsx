import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chief Adebayo Okafor",
    role: "Building Contractor",
    content: "Rhodaland has been our go-to supplier for over 5 years. Quality materials, fair prices, and excellent service. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mrs. Chioma Nwosu",
    role: "Property Developer",
    content: "The range of roofing materials is impressive. They helped us complete our housing project on time with all the materials we needed.",
    rating: 5,
  },
  {
    name: "Engr. Ibrahim Mohammed",
    role: "Civil Engineer",
    content: "Professional service and reliable delivery. Their container materials are top quality and reasonably priced.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from construction professionals who trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
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
