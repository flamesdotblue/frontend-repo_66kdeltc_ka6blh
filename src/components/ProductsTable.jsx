import React, { useMemo, useState } from 'react';
import { Plus, Search, Edit3, Trash2, Tag, Check } from 'lucide-react';

const initialProducts = [
  { id: 'P-100', name: 'Classic Tee', price: 29.99, stock: 34, category: 'Apparel', active: true },
  { id: 'P-101', name: 'Denim Jacket', price: 89.0, stock: 12, category: 'Apparel', active: true },
  { id: 'P-102', name: 'Running Shoes', price: 119.5, stock: 8, category: 'Footwear', active: true },
  { id: 'P-103', name: 'Leather Belt', price: 24.99, stock: 50, category: 'Accessories', active: false },
];

export default function ProductsTable() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: '', price: '', stock: '', category: 'General' });

  const filtered = useMemo(() => {
    return products.filter((p) => `${p.id} ${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
  }, [products, query]);

  const addProduct = () => {
    if (!form.name || !form.price || !form.stock) return;
    const newP = {
      id: `P-${Math.floor(Math.random() * 900 + 100)}`,
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      category: form.category || 'General',
      active: true,
    };
    setProducts([newP, ...products]);
    setForm({ name: '', price: '', stock: '', category: 'General' });
  };

  const remove = (id) => setProducts(products.filter((p) => p.id !== id));

  const toggleActive = (id) =>
    setProducts(products.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products by name, id, category"
              className="w-full rounded-md border border-gray-200 bg-white px-9 py-2 text-sm outline-none focus:border-black"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={addProduct}
            className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="grid gap-4 rounded-xl border p-4 md:grid-cols-4">
        <div className="space-y-2 md:col-span-1">
          <div className="text-sm font-medium">Quick Add</div>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-black"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Price"
              type="number"
              step="0.01"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-black"
            />
            <input
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              placeholder="Stock"
              type="number"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-black"
            />
          </div>
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-black"
          />
          <button
            onClick={addProduct}
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Save Product
          </button>
        </div>
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-xl border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Stock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Active</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{p.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{p.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-800">
                        <Tag className="h-3.5 w-3.5" /> {p.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">${p.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{p.stock}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <button
                        onClick={() => toggleActive(p.id)}
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ${
                          p.active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" /> {p.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right text-sm">
                      <div className="inline-flex items-center gap-2">
                        <button className="rounded-md border bg-white p-2 hover:bg-gray-50">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => remove(p.id)}
                          className="rounded-md border bg-white p-2 text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
