import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersStrip from "@/components/PartnersStrip";
import SectionDivider from "@/components/SectionDivider";
import ProductsSection from "@/components/ProductsSection";
import MissionSection from "@/components/MissionSection";
import CtaBanner from "@/components/CtaBanner";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ProductsSection />
      <SectionDivider flipped />
      <MissionSection />
      <CtaBanner />
      <SectionDivider />
      <NewsSection />
      <ContactForm />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
