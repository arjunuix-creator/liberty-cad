import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About — Liberty CAD Inc",
  description:
    "Liberty CAD Inc, a subsidiary of Liberty Steel, delivers end-to-end plant engineering. Greenfield & Brownfield projects. ASME, API, AISC compliant. 50+ engineers.",
};

const values = [
  {
    title: "Plant Engineering DNA",
    description:
      "Our core expertise spans process, piping, mechanical, civil, and structural disciplines.",
  },
  {
    title: "Multidisciplinary Under One Roof",
    description:
      "End-to-end solutions that eliminate coordination gaps between disciplines.",
  },
  {
    title: "Code & Standards Mastery",
    description:
      "ASME, API, AISC, CISC, TEMA, IEC, IEEE, NFPA, NEC, and international codes.",
  },
  {
    title: "Customer-Centric Flexibility",
    description:
      "We adapt to your project scope, timeline, and preferred tools.",
  },
  {
    title: "Greenfield & Brownfield Experience",
    description:
      "New plant builds, revamps, expansions, and refurbishments across industries.",
  },
  {
    title: "From Design to Delivery",
    description:
      "Each phase from concept to definitive design and documentation for construction.",
  },
];

const stats = [
  { value: "2015", label: "Established" },
  { value: "50+", label: "Engineers & Staff" },
  { value: "AS 9100", label: "Certified" },
  { value: "Global", label: "Service Area" },
];

const keyFacts = [
  { attribute: "Parent Company", detail: "Liberty Steel" },
  { attribute: "Established", detail: "2015" },
  { attribute: "Office", detail: "6565 N McArthur Blvd, Suite 225, Irving, TX 75039" },
  { attribute: "Phone", detail: "(214) 396-2312" },
  { attribute: "Team Size", detail: "50+ engineers and staff" },
  { attribute: "Certification", detail: "AS 9100 Certified" },
  { attribute: "Service Area", detail: "North America and worldwide" },
  { attribute: "Standards", detail: "ASME, ANSI, API, TEMA, AISC, CISC, NFPA, OSHA, IEC, IEEE, NEC, ASTM" },
  { attribute: "Tools", detail: "Tekla, SDS2/RISA, AutoCAD, Revit, CAESAR II, SP3D/PDMS, ETAP" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Us"
          title={<><span className="block">Engineering Excellence</span><span className="block">From Concept to Construction</span></>}
          description="Liberty CAD Inc is a trusted provider of multidisciplinary engineering consulting services, delivering end-to-end solutions for plant owners, EPC companies, contractors, and design firms worldwide."
        />

        {/* Story Section */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                  Our Story
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-6">
                  Built on Decades of Engineering Experience
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  Liberty CAD Inc operates as a subsidiary of Liberty Steel, with a dedicated
                  engineering team of 50+ professionals committed to innovation and quality.
                  Established in 2015, our team brings decades of combined experience in plant
                  design, structural engineering, and industrial project delivery.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  We provide trusted engineering solutions and structural steel detailing to
                  contractors, design firms, consulting engineers, and EPC companies in North
                  America and worldwide. We collaborate closely with clients from concept to
                  completion, transforming initial designs into detailed, construction-ready
                  documentation for every phase of the project.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  Our plant design engineering services enable customers to optimize their capital
                  expenditure and improve operational efficiency downstream. We have the capability
                  and competence to provide end-to-end solutions across process, piping, mechanical,
                  civil, and structural disciplines.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  Our engineering teams have successfully completed Greenfield and Brownfield
                  projects aimed at increasing production, improving efficiencies, upgrading to
                  newer technologies, and repairing or refurbishing older plants. Our engineers
                  are well-versed with industry design codes (ASME, ANSI, API, TEMA, AISC, NFPA,
                  OSHA, IEC, IEEE, NEC) as well as regulatory standards.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="bg-gradient-to-br from-[#f2f5f8] to-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="font-[family-name:var(--font-manrope)] font-bold text-[36px] text-[#0b2545] tracking-[-0.9px] mb-2">
                          {stat.value}
                        </div>
                        <div className="font-[family-name:var(--font-inter)] text-[13px] text-[#7a8694]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-[#f7f8fa] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                  Vision
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-6">
                  Pioneering the Future of Engineering
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  To pioneer innovation in engineering, driving the transformation of industries
                  and communities. We strive to be a catalyst for a brighter future, where
                  sustainable solutions and breakthrough technologies redefine industrial
                  infrastructure.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                  Mission
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-6">
                  Engineering Excellence, Delivered
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  To drive positive change through engineering excellence. We design and deliver
                  infrastructure, technologies, and systems that address today&apos;s needs while
                  building a sustainable and resilient future.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart — white bg, single heading */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <AnimateOnScroll className="text-center mb-16">
              <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                What Sets Us Apart
              </p>
              <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[48px] text-[#0b2545] leading-[1.1] tracking-[-1.2px]">
                Why Clients Choose Liberty CAD Inc
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 gap-5">
              {values.map((value, i) => (
                <AnimateOnScroll key={value.title} delay={i * 80}>
                  <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-9">
                    <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[20px] text-[#0b2545] leading-[1.3] tracking-[-0.3px] mb-4">
                      {value.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.75]">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Key Facts Section */}
        <section className="bg-[#f7f8fa] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <AnimateOnScroll className="mb-12">
              <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                Key Facts
              </p>
              <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[40px] text-[#0b2545] leading-[1.1] tracking-[-1.2px]">
                Company at a Glance
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <div className="border border-[#eceef1] rounded-[14px] overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-[220px_1fr] bg-[#0b2545]">
                  <div className="px-6 py-3.5 font-[family-name:var(--font-inter)] font-semibold text-[12px] text-white/60 tracking-[1px] uppercase">
                    Attribute
                  </div>
                  <div className="px-6 py-3.5 font-[family-name:var(--font-inter)] font-semibold text-[12px] text-white/60 tracking-[1px] uppercase">
                    Detail
                  </div>
                </div>
                {/* Rows */}
                {keyFacts.map((row, i) => (
                  <div
                    key={row.attribute}
                    className={`grid grid-cols-[220px_1fr] border-t border-[#eceef1] ${i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"}`}
                  >
                    <div className="px-6 py-4 font-[family-name:var(--font-inter)] font-medium text-[14px] text-[#0b2545]">
                      {row.attribute}
                    </div>
                    <div className="px-6 py-4 font-[family-name:var(--font-inter)] text-[14px] text-[#7a8694] leading-[1.6]">
                      {row.detail}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0b2545] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <AnimateOnScroll className="text-center">
              <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] md:text-[48px] text-white leading-[1.1] tracking-[-1.2px] max-w-[680px] mx-auto mb-6">
                <span className="block">Ready to Work With an Engineering Team</span>
                <span className="block">That Gets It?</span>
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-white/60 leading-[1.75] max-w-[560px] mx-auto mb-10">
                Whether you need support for a single discipline or a full multi-discipline
                Greenfield project, Liberty CAD Inc delivers the same dedication and quality.
                Let&apos;s talk about your next project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-scale inline-flex items-center gap-2.5 bg-white text-[#0b2545] font-[family-name:var(--font-inter)] font-semibold text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/90 transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="tel:2143962312"
                  className="btn-scale inline-flex items-center gap-2.5 border border-white/20 text-white/85 font-[family-name:var(--font-inter)] font-medium text-[14.5px] tracking-[0.145px] px-6 h-[51px] rounded-[8px] hover:bg-white/10 transition-colors"
                >
                  Schedule a Call: (214) 396-2312
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
