export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
            New season • Spring/Summer
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Shop stylish essentials made for daily comfort
          </h1>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-prose">
            Discover curated collections with premium materials, modern fits, and everyday prices. Fast shipping and easy returns on every order.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={onShopNow} className="px-5 py-3 rounded-lg bg-black text-white font-medium">
              Shop now
            </button>
            <a href="#featured" className="px-5 py-3 rounded-lg border font-medium hover:bg-neutral-50">
              Browse featured
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
            <div>Free shipping over $50</div>
            <div className="h-1 w-1 rounded-full bg-neutral-300" />
            <div>30-day returns</div>
            <div className="h-1 w-1 rounded-full bg-neutral-300" />
            <div>Secure checkout</div>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 via-white to-neutral-200">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
            alt="Lifestyle apparel"
            className="absolute inset-0 h-full w-full object-cover mix-blend-multiply"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
