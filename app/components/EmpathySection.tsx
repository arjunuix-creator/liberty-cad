import AnimateOnScroll from "./AnimateOnScroll";

const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/44d3fe0e-87d8-4b90-8cc5-16735e60e66b";
const imgIcon2 =
  "https://www.figma.com/api/mcp/asset/6e66ee6d-6e89-4342-9bda-dfaa851e5798";
const imgIcon3 =
  "https://www.figma.com/api/mcp/asset/5be575be-f00a-4aac-8aa5-d0d4876ad547";

const cards = [
  {
    icon: imgIcon1,
    num: "01",
    title: "Engineering Teams Stretched Beyond Capacity",
    body: "When your internal engineering team is overwhelmed, projects stall. Deadlines slip, quality suffers, and critical design reviews get rushed. You need additional capacity without compromising on quality or timelines.",
  },
  {
    icon: imgIcon2,
    num: "02",
    title: "Design Errors Discovered During Construction",
    body: "Catching mistakes in the field means rework, wasted materials, and costly delays that erode project margins and damage client relationships. The further downstream an error travels, the more expensive it becomes.",
  },
  {
    icon: imgIcon3,
    num: "03",
    title: "Code Compliance Reviews Causing Costly Revisions",
    body: "Navigating ASME, API, AISC, and local codes is complex. Non-compliance means redesigns, project delays, and potential safety risks across the plant lifecycle. Getting it right the first time is non-negotiable.",
  },
];

export default function EmpathySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-10 md:mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            The Challenge
          </p>
          <h2 className="w-full font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] mx-auto mb-5 text-center">
            <span className="block">We Understand the Pressure</span>
            <span className="block">of Complex Plant Projects</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[15px] md:text-[17px] text-[#6c7a89] leading-[1.75] max-w-[620px] mx-auto text-center">
            <span className="block">Engineering delays don&apos;t just slow projects — they affect construction schedules, budgets,</span>
            <span className="block">and the trust your clients place in you.</span>
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.num} delay={i * 100}>
              <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-8 md:p-11 h-full group cursor-default flex flex-col">
                <div className="flex items-start justify-between mb-8 md:mb-10">
                  <div className="size-11 rounded-[10px] bg-[rgba(11,37,69,0.04)] flex items-center justify-center transition-colors duration-200 group-hover:bg-[rgba(11,37,69,0.08)]">
                    <img
                      src={card.icon}
                      alt=""
                      className="size-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="font-[family-name:var(--font-manrope)] font-extrabold text-[28px] md:text-[32px] text-[#d6dae0] tracking-[-0.96px] leading-none transition-colors duration-200 group-hover:text-[#c8d4e0]">
                    {card.num}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[18px] md:text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-4 md:mb-5 max-w-[248px] line-clamp-2 min-h-[calc(1.3em*2)]">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[13.5px] md:text-[14.5px] text-[#7a8694] leading-[1.8] flex-1">
                  {card.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
