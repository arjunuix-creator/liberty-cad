import React from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import Link from "next/link";

const imgLearnMore =
  "https://www.figma.com/api/mcp/asset/60013d6d-5fac-4677-a18b-f75a5432b586";

export interface ServiceItem {
  title: string;
  description: string;
  Illustration?: () => React.ReactElement;
  features?: string[];
  href?: string;
}

interface ServiceCardProps extends ServiceItem {
  delay?: number;
  variant?: "compact" | "detailed";
}

function ServiceCard({
  title,
  description,
  Illustration,
  features,
  href = "#",
  delay = 0,
  variant = "compact",
}: ServiceCardProps) {
  if (variant === "detailed" && features) {
    return (
      <AnimateOnScroll delay={delay}>
        <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[28px] text-[#0b2545] leading-[1.2] tracking-[-0.7px] mb-5">
              {title}
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8] mb-6">
              {description}
            </p>
            {href && href !== "#" && (
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] font-semibold text-[13px] text-[#1b4f72] tracking-[0.195px] hover:text-[#0b2545] hover:gap-2.5 transition-all duration-200"
              >
                Learn More
                <img src={imgLearnMore} alt="" className="size-[13px]" />
              </Link>
            )}
          </div>
          <div className="bg-white border border-[#eceef1] rounded-[10px] p-8">
            <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-5">
              Key Deliverables
            </h4>
            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.6]"
                >
                  <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll delay={delay}>
      <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] overflow-hidden flex flex-col h-full group cursor-default">
        {/* Illustration area */}
        {Illustration && (
          <div className="bg-gradient-to-b from-[#f2f5f8] to-[#fafbfc] border-b border-[rgba(236,238,241,0.6)] h-[160px] flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:from-[#eaf0f7]">
            <div className="w-[72%] h-[110px] relative transition-transform duration-500 group-hover:scale-[1.04]">
              <Illustration />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-9 flex flex-col flex-1">
          <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-5 transition-colors duration-200 group-hover:text-[#0d2e5a]">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[14.5px] text-[#7a8694] leading-[1.8] mb-auto">
            {description}
          </p>
          <Link
            href={href}
            className="mt-10 inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] font-semibold text-[13px] text-[#1b4f72] tracking-[0.195px] hover:text-[#0b2545] hover:gap-2.5 transition-all duration-200"
          >
            Learn More
            <img
              src={imgLearnMore}
              alt=""
              className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

interface ServicesGridProps {
  services: ServiceItem[];
  variant?: "compact" | "detailed";
  columns?: 2 | 3;
}

export default function ServicesGrid({
  services,
  variant = "compact",
  columns = 3,
}: ServicesGridProps) {
  if (variant === "detailed") {
    return (
      <div className="flex flex-col gap-8">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            {...service}
            delay={i * 60}
            variant="detailed"
          />
        ))}
      </div>
    );
  }

  const row1 = services.slice(0, columns);
  const row2 = services.slice(columns);

  return (
    <>
      <div
        className={`grid gap-5 mb-5 ${
          columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {row1.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={i * 80} variant="compact" />
        ))}
      </div>
      {row2.length > 0 && (
        <div
          className={`grid gap-5 ${
            row2.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-[752px] mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {row2.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} variant="compact" />
          ))}
        </div>
      )}
    </>
  );
}
