import React from 'react';
import { ArrowUpRight, DollarSign, Package, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Revenue (30d)', value: '$24,560', change: '+12.4%', icon: DollarSign, color: 'bg-emerald-50 text-emerald-700' },
    { name: 'Orders', value: '1,284', change: '+6.1%', icon: Package, color: 'bg-blue-50 text-blue-700' },
    { name: 'Customers', value: '842', change: '+2.4%', icon: Users, color: 'bg-violet-50 text-violet-700' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.name} className="rounded-xl border bg-white p-4">
            <div className="flex items-center justify-between">
              <div className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs ${s.color}`}>
                <s.icon className="h-3.5 w-3.5" />
                <span className="font-medium">{s.name}</span>
              </div>
              <span className="text-sm text-emerald-700">{s.change}</span>
            </div>
            <div className="mt-4 text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-gradient-to-br from-gray-50 to-white p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold">Configure Payments</h3>
            <p className="mt-1 text-sm text-gray-600">
              Connect Razorpay in your backend to accept payments and auto-mark paid orders.
            </p>
          </div>
          <a
            href="https://razorpay.com/docs/api/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            View Docs <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
