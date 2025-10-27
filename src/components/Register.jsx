import { useState } from "react";

export default function Register({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onNavigate("login");
  };

  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold">Create account</h1>
        <p className="text-neutral-600 mt-1">Join us for faster checkout and order tracking.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 rounded-lg bg-black text-white font-medium">Create account</button>
        </form>
        <p className="mt-4 text-sm text-neutral-600">
          Already have an account? <button className="underline" onClick={() => onNavigate("login")}>Sign in</button>
        </p>
      </div>
    </section>
  );
}
