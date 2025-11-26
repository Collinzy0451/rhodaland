import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, Truck, Shield } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import heroImage from "@/assets/hero-construction.jpg";
import roofingImage from "@/assets/category-roofing.jpg";
import othersImage from "@/assets/category-others.jpg";
import containerImage from "@/assets/mew/containers/container.jpg";
import cubicleImage from "@/assets/fif/windows/cubicle.jpg";
import cementImage from "@/assets/ccm/cement/dangote.jpg";
import conferenceImage from "@/assets/conference.jpg";
import officeChairImage from "@/assets/sit.jpg";
import officeTableChairImage from "@/assets/office.jpg";
import robotSeatImage from "@/assets/sit4.jpg";
import prefabCafeImage from "@/assets/cafe.jpg";
import miniPrefabImage from "@/assets/mini.jpg";
import BedTentImage from "@/assets/bedframe.jpg";
import ContainerHomeImage from "@/assets/fancyhouse.jpg";
import BelltentImage from "@/assets/camptent.jpg";  

const HomePage = () => {
  const featuredProducts = [
    {
      name: "Shower Cubicle",
      description: "Durable and stylish shower cubicle unit",
      
      unit: "per unit",
      image: cubicleImage,
      featured: true,
    },
    {
      name: "Shipping Containers",
      description: "Durable and secure shipping containers for storage and transport",
      price: "₦25,000",
      unit: "per container",
      image: containerImage,
      featured: true,
    },
    {
      name: "Premium Cement",
      description: "Grade 42.5 Danggote cement",
      price: "₦5,500",
      unit: "per bag",
      image: cementImage,
      featured: true,
    },
    {
      name: "Conference Table",
      description: "Durable and stylish conference table",
      price: "₦15,000",
      unit: "per ",
      image: conferenceImage,
      featured: true,
    },
    {
      name: "Office Chair",
      description: "Durable and comfortable office chair",
      price: "₦25,000",
      unit: "per chair",
      image: officeChairImage,
      featured: true,
    },
    {
      name: "Office table & chair set",
      description: "Durable and stylish office table and chair set",
      price: "₦5,500",
      unit: "per set",
      image: officeTableChairImage,
      featured: true,
    },
    {
      name: "Modern Robot Seat",
      description: "Durable and stylish modern robot seat",
      price: "₦5,500",
      unit: "per set",
      image: robotSeatImage,
      featured: true,
    },
    {
      name: "Prefab Cafe",
      description: "Durable and stylish prefab cafe",
      price: "₦5,500",
      unit: "per set",
      image: prefabCafeImage,
      featured: true,
    },
    {
      name: "Mini Prefab",
      description: "Durable and stylish mini prefab unit",
      price: "₦5,500",
      unit: "per set",
      image: miniPrefabImage,
      featured: true,
    },
    {
      name: "RIYDH Bed Tent",
      description: "Durable and stylish Bed Tent",
      price: "₦5,500",
      unit: "per set",
      image: BedTentImage,
      featured: true,
    },
    {
      name: "Two Storey Container Home",
      description: "Durable and stylish two storey container building",
      price: "₦5,500",
      unit: "per set",
      image: ContainerHomeImage,
      featured: true,
    },
    {
      name: "EchoSmile Bell Tent",
      description: "Durable and stylish Camping Tent",
      price: "₦5,500",
      unit: "per set",
      image: BelltentImage,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Quality Building Materials
            <br />
            <span className="text-accent">For Every Project</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your trusted supplier for roofing, container materials, cement, and all construction supplies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/roofing">
                Browse Materials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="quote" size="lg">
              <Link to="/quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Wide Selection", desc: "Comprehensive range of materials" },
              { icon: Shield, title: "Quality Assured", desc: "Only premium grade products" },
              { icon: Truck, title: "Fast Delivery", desc: "Quick dispatch to your site" },
              { icon: CheckCircle, title: "Expert Support", desc: "Professional guidance available" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of building materials organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard
              title="Core Construction Materials"
              description="Roofing, Cement, Blocks, Bricks, masonry and more"
              image={roofingImage}
              href="/roofing"
            />
            <CategoryCard
              title="Mechanical, Electrical & Work Systems"
              description="Containers, Plumbing, electrical, lighting, site solutions and more"
              image={containerImage}
              href="/container"
            />
            <CategoryCard
              title="Finishing, Interiors and Fittings"
              description="Paints, Doors & windows, flooring, fininshing materials and more"
              image={othersImage}
              href="/others"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Materials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most requested building materials by construction professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/roofing">
                View All Materials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for expert advice and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
