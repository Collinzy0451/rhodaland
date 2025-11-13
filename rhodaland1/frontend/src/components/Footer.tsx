import { Link } from "react-router-dom";
import { HardHat, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import rhodalandLogo from "@/assets/rhodaland.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
          <img src={rhodalandLogo} alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-lg">Rhodaland</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your trusted partner for quality building materials. We supply construction materials for all your building needs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/roofing" className="hover:text-accent transition-colors">
                  Core Construction Materials
                </Link>
              </li>
              <li>
                <Link to="/container" className="hover:text-accent transition-colors">
                  Mechanical, Electrical & Work Systems
                </Link>
              </li>
              <li>
                <Link to="/others" className="hover:text-accent transition-colors">
                  Finishing, Interiors and Fittings
                </Link>
              </li>
              <li>
                <Link to="/designs" className="hover:text-accent transition-colors">
                  Building Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-accent transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p>+234 703 464 0665</p>
                  <p>+234 706 676 9620</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <a href="mailto:info@rhodalandconcepts@gmail.com" className="hover:text-accent transition-colors">
                  info@rhodalandconcepts@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <p>Offices in Abuja, Lagos, and Benin City</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} RhodaLand Integrated Concepts. All rights reserved. Built with quality in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
