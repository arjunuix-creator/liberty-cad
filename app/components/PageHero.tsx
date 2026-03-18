import React from "react";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  description: string;
  cta?: { text: string; href: string };
}

export default function PageHero({ label, title, description, cta }: PageHeroProps) {
  return (
    <section className="bg-[#0b2545] pt-32 pb-20 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute w-[600px] h-[400px] rounded-full bg-[rgba(27,79,114,0.12)] blur-[100px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <AnimateOnScroll className="max-w-[650px]">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(126,200,227,0.7)] tracking-[1.84px] uppercase mb-5">
            {label}
          </p>
          <h1 className="font-[family-name:var(--font-manrope)] font-extrabold text-[clamp(40px,4.5vw,56px)] text-white leading-[1.1] tracking-[-1.4px] mb-6">
            {title}
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[17px] text-white/60 leading-[1.75] max-w-[520px]">
            {description}
          </p>
          {cta && (
            <Link
              href={cta.href}
              className="btn-scale mt-8 group inline-flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-semibold text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/90 transition-colors"
            >
              {cta.text}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
