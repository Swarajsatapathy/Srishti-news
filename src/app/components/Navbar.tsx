"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Logo className="w-40 h-10" />
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-red-600"
                  : "text-slate-600 hover:text-red-600"
              }`}
            >
              Home
            </Link>

            {user?.role === "admin" && (
              <Link
                href="/admin"
                className={`text-sm font-semibold transition-colors ${
                  pathname === "/admin"
                    ? "text-red-600"
                    : "text-slate-600 hover:text-red-600"
                }`}
              >
                Admin Panel
              </Link>
            )}

            {user ? (
              <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                <span className="text-xs font-medium text-slate-500 hidden sm:block">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="px-5 py-2.5 text-sm font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
