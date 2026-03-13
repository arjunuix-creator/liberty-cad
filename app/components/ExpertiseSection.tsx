import AnimateOnScroll from "./AnimateOnScroll";

const imgFabShop =
  "https://www.figma.com/api/mcp/asset/cfb6fb40-6ea6-422a-af6e-866594e097aa";
const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/01325b6c-bec8-42b2-a98d-0321417672a5";
const imgIcon2 =
  "https://www.figma.com/api/mcp/asset/a38e30e5-3328-4229-b7b4-b42f55449044";
const imgIcon3 =
  "https://www.figma.com/api/mcp/asset/5eee894d-52dc-4b4e-bbe5-63f7b2957b7f";
const imgIcon4 =
  "https://www.figma.com/api/mcp/asset/878106df-78ca-4d4f-8c2a-0f7095e75c8e";

const features = [
  {
    icon: imgIcon1,
    title: "Subsidiary of Liberty Steel",
    description: "Our engineering is grounded in decades of real-world construction and plant experience.",
  },
  {
    icon: imgIcon2,
    title: "Deep Code & Standards Knowledge",
    description: "ASME, API, AISC, CISC, CSA, IEC, IEEE, NFPA, NEC — complete standards coverage for every project.",
  },
  {
    icon: imgIcon3,
    title: "Experienced Engineering Team",
    description: "50+ multidisciplinary engineers across all disciplines, committed to quality and innovation.",
  },
  {
    icon: imgIcon4,
    title: "Greenfield & Brownfield Experience",
    description: "New plant builds, revamps, expansions, and refurbishments across industries worldwide.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#0b2545] py-16 md:py-24 relative overflow-hidden">
      {/* Glow — animated */}
      <div className="animate-glow-pulse absolute w-[500px] h-[400px] rounded-full bg-[rgba(27,79,114,0.15)] blur-[100px] left-1/2 -translate-x-1/2 bottom-0 pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 relative z-10">
        {/* Left: image */}
        <AnimateOnScroll direction="left" className="flex-1 relative w-full lg:w-auto">
          <div className="rounded-[16px] overflow-hidden shadow-[0px_32px_80px_-20px_rgba(0,0,0,0.3)] group">
            <img
              src={imgFabShop}
              alt="Liberty Steel fabrication shop"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          {/* Badge */}
          <AnimateOnScroll delay={300} className="absolute -bottom-4 right-4 lg:-right-4">
            <div className="bg-white rounded-[10px] shadow-[0px_16px_48px_0px_rgba(0,0,0,0.15)] px-5 md:px-6 py-4 md:py-5 w-[160px] md:w-[189px] hover:shadow-[0px_20px_56px_rgba(0,0,0,0.2)] transition-shadow duration-300">
              <p className="font-[family-name:var(--font-manrope)] font-extrabold text-[28px] md:text-[38px] text-[#0b2545] leading-none tracking-[-1.52px] mb-2 md:mb-3">
                100%
              </p>
              <div className="w-5 h-[1px] bg-[rgba(27,79,114,0.2)] mb-2 md:mb-3" />
              <p className="font-[family-name:var(--font-inter)] font-medium text-[11px] md:text-[12px] text-[#7a8694] leading-[1.45]">
                From Design
                <br />
                to Delivery
              </p>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>

        {/* Right: text */}
        <AnimateOnScroll direction="right" delay={100} className="flex-1 max-w-[520px] mt-8 lg:mt-0">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(126,200,227,0.8)] tracking-[1.84px] uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[44px] text-white leading-[1.12] tracking-[-1.1px] mb-6 md:mb-7 max-w-[538px]">
            Built on Decades of Engineering Excellence
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[14.5px] md:text-[15.5px] text-white/50 leading-[1.8] mb-8 md:mb-12 max-w-[512px]">
            Liberty CAD operates as a subsidiary of Liberty Steel, bringing
            decades of real-world construction and plant engineering expertise
            to every project. We don&apos;t just understand engineering theory
            — we know how things get built.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={200 + i * 80}>
                <div className="group cursor-default">
                  <div className="size-9 rounded-[10px] bg-white/[0.06] flex items-center justify-center mb-4 md:mb-5 transition-colors duration-200 group-hover:bg-white/[0.12]">
                    <img
                      src={f.icon}
                      alt=""
                      className="size-[17px] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-[family-name:var(--font-manrope)] font-semibold text-[14.5px] md:text-[15.5px] text-white/90 leading-[1.35] tracking-[-0.155px] mb-2 md:mb-3">
                    {f.title}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] text-[12.5px] md:text-[13.5px] text-white/40 leading-[1.7]">
                    {f.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
