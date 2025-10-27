import { MapPin, Package, User } from "lucide-react";
import { useState } from "react";

const MOCK_ORDERS = [
  { id: "o1001", date: "2024-08-12", total: 132.5, status: "Delivered", items: 3, shipTo: "Jane Cooper" },
  { id: "o1002", date: "2024-09-01", total: 59.0, status: "Shipped", items: 1, shipTo: "Jane Cooper" },
  { id: "o1003", date: "2024-10-03", total: 248.75, status: "Processing", items: 5, shipTo: "Jane Cooper" },
];

const MOCK_ADDRESSES = [
  { id: "a1", name: "Home", recipient: "Jane Cooper", line1: "500 Terry Francois St", line2: "", city: "San Francisco", state: "CA", zip: "94158", country: "USA", phone: "+1 555 123 4567" },
  { id: "a2", name: "Work", recipient: "Jane Cooper", line1: "1 Market Street", line2: "Suite 300", city: "San Francisco", state: "CA", zip: "94105", country: "USA", phone: "+1 555 987 6543" },
];

export default function Account({ onNavigate }) {
  const [tab, setTab] = useState("orders");

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-black text-white grid place-items-center"><User className="h-5 w-5" /></div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Your account</h1>
            <p className="text-neutral-600">Manage your orders, addresses, and account details</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab("orders")} className={`px-3 py-2 rounded-lg border text-sm font-medium ${tab === "orders" ? "bg-black text-white" : "bg-white hover:bg-neutral-50"}`}>
            Orders
          </button>
          <button onClick={() => setTab("addresses")} className={`px-3 py-2 rounded-lg border text-sm font-medium ${tab === "addresses" ? "bg-black text-white" : "bg-white hover:bg-neutral-50"}`}>
            Addresses
          </button>
        </div>

        {tab === "orders" ? (
          <div className="grid gap-4">
            {MOCK_ORDERS.map((o) => (
              <div key={o.id} className="rounded-xl border bg-white p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center"><Package className="h-5 w-5" /></div>
                    <div>
                      <div className="font-medium">Order {o.id}</div>
                      <div className="text-xs text-neutral-500">Placed on {o.date}</div>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-700">
                    {o.items} item{o.items === 1 ? "" : "s"} • ${o.total.toFixed(2)}
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full border text-xs">{o.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {MOCK_ADDRESSES.map((a) => (
              <div key={a.id} className="rounded-xl border bg-white p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center"><MapPin className="h-5 w-5" /></div>
                  <div className="font-medium">{a.name}</div>
                </div>
                <div className="text-sm text-neutral-700">
                  <div className="font-medium">{a.recipient}</div>
                  <div>{a.line1}</div>
                  {a.line2 && <div>{a.line2}</div>}
                  <div>{a.city}, {a.state} {a.zip}</div>
                  <div>{a.country}</div>
                  <div className="mt-2 text-neutral-500">{a.phone}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <button onClick={() => onNavigate && onNavigate("home")} className="text-sm font-medium hover:underline">Continue shopping</button>
        </div>
      </div>
    </section>
  );
}
