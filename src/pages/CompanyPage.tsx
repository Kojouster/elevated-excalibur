import { motion } from "framer-motion";
import { Eye, Award, Users, Globe, Building, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import factoryImg from "@/assets/factory.jpg";
import headquartersImg from "@/assets/headquarters.jpg";

const CompanyPage = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Eye, title: t("company.innovationTitle"), description: t("company.innovationDesc") },
    { icon: Award, title: t("company.excellenceTitle"), description: t("company.excellenceDesc") },
    { icon: Users, title: t("company.partnershipTitle"), description: t("company.partnershipDesc") },
    { icon: Globe, title: t("company.responsibilityTitle"), description: t("company.responsibilityDesc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader subtitle={t("company.subtitle")} title={t("company.title")} titleAccent={t("company.titleAccent")} description={t("company.description")} backgroundImage={headquartersImg} />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-8 lg:p-10 border border-border bg-card group hover:border-primary/30 transition-all duration-500">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left" transition={{ duration: 0.8 }} />
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("company.missionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("company.missionText")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="relative p-8 lg:p-10 border border-border bg-card group hover:border-primary/30 transition-all duration-500">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left" transition={{ duration: 0.8, delay: 0.15 }} />
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("company.visionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("company.visionText")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={factoryImg} alt="Manufacturing facility" className="w-full h-full object-cover" loading="lazy" width={1200} height={600} />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center">
            <Building className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              150,000 m² <span className="text-primary">{t("company.factoryStat")}</span>
            </p>
            <p className="text-muted-foreground mt-2">{t("company.factoryLocation")}</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("company.valuesSubtitle")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{t("company.valuesTitle")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.2)] transition-all duration-500 text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default CompanyPage;
