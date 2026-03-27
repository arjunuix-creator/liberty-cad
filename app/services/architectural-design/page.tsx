import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { CTASection } from "../../components/shared";

export const metadata: Metadata = {
  title: "Architectural Design — Liberty CAD Inc",
  description:
    "Exceptional 3D renderings and comprehensive architectural plans. Bringing your projects to life with stunning visual detail, accuracy, and construction-ready documentation.",
};

export default function ArchitecturalDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Architectural Design"
          title="Architectural Design & Documentation"
          description="Exceptional 3D renderings and comprehensive architectural plans that bring your projects to life with stunning visual detail and accuracy."
          cta={{ text: "Get in Touch", href: "/contact" }}
        />

        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 h-full">
                  <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                    3D Renderings
                  </p>
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[28px] text-[#0b2545] leading-[1.2] tracking-[-0.7px] mb-5">
                    Visualize Your Vision
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8]">
                    Liberty CAD Inc provides exceptional 3D renderings that bring your projects to life with
                    stunning visual detail and accuracy. By using cutting-edge technology and expert
                    techniques, we create realistic, high-quality renderings that showcase your designs
                    in their best light. Whether for presentations, marketing, or design development,
                    our team ensures every image captures the essence of your vision.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={80}>
                <div className="card-lift bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10 h-full">
                  <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                    Architectural Plans
                  </p>
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[28px] text-[#0b2545] leading-[1.2] tracking-[-0.7px] mb-5">
                    Construction-Ready Documentation
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#7a8694] leading-[1.8]">
                    We provide detailed and accurate plans that serve as the foundation for a successful
                    build. Our team creates comprehensive blueprints including site plans, floor plans,
                    elevations, and other essential details, ensuring your design is clearly defined and
                    ready for construction. We work closely with you to ensure everything is aligned with
                    your vision while meeting technical requirements and industry standards.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Bring Your Design to Life?"
          description="Get in touch to discuss your architectural design and documentation requirements."
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
