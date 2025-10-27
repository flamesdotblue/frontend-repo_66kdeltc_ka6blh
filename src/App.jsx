import React, { useState } from 'react';
import AdminNavbar from './components/AdminNavbar';
import AdminDashboard from './components/AdminDashboard';
import OrdersTable from './components/OrdersTable';
import ProductsTable from './components/ProductsTable';

export default function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AdminNavbar current={view} onNavigate={setView} />

      <main className="mx-auto max-w-6xl px-4 py-6">
        {view === 'dashboard' && <AdminDashboard />}
        {view === 'orders' && <OrdersTable />}
        {view === 'products' && <ProductsTable />}
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Store Admin. All rights reserved.</p>
            <p className="text-xs">Demo UI. Hook up your backend API to go live.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
