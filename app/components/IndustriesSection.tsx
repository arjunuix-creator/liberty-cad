import AnimateOnScroll from "./AnimateOnScroll";

const industries = [
  {
    icon: "https://www.figma.com/api/mcp/asset/dae4158d-b2cf-4639-aa0c-65a18c0494d1",
    name: "Oil & Gas",
    color: "rgba(230,126,34,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/c2e21899-86be-4376-86c3-2e2ae32a4496",
    name: "Energy",
    color: "rgba(241,196,15,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/f8769863-9824-41b2-8752-86e572ff97c1",
    name: "Geothermal",
    color: "rgba(231,76,60,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/03dd0ceb-ddba-4005-ad25-2f93d4536c93",
    name: "Chemical",
    color: "rgba(155,89,182,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/591e5cc1-67d6-4f33-bb1b-7f267c74364f",
    name: "Mining",
    color: "rgba(127,140,141,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/79bfb267-c6ec-443e-bc39-64520c5865a0",
    name: "Water Treatment",
    color: "rgba(52,152,219,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/c7f739f5-a83e-4705-b471-395c80d2f2ff",
    name: "Bio Gas",
    color: "rgba(39,174,96,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/d37d5666-7978-4737-904a-211cf9b87f48",
    name: "Food Processing",
    color: "rgba(230,126,34,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/a74c76ca-fad5-4cf3-8edf-66600c556576",
    name: "Packing",
    color: "rgba(27,79,114,0.06)",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/baf7c65b-882f-4903-a3fb-b8c42d868f09",
    name: "Industrial Steel",
    color: "rgba(44,62,80,0.06)",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#f7f8fa] py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            Industries
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[502px] mx-auto">
            Trusted Across Critical Industries
          </h2>
        </AnimateOnScroll>

        {/* Grid: 5 per row */}
        <div className="grid grid-cols-5 gap-5">
          {industries.map((industry, i) => (
            <AnimateOnScroll key={industry.name} delay={i * 60}>
              <div className="industry-card bg-white border border-[#eceef1] rounded-[14px] py-10 flex flex-col items-center gap-5 group cursor-default">
                <div
                  className="size-12 rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: industry.color }}
                >
                  <img
                    src={industry.icon}
                    alt=""
                    className="size-[22px] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] tracking-[0.13px] text-center transition-colors duration-200 group-hover:text-[#0b2545]">
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
