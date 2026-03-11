const imgHero =
  "https://www.figma.com/api/mcp/asset/98c9849d-1d40-489b-a9b7-19e6920fc4d9";
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/60013d6d-5fac-4677-a18b-f75a5432b586";
const imgChevronDown =
  "https://www.figma.com/api/mcp/asset/e1904a92-839b-425d-abaf-1a0a790f3c4f";

const industries = [
  "Oil & Gas",
  "Energy",
  "Chemical",
  "Mining",
  "Water Treatment",
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a1e38] overflow-hidden">
      {/* Background image */}
      <img
        src={imgHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none animate-fade-in"
        style={{ animationDuration: "1.2s" }}
      />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,25,47,0.95)] via-[rgba(11,37,69,0.82)] to-[rgba(11,37,69,0.45)]" />
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,25,47,0.9)] via-transparent to-[rgba(6,25,47,0.4)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="max-w-[600px] pt-24 pb-16">
          {/* Heading lines — each staggered */}
          <h1 className="font-[family-name:var(--font-manrope)] font-extrabold text-[clamp(48px,5vw,76px)] leading-[1.02] tracking-[-2.66px] mb-10">
            <span className="block text-white animate-fade-up delay-100">Engineering</span>
            <span className="block text-white animate-fade-up delay-200">Precision.</span>
            <span className="block text-[#7ec8e3] animate-fade-up delay-300">Fabrication</span>
            <span className="block text-[#7ec8e3] animate-fade-up delay-400">Confidence.</span>
          </h1>

          {/* Body */}
          <p className="animate-fade-up delay-500 font-[family-name:var(--font-inter)] text-[18px] text-white/85 leading-[1.7] tracking-[-0.09px] mb-5 max-w-[470px]">
            Engineering support that helps fabricators deliver complex projects
            without delays, rework, or compliance issues.
          </p>
          <p className="animate-fade-up delay-600 font-[family-name:var(--font-inter)] text-[15px] text-white/50 leading-[1.8] mb-12 max-w-[425px]">
            From concept to construction-ready documentation, Liberty CAD
            partners with fabricators to ensure designs translate seamlessly
            into real-world production.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-700 flex items-center gap-5">
            <a
              href="#contact"
              className="btn-scale group flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-semibold text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/90 transition-colors"
            >
              Get a Quote
              <img
                src={imgArrowRight}
                alt=""
                className="size-[15px] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="btn-scale group flex items-center gap-2.5 border border-white/20 text-white/85 font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/10 transition-colors"
            >
              Explore Our Services
              <img
                src={imgChevronDown}
                alt=""
                className="size-[15px] transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Industry ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] z-10 animate-fade-in delay-900">
        <div className="max-w-[1120px] mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="animate-blink size-[5px] rounded-full bg-[rgba(0,212,146,0.8)]" />
            <span className="font-[family-name:var(--font-inter)] font-medium text-[12.5px] text-white/40 tracking-[0.25px]">
              Supporting industrial fabricators across North America
            </span>
          </div>
          <div className="flex items-center gap-3">
            {industries.map((industry, i) => (
              <span key={industry} className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-inter)] font-medium text-[11.5px] text-white/25 tracking-[0.46px] uppercase hover:text-white/50 transition-colors cursor-default">
                  {industry}
                </span>
                {i < industries.length - 1 && (
                  <span className="size-[3px] rounded-full bg-white/15" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
