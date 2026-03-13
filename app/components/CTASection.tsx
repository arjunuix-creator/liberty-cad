import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const imgArrow =
  "https://www.figma.com/api/mcp/asset/7406dfcc-118d-4411-bd1d-468423e2bc1c";
const imgPhone =
  "https://www.figma.com/api/mcp/asset/4b9c2d39-60c1-4e8a-8dd7-e1b4d98a699f";

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
          At Liberty CAD, We Don&apos;t Just Design — We Deliver Confidence.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white/45 leading-[1.75] mb-12 max-w-[414px] mx-auto">
          Let&apos;s remove the engineering capacity constraints slowing your
          plant projects.
        </p>

        {/* Buttons */}
        <AnimateOnScroll delay={150} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/contact"
            className="btn-scale group flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-semibold text-[14.5px] tracking-[0.145px] px-6 h-[50px] rounded-[8px] hover:bg-white/90 transition-colors"
          >
            Get a Quote
            <img
              src={imgArrow}
              alt=""
              className="size-[15px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <a
            href="tel:2265265336"
            className="btn-scale group flex items-center gap-2.5 bg-white/[0.06] border border-white/12 text-white/75 font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/10 transition-colors"
          >
            <img
              src={imgPhone}
              alt=""
              className="size-[15px] transition-transform duration-300 group-hover:rotate-12"
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
            href="tel:2265265336"
            className="font-[family-name:var(--font-inter)] font-medium text-[13.5px] text-white/50 hover:text-white/70 transition-colors"
          >
            226-526-5336
          </a>
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
}
