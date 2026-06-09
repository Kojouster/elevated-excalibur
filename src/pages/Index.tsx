import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import CompanyOverview from "@/components/CompanyOverview";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ComplianceSection from "@/components/ComplianceSection";
import TrustSignals from "@/components/TrustSignals";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <CompanyOverview />
      <SectionDivider flipped />
      <CapabilitiesSection />
      <SectionDivider />
      <ComplianceSection />
      <SectionDivider flipped />
      <TrustSignals />
      <CtaBanner />
      <ContactForm />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
