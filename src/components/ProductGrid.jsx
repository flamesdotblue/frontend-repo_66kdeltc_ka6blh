import { Star } from "lucide-react";

const PRODUCTS = [
  {
    id: "p1",
    name: "Everyday Tee",
    price: 24,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1520975922225-0f8d2e88ca3f?q=80&w=1200&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: "p2",
    name: "Relaxed Hoodie",
    price: 49,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: "p3",
    name: "Classic Denim",
    price: 69,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Athletic Shorts",
    price: 32,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Minimal Sneakers",
    price: 89,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291022-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Everyday Cap",
    price: 19,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
];

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border bg-white overflow-hidden flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur border">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium leading-tight line-clamp-2">{product.name}</h3>
          <div className="text-right font-semibold">${product.price}</div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`} />
          ))}
          <span className="ml-2 text-xs text-neutral-500">{product.rating.toFixed(1)}</span>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="featured" className="py-10 sm:py-14 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured products</h2>
            <p className="text-neutral-600 mt-1">Curated picks our customers love</p>
          </div>
          <a href="#" className="text-sm font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
