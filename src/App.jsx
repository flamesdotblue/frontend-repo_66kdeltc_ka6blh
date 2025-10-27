import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SlidingHero from "./components/SlidingHero";
import ProductGrid, { PRODUCTS } from "./components/ProductGrid";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import SearchResults from "./components/SearchResults";
import Account from "./components/Account";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [route, setRoute] = useState("home"); // home | login | register | cart | product | search | account
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProductId) || null,
    [selectedProductId]
  );

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const navigate = (to) => setRoute(to);

  const handleSearch = (q) => {
    setSearchQuery(q);
    setRoute("search");
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar cartCount={cartItems.length} onNavigate={navigate} onSearch={handleSearch} searchData={PRODUCTS} />
      <main className="flex-1">
        {route === "home" && (
          <>
            <SlidingHero onShopNow={() => {
              const el = document.getElementById("featured");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }} />
            <ProductGrid
              onAddToCart={handleAddToCart}
              onViewProduct={(p) => {
                setSelectedProductId(p.id);
                setRoute("product");
              }}
            />
          </>
        )}

        {route === "login" && <Login onNavigate={navigate} />}
        {route === "register" && <Register onNavigate={navigate} />}
        {route === "cart" && (
          <Cart items={cartItems} onRemove={handleRemoveFromCart} onNavigate={navigate} />
        )}
        {route === "product" && (
          <ProductDetail
            product={selectedProduct}
            onAddToCart={(p) => {
              handleAddToCart(p);
              setRoute("cart");
            }}
            onBack={() => setRoute("home")}
          />
        )}
        {route === "search" && (
          <SearchResults
            query={searchQuery}
            results={searchResults}
            onView={(p) => {
              setSelectedProductId(p.id);
              setRoute("product");
            }}
            onAdd={handleAddToCart}
          />
        )}
        {route === "account" && (
          <Account onNavigate={navigate} />
        )}
      </main>
      <Footer />
    </div>
  );
}
