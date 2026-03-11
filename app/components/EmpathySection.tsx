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
    title: "Engineering teams already stretched beyond capacity",
    body: "When your internal team is overwhelmed, projects stall. Deadlines slip, quality suffers, and your best engineers burn out trying to keep up with demand.",
  },
  {
    icon: imgIcon2,
    num: "02",
    title: "Design errors discovered during fabrication",
    body: "Catching mistakes on the shop floor means rework, wasted materials, and costly delays that erode your margins and damage client relationships.",
  },
  {
    icon: imgIcon3,
    num: "03",
    title: "Code compliance reviews causing costly revisions",
    body: "Navigating ASME, API, and local codes is complex. Non-compliance means redesigns, project delays, and potential safety risks down the line.",
  },
];

export default function EmpathySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            The Challenge
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[456px] mx-auto mb-5">
            We Understand the Pressure Fabricators Face
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[17px] text-[#6c7a89] leading-[1.75] max-w-[541px] mx-auto">
            Engineering delays don&apos;t just slow projects — they affect
            fabrication schedules, budgets, and the trust your clients place in
            you.
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.num} delay={i * 100}>
              <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-11 h-full group cursor-default">
                <div className="flex items-start justify-between mb-10">
                  <div className="size-11 rounded-[10px] bg-[rgba(11,37,69,0.04)] flex items-center justify-center transition-colors duration-200 group-hover:bg-[rgba(11,37,69,0.08)]">
                    <img
                      src={card.icon}
                      alt=""
                      className="size-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] text-[#d6dae0] tracking-[-0.96px] leading-none transition-colors duration-200 group-hover:text-[#c8d4e0]">
                    {card.num}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-5 max-w-[248px]">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[14.5px] text-[#7a8694] leading-[1.8]">
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
