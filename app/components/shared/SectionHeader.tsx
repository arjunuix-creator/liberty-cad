import AnimateOnScroll from "../AnimateOnScroll";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  maxWidth?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
  maxWidth = "522px",
  className = "",
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll
      className={`${centered ? "text-center" : ""} mb-16 ${className}`}
    >
      <p
        className={`font-[family-name:var(--font-inter)] font-semibold text-[11.5px] tracking-[1.84px] uppercase mb-4 ${
          light ? "text-[rgba(126,200,227,0.7)]" : "text-[rgba(27,79,114,0.8)]"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-[family-name:var(--font-manrope)] font-bold text-[48px] leading-[1.1] tracking-[-1.2px] mb-5 ${
          light ? "text-white" : "text-[#0b2545]"
        } ${centered ? "mx-auto" : ""}`}
        style={{ maxWidth }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-[family-name:var(--font-inter)] text-[16px] leading-[1.75] ${
            light ? "text-white/50" : "text-[#7a8694]"
          } ${centered ? "mx-auto" : ""}`}
          style={{ maxWidth: "501px" }}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
