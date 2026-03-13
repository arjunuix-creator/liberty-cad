import AnimateOnScroll from "../AnimateOnScroll";
import Link from "next/link";

export interface CaseStudy {
  industry: string;
  title: string;
  description: string;
  results: string[];
  services: string[];
  href?: string;
  image?: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  delay?: number;
  variant?: "horizontal" | "vertical";
}

export default function CaseStudyCard({
  caseStudy,
  delay = 0,
  variant = "horizontal",
}: CaseStudyCardProps) {
  const content = (
    <>
      <span className="inline-block font-[family-name:var(--font-inter)] font-semibold text-[11px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase bg-[rgba(27,79,114,0.06)] rounded-full px-3 py-1.5 mb-5">
        {caseStudy.industry}
      </span>
      <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[26px] text-[#0b2545] leading-[1.2] tracking-[-0.65px] mb-4">
        {caseStudy.title}
      </h3>
      <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.75] mb-6">
        {caseStudy.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {caseStudy.services.map((service) => (
          <span
            key={service}
            className="font-[family-name:var(--font-inter)] text-[12px] text-[#5a6677] bg-white border border-[#eceef1] rounded-full px-3 py-1.5"
          >
            {service}
          </span>
        ))}
      </div>
    </>
  );

  const results = (
    <>
      <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11px] text-[rgba(126,200,227,0.7)] tracking-[1.54px] uppercase mb-5">
        Key Results
      </h4>
      <ul className="flex flex-col gap-4">
        {caseStudy.results.map((result) => (
          <li
            key={result}
            className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[14px] text-white/75 leading-[1.6]"
          >
            <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0 mt-2" />
            {result}
          </li>
        ))}
      </ul>
    </>
  );

  if (variant === "vertical") {
    return (
      <AnimateOnScroll delay={delay}>
        <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] overflow-hidden h-full flex flex-col">
          <div className="p-8 flex-1">{content}</div>
          <div className="bg-gradient-to-br from-[#0b2545] to-[#0a1e38] p-8">
            {results}
          </div>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll delay={delay}>
      <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr]">
          {/* Content */}
          <div className="p-10">{content}</div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#0b2545] to-[#0a1e38] p-10 flex flex-col justify-center">
            {results}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  variant?: "horizontal" | "vertical";
  columns?: 2 | 3;
}

export function CaseStudyGrid({
  caseStudies,
  variant = "horizontal",
  columns = 2,
}: CaseStudyGridProps) {
  if (variant === "horizontal") {
    return (
      <div className="flex flex-col gap-8">
        {caseStudies.map((study, i) => (
          <CaseStudyCard
            key={study.title}
            caseStudy={study}
            delay={i * 60}
            variant="horizontal"
          />
        ))}
      </div>
    );
  }

  const gridCols = columns === 3 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
    : "grid-cols-1 md:grid-cols-2";

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {caseStudies.map((study, i) => (
        <CaseStudyCard
          key={study.title}
          caseStudy={study}
          delay={i * 60}
          variant="vertical"
        />
      ))}
    </div>
  );
}
