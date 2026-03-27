import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#0b2545] py-24 relative overflow-hidden">
      {/* Glow — animated */}
      <div className="animate-glow-pulse absolute w-[600px] h-[400px] rounded-full bg-[rgba(27,79,114,0.15)] blur-[100px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />

      <AnimateOnScroll className="relative z-10 max-w-[560px] mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(126,200,227,0.7)] tracking-[1.84px] uppercase mb-6">
          Get Started
        </p>
        <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[42px] text-white leading-[1.15] tracking-[-1.05px] mb-7">
          At Liberty CAD Inc, We Don&apos;t Just Design — We Deliver Confidence.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white/45 leading-[1.75] mb-12 max-w-[414px] mx-auto">
          Let&apos;s remove the engineering capacity constraints slowing your
          plant projects.
        </p>

        {/* Buttons */}
        <AnimateOnScroll delay={150} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/contact"
            className="btn-scale group flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 py-3 rounded-[8px] hover:bg-white/90 hover:scale-[1.02] transition-all duration-200"
          >
            Get a Quote
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <a
            href="tel:2143962312"
            className="btn-scale group flex items-center gap-2.5 border border-white/40 text-white bg-transparent font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 py-3 rounded-[8px] hover:bg-white/10 hover:scale-[1.02] transition-all duration-200"
          >
            <Phone
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            Schedule a Call
          </a>
        </AnimateOnScroll>

        {/* Direct phone */}
        <AnimateOnScroll delay={250} className="flex items-center justify-center gap-2">
          <span className="font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/25">
            Or call us directly:
          </span>
          <a
            href="tel:2143962312"
            className="font-[family-name:var(--font-inter)] font-medium text-[13.5px] text-white/50 hover:text-white/70 transition-colors"
          >
            (214) 396-2312
          </a>
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
}
