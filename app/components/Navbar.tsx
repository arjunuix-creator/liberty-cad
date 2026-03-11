"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#0b2545]/95 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-transparent py-0"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Image
            src="/logo-white.svg"
            alt="Liberty CAD"
            width={200}
            height={44}
            className="h-[36px] w-auto"
            priority
          />
        </a>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-9">
          {["Services", "Industries", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link font-[family-name:var(--font-inter)] font-medium text-[13px] text-white/70 hover:text-white transition-colors tracking-[0.195px]"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-scale font-[family-name:var(--font-inter)] font-semibold text-[13px] text-white tracking-[0.195px] px-5 h-[41px] flex items-center rounded-[6px] bg-white/12 border border-white/20 hover:bg-white/20 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
