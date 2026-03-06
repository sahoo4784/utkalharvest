import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/product/${product.slug}`}
    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {product.badge && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}
    </div>
    <div className="p-4">
      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-2">
        <Star size={14} className="fill-gold text-gold" />
        <span className="text-sm font-medium text-foreground">{product.rating}</span>
        <span className="text-xs text-muted-foreground">({product.reviews})</span>
      </div>
      <p className="mt-2 text-lg font-bold text-primary">
        ₹{product.variants[0].price}
        <span className="text-xs font-normal text-muted-foreground ml-1">/ {product.variants[0].size}</span>
      </p>
    </div>
  </Link>
);

export default ProductCard;
