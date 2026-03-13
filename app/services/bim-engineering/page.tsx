import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { CTASection } from "../../components/shared";

export const metadata: Metadata = {
  title: "BIM Engineering — Liberty CAD",
  description:
    "BIM engineering services: MEP BIM models, 3D coordination, clash detection, and construction documentation using industry-standard tools.",
};

const deliverables = [
  "MEP BIM Model (LOD 300, 400, 500)",
  "2D Drawings & Clash Reports",
  "Coordination & As-Built Drawings",
  "Spool & Section Drawings",
  "Bill of Materials",
  "MEP Sleeve/Penetration Drawings",
  "Equipment Pad Layout Drawings",
];

const subServices = [
  {
    title: "Mechanical BIM",
    description:
      "From intricate machinery layouts to HVAC systems, our mechanical BIM solutions ensure seamless integration and optimal functionality, driving precision in design and execution.",
  },
  {
    title: "Electrical BIM",
    description:
      "We seamlessly model electrical systems, distribution networks, and lighting layouts, enhancing safety and performance across your project.",
  },
  {
    title: "Plumbing BIM",
    description:
      "Our plumbing BIM solutions accurately depict water supply, drainage, and piping systems, minimizing clashes and ensuring efficient plumbing networks.",
  },
  {
    title: "Ducting BIM",
    description:
      "Our ducting BIM services offer a comprehensive view of HVAC ducting, promoting efficiency and smooth airflow within structures.",
  },
];

export default function BIMEngineeringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="BIM Engineering"
          title="BIM Engineering Services"
          description="Transforming concepts into coordinated 3D models using industry-standard tools and technologies. Seamless coordination between architectural, structural, and MEP disciplines."
          cta={{ text: "Get in Touch", href: "/contact" }}
        />

        {/* Overview */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-16 items-start mb-16">
              <AnimateOnScroll>
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                  Overview
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-6">
                  Coordinated 3D Modeling
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  Liberty CAD offers a suite of services for architects and engineers. Starting with a
                  concept, we help transform ideas into 3D models using industry-standard tools and
                  technologies. These models can be leveraged for sales presentations, design coordination,
                  and construction documentation. The 3D models ensure that designs across all disciplines
                  are well coordinated, and 2D drawings are generated with the required information for
                  distribution to sub-contractors.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-8">
                  <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-5">
                    BIM Deliverables
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {deliverables.map((item) => (
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

            {/* Sub-services */}
            <AnimateOnScroll className="text-center mb-10">
              <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                BIM Disciplines
              </p>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[36px] text-[#0b2545] leading-[1.15] tracking-[-0.9px]">
                Full MEP BIM Coverage
              </h3>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {subServices.map((service, i) => (
                <AnimateOnScroll key={service.title} delay={i * 80}>
                  <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-9 h-full">
                    <h4 className="font-[family-name:var(--font-manrope)] font-semibold text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-4">
                      {service.title}
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-[14.5px] text-[#7a8694] leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Coordinate Your Next Project in BIM?"
          description="Get in touch to discuss how our BIM engineering services can streamline your project delivery."
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
