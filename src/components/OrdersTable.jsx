import React, { useMemo, useState } from 'react';
import { BadgeCheck, Clock, PackageCheck, Search, XCircle } from 'lucide-react';

const sampleOrders = [
  {
    id: 'ORD-1001',
    customer: 'Ava Johnson',
    email: 'ava@example.com',
    amount: 129.98,
    status: 'paid',
    date: '2025-10-22',
    items: 3,
  },
  {
    id: 'ORD-1002',
    customer: 'Noah Lee',
    email: 'noah@example.com',
    amount: 59.0,
    status: 'pending',
    date: '2025-10-23',
    items: 1,
  },
  {
    id: 'ORD-1003',
    customer: 'Mia Chen',
    email: 'mia@example.com',
    amount: 249.49,
    status: 'fulfilled',
    date: '2025-10-24',
    items: 5,
  },
  {
    id: 'ORD-1004',
    customer: 'Liam Patel',
    email: 'liam@example.com',
    amount: 89.99,
    status: 'canceled',
    date: '2025-10-25',
    items: 2,
  },
];

const StatusPill = ({ status }) => {
  const map = {
    paid: { label: 'Paid', color: 'bg-emerald-100 text-emerald-700', icon: BadgeCheck },
    pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700', icon: Clock },
    fulfilled: { label: 'Fulfilled', color: 'bg-blue-100 text-blue-700', icon: PackageCheck },
    canceled: { label: 'Canceled', color: 'bg-rose-100 text-rose-700', icon: XCircle },
  };
  const Cmp = map[status]?.icon || Clock;
  const cls = map[status]?.color || 'bg-gray-100 text-gray-700';
  const label = map[status]?.label || status;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>
      <Cmp className="h-3.5 w-3.5" /> {label}
    </span>
  );
};

export default function OrdersTable() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');

  const results = useMemo(() => {
    return sampleOrders.filter((o) => {
      const matchText = `${o.id} ${o.customer} ${o.email}`.toLowerCase().includes(query.toLowerCase());
      const matchStatus = status === 'all' ? true : o.status === status;
      return matchText && matchStatus;
    });
  }, [query, status]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search orders, customers, email"
            className="w-full rounded-md border border-gray-200 bg-white px-9 py-2 text-sm outline-none ring-0 transition focus:border-black"
          />
        </div>
        <div className="flex items-center gap-2">
          {['all', 'paid', 'pending', 'fulfilled', 'canceled'].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-md px-3 py-2 text-sm capitalize ${
                status === s ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Order</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Items</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {results.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">{o.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <div className="font-medium">{o.customer}</div>
                  <div className="text-xs text-gray-500">{o.email}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{o.items}</td>
                <td className="px-4 py-3 text-sm text-gray-900">${o.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-sm"><StatusPill status={o.status} /></td>
                <td className="px-4 py-3 text-sm text-gray-700">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
