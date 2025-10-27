export default function Cart({ items, onRemove, onNavigate }) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Your cart</h1>
        {items.length === 0 ? (
          <div className="mt-6 rounded-xl border p-6 text-center">
            <p className="text-neutral-600">Your cart is empty.</p>
            <button onClick={() => onNavigate("home")} className="mt-4 px-4 py-2 rounded-lg bg-black text-white">Start shopping</button>
          </div>
        ) : (
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg border bg-white">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-neutral-600">${item.price}</div>
                  </div>
                  <button onClick={() => onRemove(idx)} className="text-sm text-neutral-600 hover:underline">Remove</button>
                </div>
              ))}
            </div>
            <div className="rounded-xl border p-5 h-fit bg-white">
              <h2 className="font-semibold">Order summary</h2>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="mt-3 pt-3 border-t flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full px-4 py-2 rounded-lg bg-black text-white">Checkout</button>
              <button onClick={() => onNavigate("home")} className="mt-2 w-full px-4 py-2 rounded-lg border">Continue shopping</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
