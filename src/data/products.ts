import productAtta from "@/assets/product-atta.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productSattu from "@/assets/product-sattu.jpg";
import productBadi from "@/assets/product-badi.jpg";
import productDryfruits from "@/assets/product-dryfruits.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  benefits: string[];
  usageIdeas: string[];
  variants: { size: string; price: number }[];
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { name: "Atta", slug: "atta", description: "Chakki Fresh Wheat Flour", image: productAtta },
  { name: "Sattu & Grain Mixes", slug: "sattu", description: "Traditional Protein-Rich Flours", image: productSattu },
  { name: "Spice Powders", slug: "spices", description: "Authentic Indian Spice Blends", image: productSpices },
  { name: "Odisha Traditional Badi", slug: "badi", description: "Sun-Dried Lentil Dumplings", image: productBadi },
  { name: "Dry Fruits & Snacks", slug: "dryfruits", description: "Premium Roasted & Natural", image: productDryfruits },
];

export const products: Product[] = [
  {
    id: "1", name: "Chakki Fresh Sharbati Atta", slug: "chakki-fresh-sharbati-atta",
    category: "Atta", categorySlug: "atta",
    description: "Made from the finest Sharbati wheat sourced from Madhya Pradesh, our Chakki Fresh Atta is stone-ground to preserve natural nutrients. It gives soft, fluffy rotis every time with a golden color and rich aroma.",
    benefits: ["Rich in dietary fibre", "No preservatives or additives", "Stone-ground for natural nutrition", "Makes soft & fluffy rotis"],
    usageIdeas: ["Daily rotis & chapatis", "Parathas & puris", "Homemade bread"],
    variants: [{ size: "5 Kg", price: 249 }, { size: "10 Kg", price: 469 }],
    image: productAtta, rating: 4.8, reviews: 124, badge: "Best Seller",
    metaTitle: "Chakki Fresh Sharbati Atta | Utkal Harvest",
    metaDescription: "Premium stone-ground Sharbati wheat atta from MP. Makes soft, fluffy rotis. No preservatives. Order online with pan-India delivery.",
  },
  {
    id: "2", name: "Premium Sharbati Atta", slug: "premium-sharbati-atta",
    category: "Atta", categorySlug: "atta",
    description: "Our premium grade Sharbati wheat flour is carefully selected from the heartlands of India. Perfect for families who want the best quality atta for daily cooking.",
    benefits: ["Premium grade wheat", "High protein content", "Naturally sweet taste", "Perfect dough consistency"],
    usageIdeas: ["Rotis & naan", "Stuffed parathas", "Festival sweets"],
    variants: [{ size: "5 Kg", price: 279 }, { size: "10 Kg", price: 529 }],
    image: productAtta, rating: 4.7, reviews: 89,
    metaTitle: "Premium Sharbati Atta | Utkal Harvest",
    metaDescription: "Premium grade Sharbati wheat flour for soft rotis. High protein, naturally sweet. Pan-India delivery.",
  },
  {
    id: "3", name: "Multigrain Atta", slug: "multigrain-atta",
    category: "Atta", categorySlug: "atta",
    description: "A wholesome blend of wheat, barley, oats, soy, and millet. Packed with nutrition for health-conscious families looking for a balanced diet.",
    benefits: ["6-grain nutritious blend", "High fibre & protein", "Supports heart health", "Diabetic-friendly option"],
    usageIdeas: ["Healthy rotis", "Multigrain parathas", "Diet-friendly meals"],
    variants: [{ size: "5 Kg", price: 299 }],
    image: productAtta, rating: 4.6, reviews: 67,
    metaTitle: "Multigrain Atta | Utkal Harvest",
    metaDescription: "Wholesome 6-grain multigrain atta. High fibre, diabetic-friendly. Order online.",
  },
  {
    id: "4", name: "Bajra Atta", slug: "bajra-atta",
    category: "Atta", categorySlug: "atta",
    description: "Traditional pearl millet flour, perfect for making bajra rotis. Rich in iron, magnesium and other essential minerals for a robust diet.",
    benefits: ["Gluten-free option", "Rich in iron & minerals", "Traditional millet nutrition", "Low glycemic index"],
    usageIdeas: ["Bajra rotis", "Thalipeeth", "Winter special meals"],
    variants: [{ size: "1 Kg", price: 89 }, { size: "5 Kg", price: 399 }],
    image: productAtta, rating: 4.5, reviews: 45,
    metaTitle: "Bajra Atta | Utkal Harvest",
    metaDescription: "Pure bajra (pearl millet) flour. Gluten-free, iron-rich. Traditional nutrition delivered pan-India.",
  },
  {
    id: "5", name: "Corn Flour", slug: "corn-flour",
    category: "Atta", categorySlug: "atta",
    description: "Fine-ground corn flour perfect for makki ki roti, tortillas, and as a thickening agent. Made from premium quality corn kernels.",
    benefits: ["Naturally gluten-free", "Rich in antioxidants", "Versatile cooking ingredient", "Good source of energy"],
    usageIdeas: ["Makki ki roti", "Corn bread", "Soups & gravies thickener"],
    variants: [{ size: "500 g", price: 59 }, { size: "1 Kg", price: 109 }],
    image: productAtta, rating: 4.4, reviews: 38,
    metaTitle: "Corn Flour | Utkal Harvest",
    metaDescription: "Premium corn flour for makki roti & more. Gluten-free. Order from Utkal Harvest.",
  },
  {
    id: "6", name: "Sattu Powder", slug: "sattu-powder",
    category: "Sattu & Grain Mixes", categorySlug: "sattu",
    description: "Traditional roasted gram flour, a superfood from Eastern India. High in protein, perfect for refreshing drinks, litti chokha, and parathas.",
    benefits: ["High plant-based protein", "Natural energy booster", "Aids digestion", "Cooling for the body"],
    usageIdeas: ["Sattu drink with lemon & salt", "Litti chokha filling", "Sattu parathas", "Protein shakes"],
    variants: [{ size: "500 g", price: 99 }, { size: "1 Kg", price: 179 }],
    image: productSattu, rating: 4.9, reviews: 156, badge: "Superfood",
    metaTitle: "Sattu Powder - Traditional Protein Superfood | Utkal Harvest",
    metaDescription: "Pure roasted gram sattu powder. High protein, natural energy booster. Traditional Eastern Indian superfood.",
  },
  {
    id: "7", name: "Turmeric Powder", slug: "turmeric-powder",
    category: "Spice Powders", categorySlug: "spices",
    description: "Pure Lakadong turmeric with high curcumin content. Sourced from the best farms, our haldi brings vibrant color and authentic flavor to every dish.",
    benefits: ["High curcumin content (5-7%)", "Anti-inflammatory properties", "Natural immunity booster", "No artificial colors"],
    usageIdeas: ["Daily cooking", "Golden milk / Haldi doodh", "Face packs", "Traditional remedies"],
    variants: [{ size: "200 g", price: 79 }, { size: "500 g", price: 179 }],
    image: productSpices, rating: 4.8, reviews: 201, badge: "Pure",
    metaTitle: "Pure Turmeric Powder | Utkal Harvest",
    metaDescription: "Lakadong turmeric with high curcumin. Pure, no additives. Premium quality spices from Utkal Harvest.",
  },
  {
    id: "8", name: "Red Chilli Powder", slug: "red-chilli-powder",
    category: "Spice Powders", categorySlug: "spices",
    description: "Premium quality red chilli powder with perfect heat and vibrant color. Sourced from Guntur, Andhra Pradesh - India's chilli capital.",
    benefits: ["Rich vibrant color", "Perfect heat balance", "No added dyes", "Metabolism booster"],
    usageIdeas: ["Curries & gravies", "Marinades", "Chutneys", "Snack seasoning"],
    variants: [{ size: "200 g", price: 69 }, { size: "500 g", price: 159 }],
    image: productSpices, rating: 4.7, reviews: 145,
    metaTitle: "Red Chilli Powder | Utkal Harvest",
    metaDescription: "Guntur red chilli powder with rich color and perfect heat. Pure, no dyes. Order online.",
  },
  {
    id: "9", name: "Coriander Powder", slug: "coriander-powder",
    category: "Spice Powders", categorySlug: "spices",
    description: "Freshly ground coriander seeds with an earthy, citrusy aroma. Essential for authentic Indian cooking.",
    benefits: ["Freshly ground", "Rich aroma", "Aids digestion", "No preservatives"],
    usageIdeas: ["Curries", "Chutneys", "Spice blends", "Marinades"],
    variants: [{ size: "200 g", price: 59 }, { size: "500 g", price: 139 }],
    image: productSpices, rating: 4.6, reviews: 98,
    metaTitle: "Coriander Powder | Utkal Harvest",
    metaDescription: "Freshly ground coriander powder. Rich aroma, pure quality. Utkal Harvest spices.",
  },
  {
    id: "10", name: "Traditional Odisha Badi", slug: "odisha-badi",
    category: "Odisha Traditional Badi", categorySlug: "badi",
    description: "Handmade sun-dried lentil dumplings from Odisha. A cherished traditional ingredient that adds unique flavor and protein to curries and vegetable dishes.",
    benefits: ["Handmade by artisans", "Sun-dried naturally", "High protein content", "Preservative-free"],
    usageIdeas: ["Badi curry with potatoes", "Added to dalma", "Fried as snack", "Mixed vegetable preparations"],
    variants: [{ size: "250 g", price: 119 }, { size: "500 g", price: 219 }],
    image: productBadi, rating: 4.9, reviews: 178, badge: "Heritage",
    metaTitle: "Traditional Odisha Badi | Utkal Harvest",
    metaDescription: "Authentic handmade Odisha badi. Sun-dried lentil dumplings, traditional recipe. Order pan-India.",
  },
  {
    id: "11", name: "Premium Cashews", slug: "premium-cashews",
    category: "Dry Fruits & Snacks", categorySlug: "dryfruits",
    description: "Whole premium W240 grade cashews, sourced from the best orchards. Crunchy, creamy, and perfect for snacking or cooking.",
    benefits: ["W240 premium grade", "Rich in healthy fats", "Good source of magnesium", "Energy-boosting snack"],
    usageIdeas: ["Direct snacking", "Desserts & sweets", "Curry garnishing", "Gift hampers"],
    variants: [{ size: "250 g", price: 249 }, { size: "500 g", price: 469 }],
    image: productDryfruits, rating: 4.8, reviews: 134,
    metaTitle: "Premium Cashews W240 | Utkal Harvest",
    metaDescription: "W240 grade premium whole cashews. Crunchy, creamy. Order dry fruits online from Utkal Harvest.",
  },
  {
    id: "12", name: "Roasted Makhana", slug: "roasted-makhana",
    category: "Dry Fruits & Snacks", categorySlug: "dryfruits",
    description: "Lightly roasted fox nuts seasoned with rock salt and a hint of black pepper. A guilt-free, crunchy snack perfect for any time of the day.",
    benefits: ["Low calorie snack", "Rich in antioxidants", "Gluten-free", "Perfect for weight management"],
    usageIdeas: ["Evening snacking", "Movie-time munchies", "Kids' tiffin", "Post-workout snack"],
    variants: [{ size: "100 g", price: 99 }, { size: "200 g", price: 179 }],
    image: productDryfruits, rating: 4.7, reviews: 112, badge: "Healthy",
    metaTitle: "Roasted Makhana | Utkal Harvest",
    metaDescription: "Lightly roasted makhana with rock salt. Low calorie, gluten-free snack. Order online.",
  },
];

