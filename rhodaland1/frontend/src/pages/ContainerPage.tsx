import { useMemo, useState } from "react";
import { Search, Thermometer, Zap, Droplet, AirVent } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import containerImage from "@/assets/mew/containers/container.jpg";
import cabinImage  from "@/assets/mew/containers/cabi.jpg";
import fenceImage from "@/assets/mew/containers/fence.jpg";
import officeImage from "@/assets/mew/containers/office.jpg";
import scaffoldImage from "@/assets/mew/containers/scaffold.jpg";
import securityImage from "@/assets/mew/containers/security.jpg";
import toiletImage from "@/assets/mew/containers/toilet.jpg";
import tarpaulinImage from "@/assets/mew/containers/tarpaulin.jpg";
import bulbImage from "@/assets/mew/electrical/bulbs.jpg";
import cableImage from "@/assets/mew/electrical/cables.jpg";
import fanImage from "@/assets/mew/electrical/ceilingfans.jpg";
import circuitImage from "@/assets/mew/electrical/circuit.jpg";
import exhaustImage from "@/assets/mew/electrical/exhaustfans.jpg";
import fuseImage from "@/assets/mew/electrical/fusebox.jpg";
import socketImage from "@/assets/mew/electrical/sockets.jpg";
import solarImage from "@/assets/mew/electrical/solar.jpg";
import elbowImage from "@/assets/mew/plumbing/elbows.jpg";
import faucetImage from "@/assets/mew/plumbing/faucets.jpg";
import galvanizedImage from "@/assets/mew/plumbing/galvanizedpipes.jpg";
import pprImage from "@/assets/mew/plumbing/ppr.jpg";
import pvcImage from "@/assets/mew/plumbing/pvc.jpg";
import showerImage from "@/assets/mew/plumbing/showermixers.jpg";
import sinkImage from "@/assets/mew/plumbing/sinks.jpg";
import storageImage from "@/assets/mew/plumbing/tanks.jpg";
import toiletSeatImage from "@/assets/mew/plumbing/toiletseats.jpg";
import waterHeaterImage from "@/assets/mew/plumbing/heaters.jpg";
import pressurePumpImage from "@/assets/mew/plumbing/pumps.jpg";
import wheelbarrowImage from "@/assets/mew/tools/barrows.jpg";
import ladderImage from "@/assets/mew/tools/ladders.jpg";
import powertoolImage from "@/assets/mew/tools/powertools.jpg";
import safetyImage from "@/assets/mew/tools/ppe.jpg";
import spiritlevelImage from "@/assets/mew/tools/spiritlevels.jpg";
import trowelImage from "@/assets/mew/tools/trowels.jpg";
import kitImage from "@/assets/mew/tools/toolboxkit.jpg";



const ContainerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<
    "containers" | "electrical" | "plumbing" | "tools"
  >("containers");

  // 8 products per tab

  const insulationProducts = [
    {
      name: "Shipping Containers (20ft & 40ft)",
      description: "High-quality shipping containers for various uses",
      price: "₦25,000",
      unit: "per unit",
      image: containerImage,
      featured: true,
    },
    {
      name: "Tarpaulins & Cover Sheets",
      description: "High-quality tarpaulins and cover sheets for containers",
      price: "₦12,000",
      unit: "per roll",
      image: tarpaulinImage,
    },
    {
      name: "Portable Cabins",
      description: "High-quality portable cabins for various uses",
      price: "₦8,500",
      unit: "per unit",
      image: cabinImage,
    },
    {
      name: "Temporary Site Offices",
      description: "High-quality portable cabins for temporary site offices",
      price: "₦4,200",
      unit: "per unit",
      image: officeImage,
    },
    {
      name: "Mobile Toilets & Sanitation Units",
      description: "High-quality mobile toilets and sanitation units for various uses",
      price: "₦15,500",
      unit: "per unit",
      image: toiletImage,
      featured: true,
    },
    {
      name: "Scaffolding Materials",
      description: "High-quality scaffolding materials for container construction",
      price: "₦3,800",
      unit: "per length",
      image: scaffoldImage,
    },
    {
      name: "Safety Barriers and Fencing",
      description: "High-quality safety barriers and fencing for container sites",
      price: "₦18,000",
      unit: "per set",
      image: fenceImage,
    },
    {
      name: "Site Security Cabins",
      description: "High-quality site security cabins for container sites",
      price: "₦2,500",
      unit: "per unit",
      image: securityImage,
    },
  ];

  const electricalProducts = [
    {
      name: "Electrical Cables",
      description: "High-quality electrical cables for interior wiring",
      price: "₦4,500",
      unit: "per roll",
      image: cableImage,
    },
    {
      name: "Circuit Breakers",
      description: "Reliable circuit breakers for safety protection",
      price: "₦6,200",
      unit: "per piece",
      image: circuitImage,
    },
    {
      name: "Switches and Sockets",
      description: "Premium switches and sockets for container systems",
      price: "₦1,200",
      unit: "per piece",
      image: socketImage,
    },
    {
      name: "Fuse Boxes & Distribution Boards",
      description: "Main electrical distribution boards for containers",
      price: "₦22,000",
      unit: "per unit",
      image: fuseImage,
    },
    {
      name: "Light Bulbs & Fixtures",
      description: "LED bulbs and light fixtures for interiors",
      price: "₦1,800",
      unit: "per set",
      image: bulbImage,
    },
    {
      name: "Ceiling Fans",
      description: "High-quality ceiling fans for air circulation",
      price: "₦12,500",
      unit: "per piece",
      image: fanImage,
    },
    {
      name: "Exhaust Fans",
      description: "Durable exhaust fans for ventilation",
      price: "₦7,500",
      unit: "per piece",
      image: exhaustImage,
    },
    {
      name: "Solar Panels & Inverters",
      description: "Portable solar panels for container power supply",
      price: "₦85,000",
      unit: "per set",
      image: solarImage,
    },
  ];

  const plumbingProducts = [
    {
      name: "PVC Pipes",
      description: "High-quality PVC pipes for water supply",
      price: "₦3,500",
      unit: "per meter",
      image: pvcImage,
    },
    {
      name: "PPR Pipes",
      description: "Durable PPR pipes for plumbing systems",
      price: "₦4,200",
      unit: "per meter",
      image: pprImage,
    },
    {
      name: "Galvanized Pipes",
      description: "Strong galvanized pipes for container plumbing",
      price: "₦5,000",
      unit: "per meter",
      image: galvanizedImage,
    },
    {
      name: "Elbows & Tees",
      description: "Fittings for plumbing connections",
      price: "₦1,200",
      unit: "per piece",
      image: elbowImage,
    },
    {
      name: "Valves & Faucets",
      description: "Control valves and faucets for water systems",
      price: "₦2,500",
      unit: "per piece",
      image: faucetImage,
    },
    {
      name: "Water Storage Tanks",
      description: "Durable tanks for water storage",
      price: "₦25,000",
      unit: "per tank",
      image: storageImage,
    },
    {
      name: "Toilet Seats & Urinals",
      description: "High-quality sanitation fittings",
      price: "₦6,500",
      unit: "per set",
      image: toiletSeatImage,
    },
    {
      name: "Shower Systems",
      description: "Complete shower units for container interiors",
      price: "₦15,000",
      unit: "per set",
      image: showerImage,
    },
    {
      name: "Sinks, Taps & Mixers",
      description: "Complete sink, tap, and mixer units for container interiors",
      price: "₦15,000",
      unit: "per set",
      image: sinkImage,
    },
    {
      name: "Water Heaters",
      description: "Complete water heating units for container interiors",
      price: "₦15,000",
      unit: "per set",
      image: waterHeaterImage,
    },
    {
      name: "Pressure Pumps",
      description: "Complete pressure pump units for container interiors",
      price: "₦15,000",
      unit: "per set",
      image: pressurePumpImage,
    },
  ];

  const hvacProducts = [
    {
      name: "Wheelbarrows & Head pans, shovels",
      description: "High-quality tools for material handling",
      price: "₦12,500",
      unit: "per piece",
      image: wheelbarrowImage,
    },
    {
      name: "Measuring Tapes and Spirit Levels",
      description: "Essential tools for accurate measurements",
      price: "₦8,500",
      unit: "per piece",
      image: spiritlevelImage,
    },
    {
      name: "Trowels and Plastering Tools",
      description: "High-quality tools for plastering and finishing",
      price: "₦3,500",
      unit: "per piece",
      image: trowelImage,
    },
    {
      name: "Power Tools (Drills, Grinders, Saws)",
      description: "High-performance power tools for various applications",
      price: "₦6,200",
      unit: "per piece",
      image: powertoolImage,
    },
    {
      name: "Ladders and Scaffolds",
      description: "High-quality ladders and scaffolding for safe access",
      price: "₦4,200",
      unit: "per piece",
      image: ladderImage,
    },
    {
      name: "Safety Helmets, Gloves & Boots",
      description: "Personal protective equipment for construction sites",
      price: "₦18,000",
      unit: "per unit",
      image: safetyImage,
    },
    {
      name: "Tool Boxes and Kits",
      description: "Comprehensive tool storage solutions",
      price: "₦85,000",
      unit: "per unit",
      image: kitImage,
    },
  ];

  const tabs = [
    { id: "containers", label: "Containers & Site solutions", icon: Thermometer, products: insulationProducts },
    { id: "electrical", label: "Electrical & Lighting", icon: Zap, products: electricalProducts },
    { id: "plumbing", label: "Plumbing & Water Supply", icon: Droplet, products: plumbingProducts },
    { id: "tools", label: "Tools & Equipments", icon: AirVent, products: hvacProducts },
  ] as const;

  const activeProducts = useMemo(() => {
    const tab = tabs.find((t) => t.id === activeTab);
    return tab ? tab.products : [];
  }, [activeTab]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return activeProducts;
    return activeProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [searchQuery, activeProducts]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mechanical, Electrical and Work Systems (MEP)
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Materials and systems used to manage building comfort, utilities, and functional infrastructure. Includes insulation, electrical systems, plumbing, and HVAC installations.
          </p>
        </div>
      </section>

      {/* Tabs + Search */}
      <section className="bg-secondary/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition
                      ${isActive ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground"}
                    `}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="max-w-md w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder={`Search ${activeTab} materials...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={`${activeTab}-${index}`} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContainerPage;
