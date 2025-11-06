"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const userRole = localStorage.getItem("role");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    };
    if (userRole) {
      setRole(userRole);
    };
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
    <nav className={`${isBlogPage ? "sticky top-0 z-50" : "absolute top-0 z-50"} w-full flex justify-center`}>
      <div
        className={`backdrop-blur-lg border border-white/20 shadow-md rounded-2xl flex items-center justify-between px-6 py-4 w-full max-w-7xl mt-4 
        ${isBlogPage ? "bg-black/90" : "bg-white/10"}`}
      >
        <h3 className="text-white font-bold text-xl">Blog Website</h3>

        <ul className="flex gap-x-10 text-white/90">
          <li className="text-lg hover:text-white transition">
            <Link href="/home">Home</Link>
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
            <span>{role}</span>
            <button
              onClick={handleLogOut}
              className="text-red-400 hover:text-red-200"
            >
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
