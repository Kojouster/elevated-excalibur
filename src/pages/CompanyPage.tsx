import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { Eye, Award, Users, Globe, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import SectionDivider from "@/components/SectionDivider";
import CtaBanner from "@/components/CtaBanner";
import { useLanguage } from "@/i18n/LanguageContext";
import { useHomeContent } from "@/i18n/useHomeContent";
import headquartersImg from "@/assets/headquarters.jpg";

const CompanyPage = () => {
  const { t } = useLanguage();
  const trust = useHomeContent().trust;

  const values = [
    { icon: Eye, title: t("company.innovationTitle"), description: t("company.innovationDesc") },
    { icon: Award, title: t("company.excellenceTitle"), description: t("company.excellenceDesc") },
    { icon: Users, title: t("company.partnershipTitle"), description: t("company.partnershipDesc") },
    { icon: Globe, title: t("company.responsibilityTitle"), description: t("company.responsibilityDesc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About PALVAN — European Military Supplier & Defence Partner"
        description="Learn about PALVAN, a European supplier of military equipment with 26+ years of experience in sales, modernization, and lifecycle support of defence systems."
        path="/company"
      />
      <Navbar />
      <PageHeader
        subtitle={t("company.subtitle")}
        title={t("company.title")}
        titleAccent={t("company.titleAccent")}
        description={t("company.description")}
        backgroundImage={headquartersImg}
      />

      <SectionDivider />

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-background bg-noise relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">
              {t("company.subtitle")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("company.missionTitle")}
              <span className="text-gradient-gold"> &amp; {t("company.visionTitle")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: t("company.missionTitle"), text: t("company.missionText") },
              { icon: Zap, title: t("company.visionTitle"), text: t("company.visionText") },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 lg:p-10 border border-border bg-card hover:border-primary/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider flipped />

      {/* Stats / Trust */}
      <section className="py-24 lg:py-32 bg-card/30 bg-noise relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{trust.eyebrow}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {trust.title1}
              <span className="text-gradient-gold">{trust.titleAccent}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trust.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-border bg-background hover:border-primary/40 transition-all duration-500"
              >
                <div className="font-heading text-5xl lg:text-6xl font-bold text-primary mb-3 tabular-nums">
                  {s.raw ? s.value : `${s.value}${s.suffix ?? ""}`}
                </div>
                <div className="h-px w-12 bg-primary/40 mb-3" />
                <div className="text-foreground text-sm tracking-wider font-heading uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background bg-noise relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">
              {t("company.valuesSubtitle")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("company.valuesTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 border border-border bg-card hover:border-primary/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider flipped />

      <CtaBanner />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default CompanyPage;
