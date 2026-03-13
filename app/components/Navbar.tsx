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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
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
            alt="Liberty CAD"
            width={200}
            height={44}
            className="h-[32px] md:h-[36px] w-auto"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-[#0b2545]/98 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-6 pt-8 gap-2">
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
