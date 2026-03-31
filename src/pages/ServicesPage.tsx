import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wrench, ShieldCheck, GraduationCap, Truck, Settings, Cog, ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import factoryImg from "@/assets/factory.jpg";

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);
  const { t } = useLanguage();

  const services = [
    { icon: Wrench, titleKey: "modernizationTitle", shortKey: "modernizationShort", detailsKey: "modernizationDetails", stat: "500+", statLabelKey: "vehiclesModernized" },
    { icon: ShieldCheck, titleKey: "lifecycleTitle", shortKey: "lifecycleShort", detailsKey: "lifecycleDetails", stat: "24/7", statLabelKey: "globalAvailability" },
    { icon: GraduationCap, titleKey: "trainingTitle", shortKey: "trainingShort", detailsKey: "trainingDetails", stat: "2000+", statLabelKey: "personnelTrained" },
    { icon: Truck, titleKey: "logisticsTitle", shortKey: "logisticsShort", detailsKey: "logisticsDetails", stat: "60+", statLabelKey: "countriesServed" },
    { icon: Settings, titleKey: "repairTitle", shortKey: "repairShort", detailsKey: "repairDetails", stat: "1000+", statLabelKey: "vehiclesOverhauled" },
    { icon: Cog, titleKey: "engineeringTitle", shortKey: "engineeringShort", detailsKey: "engineeringDetails", stat: "50+", statLabelKey: "projectsDelivered" },
  ];

  const process = [
    { step: "01", titleKey: "step1Title", descKey: "step1Desc" },
    { step: "02", titleKey: "step2Title", descKey: "step2Desc" },
    { step: "03", titleKey: "step3Title", descKey: "step3Desc" },
    { step: "04", titleKey: "step4Title", descKey: "step4Desc" },
    { step: "05", titleKey: "step5Title", descKey: "step5Desc" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader subtitle={t("servicesPage.subtitle")} title={t("servicesPage.title")} titleAccent={t("servicesPage.titleAccent")} description={t("servicesPage.description")} backgroundImage={factoryImg} />

      {/* Services Accordion */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isExpanded = expandedService === i;
              const details: string[] = (t(`servicesPage.${service.detailsKey}`) as any) || [];

              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`border transition-all duration-500 ${isExpanded ? "border-primary/40 shadow-[0_0_40px_-15px_hsl(43_52%_54%/0.2)]" : "border-border"}`}>
                  <button onClick={() => setExpandedService(isExpanded ? null : i)} className="w-full flex items-center gap-6 p-6 lg:p-8 text-left group">
                    <div className={`w-14 h-14 flex items-center justify-center border flex-shrink-0 transition-all duration-500 ${isExpanded ? "border-primary bg-primary/10" : "border-border group-hover:border-primary/30"}`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${isExpanded ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-1">{t(`servicesPage.${service.titleKey}`)}</h3>
                      <p className="text-muted-foreground text-sm truncate">{t(`servicesPage.${service.shortKey}`)}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="hidden md:block text-right">
                        <div className="font-heading text-2xl font-bold text-primary">{service.stat}</div>
                        <div className="text-muted-foreground text-xs">{t(`servicesPage.${service.statLabelKey}`)}</div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                        <div className="px-6 lg:px-8 pb-8 pt-2">
                          <div className="border-t border-border pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {Array.isArray(details) && details.map((detail: string, di: number) => (
                                <motion.div key={di} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: di * 0.05 }} className="flex items-start gap-3">
                                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-6">
                              <a href="/contact" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:gap-3 transition-all">
                                {t("servicesPage.requestConsultation")} <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("servicesPage.processSubtitle")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{t("servicesPage.processTitle")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500">
                <div className="font-heading text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-3">{p.step}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t(`servicesPage.${p.titleKey}`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`servicesPage.${p.descKey}`)}</p>
                {i < process.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("servicesPage.ctaTitle1")} <span className="text-gradient-gold">{t("servicesPage.ctaTitle2")}</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t("servicesPage.ctaDesc")}</p>
            <a href="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
              {t("servicesPage.ctaCta")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
