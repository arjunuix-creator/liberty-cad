import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { CTASection } from "../../components/shared";

export const metadata: Metadata = {
  title: "Structural Engineering — Liberty Innovations Inc",
  description:
    "Structural steel detailing and engineering services. 20 to 10,000 tons. AISC, CISC, ASTM standards. Tekla and SDS2/RISA. USA and Canada.",
};

const industrialDeliverables = [
  "Assistance in pre-bid process",
  "Advance bill of material",
  "3D modeling",
  "Connection sketches",
  "Anchor bolt drawings",
  "Shop drawings",
  "Erection plans",
  "Miscellaneous steel detailing",
];

const commercialDeliverables = [
  "Structural steel detailing for warehouses & commercial buildings",
  "Airport and hospital structural steel",
  "ASTM A36, A572, EN10025 (S235 & S355)",
  "AS4100, AS/NZS5131 standards",
  "Shop and erection drawings",
  "Connection design & reports",
];

export default function StructuralEngineeringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Structural Engineering"
          title="Structural Steel Detailing & Engineering"
          description="Comprehensive structural steel design, detailing, and estimation services for construction projects ranging from 20 tons to 10,000 tons. We adhere to AISC, NISD, CISC, OSHA, and ASTM standards, serving clients across the USA and Canada."
          cta={{ text: "Get in Touch", href: "/contact" }}
        />

        {/* Overview */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-[780px] mx-auto text-center mb-16">
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                  Overview
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-6">
                  Precision Steel Detailing
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  Liberty Innovations Inc provides structural steel detailing services for all kinds of structures
                  in both Imperial and metric environments, in accordance with AISC, CISC, BS &amp; IS
                  stipulations.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  We offer a complete line of detailing services using Tekla and SDS2/RISA.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  We understand and visualize the complexity of projects, addressing specific real-time
                  construction and erection issues and adapting our detailing of shop and erection
                  drawings to enhance project efficacy and help complete projects successfully within
                  schedule.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 h-full">
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[24px] text-[#0b2545] leading-[1.2] tracking-[-0.6px] mb-4">
                    Industrial Steel Structural
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8] mb-8">
                    Complete structural steel detailing and engineering for industrial facilities,
                    process plants, and manufacturing structures.
                  </p>
                  <ul className="flex flex-col gap-3">
                    {industrialDeliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.6]"
                      >
                        <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={80}>
                <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 h-full">
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[24px] text-[#0b2545] leading-[1.2] tracking-[-0.6px] mb-4">
                    Commercial Steel Structural
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8] mb-8">
                    A dedicated group of professionals with well-experienced engineers for structural
                    steel detailing work for warehouses, commercial buildings, airports, bridges, and hospitals.
                  </p>
                  <ul className="flex flex-col gap-3">
                    {commercialDeliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.6]"
                      >
                        <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Structural Project?"
          description="Get in touch to discuss your structural steel requirements and how Liberty Innovations Inc can deliver."
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
