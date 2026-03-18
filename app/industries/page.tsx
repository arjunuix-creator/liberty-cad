import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  SectionHeader,
  IndustryGrid,
  CTASection,
  type IndustryItem,
} from "../components/shared";

export const metadata: Metadata = {
  title: "Industries — Liberty Innovations Inc",
  description:
    "Engineering consulting for Oil & Gas, Energy, Chemical, Mining, Water Treatment, and more. Trusted by plant owners and EPC companies worldwide.",
};

const industries: IndustryItem[] = [
  {
    name: "Oil & Gas",
    description:
      "Upstream and downstream facilities demand engineering precision under extreme conditions. Code-compliant designs for pressure vessels, process skids, piping systems, and structural steel for oil & gas plant operations.",
    services: ["Process Engineering", "Piping Design", "Pressure Vessel Design", "Hazard Analysis"],
    color: "rgba(230,126,34,0.08)",
    borderColor: "rgba(230,126,34,0.2)",
  },
  {
    name: "Energy",
    description:
      "Power generation facilities require reliable engineering for critical infrastructure. Boilers, turbine enclosures, structural supports, and balance-of-plant equipment with designs prioritizing safety and constructability.",
    services: ["Mechanical Design", "Electrical Systems", "Control Systems", "Structural Engineering"],
    color: "rgba(241,196,15,0.08)",
    borderColor: "rgba(241,196,15,0.2)",
  },
  {
    name: "Geothermal",
    description:
      "Geothermal plants operate in corrosive, high-temperature environments. Engineering that accounts for unique material and design challenges, ensuring equipment reliability across the plant lifecycle.",
    services: ["Material Selection", "Heat Exchanger Design", "Piping Stress Analysis", "Equipment Specs"],
    color: "rgba(231,76,60,0.08)",
    borderColor: "rgba(231,76,60,0.2)",
  },
  {
    name: "Chemical",
    description:
      "Chemical processing demands strict code compliance and material traceability. Engineering for reactors, columns, heat exchangers, and piping systems meeting ASME, API, and environmental standards.",
    services: ["Process Design", "Reactor Engineering", "Safety Systems", "Environmental Controls"],
    color: "rgba(155,89,182,0.08)",
    borderColor: "rgba(155,89,182,0.2)",
  },
  {
    name: "Mining",
    description:
      "Mining operations require rugged equipment for harsh environments. Structural steel, material handling systems, and process equipment optimized for demanding mining and minerals processing conditions.",
    services: ["Structural Steel", "Material Handling", "Piping Systems", "Civil Engineering"],
    color: "rgba(127,140,141,0.08)",
    borderColor: "rgba(127,140,141,0.2)",
  },
  {
    name: "Water Treatment",
    description:
      "Municipal and industrial water treatment plants depend on corrosion-resistant, code-compliant equipment. Tanks, vessels, piping, and structural systems designed for long-term operational reliability.",
    services: ["Process Engineering", "Pump Systems", "Instrumentation", "Civil Works"],
    color: "rgba(52,152,219,0.08)",
    borderColor: "rgba(52,152,219,0.2)",
  },
  {
    name: "Bio Gas",
    description:
      "Biogas facilities blend process complexity with environmental compliance. Engineering for digesters, gas handling systems, and structural components designed for safety and operational efficiency.",
    services: ["Digester Design", "Gas Handling", "Process Control", "Emissions Systems"],
    color: "rgba(39,174,96,0.08)",
    borderColor: "rgba(39,174,96,0.2)",
  },
  {
    name: "Industrial & Commercial Steel",
    description:
      "From warehouses and commercial buildings to airports and hospitals — comprehensive structural steel detailing for projects of all scales across North America.",
    services: ["Structural Detailing", "3D Modeling", "Shop Drawings", "Erection Plans"],
    color: "rgba(44,62,80,0.08)",
    borderColor: "rgba(44,62,80,0.2)",
  },
];

const whyUsItems = [
  {
    title: "Regulatory Compliance",
    description:
      "We stay current with industry codes and standards including ASME, API, NFPA, and industry-specific regulations.",
  },
  {
    title: "Domain Knowledge",
    description:
      "Our team includes specialists with deep experience in each sector, understanding the nuances that matter.",
  },
  {
    title: "Proven Track Record",
    description:
      "Hundreds of successful projects across industries, with references available upon request.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Industries"
          title="Industries We Serve"
          description="Liberty Innovations Inc provides engineering consulting services across the industries that power our world. Our multidisciplinary expertise spans the unique requirements, codes, and challenges of each sector."
        />

        {/* Industries Grid */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <IndustryGrid industries={industries} variant="detailed" columns={2} />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#f7f8fa] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <SectionHeader
              label="Why Liberty Innovations Inc"
              title="Industry-Specific Expertise"
              description="Our engineers understand the unique challenges and regulations of each industry we serve."
              maxWidth="560px"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {whyUsItems.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 80}>
                  <div className="bg-white border border-[#eceef1] rounded-[14px] p-8 h-full">
                    <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[18px] text-[#0b2545] mb-4">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#7a8694] leading-[1.75]">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Have a Project in Your Industry?"
          description="Let us show you how our industry expertise can benefit your next project."
          primaryButton={{ text: "Discuss Your Project", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
