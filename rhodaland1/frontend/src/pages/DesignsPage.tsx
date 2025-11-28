import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";

const DesignsPage = () => {
  const designs = [
    {
      title: "Modern 3-Bedroom Bungalow",
      description: "Contemporary design with open floor plan, perfect for small families",
      image: "/placeholder.svg",
    },
    {
      title: "Luxury 5-Bedroom Duplex",
      description: "Spacious two-story home with elegant finishing and ample space",
      image: "/placeholder.svg",
    },
    {
      title: "Commercial Container Office",
      description: "Innovative container conversion for modern workspace",
      image: "/placeholder.svg",
    },
    {
      title: "4-Bedroom Mansion",
      description: "Grand design with multiple living areas and premium amenities",
      image: "/placeholder.svg",
    },
    {
      title: "Warehouse & Storage Facility",
      description: "Industrial design optimized for storage and logistics",
      image: "/placeholder.svg",
    },
    {
      title: "Residential Apartment Complex",
      description: "Multi-unit housing development with shared amenities",
      image: "/placeholder.svg",
    },
  ];

  const architects = [
    {
      name: "Priness Obah",
      specialization: "Residential & Commercial Design",
      phone: " 09021569627",
      email: "",
    },
    {
      name: "Sonia",
      specialization: "Industrial & Container Conversions",
      phone: "09021569627",
      email: "",
    },
  ];

  const sendWhatsApp = (architect: typeof architects[0]) => {
    const message = `Hello ${architect.name}, I'm interested in discussing a building design project.`;
    const whatsappUrl = `https://wa.me/234${architect.phone.replace(/[^0-9]/g, '').slice(-10)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Designs</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Explore our portfolio of architectural designs and connect with our expert architects
          </p>
        </div>
      </section>

      {/* Designs Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Design Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-strong transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                  <p className="text-muted-foreground text-sm">{design.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architects Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Architects</h2>
              <p className="text-muted-foreground">
                Connect with our experienced architects to bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {architects.map((architect, index) => (
                <Card key={index} className="shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{architect.name}</h3>
                    <p className="text-muted-foreground mb-4">{architect.specialization}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-accent" />
                        <span>{architect.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-accent" />
                        <span>{architect.email}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 gap-3">
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => sendWhatsApp(architect)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      asChild
                    >
                      <a href={`mailto:${architect.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-strong">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Have a Custom Design in Mind?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Our architects can help you create a custom design tailored to your specific needs and budget
              </p>
              <Button variant="hero" size="lg"><a href="mailto:info@rhodalandconcepts.com">
                Schedule a Consultation
              </a></Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DesignsPage;
