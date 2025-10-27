export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">e</div>
            <span className="text-lg font-semibold">eShop</span>
          </div>
          <p className="mt-4 text-sm text-neutral-600 max-w-md">
            Your destination for high-quality essentials. We design everyday pieces that are easy to wear and made to last.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} eShop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
