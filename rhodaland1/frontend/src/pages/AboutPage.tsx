import { Award, Users, Target, Eye, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rhodaland</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Your trusted partner in building materials supply since 2010
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Rhodaland Integrated Concepts is a multifaceted
              company that excels in delivering high-quality
              construction solutions and comprehensive building
              materials supply. 
             
            </p>
            <p className="text-muted-foreground mb-4">
              Established on the pillars of
              integrity, professionalism, and excellence, Rhodaland
              Integrated Concepts has become a trusted partner in
              the construction and logistics industry across Nigeria.
            </p>
            <p className="text-muted-foreground">
               With a nationwide network of skilled staff and
              strategic partners, we are committed to meeting the
              dynamic needs of our clients by providing innovative
              solutions, adhering to legal and safety standards, and
              delivering exceptional value
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Upholding the highest standards in everything we do",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Conducting our business with honesty, transparency, and accountability",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Embracing modern technologies and methodologies to continually improve",
              },
              {
                icon: Eye,
                title: "Safety",
                description: "Ensuring the well-being of our employees, clients, and communities through strict safety protocols",
              },
              {
              icon: Leaf,
              title: "Sustainability",
              description: "We prioritize eco friendly construction practices that protect the environment and promote long term resource efficiency",
             }

            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading name in
                  construction, building materials
                  supply, and logistics in Nigeria,
                  recognized for our commitment to
                  excellence, reliability, and innovative
                  solutions
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
                <p className="text-muted-foreground">
                   To empower individuals, businesses,
                    and communities by delivering high
                    quality construction solutions, reliable
                    building materials, and comprehensive
                    logistics services that drive progress
                    and foster sustainable development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Rhodaland?</h2>
          <div className="space-y-4">
            {[
              {
                title: "Commitment to Quality",
                description: "We maintain strict quality control processes in both construction projects and material supply, ensuring superior outcomes every time.",
              },
              {
                title: "Legal and Safety Compliance",
                description: "Our operations strictly adhere to all national legal and safety standards, fostering trust and reliability",
              },
              {
                title: "Timely and efficient delivery",
                description: "With our robust logistics system, we ensure projects are completed and delivered promptly, saving time and costs for our clients",
              },
              {
                title: "Nationwide presence",
                description: "A well-established network of staff and partners allows us to seamlessly manage operations across Nigeria.",
              },
              {
                title: "Expert Advice",
                description: "Professional guidance to help you choose the right materials for your project",
              },
              {
                title: "Quality Assurance",
                description: "All products verified and sourced from reputable manufacturers",
              },
              {
                title: "Flexible Payment Options",
                description: "To enhance convenience for our clients, we offer payment-on-delivery services and scheduled payment plans for greater financial flexibility.",
              },
            ].map((reason, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2 flex-shrink-0">
                    <div className="h-2 w-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
