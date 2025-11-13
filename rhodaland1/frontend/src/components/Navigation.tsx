import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import rhodalandLogo from "@/assets/rhodaland.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/roofing", label: "Construction Materials" },
    { href: "/container", label: "Mechanical, Electrical & Work Systems" },
    { href: "/others", label: "Finishing, Interior & Fittings" },
    { href: "/designs", label: "Designs" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src={rhodalandLogo} alt="Logo" className="h-8 w-8" />
          <span className="text-foreground">Rhodaland Integrated Concepts</span>
        </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(link.href) ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="quote" size="sm">
              <Link to="/quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  isActive(link.href)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild variant="quote" className="w-full">
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
