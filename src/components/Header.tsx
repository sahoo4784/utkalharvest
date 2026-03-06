import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
      <div className="tribal-border" />
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">Utkal Harvest</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${location.pathname === l.to ? "text-gold" : "text-primary-foreground/90"}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20from%20Utkal%20Harvest"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-primary-dark px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold/90 transition-colors"
          >
            Order on WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-primary-dark border-t border-primary/30 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-primary-foreground/90 hover:text-gold hover:bg-primary/50"
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20from%20Utkal%20Harvest"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-primary-dark px-4 py-2 rounded-md text-sm font-semibold"
            >
              Order on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
