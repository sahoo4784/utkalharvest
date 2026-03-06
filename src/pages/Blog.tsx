import { Link } from "react-router-dom";
import { blogPosts } from "@/data/products";
import { Clock, ArrowRight } from "lucide-react";

const Blog = () => (
  <section className="py-16">
    <div className="container">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">From the Kitchen</h1>
      <p className="text-muted-foreground mb-10">Stories, tips, and wisdom about wholesome Indian foods</p>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
              </div>
              <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
