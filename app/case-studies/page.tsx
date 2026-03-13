import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import {
  CaseStudyGrid,
  TestimonialSection,
  CTASection,
  type CaseStudy,
  type Testimonial,
} from "../components/shared";

const caseStudies: CaseStudy[] = [
  {
    industry: "Oil & Gas",
    title: "Offshore Platform Process Upgrade",
    description:
      "Complete process engineering package for a major offshore platform upgrade, including new separation equipment and piping modifications.",
    results: [
      "30% increase in processing capacity",
      "Zero safety incidents during construction",
      "Delivered 2 weeks ahead of schedule",
    ],
    services: ["Process Engineering", "Piping Design", "Structural Analysis"],
  },
  {
    industry: "Chemical",
    title: "Chemical Plant Expansion",
    description:
      "Multidisciplinary engineering for a greenfield chemical production facility, from conceptual design through construction support.",
    results: [
      "$2.5M savings through design optimization",
      "HAZOP-ready documentation",
      "Seamless integration with existing systems",
    ],
    services: ["Process Design", "Mechanical Engineering", "E&I Design"],
  },
  {
    industry: "Water Treatment",
    title: "Municipal Water Treatment Facility",
    description:
      "Engineering design for a new 50 MGD water treatment plant, including all civil, structural, mechanical, and electrical disciplines.",
    results: [
      "Met all regulatory requirements",
      "15% under budget on construction",
      "Operational efficiency exceeds targets",
    ],
    services: ["Civil Engineering", "Process Engineering", "Electrical Design"],
  },
  {
    industry: "Mining",
    title: "Mineral Processing Plant Retrofit",
    description:
      "Structural and mechanical upgrades to an aging mineral processing facility, extending operational life by 20+ years.",
    results: [
      "Minimal production downtime",
      "Improved structural integrity",
      "Enhanced safety systems",
    ],
    services: ["Structural Engineering", "Mechanical Design", "Piping Systems"],
  },
  {
    industry: "Energy",
    title: "Combined Cycle Power Plant",
    description:
      "Engineering support for a 500 MW combined cycle power plant, including balance-of-plant systems and interconnections.",
    results: [
      "On-time commercial operation",
      "Exceeded efficiency guarantees",
      "Full regulatory compliance",
    ],
    services: ["Mechanical Engineering", "Electrical Systems", "Civil Works"],
  },
  {
    industry: "Food Processing",
    title: "Dairy Processing Facility",
    description:
      "Sanitary design engineering for a new dairy processing line, meeting all FDA and 3-A sanitary standards.",
    results: [
      "Zero contamination incidents",
      "CIP system optimization",
      "Rapid regulatory approval",
    ],
    services: ["Process Engineering", "Sanitary Design", "Utility Systems"],
  },
];

const testimonial: Testimonial = {
  quote:
    "Liberty CAD has become an extension of our engineering team. Their understanding of fabrication constraints means we spend less time on revisions and more time building.",
  author: "Operations Director",
  role: "Operations Director",
  company: "Leading Industrial Fabricator",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Case Studies"
          title="Real Projects, Real Results"
          description="Explore how we have helped fabricators and operators solve complex engineering challenges across industries."
        />

        {/* Case Studies Grid */}
        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <CaseStudyGrid caseStudies={caseStudies} variant="horizontal" />
          </div>
        </section>

        <TestimonialSection testimonial={testimonial} background="gray" />

        <CTASection
          title="Ready to Be Our Next Success Story?"
          description="Contact us to discuss how we can deliver similar results for your project."
          primaryButton={{ text: "Start Your Project", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
