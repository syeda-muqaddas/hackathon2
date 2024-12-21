import { GiSofa } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-100 shadow-md">
      {/* Top Bar */}
      <div className="bg-purple-950 text-slate-300 py-2 text-xs flex justify-between items-center px-4">
        <span>✔ Free Shipping On All Orders $50+</span>
        <div className="flex gap-4">
          <span>Eng</span>
          <Link href="/Faq">Faqs</Link>
          <div className="flex items-center">
            <CiCircleAlert size={16}/>
            <span>Need Help</span>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="bg-white text-black py-3 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <GiSofa className="text-emerald-500 h-8 w-8" />
          <h1 className="text-lg font-semibold">Comforty</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/Cart">
            <div className="flex items-center gap-2">
              <FaCartShopping className="h-6 w-6 text-emerald-500" />
              <span>Cart</span>
              <span className="bg-emerald-600 text-white rounded-full px-2 py-1 text-xs">2</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-black py-2 flex flex-col md:flex-row justify-between items-center px-4">
        <ul className="flex gap-4 text-sm">
          <Link href="/"><li>Home</li></Link>
          <Link href="/Shop"><li>Shop</li></Link>
          <Link href="/Product"><li>Product</li></Link>
          <Link href="/Pages"><li>Pages</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
        </ul>
        <span className="text-sm">Contact: +92 3421128682</span>
      </div>
    </div>
  );
}
