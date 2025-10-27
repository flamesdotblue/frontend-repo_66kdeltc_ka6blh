import { Star } from "lucide-react";

export default function ProductDetail({ product, onAddToCart, onBack }) {
  if (!product) return null;
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden border bg-white">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <button onClick={onBack} className="text-sm text-neutral-600 hover:underline">← Back to products</button>
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <div className="text-amber-500 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`} />
              ))}
            </div>
            <span className="text-sm text-neutral-500">{product.rating.toFixed(1)} / 5</span>
          </div>
          <div className="mt-4 text-2xl font-semibold">${product.price}</div>
          <p className="mt-4 text-neutral-600">Crafted with premium materials for everyday comfort and durability. Free shipping over $50 and hassle-free returns within 30 days.</p>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={() => onAddToCart(product)} className="px-5 py-3 rounded-lg bg-black text-white font-medium">Add to cart</button>
            <button className="px-5 py-3 rounded-lg border font-medium hover:bg-neutral-50">Save to wishlist</button>
          </div>
          <ul className="mt-6 text-sm text-neutral-600 list-disc list-inside space-y-1">
            <li>Premium, breathable fabric</li>
            <li>Modern, relaxed fit</li>
            <li>Easy care: machine wash</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
