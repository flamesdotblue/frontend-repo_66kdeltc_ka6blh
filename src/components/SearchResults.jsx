import { Star } from "lucide-react";

export default function SearchResults({ query, results = [], onView, onAdd }) {
  const hasQuery = query && query.trim().length > 0;
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{hasQuery ? `Results for "${query}"` : "Search"}</h2>
          <p className="text-neutral-600 mt-1">{results.length} item{results.length === 1 ? "" : "s"} found</p>
        </div>
        {results.length === 0 ? (
          <div className="rounded-xl border bg-white p-8 text-center text-neutral-600">
            No results. Try another search term.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((p) => (
              <div key={p.id} className="group rounded-xl border bg-white overflow-hidden flex flex-col">
                <button onClick={() => onView && onView(p)} className="relative aspect-square overflow-hidden text-left">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <button onClick={() => onView && onView(p)} className="font-medium leading-tight line-clamp-2 text-left hover:underline">{p.name}</button>
                    <div className="text-right font-semibold">${p.price}</div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-current" : "opacity-30"}`} />
                    ))}
                    <span className="ml-2 text-xs text-neutral-500">{p.rating.toFixed(1)}</span>
                  </div>
                  <button onClick={() => onAdd && onAdd(p)} className="mt-auto inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
