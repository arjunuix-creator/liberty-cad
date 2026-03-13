import AnimateOnScroll from "./AnimateOnScroll";

const imgCheckIcon =
  "https://www.figma.com/api/mcp/asset/13f1307e-de30-43a3-8f1b-2de3b3d59a87";

const bullets = [
  "We collaborate closely with clients to understand project scope and timelines",
  "Designs are construction-ready and optimized from day one",
  "Full code compliance built into every deliverable",
  "Responsive communication throughout every project phase",
];

export default function ApproachSection() {
  return (
    <section className="bg-[#f7f8fa] py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: text */}
        <AnimateOnScroll direction="left" className="flex-1 max-w-[420px]">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[44px] text-[#0b2545] leading-[1.12] tracking-[-1.1px] mb-6 md:mb-7 max-w-[377px]">
            Engineering That Understands Plant Operations
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[14.5px] md:text-[15.5px] text-[#6c7a89] leading-[1.8] mb-5 md:mb-6 max-w-[411px]">
            We don&apos;t work in isolation. Liberty CAD collaborates closely with
            clients from concept to completion, understanding your project
            requirements, your construction timelines, and the real challenges
            your teams face every day.
          </p>
          <p className="font-[family-name:var(--font-inter)] font-medium text-[14.5px] md:text-[15.5px] text-[#2d3e50] leading-[1.8] mb-8 md:mb-10 max-w-[417px]">
            Liberty CAD becomes{" "}
            <strong className="font-semibold">
              an extension of your engineering team
            </strong>{" "}
            — ensuring every design is construction-ready, fully compliant, and
            optimized for your project workflow.
          </p>

          <ul className="flex flex-col gap-4">
            {bullets.map((b, i) => (
              <AnimateOnScroll key={b} delay={200 + i * 80}>
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 size-5 rounded-full bg-[rgba(27,79,114,0.1)] flex items-center justify-center mt-0.5 transition-colors duration-200 group-hover:bg-[rgba(27,79,114,0.18)]">
                    <img src={imgCheckIcon} alt="" className="size-[11px]" />
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-[13.5px] md:text-[14.5px] text-[#3d4f5f] leading-[1.7]">
                    {b}
                  </span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </AnimateOnScroll>

        {/* Right: illustration */}
        <AnimateOnScroll direction="right" delay={150} className="flex-1 group w-full lg:w-auto">
          <img
            src="/our-approach-container.svg"
            alt="Our approach illustration"
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-sm"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
