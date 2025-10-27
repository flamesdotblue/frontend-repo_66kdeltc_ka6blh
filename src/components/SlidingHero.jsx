import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Fresh fits for every day",
    subtitle: "Comfort-first essentials you can dress up or down",
    image:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Run, move, repeat",
    subtitle: "Breathable athleisure engineered for performance",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Minimal sneakers, max comfort",
    subtitle: "Lightweight styles made to go the distance",
    image:
      "https://images.unsplash.com/photo-1542291022-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function SlidingHero({ onShopNow }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl border bg-neutral-100">
          {/* Slides */}
          <div className="relative h-[380px] sm:h-[480px]">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                  <h2 className="text-3xl sm:text-4xl font-bold drop-shadow">{s.title}</h2>
                  <p className="mt-2 text-white/90 max-w-xl drop-shadow">{s.subtitle}</p>
                  <div className="mt-5 flex gap-3">
                    <button onClick={onShopNow} className="px-5 py-3 rounded-lg bg-white text-black font-medium">Shop now</button>
                    <button onClick={next} className="px-5 py-3 rounded-lg bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20">Next</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button onClick={prev} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full grid place-items-center bg-white/90 hover:bg-white border">‹</button>
          <button onClick={next} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full grid place-items-center bg-white/90 hover:bg-white border">›</button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border ${i === index ? "bg-white border-white" : "bg-white/50 border-white/80"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
