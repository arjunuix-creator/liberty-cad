import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  ProcessEngineeringIllustration,
  CivilStructuralIllustration,
  MechanicalEngineeringIllustration,
  PipingEngineeringIllustration,
  ElectricalInstrumentationIllustration,
} from "./illustrations/ServiceIllustrations";

const imgLearnMore =
  "https://www.figma.com/api/mcp/asset/60013d6d-5fac-4677-a18b-f75a5432b586";

type IllustrationComponent = () => React.ReactElement;

const services: { title: string; description: string; Illustration: IllustrationComponent }[] = [
  {
    title: "Process Engineering",
    description:
      "PFDs, P&IDs, heat & mass balances, and equipment specifications designed to streamline your fabrication workflow.",
    Illustration: ProcessEngineeringIllustration,
  },
  {
    title: "Civil & Structural Engineering",
    description:
      "Foundation design, structural steel analysis, and detailed connection designs built for real-world constructability.",
    Illustration: CivilStructuralIllustration,
  },
  {
    title: "Mechanical Engineering",
    description:
      "Pressure vessel design, heat exchanger specifications, and equipment layout optimized for your shop floor.",
    Illustration: MechanicalEngineeringIllustration,
  },
  {
    title: "Piping Engineering",
    description:
      "Piping stress analysis, isometric drawings, and material take-offs with fabrication accuracy in every detail.",
    Illustration: PipingEngineeringIllustration,
  },
  {
    title: "Electrical & Instrumentation",
    description:
      "Power distribution, control system design, and instrumentation that integrates seamlessly with your process.",
    Illustration: ElectricalInstrumentationIllustration,
  },
];

function ServiceCard({
  title,
  description,
  Illustration,
  delay = 0,
}: {
  title: string;
  description: string;
  Illustration: IllustrationComponent;
  delay?: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] overflow-hidden flex flex-col h-full group cursor-default">
        {/* Illustration area */}
        <div className="bg-gradient-to-b from-[#f2f5f8] to-[#fafbfc] border-b border-[rgba(236,238,241,0.6)] h-[160px] flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:from-[#eaf0f7]">
          <div className="w-[72%] h-[110px] relative transition-transform duration-500 group-hover:scale-[1.04]">
            <Illustration />
          </div>
        </div>

        {/* Content */}
        <div className="p-9 flex flex-col flex-1">
          <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-5 transition-colors duration-200 group-hover:text-[#0d2e5a]">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[14.5px] text-[#7a8694] leading-[1.8] mb-auto">
            {description}
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] font-semibold text-[13px] text-[#1b4f72] tracking-[0.195px] hover:text-[#0b2545] hover:gap-2.5 transition-all duration-200"
          >
            Learn More
            <img
              src={imgLearnMore}
              alt=""
              className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function ServicesSection() {
  const row1 = services.slice(0, 3);
  const row2 = services.slice(3);

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px] max-w-[522px] mx-auto mb-5">
            Multidisciplinary Engineering Support
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.75] max-w-[501px] mx-auto">
            Comprehensive engineering disciplines, unified under one roof for
            seamless project execution.
          </p>
        </AnimateOnScroll>

        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          {row1.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-5 max-w-[752px] mx-auto">
          {row2.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
