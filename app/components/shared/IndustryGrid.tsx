import AnimateOnScroll from "../AnimateOnScroll";

export interface IndustryItem {
  name: string;
  icon?: string;
  color: string;
  borderColor?: string;
  description?: string;
  services?: string[];
}

interface IndustryCardCompactProps {
  industry: IndustryItem;
  delay?: number;
}

function IndustryCardCompact({ industry, delay = 0 }: IndustryCardCompactProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="industry-card bg-white border border-[#eceef1] rounded-[14px] py-10 flex flex-col items-center gap-5 group cursor-default">
        <div
          className="size-12 rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: industry.color }}
        >
          {industry.icon && (
            <img
              src={industry.icon}
              alt=""
              className="size-[22px] transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </div>
        <span className="font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] tracking-[0.13px] text-center transition-colors duration-200 group-hover:text-[#0b2545]">
          {industry.name}
        </span>
      </div>
    </AnimateOnScroll>
  );
}

interface IndustryCardDetailedProps {
  industry: IndustryItem;
  delay?: number;
}

function IndustryCardDetailed({ industry, delay = 0 }: IndustryCardDetailedProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div
        className="card-lift rounded-[14px] p-9 border h-full"
        style={{
          backgroundColor: industry.color,
          borderColor: industry.borderColor || industry.color,
        }}
      >
        <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[24px] text-[#0b2545] leading-[1.2] tracking-[-0.6px] mb-4">
          {industry.name}
        </h3>
        {industry.description && (
          <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#5a6677] leading-[1.75] mb-6">
            {industry.description}
          </p>
        )}
        {industry.services && industry.services.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {industry.services.map((service) => (
              <span
                key={service}
                className="font-[family-name:var(--font-inter)] text-[12px] text-[#5a6677] bg-white/60 border border-[#eceef1] rounded-full px-3 py-1.5"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}

interface IndustryGridProps {
  industries: IndustryItem[];
  variant?: "compact" | "detailed";
  columns?: 2 | 3 | 4 | 5;
}

export default function IndustryGrid({
  industries,
  variant = "compact",
  columns = 5,
}: IndustryGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <div className={`grid gap-5 ${gridCols[columns]}`}>
      {industries.map((industry, i) =>
        variant === "detailed" ? (
          <IndustryCardDetailed
            key={industry.name}
            industry={industry}
            delay={i * 60}
          />
        ) : (
          <IndustryCardCompact
            key={industry.name}
            industry={industry}
            delay={i * 60}
          />
        )
      )}
    </div>
  );
}
