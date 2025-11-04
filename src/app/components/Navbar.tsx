"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function NavBar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);

    setTimeout(() => {
      router.push("/")
    }, 2000);
  }
  return (
    
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md rounded-2xl mt-4">
        <h3 className="text-white font-bold text-xl">Blog Website</h3>

        <ul className="flex gap-x-10 text-white/90">
          <li className="text-lg hover:text-white transition">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg hover:text-white transition">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg hover:text-white transition">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="text-lg hover:text-white transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-4 text-white">
            <span>Hi, {user}</span>
            <button onClick={handleLogOut} className="text-red-400 hover:text-red-200">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="text-white hover:text-gray-300">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
