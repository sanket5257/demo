"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // You can install lucide-react icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        bg-gradient-to-b from-deepsea/40 to-transparent 
        backdrop-blur-md border-b border-brandRing/10
        ${scrolled ? "backdrop-blur-xl border-brandRing/20" : ""}`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <span className="text-heading font-bold tracking-wide text-lg drop-shadow-[0_0_6px_rgba(6,182,212,0.6)] uppercase">
            GOFLOAT <span className="text-brand">TECHNOLOGIES</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
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
          {/* Call Now Button */}
          <a
            href="tel:+1234567890"
            className="ml-4 px-4 py-2 bg-brand text-white rounded-lg shadow hover:bg-brand/90 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-deepsea/90 backdrop-blur-md border-t border-brandRing/20">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-body text-lg font-medium hover:text-heading transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+9182374 64373"
              className="px-6 py-2 bg-brand text-white rounded-lg shadow hover:bg-brand/90 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
