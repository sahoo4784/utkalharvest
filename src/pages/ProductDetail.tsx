import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Check, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">Product not found</h1>
        <Link to="/products" className="text-primary mt-4 inline-block hover:underline">Browse all products</Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hi, I'd like to order ${product.name} (${product.variants[selectedVariant].size}) from Utkal Harvest.`);

  return (
    <section className="py-12">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products/${product.categorySlug}`} className="hover:text-primary">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden bg-muted aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.round(product.rating) ? "fill-gold text-gold" : "text-border"} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2">Select Size</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v.size}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-3 rounded-md border-2 text-sm font-semibold transition-colors ${
                      i === selectedVariant
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {v.size} — ₹{v.price}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-3xl font-bold text-primary mb-6">₹{product.variants[selectedVariant].price}</p>

            <a
              href={`https://wa.me/919876543210?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-[#20bd5a] transition-colors mb-6"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>

            <div className="flex gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Truck size={16} className="text-primary" /> Free delivery</span>
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-primary" /> Quality assured</span>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage Ideas */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">Usage Ideas</h3>
              <div className="flex flex-wrap gap-2">
                {product.usageIdeas.map((u) => (
                  <span key={u} className="bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-full">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews placeholder */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya S.", text: "Absolutely love the quality! The rotis come out so soft and the aroma is wonderful.", rating: 5 },
              { name: "Rajesh K.", text: "Best atta I've used in years. Reminds me of the flour my grandmother used to get.", rating: 5 },
              { name: "Ananya M.", text: "Great packaging and fast delivery. The products are genuinely pure and fresh.", rating: 4 },
            ].map((review) => (
              <div key={review.name} className="bg-card border border-border rounded-lg p-5">
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">"{review.text}"</p>
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
