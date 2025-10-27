import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar cartCount={cartItems.length} />
      <main className="flex-1">
        <Hero onShopNow={() => {
          const el = document.getElementById("featured");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}
