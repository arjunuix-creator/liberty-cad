import AnimateOnScroll from "../AnimateOnScroll";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

interface TestimonialSectionProps {
  label?: string;
  testimonial: Testimonial;
  background?: "white" | "gray" | "dark";
  className?: string;
}

export default function TestimonialSection({
  label = "Client Testimonial",
  testimonial,
  background = "gray",
  className = "",
}: TestimonialSectionProps) {
  const bgColors = {
    white: "bg-white",
    gray: "bg-[#f7f8fa]",
    dark: "bg-[#0b2545]",
  };

  const isLight = background !== "dark";

  return (
    <section className={`${bgColors[background]} py-24 ${className}`}>
      <div className="max-w-[1120px] mx-auto px-6">
        <AnimateOnScroll className="max-w-[800px] mx-auto text-center">
          <p
            className={`font-[family-name:var(--font-inter)] font-semibold text-[11.5px] tracking-[1.84px] uppercase mb-8 ${
              isLight ? "text-[rgba(27,79,114,0.8)]" : "text-[rgba(126,200,227,0.7)]"
            }`}
          >
            {label}
          </p>
          <blockquote
            className={`font-[family-name:var(--font-manrope)] font-medium text-[28px] leading-[1.5] tracking-[-0.7px] mb-8 ${
              isLight ? "text-[#0b2545]" : "text-white"
            }`}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            {testimonial.avatar && (
              <div className="size-14 rounded-full overflow-hidden mb-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="size-full object-cover"
                />
              </div>
            )}
            <div
              className={`font-[family-name:var(--font-inter)] font-semibold text-[15px] ${
                isLight ? "text-[#0b2545]" : "text-white"
              }`}
            >
              {testimonial.author}
            </div>
            <div
              className={`font-[family-name:var(--font-inter)] text-[14px] ${
                isLight ? "text-[#7a8694]" : "text-white/50"
              }`}
            >
              {testimonial.role}
              {testimonial.company && `, ${testimonial.company}`}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
