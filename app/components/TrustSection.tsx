import AnimateOnScroll from "./AnimateOnScroll";

const trustCards = [
  {
    icon: "https://www.figma.com/api/mcp/asset/1d3de139-0d18-43fc-b03a-a99c7f3bbd68",
    title: "Customer-Centric Flexibility",
    description:
      "We adapt to your project scope, timeline, and preferred tools — not the other way around.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/0f758831-ffc0-47c7-a8e6-5389be8b0869",
    title: "Every Client Matters",
    description:
      "Whether it's a single vessel or a multi-discipline project, you receive the same dedication and quality.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/b2461ad0-dda0-48fd-aa24-834863881aa2",
    title: "On-Time Delivery",
    description:
      "We understand fabrication timelines are non-negotiable. Our schedules align with your production needs.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/f56c3e49-bd0c-447e-8632-0d5e25656027",
    title: "Full Transparency",
    description:
      "Clear communication, honest timelines, and no surprises. You always know where your project stands.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/abf29c05-78ce-4c2b-982d-ed9dc9f51469",
    title: "True Partnership",
    description:
      "We don't just take orders. We collaborate, advise, and invest in your project's success as partners.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/67302804-534a-4feb-abe4-8565a027daee",
    title: "Training & Support",
    description:
      "Beyond deliverables, we provide knowledge transfer and support to strengthen your internal capabilities.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            Why Us
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[538px] mx-auto">
            Why Fabricators Choose Liberty CAD
          </h2>
        </AnimateOnScroll>

        {/* Cards 3x2 */}
        <div className="grid grid-cols-3 gap-5">
          {trustCards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 80}>
              <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-11 h-full group cursor-default">
                <div className="size-10 rounded-[10px] bg-[rgba(11,37,69,0.04)] flex items-center justify-center mb-8 transition-colors duration-200 group-hover:bg-[rgba(11,37,69,0.08)]">
                  <img
                    src={card.icon}
                    alt=""
                    className="size-[19px] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[18px] text-[#0b2545] leading-[1.35] tracking-[-0.27px] mb-4 transition-colors duration-200 group-hover:text-[#0d2e5a]">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[14.5px] text-[#7a8694] leading-[1.8]">
                  {card.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
