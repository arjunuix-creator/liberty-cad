"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-400 ${
        scrolled || mobileMenuOpen
          ? "bg-[#0b2545]/95 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-transparent py-0"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo-white.svg"
            alt="Liberty Innovations Inc"
            width={200}
            height={40}
            className="h-[36px] md:h-[40px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav links + CTA */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-[family-name:var(--font-inter)] font-medium text-[13px] text-white/70 hover:text-white transition-colors tracking-[0.195px]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-scale font-[family-name:var(--font-inter)] font-semibold text-[13px] text-white tracking-[0.195px] px-5 h-[41px] flex items-center rounded-[6px] bg-white/12 border border-white/20 hover:bg-white/20 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu — drops down from below header */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-full bg-[#0b2545] z-[998] transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-[110%]"
        }`}
        style={{ height: "calc(100vh - 72px)" }}
      >

        {/* Nav items */}
        <div className="flex flex-col px-6 pt-6 gap-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-inter)] font-medium text-[18px] text-white/80 hover:text-white py-3 border-b border-white/10 transition-all duration-300"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-scale mt-6 font-[family-name:var(--font-inter)] font-semibold text-[15px] text-white tracking-[0.195px] px-6 h-[50px] flex items-center justify-center rounded-[8px] bg-white/12 border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
