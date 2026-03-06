import { Link } from "react-router-dom";
import { Truck, Shield, Leaf, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const badges = [
  { icon: Truck, label: "Pan-India Delivery" },
  { icon: Shield, label: "100% Pure & Natural" },
  { icon: Leaf, label: "No Preservatives" },
  { icon: Star, label: "Trusted by 10,000+ Families" },
];

const Index = () => {
  const bestSellers = products.filter((p) => p.badge);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Premium Atta, Spices & Traditional Foods from Odisha" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block bg-gold/20 text-gold font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-gold/30">
              From Odisha, With Love
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Premium Atta, Spices & Traditional Foods from Odisha
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Discover authentic, preservative-free staples handcrafted with generations of tradition. Delivered fresh to your doorstep across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-gold text-primary-dark px-8 py-3 rounded-md font-semibold hover:bg-gold/90 transition-colors"
              >
                Shop Now
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20from%20Utkal%20Harvest"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-cream py-6 border-y border-border">
        <div className="container flex flex-wrap justify-center gap-8">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon size={20} className="text-primary" />
              <span className="font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 tribal-pattern">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Shop by Category</h2>
            <p className="text-muted-foreground max-w-md mx-auto">From daily essentials to traditional delicacies, explore our curated range.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group relative rounded-lg overflow-hidden aspect-[4/5] hover:shadow-xl transition-all"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-bold text-primary-foreground">{cat.name}</h3>
                  <p className="text-xs text-primary-foreground/70 mt-0.5">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Best Sellers</h2>
            <p className="text-muted-foreground">Loved by thousands of families across India</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Pan-India delivery */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <Truck size={48} className="mx-auto mb-4 text-gold" />
          <h2 className="font-display text-3xl font-bold mb-3">Pan-India Delivery</h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            We deliver across all major cities and towns in India. Fresh, secure packaging ensures your order reaches you in perfect condition.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
