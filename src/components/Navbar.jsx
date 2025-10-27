import { ShoppingCart, User, Search, Home } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0, onNavigate }) {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    if (onNavigate) onNavigate("home");
  };

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate && onNavigate("home")} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">e</div>
          <span className="text-xl font-semibold tracking-tight">eShop</span>
        </button>

        <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 border focus-within:ring-2 focus-within:ring-black">
            <Search className="h-4 w-4 text-neutral-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products"
              className="bg-transparent outline-none w-full text-sm placeholder:text-neutral-500"
            />
          </div>
          <button type="submit" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium">Search</button>
        </form>

        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate && onNavigate("home")} className="inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-neutral-50">
            <Home className="h-5 w-5" />
          </button>
          <button onClick={() => onNavigate && onNavigate("login")} className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-neutral-50">
            <User className="h-5 w-5" />
          </button>
          <button onClick={() => onNavigate && onNavigate("cart")} className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-neutral-50">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-black text-white text-xs grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
