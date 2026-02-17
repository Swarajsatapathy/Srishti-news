"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./Icon";
import Logo from "./Logo";

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface TickerItem {
  id: number;
  title: string;
  imageUrl?: string | null;
}

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Web News", href: "/web-news" },
    { label: "Video News", href: "/video-news" },
    { label: "Live with Srishti", href: "/live" },
    { label: "Editor's Desk", href: "/editors-desk" },
    { label: "Reporters", href: "/reporters" },
    { label: "E-Paper", href: "/e-paper" },
    { label: "Contact Us", href: "/contact" },
  ];

  const fallbackTicker: TickerItem[] = [
    { id: 1, title: "Breaking: Major cultural festival begins today" },
    { id: 2, title: "Prime Minister inaugurates new development project" },
    { id: 3, title: "Nursing education becomes service and reform focus" },
  ];

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/news")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!isMounted) return;
        const items = (data?.news || [])
          .slice(0, 6)
          .map((item: TickerItem) => ({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl ?? null,
          }));
        setTickerItems(items.length > 0 ? items : fallbackTicker);
      })
      .catch(() => {
        if (isMounted) setTickerItems(fallbackTicker);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  };

  const timeLabel = now
    ? now.toLocaleTimeString("en-US", { hour12: false })
    : "";
  const dateLabel = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      <div className="bg-[#1a1e33] text-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 py-2 text-xs">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold tracking-wider">
                {timeLabel}
              </span>
              <span className="text-white/80 font-medium">{dateLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#1877f2] text-white"
                  aria-label="Facebook"
                >
                  <Icon name="facebook" className="h-4 w-4" label="Facebook" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#111111] text-white"
                  aria-label="X"
                >
                  <Icon name="twitter" className="h-4 w-4" label="X" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#ff0000] text-white"
                  aria-label="YouTube"
                >
                  <Icon name="youtube" className="h-4 w-4" label="YouTube" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#e1306c] text-white"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" className="h-4 w-4" label="Instagram" />
                </a>
                <a
                  href="https://api.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#25d366] text-white"
                  aria-label="WhatsApp"
                >
                  <Icon name="whatsapp" className="h-4 w-4" label="WhatsApp" />
                </a>
              </div>
              {user ? (
                <div className="flex items-center gap-3 border-l border-white/20 pl-3">
                  <span className="text-[11px] text-white/70 hidden sm:block">
                    Hi, {user.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-[11px] font-semibold text-white/80 hover:text-white"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="rounded bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-red-500"
                >
                  Join as Reporter
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 py-4 text-center">
            <Link href="/" className="block w-full">
              <div className="relative mx-auto h-32 sm:h-40 w-full overflow-hidden">
                <Image
                  src="/LOGO.png"
                  alt="Srishti News banner"
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
            </Link>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Odisha | India | World
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-700 text-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-semibold uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors hover:text-white/80 ${
                  pathname === link.href ? "text-white" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user?.role === "admin" && (
              <Link
                href="/admin"
                className={`whitespace-nowrap transition-colors hover:text-white/80 ${
                  pathname === "/admin" ? "text-white" : "text-white/90"
                }`}
              >
                Admin Panel
              </Link>
            )}
            <button
              className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-4.35-4.35m1.85-4.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase text-red-700">
              Flash Story
            </span>
            <div className="ticker flex-1 overflow-hidden">
              <div className="ticker-track flex w-[200%] items-center gap-8">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex items-center gap-3 pr-6 text-sm text-slate-700 whitespace-nowrap"
                  >
                    <div className="h-8 w-8 overflow-hidden rounded-full border border-slate-200">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-cover"
                        />
                      ) : (
                        <ImagePlaceholder
                          width={32}
                          height={32}
                          text=""
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
