import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  "Incorporated in 2015",
  "50+ Engineers & Staff",
  "From Design to Delivery",
  "AS 9100 Certified",
];

export default function CredibilityBar() {
  return (
    <section className="bg-[#f7f8fa] border-y border-[#eceef1] py-5">
      <div className="max-w-[1120px] mx-auto px-6">
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
            {items.map((item, i) => (
              <div key={item} className="flex items-center">
                <span className="font-[family-name:var(--font-inter)] font-medium text-[13px] md:text-[14px] text-[#0b2545] tracking-[-0.1px] whitespace-nowrap px-5 md:px-8">
                  {item}
                </span>
                {i < items.length - 1 && (
                  <span className="hidden md:block size-[4px] rounded-full bg-[#d6dae0] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
