"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-[#0D202A]/80 backdrop-blur border-b border-borderdark" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-brand/20 border border-brandRing" />
          <span className="text-heading font-semibold tracking-wide">OceanLabs</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-heading">Home</Link>
          <Link href="/products" className="hover:text-heading">Products</Link>
          <a href="#about" className="hover:text-heading">About</a>
          <a href="#contact" className="hover:text-heading">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="ocean-outline">Talk to us</a>
          <a href="/products" className="ocean-button">Explore</a>
        </div>
      </nav>
    </header>
  );
}
