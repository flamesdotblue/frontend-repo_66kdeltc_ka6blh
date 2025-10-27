import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ data = [], onSearch, placeholder = "Search for products, brands, and more" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const containerRef = useRef(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const names = Array.from(new Set(
      data
        .map((p) => p.name)
        .filter(Boolean)
    ));
    return names
      .filter((n) => n.toLowerCase().includes(q))
      .slice(0, 8);
  }, [data, query]);

  useEffect(() => {
    const onClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const submitSearch = (q) => {
    if (!q) return;
    setOpen(false);
    if (onSearch) onSearch(q);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 border focus-within:ring-2 focus-within:ring-black">
        <Search className="h-4 w-4 text-neutral-500" />
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setHighlight(0); }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setHighlight((h) => Math.min(h + 1, Math.max(suggestions.length - 1, 0))); }
            if (e.key === "ArrowUp") { e.preventDefault(); setHighlight((h) => Math.max(h - 1, 0)); }
            if (e.key === "Enter") { e.preventDefault(); if (open && suggestions[highlight]) submitSearch(suggestions[highlight]); else submitSearch(query); }
            if (e.key === "Escape") { setOpen(false); }
          }}
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-sm placeholder:text-neutral-500"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-neutral-500 hover:text-neutral-700">
            <X className="h-4 w-4" />
          </button>
        )}
        <button onClick={() => submitSearch(query)} className="px-3 py-1.5 rounded-md bg-black text-white text-sm font-medium">Search</button>
      </div>

      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white shadow-lg overflow-hidden">
          <ul className="max-h-72 overflow-auto">
            {suggestions.map((s, idx) => (
              <li key={s}>
                <button
                  onMouseEnter={() => setHighlight(idx)}
                  onClick={() => submitSearch(s)}
                  className={`w-full text-left px-3 py-2 text-sm ${idx === highlight ? "bg-neutral-100" : "bg-white"}`}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
