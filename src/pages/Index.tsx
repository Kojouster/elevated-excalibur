import Seo from "@/components/Seo";
import { useHomeContent } from "@/i18n/useHomeContent";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import CompanyOverview from "@/components/CompanyOverview";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ComplianceSection from "@/components/ComplianceSection";
import TrustSignals from "@/components/TrustSignals";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const faq = useHomeContent().faq;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faq?.items ?? []).map((it: { q: string; a: string }) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="PALVAN — European Military Supplier & Defence Trade"
        description="European supplier of military equipment: sales, modernization, repair and lifecycle support of advanced defence systems."
        path="/"
        jsonLd={faqSchema.mainEntity.length ? faqSchema : undefined}
      />
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
      <SectionDivider />
      <FaqSection />
      <CtaBanner />
      <ContactForm />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;

