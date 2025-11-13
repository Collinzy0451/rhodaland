import { useMemo, useState } from "react";
import { Search, Layers, Cable, Home, BrickWall } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import cementImage from "@/assets/ccm/cement/dangote.jpg";
import buaCement from "@/assets/ccm/cement/bua.jpg";
import readyMix from "@/assets/ccm/cement/readymix.jpg";
import concreteBlocks from "@/assets/ccm/cement/concreteblocks.jpg";
import plasteringSand from "@/assets/ccm/cement/plastersand.jpg";
import gravelImage from "@/assets/ccm/cement/gravels.jpg";
import lateriteImage from "@/assets/ccm/cement/laterite.jpg";
import sharpSandImage from "@/assets/ccm/cement/sharpsand.jpg";
import cementAdditives from "@/assets/ccm/cement/cementadditives.jpg";
import steelImage from "@/assets/ccm/steel/steelrod.jpg";
import angleBarImage from "@/assets/ccm/steel/anglebars.jpg";
import bindingImage from "@/assets/ccm/steel/bindingwire.jpg";
import flatBars from "@/assets/ccm/steel/flatbars.jpg";
import galvanizedSteels from "@/assets/ccm/steel/galvanizedsteel.jpg";
import ironRods from "@/assets/ccm/steel/ironrods.jpg";
import steelplates from "@/assets/ccm/steel/steelplates.jpg"; 
import steelMesh from "@/assets/ccm/steel/steelmesh.jpg";
import nailImage from "@/assets/ccm/steel/nails.jpg";
import corrugatedImage from "@/assets/ccm/roofing/corrugatedsheets.jpg";
import stoneCoatedImage from "@/assets/ccm/roofing/stonecoatedroof.jpg";
import roofGutter from "@/assets/ccm/roofing/roofgutter.jpg";
import ridgeCaps from "@/assets/ccm/roofing/ridgecaps.jpg";
import roofWood from "@/assets/ccm/roofing/roofingwood.jpg";
import purlinImage from "@/assets/ccm/roofing/purlins.jpg";
import waterImage from "@/assets/ccm/roofing/waterproofingmembrane.jpg";
import adhesiveImage from "@/assets/ccm/bricks/adhesive.jpg";
import concreteImage from "@/assets/ccm/bricks/concreteblocks.jpg";
import kerbsImage from "@/assets/ccm/bricks/concretekerbs.jpg";
import hollowImage from "@/assets/ccm/bricks/hollow.jpg";
import interlockingImage from "@/assets/ccm/bricks/interlockingstone.jpg";
import pavingImage from "@/assets/ccm/bricks/interlockingpavers.jpg";
import pop from "@/assets/ccm/bricks/pop.jpg";
import redstoneImage from "@/assets/ccm/bricks/redstones.jpg";
import screedingImage from "@/assets/ccm/bricks/screedingmat.jpg";


const RoofingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"cement" | "steel" | "roofing" | "masonry">(
    "cement"
  );

  // 8 products for Cement & Concrete
  const cementProducts = [
    {
      name: "Dangote Cement 50kg",
      description: "Portland cement ideal for foundation and structural works",
      price: "₦4,500",
      unit: "per bag",
      image: cementImage,
      featured: true,
    },
    {
      name: "BUA Cement 50kg",
      description: "Durable cement for general purpose construction",
      price: "₦4,300",
      unit: "per bag",
      image: buaCement,
    },
    {
      name: "Laterite (Bulk)",
      description: "Coarse aggregate for concrete and fill material",
      price: "₦4,600",
      unit: "per ton",
      image: lateriteImage,
    },
    {
      name: "Ready-Mix Concrete (M15)",
      description: "Pre-blended concrete for slabs and small foundations",
      price: "₦28,000",
      unit: "per m³",
      image: readyMix,
    },
    {
      name: "Concrete Blocks (6 inch)",
      description: "Solid concrete block for partition and low walls",
      price: "₦180",
      unit: "per block",
      image: concreteBlocks,
    },
    {
      name: "Plastering Sand (Bulk)",
      description: "Fine sand suitable for plaster and masonry work",
      price: "₦8,500",
      unit: "per ton",
      image: plasteringSand,
    },
    {
      name: "Granite Chippings (20mm)",
      description: "Coarse aggregate for concrete mixes",
      price: "₦9,200",
      unit: "per ton",
      image: gravelImage,
    },
    {
      name: "Cement Additives & Sealants",
      description: "Waterproofing and plasticizers for improved concrete performance",
      price: "₦3,200",
      unit: "per pack",
      image: cementAdditives,
    },
  ];

  // 8 products for Steel & Reinforcement
  const steelProducts = [
    {
      name: "High Tensile Iron Rod 12mm",
      description: "High tensile rebar for reinforced concrete",
      price: "₦5,500",
      unit: "per length",
      image: ironRods,
      featured: true,
    },
    {
      name: "Mild Steel Rod 8mm-25mm",
      description: "Mild steel for general reinforcement use",
      price: "₦4,800",
      unit: "per length",
      image: steelImage,
    },
    {
      name: "BRC Wire Mesh (6mm)",
      description: "Welded reinforcement mesh for slabs and floors",
      price: "₦7,200",
      unit: "per sheet",
      image: steelMesh,
    },
    {
      name: "Angle Bar 50mm",
      description: "Cold-rolled angle bar for structural framing",
      price: "₦3,900",
      unit: "per length",
      image: angleBarImage,
    },
    {
      name: "Binding Wire (Black)",
      description: "Flexible steel wire for tying rebar",
      price: "₦1,200",
      unit: "per coil",
      image: bindingImage,
    },
    {
      name: "Flat Bar 50x5mm",
      description: "Flat steel bar for fabrication and connections",
      price: "₦3,600",
      unit: "per length",
      image: flatBars,
    },
    {
      name: "Steel Plates (4mm)",
      description: "Mild steel plate for fabrication and base plates",
      price: "₦22,000",
      unit: "per sheet",
      image: steelplates,
    },
    {
      name: "Galvanized Sheets",
      description: "Corrosion resistant steel sheet for light cladding",
      price: "₦14,500",
      unit: "per sheet",
      image: galvanizedSteels,
    },
  ];

  // 8 products for Roofing Materials
  const roofingProducts = [
    {
      name: "Corrugated Roofing Sheets",
      description: "Galvanized steel corrugated sheets, durable and weather-resistant",
      price: "₦15,000",
      unit: "per sheet",
      image: corrugatedImage,
      featured: true,
    },
    {
      name: "Stone Coated Roofing Tiles",
      description: "Premium stone-coated steel tiles with long life",
      price: "₦3,200",
      unit: "per piece",
      image: stoneCoatedImage,
    },
    {
      name: "Aluminum Roofing Sheets",
      description: "Lightweight aluminum sheets, corrosion-resistant",
      price: "₦18,500",
      unit: "per sheet",
      image: corrugatedImage,
    },
    {
      name: "Roofing Nails (5 inches)",
      description: "High-grade steel roofing nails, rust-resistant coating",
      price: "₦450",
      unit: "per kg",
      image: nailImage,
    },
    {
      name: "Roofing Wood / Rafters",
      description: "Pressure-treated rafters and timber for roofing frames",
      price: "₦1,200",
      unit: "per plank",
      image: roofWood,
    },
    {
      name: "Purlins (C-Section)",
      description: "C-section purlins for roof support, various sizes",
      price: "₦2,800",
      unit: "per length",
      image: purlinImage,
    },
    {
      name: "Ridge Caps & Flashings",
      description: "Finishings for ridge and roof transitions",
      price: "₦1,800",
      unit: "per piece",
      image: ridgeCaps,
    },
    {
      name: "Guttering System",
      description: "PVC gutters with brackets and downpipes",
      price: "₦8,500",
      unit: "per meter",
      image: roofGutter,
    },
  ];

  // 8 products for Blocks, Bricks & Masonry
  const masonryProducts = [
    {
      name: "Solid Cement Blocks (9 inch)",
      description: "High density solid block for structural walls",
      price: "₦350",
      unit: "per block",
      image: concreteImage,
      featured: true,
    },
    {
      name: "Hollow Cement Blocks (6 inch)",
      description: "Lightweight hollow block for partitioning",
      price: "₦180",
      unit: "per block",
      image: hollowImage,
    },
    {
      name: "Interlocking Stones",
      description: "Interlocking paving stones for driveways and courtyards",
      price: "₦650",
      unit: "per piece",
      image: interlockingImage,
    },
    {
      name: "Concrete Kerbs",
      description: "Precast kerbs for road edge and landscape works",
      price: "₦3,200",
      unit: "per piece",
      image: kerbsImage,
    },
    {
      name: "Paving Stones (600x600)",
      description: "Concrete paving slabs for walkways and patios",
      price: "₦1,100",
      unit: "per piece",
      image: pavingImage,
    },
    {
      name: "Red Bricks (Traditional)",
      description: "Fired clay bricks for walling and facing",
      price: "₦45",
      unit: "per piece",
      image: redstoneImage,
    },
    {
      name: "Plaster of Paris (POP)",
      description: "Finishing plaster for ceilings and decorative work",
      price: "₦2,200",
      unit: "per bag",
      image: pop,
    },
    {
      name: "Mortar & Tile Adhesives",
      description: "Cementitious adhesives for tiles and masonry joints",
      price: "₦3,500",
      unit: "per bag",
      image: adhesiveImage,
    },
  ];

  // map for easy access and tab rendering
  const tabs = [
    { id: "cement", label: "Cement & Concrete", icon: Layers, products: cementProducts },
    { id: "steel", label: "Steel & Reinforcement", icon: Cable, products: steelProducts },
    { id: "roofing", label: "Roofing materials", icon: Home, products: roofingProducts },
    { id: "masonry", label: "Bricks & Masonry", icon: BrickWall, products: masonryProducts },
  ] as const;

  // choose current product list based on activeTab
  const activeProducts = useMemo(() => {
    const tab = tabs.find((t) => t.id === activeTab);
    return tab ? tab.products : [];
  }, [activeTab]);

  // filter by search query within active tab
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Core Construction Materials</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Primary construction materials used in the foundation and structure of every building. This includes cement and concrete products, steel and reinforcement, roofing materials, and blocks and masonry.
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

export default RoofingPage;
