import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { CTASection } from "../../components/shared";

export const metadata: Metadata = {
  title: "Plant Engineering — Liberty CAD Inc",
  description:
    "Plant design engineering consulting services for Oil & Gas, Power Generation, Chemical, Mining, and Water Treatment. From concept to construction documentation.",
};

type Discipline = {
  title: string;
  description: string;
  deliverables?: string[];
  deliverableGroups?: { title: string; items: string[] }[];
  pipingSections?: {
    groups: { title: string; items: string[] }[];
    fullWidth: { title: string; body: string };
  };
};

const disciplines: Discipline[] = [
  {
    title: "Process Engineering",
    description:
      "We create PFDs to visually represent the major equipment and flow paths within the process. We develop detailed P&IDs that illustrate the interconnection of process equipment, instrumentation, and control systems.",
    deliverables: [
      "Process Flow Diagrams (PFDs)",
      "Piping & Instrumentation Diagrams (P&IDs)",
      "Heat & Mass Balance Diagrams (HMBD)",
      "Process Simulation",
      "Control System Design",
    ],
  },
  {
    title: "Civil & Structural Engineering",
    description:
      "Our civil and structural team is the right combination of experience and advanced technologies that gives a winning edge. Our commitment to innovate in civil and structural engineering and worldwide safety standards drives every project forward.",
    deliverableGroups: [
      {
        title: "Civil Deliverables",
        items: [
          "Plot plan & equipment layout",
          "Concrete form drawings",
          "Foundation design and analysis",
          "Reinforcement detail drawings",
          "Bar bend schedules",
        ],
      },
      {
        title: "Structural Deliverables",
        items: [
          "Structural steel member size calculations",
          "Connection design & reports",
          "Tekla 3D modeling",
          "Steel fabrication & shop drawings",
          "Steel erection plan drawings",
          "Staircase, handrails & miscellaneous detailing",
          "Bill of materials & CNC data",
          "Advance BOM, anchor bolt plans & embed plans",
        ],
      },
    ],
  },
  {
    title: "Mechanical Engineering",
    description:
      "We provide mechanical static equipment engineering services involving the design and analysis of pressure vessels, storage tanks, heat exchangers, and process columns for petroleum refineries, chemical plants, and power plants.",
    deliverables: [
      "Pressure Vessel Design per ASME Section VIII",
      "Heat Exchanger Design per TEMA",
      "Storage Tank Design per API 620/650",
      "Equipment GA Drawings",
      "Tank/Pressure Vessel Fabrication Drawings",
    ],
  },
  {
    title: "Piping Engineering",
    description:
      "Our piping design team offers design and detail engineering services for oil & gas, pharmaceutical, refinery, chemical, power plant, utility, waste water treatment, and allied industry segments.",
    pipingSections: {
      groups: [
        {
          title: "Front End Engineering Design",
          items: [
            "Plot plan development",
            "Conceptual pipe routing",
          ],
        },
        {
          title: "Basic Engineering Design",
          items: [
            "Pipe & pump sizing calculations",
            "Stress analysis",
            "Pipe support standards",
            "Piping load data for support design",
            "Piping design criteria development",
            "Piping material selection & specification",
            "Pressure drop calculations",
          ],
        },
      ],
      fullWidth: {
        title: "Pre-bid Engineering",
        body: "Feasibility studies and detailed project reports, review of basic inquiry drawings/documents, data collection from client/site, conceptual pipe routing, and estimating bill of quantities for proposal engineering.",
      },
    },
  },
];

export default function PlantEngineeringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Plant Engineering"
          title="Plant Design Engineering Services"
          description="End-to-end engineering consulting for every phase of your plant project — from concept to construction-ready documentation. We help clients build new plants and revamp existing facilities cost-effectively and on schedule."
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
                  Full Spectrum Plant Engineering
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8] mb-5">
                  Liberty CAD Inc provides a full spectrum of engineering consulting services for Oil &amp; Gas,
                  Power Generation, Chemical, Paper &amp; Pulp, Mining &amp; Minerals, and Waste Water
                  Treatment plants — each phase of project design development, from concept to definitive
                  design and documentation for construction.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.8]">
                  Our engineering teams have successfully completed Greenfield &amp; Brownfield projects
                  aimed at increasing production, improving efficiencies, upgrading to newer technologies,
                  and repairing or refurbishing older plants. Our engineers are well-versed with industry
                  design codes (ASME, ANSI, API, TEMA, AISC, NFPA &amp; OSHA) as well as regulatory standards.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Discipline cards */}
            <div className="flex flex-col gap-8">
              {disciplines.map((disc, i) => (
                <AnimateOnScroll key={disc.title} delay={i * 60}>
                  <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 items-start">
                    <div>
                      <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[24px] text-[#0b2545] leading-[1.2] tracking-[-0.6px] mb-5">
                        {disc.title}
                      </h3>
                      <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8]">
                        {disc.description}
                      </p>
                    </div>
                    <div className="bg-white border border-[#eceef1] rounded-[10px] p-8">
                      {disc.pipingSections ? (
                        <div className="flex flex-col gap-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {disc.pipingSections.groups.map((group) => (
                              <div key={group.title}>
                                <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-5">
                                  {group.title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                  {group.items.map((item) => (
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
                            ))}
                          </div>
                          <div className="border-t border-[#eceef1] pt-8">
                            <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-4">
                              {disc.pipingSections.fullWidth.title}
                            </h4>
                            <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.7]">
                              {disc.pipingSections.fullWidth.body}
                            </p>
                          </div>
                        </div>
                      ) : disc.deliverableGroups ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {disc.deliverableGroups.map((group) => (
                            <div key={group.title}>
                              <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-5">
                                {group.title}
                              </h4>
                              <ul className="flex flex-col gap-3">
                                {group.items.map((item) => (
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
                          ))}
                        </div>
                      ) : (
                        <>
                          <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-5">
                            Key Deliverables
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {disc.deliverables!.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.6]"
                              >
                                <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Plant Engineering Project?"
          description="Get in touch to discuss your project requirements and how Liberty CAD Inc can support your goals."
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
