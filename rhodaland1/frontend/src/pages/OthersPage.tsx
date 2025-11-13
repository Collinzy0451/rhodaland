import { useMemo, useState } from "react";
import { Search, Home, Wind, Layers, Droplet } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import satinImage from "@/assets/fif/paints/satin.jpg";
import ceilingPaint from "@/assets/fif/paints/ceiling.jpg";
import panelImage from "@/assets/fif/paints/panel.jpg";
import sealerImage from "@/assets/fif/paints/sealers.jpg";
import textcoatImage from "@/assets/fif/paints/textcoat.jpg";
import rollersImage from "@/assets/fif/paints/rollers.jpg";
import closersImage from "@/assets/fif/windows/closers.jpg";
import casementImage from "@/assets/fif/windows/csement.jpg";
import cubicleImage from "@/assets/fif/windows/cubicle.jpg";
import doorsImage from "@/assets/fif/windows/doors.jpg";
import doubledoorsImage from "@/assets/fif/windows/double.jpg";
import hingesImage from "@/assets/fif/windows/hinges.jpg";
import wadrobeImage from "@/assets/fif/windows/wadrobe.jpg";
import windowImage from "@/assets/fif/windows/windows.jpg";
import adhesiveImage from "@/assets/fif/floor/adhesives.jpg";
import gypsumImage from "@/assets/fif/floor/gypsum.jpg";
import wallpanelImage from "@/assets/fif/floor/panels.jpg";
import tileImage from "@/assets/fif/floor/tiles.jpg";
import vinylImage from "@/assets/fif/floor/vinyl.jpg";
import chandelierImage from "@/assets/fif/finishes/chandeliers.jpg";
import cladImage from "@/assets/fif/finishes/cladding.jpg";
import decorImage from "@/assets/fif/finishes/decor.jpg";
import falseceilingImage from "@/assets/fif/finishes/falseceilings.jpg";
import gboardImage from "@/assets/fif/finishes/gboards.jpg";
import carpetGrassImage from "@/assets/fif/finishes/grass.jpg";
import mirrorImage from "@/assets/fif/finishes/mirrors.jpg";

const OthersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"paints" | "windows" | "flooring" | "finishes">("paints");

  // 8 products per tab

  const doorsProducts = [
    { name: "Emulsion, Gloss, and Satin Paints", description: "High-quality paints for various surfaces", price: "₦5,500", unit: "per liter", image: satinImage, featured: true },
    { name: "POP Finishes & Ceiling Paints", description: "High-quality POP finishes and ceiling paints", price: "₦8,200", unit: "per liter", image: ceilingPaint },
    { name: "Primers, Sealers, and Thinners", description: "High-quality primers, sealers, and thinners", price: "₦2,500", unit: "per liter", image: sealerImage },
    { name: "Textured Coatings", description: "High-quality textured coatings for walls", price: "₦35,000", unit: "per piece", image: textcoatImage },
    { name: "Wall Screeding Compounds", description: "High-quality wall screeding compounds for smooth finishes", price: "₦5,200", unit: "per piece", image: panelImage },
    { name: "Painting Brushes, Rollers, and Tapes", description: "Durable painting tools for various surfaces", price: "₦45,000", unit: "per set", image: rollersImage },
    { name: "Wallpapers & Decorative Panels", description: "Modern wallpapers and decorative panels for interiors", price: "₦28,000", unit: "per set", image: panelImage },
  ];

  const windowsProducts = [
    { name: "Wooden and Metal Security Doors", description: "High-quality wooden and metal security doors", price: "₦12,000", unit: "per piece", image: doorsImage, featured: true },
    { name: "Aluminium & Glass Windows", description: "Durable aluminium frame windows with glass panels", price: "₦18,500", unit: "per piece", image: windowImage },
    { name: "Double-Hung Windows", description: "High-quality double-hung windows", price: "₦45,000", unit: "per piece", image: doubledoorsImage },
    { name: "Frames, Hinges, and Locks", description: "Essential components for window installation", price: "₦22,000", unit: "per piece", image: hingesImage },
    { name: "Sliding & Casement Systems", description: "Modern sliding and casement windows for interiors", price: "₦30,000", unit: "per piece", image: casementImage },
    { name: "Shower Cubicles", description: "Elegant shower cubicles for bathrooms", price: "₦60,000", unit: "per set", image: cubicleImage },
    { name: "Wardrobe & Cabinet Fittings", description: "Accessories for wardrobe and cabinet installation", price: "₦3,500", unit: "per set", image: wadrobeImage },
    { name: "Door Closers and Handles", description: "Durable door closers and handles for security and convenience", price: "₦25,000", unit: "per set", image: closersImage },
  ];

  const roofingProducts = [
    { name: "Ceramic, Porcelain, and Marble Tiles", description: "High-quality ceramic, porcelain, and marble tiles for roofing", price: "₦3,500", unit: "per sqm", image: tileImage, featured: true },
    { name: "Vinyl and Laminate Flooring", description: "High-quality vinyl and laminate flooring", price: "₦1,200", unit: "per piece", image: vinylImage },
    { name: "POP and Gypsum Ceilings", description: "Thermoplastic polyolefin roofing for flat roofs", price: "₦15,000", unit: "per roll", image: gypsumImage },
    { name: "Suspended Ceiling Boards", description: "High-quality suspended ceiling boards", price: "₦2,800", unit: "per piece", image: falseceilingImage },
    { name: "Skirting Boards", description: "High-quality skirting boards", price: "₦18,500", unit: "per sheet", image: gboardImage },
    { name: "Interior Wall Panels", description: "High-quality interior wall panels", price: "₦3,200", unit: "per piece", image: wallpanelImage },
    { name: "Adhesives and Grouts", description: "High-quality adhesives and grouts for roofing installation", price: "₦450", unit: "per kg", image: adhesiveImage },
  ];

  const waterproofingProducts = [
    { name: "Wall Panels and Claddings", description: "Waterproof wall panels and claddings", price: "₦12,000", unit: "per roll", image: cladImage, featured: true },
    { name: "False Ceilings & Gypsum Boards", description: "Waterproof false ceilings and gypsum boards", price: "₦15,500", unit: "per liter", image: gboardImage },
    { name: "Artificial Grass", description: "Waterproof artificial grass for outdoor use", price: "₦4,500", unit: "per tube", image: carpetGrassImage },
    { name: "Glass & Mirrors", description: "Waterproof glass and mirrors", price: "₦8,500", unit: "per sheet", image: mirrorImage },
    { name: "Light Fixtures and Chandeliers", description: "Waterproof light fixtures and chandeliers", price: "₦2,200", unit: "per roll", image: chandelierImage },
    { name: "Interior and Exterior Décor Materials", description: "Waterproof interior and exterior décor materials", price: "₦5,500", unit: "per sheet", image: decorImage },
  ];

  const tabs = [
    { id: "paints", label: "Paints & Finishes", icon: Home, products: doorsProducts },
    { id: "windows", label: "Doors, Windows & Fittings", icon: Wind, products: windowsProducts },
    { id: "flooring", label: "Flooring & Interior Finishes", icon: Layers, products: roofingProducts },
    { id: "finishes", label: "Finishing & Decorations", icon: Droplet, products: waterproofingProducts },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finishing, Interiors and Fittings</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Ready-made systems installed on the building exterior that provide cover, access, and protection. This includes doors, windows, roofing materials, and waterproofing solutions that improve building functionality and protection.
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

export default OthersPage;
