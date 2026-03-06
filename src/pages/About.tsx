import { Leaf, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Leaf, title: "Pure & Natural", desc: "No preservatives, no additives. Just pure, honest ingredients sourced from trusted farms." },
  { icon: Heart, title: "Made with Tradition", desc: "Our recipes and processes are rooted in centuries-old Odia and Indian culinary traditions." },
  { icon: Users, title: "Community First", desc: "We work directly with local farmers and artisans, supporting livelihoods across Odisha." },
  { icon: Award, title: "Quality Assured", desc: "Every product goes through rigorous quality checks to ensure you get only the best." },
];

const About = () => (
  <section className="py-16">
    <div className="container max-w-4xl">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Utkal Harvest</h1>
      <div className="tribal-border mb-8 rounded" />

      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <p>
          <strong className="text-foreground">Utkal Harvest</strong> is born from the rich culinary heritage of Odisha and the heartlands of India. 
          We bring you premium-quality atta, sattu, spices, traditional badi, dry fruits, and roasted snacks — 
          all crafted with care, authenticity, and a deep respect for tradition.
        </p>
        <p>
          Our journey started with a simple mission: to make genuine, preservative-free Indian staples accessible 
          to every household across the country. From the golden Sharbati wheat fields of Madhya Pradesh to the 
          sun-drying terraces where Odisha badi is handcrafted — every product tells a story of heritage and quality.
        </p>
        <p>
          We work directly with farmers and artisan communities, ensuring fair practices and the freshest ingredients. 
          Our stone-ground flours, hand-pounded spices, and traditionally prepared foods carry the warmth and wisdom 
          of generations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {values.map((v) => (
          <div key={v.title} className="bg-card border border-border rounded-lg p-6">
            <v.icon size={32} className="text-primary mb-3" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Packaging */}
      <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Packaging Promise</h2>
        <p className="text-muted-foreground leading-relaxed">
          Every Utkal Harvest product is packed with care in food-grade, moisture-resistant packaging to lock in 
          freshness and flavor. Our packaging is designed to be minimal yet protective — because what matters most 
          is what's inside. We're committed to reducing waste and are actively transitioning to eco-friendly materials.
        </p>
      </div>
    </div>
  </section>
);

export default About;
