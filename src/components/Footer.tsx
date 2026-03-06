import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Truck } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="tribal-border" />
    <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold mb-4">Utkal Harvest</h3>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Premium Atta, Spices & Traditional Foods from Odisha. Bringing authentic Indian flavors to your kitchen since generations.
        </p>
        <div className="flex items-center gap-2 mt-4 text-gold text-sm font-semibold">
          <Truck size={18} />
          Pan-India Delivery
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <div className="space-y-2 text-sm text-primary-foreground/70">
          <Link to="/" className="block hover:text-gold transition-colors">Home</Link>
          <Link to="/products" className="block hover:text-gold transition-colors">Products</Link>
          <Link to="/about" className="block hover:text-gold transition-colors">About Us</Link>
          <Link to="/blog" className="block hover:text-gold transition-colors">Blog</Link>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Categories</h4>
        <div className="space-y-2 text-sm text-primary-foreground/70">
          <Link to="/products/atta" className="block hover:text-gold transition-colors">Atta</Link>
          <Link to="/products/sattu" className="block hover:text-gold transition-colors">Sattu & Grain Mixes</Link>
          <Link to="/products/spices" className="block hover:text-gold transition-colors">Spice Powders</Link>
          <Link to="/products/badi" className="block hover:text-gold transition-colors">Odisha Badi</Link>
          <Link to="/products/dryfruits" className="block hover:text-gold transition-colors">Dry Fruits & Snacks</Link>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Contact Us</h4>
        <div className="space-y-3 text-sm text-primary-foreground/70">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>Bhubaneswar, Odisha, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0" />
            <span>hello@utkalharvest.com</span>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50">
        <p>© 2026 Utkal Harvest. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-gold transition-colors">Refund Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
