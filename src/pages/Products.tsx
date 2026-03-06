import { useParams } from "react-router-dom";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const { category } = useParams();
  const filtered = category ? products.filter((p) => p.categorySlug === category) : products;
  const activeCat = categories.find((c) => c.slug === category);

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {activeCat ? activeCat.name : "All Products"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {activeCat ? activeCat.description : "Explore our complete range of premium staples & traditional foods"}
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href="/products"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!category ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}
          >
            All
          </a>
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`/products/${c.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === c.slug ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}
            >
              {c.name}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
