import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EmpathySection from "./components/EmpathySection";
import ApproachSection from "./components/ApproachSection";
import ServicesSection from "./components/ServicesSection";
import ExpertiseSection from "./components/ExpertiseSection";
import IndustriesSection from "./components/IndustriesSection";
import TrustSection from "./components/TrustSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <EmpathySection />
        <ApproachSection />
        <ServicesSection />
        <ExpertiseSection />
        <IndustriesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
