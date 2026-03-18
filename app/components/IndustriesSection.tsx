import AnimateOnScroll from "./AnimateOnScroll";
import {
  Flame,
  Zap,
  Thermometer,
  FlaskConical,
  HardHat,
  Droplets,
  Leaf,
  Building2,
} from "lucide-react";

const industries = [
  {
    Icon: Flame,
    name: "Oil & Gas",
    color: "rgba(230,126,34,0.10)",
    iconColor: "#e67e22",
  },
  {
    Icon: Zap,
    name: "Energy",
    color: "rgba(241,196,15,0.10)",
    iconColor: "#d4a017",
  },
  {
    Icon: Thermometer,
    name: "Geothermal",
    color: "rgba(231,76,60,0.10)",
    iconColor: "#e74c3c",
  },
  {
    Icon: FlaskConical,
    name: "Chemical",
    color: "rgba(155,89,182,0.10)",
    iconColor: "#9b59b6",
  },
  {
    Icon: HardHat,
    name: "Mining",
    color: "rgba(127,140,141,0.10)",
    iconColor: "#7f8c8d",
  },
  {
    Icon: Droplets,
    name: "Water Treatment",
    color: "rgba(52,152,219,0.10)",
    iconColor: "#3498db",
  },
  {
    Icon: Leaf,
    name: "Bio Gas",
    color: "rgba(39,174,96,0.10)",
    iconColor: "#27ae60",
  },
  {
    Icon: Building2,
    name: "Industrial & Commercial Steel",
    color: "rgba(44,62,80,0.10)",
    iconColor: "#2c3e50",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#f7f8fa] py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-10 md:mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            Industries
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[502px] mx-auto">
            Trusted Across Critical Industries
          </h2>
        </AnimateOnScroll>

        {/* Grid: responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, i) => (
            <AnimateOnScroll key={industry.name} delay={i * 60}>
              <div className="industry-card bg-white border border-[#eceef1] rounded-[14px] py-6 md:py-10 flex flex-col items-center gap-3 md:gap-5 group cursor-default">
                <div
                  className="size-10 md:size-12 rounded-[12px] md:rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: industry.color }}
                >
                  <industry.Icon
                    size={20}
                    strokeWidth={1.75}
                    style={{ color: industry.iconColor }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="font-[family-name:var(--font-inter)] font-medium text-[12px] md:text-[13px] text-[#5a6677] tracking-[0.13px] text-center transition-colors duration-200 group-hover:text-[#0b2545]">
                  {industry.name}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
