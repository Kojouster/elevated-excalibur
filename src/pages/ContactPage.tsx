import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, Globe, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";

const offices = [
  { city: "Šternberk", country: "Czech Republic", typeKey: "headquartersProduction", address: "Liechtensteinská 1414/7, 785 01 Šternberk", phone: "+420 585 085 111", email: "info@excaliburarmy.com" },
  { city: "Prague", country: "Czech Republic", typeKey: "businessOffice", address: "Lazarská 13/8, 120 00 Prague 2", phone: "+420 221 595 111", email: "prague@excaliburarmy.com" },
  { city: "Bratislava", country: "Slovakia", typeKey: "regionalOffice", address: "Prievozská 32, 821 09 Bratislava", phone: "+421 2 2042 1111", email: "bratislava@excaliburarmy.com" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t("contactPage.faq1q"), a: t("contactPage.faq1a") },
    { q: t("contactPage.faq2q"), a: t("contactPage.faq2a") },
    { q: t("contactPage.faq3q"), a: t("contactPage.faq3a") },
    { q: t("contactPage.faq4q"), a: t("contactPage.faq4a") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader subtitle={t("contactPage.subtitle")} title={t("contactPage.title")} titleAccent={t("contactPage.titleAccent")} description={t("contactPage.description")} />

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface-elevated">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: t("contactPage.emailUs"), value: "info@excaliburarmy.com", action: "mailto:info@excaliburarmy.com" },
              { icon: Phone, label: t("contactPage.callUs"), value: "+420 585 085 111", action: "tel:+420585085111" },
              { icon: Clock, label: t("contactPage.workingHours"), value: t("contactPage.workingHoursValue"), action: null },
              { icon: Globe, label: t("contactPage.globalPresence"), value: t("contactPage.globalPresenceValue"), action: null },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase mb-1">{item.label}</p>
                  {item.action ? (
                    <a href={item.action} className="text-foreground font-heading text-sm font-bold hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-foreground font-heading text-sm font-bold">{item.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Offices */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">{t("contactPage.sendMessage")}</h2>
              <p className="text-muted-foreground mb-8">{t("contactPage.sendMessageDesc")}</p>
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-12 border border-primary/30 bg-primary/5 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("contactPage.messageSent")}</h3>
                  <p className="text-muted-foreground text-sm">{t("contactPage.messageSentDesc")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.fullName")}</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.email")}</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.companyOrg")}</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.phone")}</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.subject")}</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm focus:border-primary focus:outline-none transition-colors" required>
                      <option value="">{t("contactPage.selectSubject")}</option>
                      <option value="products">{t("contactPage.productInquiry")}</option>
                      <option value="services">{t("contactPage.serviceRequest")}</option>
                      <option value="partnership">{t("contactPage.partnershipOpportunity")}</option>
                      <option value="support">{t("contactPage.technicalSupport")}</option>
                      <option value="careers">{t("contactPage.careerInquiry")}</option>
                      <option value="other">{t("contactPage.other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">{t("contactPage.message")}</label>
                    <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" required />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
                    {t("contactPage.send")} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">{t("contactPage.ourOffices")}</h3>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h4 className="font-heading text-lg font-bold text-foreground">{office.city}</h4>
                    </div>
                    <p className="text-primary text-xs tracking-wider uppercase mb-2">{t(`contactPage.${office.typeKey}`)}</p>
                    <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                    <p className="text-muted-foreground text-sm mb-1">{office.phone}</p>
                    <a href={`mailto:${office.email}`} className="text-primary text-sm hover:text-gold-light transition-colors">{office.email}</a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-surface-elevated">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("contactPage.faqSubtitle")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t("contactPage.faqTitle")}</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`border transition-all duration-500 ${expandedFaq === i ? "border-primary/40" : "border-border"}`}>
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-heading text-sm font-bold text-foreground pr-4">{faq.q}</span>
                  {expandedFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {expandedFaq === i && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