export const blogPosts = [
  {
    id: "1", slug: "benefits-of-sharbati-atta",
    title: "Benefits of Sharbati Atta: Why It's the Best Choice for Your Family",
    excerpt: "Discover why Sharbati wheat atta from Madhya Pradesh is considered India's finest flour. Learn about its nutritional profile, taste, and health benefits.",
    date: "March 1, 2026",
    readTime: "5 min read",
    image: productAtta,
  },
  {
    id: "2", slug: "why-odisha-badi-is-unique",
    title: "Why Odisha Badi is Unique: A Culinary Heritage Worth Preserving",
    excerpt: "Explore the centuries-old tradition of making badi in Odisha. From sun-drying techniques to unique recipes, learn what makes this ingredient special.",
    date: "February 20, 2026",
    readTime: "7 min read",
    image: productBadi,
  },
  {
    id: "3", slug: "health-benefits-of-sattu",
    title: "Health Benefits of Sattu: India's Original Protein Superfood",
    excerpt: "Sattu has been a staple in Eastern India for centuries. Discover its impressive protein content, cooling properties, and versatile uses.",
    date: "February 10, 2026",
    readTime: "6 min read",
    image: productSattu,
  },
  {
    id: "4", slug: "best-healthy-snacks-active-lifestyle",
    title: "Best Healthy Snacks for an Active Lifestyle",
    excerpt: "Looking for nutritious snacking options? From roasted makhana to dry fruit mixes, explore guilt-free snacks that fuel your active days.",
    date: "January 28, 2026",
    readTime: "4 min read",
    image: productDryfruits,
  },
];
