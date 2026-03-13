import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  SectionHeader,
  ServicesGrid,
  CTASection,
  type ServiceItem,
} from "../components/shared";

export const metadata: Metadata = {
  title: "Services — Liberty CAD",
  description:
    "Full spectrum engineering consulting: plant design, process, structural, mechanical, piping, BIM. Concept to construction-ready documentation.",
};

const services: ServiceItem[] = [
  {
    title: "Plant Engineering",
    description:
      "End-to-end engineering consulting for every phase of your plant project — from concept to construction-ready documentation. Process, piping, mechanical, civil, and structural disciplines under one roof.",
    features: [
      "Process Flow Diagrams (PFDs)",
      "Piping & Instrumentation Diagrams (P&IDs)",
      "Heat & Mass Balance Diagrams (HMBD)",
      "Pressure Vessel Design (ASME)",
      "Piping Stress Analysis & Isometrics",
    ],
    href: "/services/plant-engineering",
  },
  {
    title: "Structural Engineering",
    description:
      "Comprehensive structural steel design, detailing, and estimation services for construction projects ranging from 20 tons to 10,000 tons. AISC, NISD, CISC, OSHA, and ASTM standards.",
    features: [
      "Structural Steel Member Size Calculations",
      "Connection Design & Reports",
      "Tekla 3D Modeling",
      "Steel Fabrication & Shop Drawings",
      "Steel Erection Plan Drawings",
    ],
    href: "/services/structural-engineering",
  },
  {
    title: "BIM Engineering",
    description:
      "Transforming concepts into coordinated 3D models using industry-standard tools and technologies. Seamless coordination between architectural, structural, and MEP disciplines.",
    features: [
      "MEP BIM Model (LOD 300, 400, 500)",
      "2D Drawings & Clash Reports",
      "Coordination & As-Built Drawings",
      "Spool & Section Drawings",
      "Bill of Materials",
    ],
    href: "/services/bim-engineering",
  },
  {
    title: "Architectural Design",
    description:
      "Exceptional 3D renderings and comprehensive architectural plans that bring your projects to life with stunning visual detail and accuracy.",
    features: [
      "3D Renderings & Visualizations",
      "Site Plans & Floor Plans",
      "Elevations & Construction Details",
      "Design Development Documentation",
      "Construction-Ready Blueprints",
    ],
    href: "/services/architectural-design",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We review your requirements and project constraints to understand the full scope and objectives.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our engineers develop optimized designs tailored to your project requirements and construction timeline.",
  },
  {
    step: "03",
    title: "Review",
    description:
      "Collaborative review cycles ensure designs meet all technical, code, and practical requirements.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Construction-ready documentation delivered on schedule with full support through every project phase.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Services"
          title="Multidisciplinary Engineering Consulting Services"
          description="A full spectrum of engineering services for every phase of plant project development — from concept to definitive design and documentation for construction. Comprehensive engineering disciplines, unified under one roof."
        />

        {/* Services List */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <ServicesGrid services={services} variant="detailed" />
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#f7f8fa] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <SectionHeader
              label="How We Work"
              title="Our Engineering Process"
              description="A proven methodology that delivers construction-ready documentation on time and on budget."
              maxWidth="520px"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {processSteps.map((phase, i) => (
                <AnimateOnScroll key={phase.step} delay={i * 80}>
                  <div className="bg-white border border-[#eceef1] rounded-[14px] p-8 text-center h-full">
                    <div className="font-[family-name:var(--font-manrope)] font-bold text-[32px] text-[#7ec8e3] tracking-[-0.8px] mb-4">
                      {phase.step}
                    </div>
                    <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[18px] text-[#0b2545] mb-3">
                      {phase.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#7a8694] leading-[1.7]">
                      {phase.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Streamline Your Engineering?"
          description="Contact us for a consultation and see how we can support your next project."
          primaryButton={{ text: "Get a Quote", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
