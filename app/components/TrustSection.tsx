import AnimateOnScroll from "./AnimateOnScroll";
import { UserCheck, Heart, Clock, Eye, Handshake, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const trustCards: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: UserCheck,
    title: "Customer-Centric Flexibility",
    description:
      "We adapt to your project scope, timeline, and preferred tools — not the other way around.",
  },
  {
    Icon: Heart,
    title: "Every Client Matters",
    description:
      "Whether it's a single-discipline engagement or a multi-discipline Greenfield project, you receive the same dedication and quality.",
  },
  {
    Icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand project timelines are non-negotiable. Our schedules align with your construction milestones.",
  },
  {
    Icon: Eye,
    title: "Full Transparency",
    description:
      "Clear communication, honest timelines, and no surprises. You always know where your project stands.",
  },
  {
    Icon: Handshake,
    title: "True Partnership",
    description:
      "We don't just take orders. We collaborate, advise, and invest in your project's success as partners.",
  },
  {
    Icon: GraduationCap,
    title: "Training & Support",
    description:
      "Beyond deliverables, we provide knowledge transfer and support to strengthen your internal capabilities.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-10 md:mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            Why Us
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[538px] mx-auto">
            Why Clients Choose Liberty CAD Inc
          </h2>
        </AnimateOnScroll>

        {/* Cards 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustCards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 80}>
              <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-8 md:p-11 h-full group cursor-default">
                <div className="size-10 rounded-[10px] bg-[rgba(11,37,69,0.04)] flex items-center justify-center mb-6 md:mb-8 transition-colors duration-200 group-hover:bg-[rgba(11,37,69,0.08)]">
                  <card.Icon
                    size={19}
                    strokeWidth={1.75}
                    className="text-[#1b4f72] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[17px] md:text-[18px] text-[#0b2545] leading-[1.35] tracking-[-0.27px] mb-3 md:mb-4 transition-colors duration-200 group-hover:text-[#0d2e5a]">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[13.5px] md:text-[14.5px] text-[#7a8694] leading-[1.8]">
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
