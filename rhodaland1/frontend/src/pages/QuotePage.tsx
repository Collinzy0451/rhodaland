import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail } from "lucide-react";

const QuotePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    materialName: "",
    quantity: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappMessage = `*Quote Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nCategory: ${formData.category}\nMaterial: ${formData.materialName}\nQuantity: ${formData.quantity}\nLocation: ${formData.location}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+2347034640665?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Request Sent!",
      description: "We'll get back to you with a quote shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      materialName: "",
      quantity: "",
      location: "",
      message: "",
    });
  };

  const handleEmailQuote = () => {
    const subject = "Quote Request - rhodaland.com";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nCategory: ${formData.category}\nMaterial: ${formData.materialName}\nQuantity: ${formData.quantity}\nLocation: ${formData.location}\n\nMessage: ${formData.message}`;
    window.location.href = `mailto:info@rhodalandconcepts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and we'll get back to you with pricing and availability
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quote Request Form</CardTitle>
            <CardDescription>
              Provide details about the materials you need
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 123 456 7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Material Category *</Label>
                <Select
                  required
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roofing">Roofing Materials</SelectItem>
                    <SelectItem value="container">Container Materials</SelectItem>
                    <SelectItem value="cement">Cement & Blocks</SelectItem>
                    <SelectItem value="electrical">Electrical Supplies</SelectItem>
                    <SelectItem value="plumbing">Plumbing Materials</SelectItem>
                    <SelectItem value="paint">Paints & Finishes</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="materialName">Material Name *</Label>
                  <Input
                    id="materialName"
                    required
                    value={formData.materialName}
                    onChange={(e) => setFormData({ ...formData, materialName: e.target.value })}
                    placeholder="e.g., Corrugated roofing sheets"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g., 50 sheets"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Delivery Location *</Label>
                <Input
                  id="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter delivery address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific requirements or questions..."
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="hero" className="flex-1">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
                <Button type="button" variant="outline" className="flex-1" onClick={handleEmailQuote}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send via Email
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-muted-foreground">
          <p>Or call us directly: <a href="tel:+234 703 464 0665" className="text-accent hover:underline font-semibold">+234 706 676 9620</a></p>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
