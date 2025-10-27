import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, Shield, LogOut } from 'lucide-react';

export default function AdminNavbar({ current, onNavigate }) {
  const linkBase =
    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors';
  const active = 'bg-black text-white';
  const idle = 'text-gray-700 hover:bg-gray-100';

  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-black" />
          <span className="text-lg font-semibold">Store Admin</span>
        </div>
        <nav className="flex items-center gap-2">
          <button
            className={`${linkBase} ${current === 'dashboard' ? active : idle}`}
            onClick={() => onNavigate('dashboard')}
            aria-current={current === 'dashboard'}
          >
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </button>
          <button
            className={`${linkBase} ${current === 'orders' ? active : idle}`}
            onClick={() => onNavigate('orders')}
            aria-current={current === 'orders'}
          >
            <ShoppingCart className="h-4 w-4" /> Orders
          </button>
          <button
            className={`${linkBase} ${current === 'products' ? active : idle}`}
            onClick={() => onNavigate('products')}
            aria-current={current === 'products'}
          >
            <Package className="h-4 w-4" /> Products
          </button>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </header>
  );
}
