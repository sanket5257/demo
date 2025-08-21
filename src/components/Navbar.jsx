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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        bg-gradient-to-b from-deepsea/40 to-transparent 
        backdrop-blur-md border-b border-brandRing/10
        ${scrolled ? "backdrop-blur-xl border-brandRing/20" : ""}
      `}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-brand/20 border border-brandRing shadow-glow" />
          <span className="text-heading font-bold tracking-wide text-lg drop-shadow-[0_0_6px_rgba(6,182,212,0.6)] uppercase">
            GOFLOAT <span className="text-brand">TECHNOLOGIES</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-body hover:text-heading transition-colors 
                         after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 
                         after:bg-brand after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
