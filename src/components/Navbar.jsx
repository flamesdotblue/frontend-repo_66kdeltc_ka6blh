import { ShoppingCart, User, Home } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar({ cartCount = 0, onNavigate, onSearch, searchData = [] }) {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <button onClick={() => onNavigate && onNavigate("home")} className="flex items-center gap-3 shrink-0">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">e</div>
          <span className="text-xl font-semibold tracking-tight">eShop</span>
        </button>

        <div className="hidden md:block flex-1">
          <SearchBar data={searchData} onSearch={onSearch} />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => onNavigate && onNavigate("home")} className="inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-neutral-50">
            <Home className="h-5 w-5" />
          </button>
          <button onClick={() => onNavigate && onNavigate("account")} className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-neutral-50">
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

      <div className="md:hidden px-4 pb-3">
        <SearchBar data={searchData} onSearch={onSearch} />
      </div>
    </header>
  );
}
