"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ✅ Ensure client-only rendering
  useEffect(() => {
    setMounted(true);
    setLastScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near top
      if (currentScrollY < 80) {
        setShow(true);
      } else {
        setShow(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mounted]);

  // ✅ Prevent server/client mismatch
  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-out
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="mt-4 flex justify-between items-center rounded-full
          bg-white/70 backdrop-blur-xl border border-black/10
          shadow-[0_8px_30px_rgb(0,0,0,0.06)]
          px-6 py-4"
        >
          {/* Logo */}
          <div className="justify-self-start min-w-[103px]">
            <Link href="/" className="text-2xl font-bold geist">
              MA.
            </Link>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex justify-center gap-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* CTA */}
          <div className=" hidden md:block">
            <Link
              href="/lets-talk"
              className="rounded-full bg-black text-white
              px-5 py-2 text-sm font-medium hover:bg-gray-900 whitespace-nowrap transition"
            >
              Let’s Talk
            </Link>
          </div>
          <div className="lg:hidden">
            <button className="p-0 border-0 outline-0 bg-transparent text-2xl">
                <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
