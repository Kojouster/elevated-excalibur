import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersStrip from "@/components/PartnersStrip";
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
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <PartnersStrip />
      <ProductsSection />
      <MissionSection />
      <CtaBanner />
      <ServicesSection />
      <NewsSection />
      <ContactForm />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
