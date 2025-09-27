

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black text-white flex justify-between items-center p-4 z-50">
      <div className="text-2xl font-bold">Garage Bazar India</div>
      <nav className="space-x-6">
        <Link className="hover:text-orange-500" to="/">Home</Link>
        <Link className="hover:text-orange-500" to="/shop">Shop</Link>
        <Link className="hover:text-orange-500" to="/about">About Us</Link>
        <Link className="hover:text-orange-500" to="/faq">FAQ</Link>
        <Link className="hover:text-orange-500" to="/contact">Contact</Link>
      </nav>
      <a href="https://wa.me/your-number?text=Hello%20Garage%20Bazar%20India,%20I%20want%20to%20order%20parts" className="bg-lime-500 px-4 py-2 rounded hover:brightness-110">WhatsApp</a>
    </header>
  );
}
