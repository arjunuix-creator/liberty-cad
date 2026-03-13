import AnimateOnScroll from "../AnimateOnScroll";
import Link from "next/link";

const imgArrow =
  "https://www.figma.com/api/mcp/asset/7406dfcc-118d-4411-bd1d-468423e2bc1c";
const imgPhone =
  "https://www.figma.com/api/mcp/asset/4b9c2d39-60c1-4e8a-8dd7-e1b4d98a699f";

interface CTASectionProps {
  label?: string;
  title: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: "phone" | "arrow";
  };
  showPhone?: boolean;
  phoneNumber?: string;
  className?: string;
}

export default function CTASection({
  label,
  title,
  description,
  primaryButton = { text: "Get a Quote", href: "/contact" },
  secondaryButton,
  showPhone = false,
  phoneNumber = "519-995-5795",
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`bg-[#0b2545] py-20 relative overflow-hidden ${className}`}
    >
      {/* Glow — animated */}
      <div className="animate-glow-pulse absolute w-[600px] h-[400px] rounded-full bg-[rgba(27,79,114,0.15)] blur-[100px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />

      <AnimateOnScroll className="relative z-10 max-w-[560px] mx-auto px-6 text-center">
        {label && (
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(126,200,227,0.7)] tracking-[1.84px] uppercase mb-6">
            {label}
          </p>
        )}
        <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[36px] md:text-[42px] text-white leading-[1.15] tracking-[-1.05px] mb-5">
          {title}
        </h2>
        {description && (
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white/45 leading-[1.75] mb-10 max-w-[414px] mx-auto">
            {description}
          </p>
        )}

        {/* Buttons */}
        <AnimateOnScroll delay={150} className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href={primaryButton.href}
            className="btn-scale group flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-semibold text-[14.5px] tracking-[0.145px] px-6 h-[50px] rounded-[8px] hover:bg-white/90 transition-colors"
          >
            {primaryButton.text}
            <img
              src={imgArrow}
              alt=""
              className="size-[15px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="btn-scale group flex items-center gap-2.5 bg-white/[0.06] border border-white/12 text-white/75 font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/10 transition-colors"
            >
              {secondaryButton.icon === "phone" && (
                <img
                  src={imgPhone}
                  alt=""
                  className="size-[15px] transition-transform duration-300 group-hover:rotate-12"
                />
              )}
              {secondaryButton.text}
              {secondaryButton.icon === "arrow" && (
                <img
                  src={imgArrow}
                  alt=""
                  className="size-[15px] opacity-70 transition-transform duration-200 group-hover:translate-x-1"
                />
              )}
            </Link>
          )}
        </AnimateOnScroll>

        {/* Direct phone */}
        {showPhone && (
          <AnimateOnScroll delay={250} className="flex items-center justify-center gap-2 mt-8">
            <span className="font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/25">
              Or call us directly:
            </span>
            <a
              href={`tel:${phoneNumber.replace(/-/g, "")}`}
              className="font-[family-name:var(--font-inter)] font-medium text-[13.5px] text-white/50 hover:text-white/70 transition-colors"
            >
              {phoneNumber}
            </a>
          </AnimateOnScroll>
        )}
      </AnimateOnScroll>
    </section>
  );
}
