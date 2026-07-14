import Seo from "@/components/Seo";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, Globe, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import headquartersImg from "@/assets/headquarters.jpg";
const phones = [
  { lang: "EN", number: "+421 905 616 418", href: "tel:+421905616418" },
  { lang: "SK", number: "+421 917 600 610", href: "tel:+421917600610" },
];

const offices = [
  {
    city: "Košice",
    country: "Slovak Republic",
    typeKey: "headquartersProduction",
    address: "Južná trieda 82/B, 040 17, Košice, Slovak Republic",
    phones,
    email: "information@palvan.sk",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.85!2d21.2555!3d48.7164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f2d1b1e5c7e5d%3A0x0!2sJu%C5%BEn%C3%A1%20trieda%2082%2FB%2C%20040%2017%20Ko%C5%A1ice!5e0!3m2!1sen!2ssk!4v1700000000000",
  },
  {
    city: "Bratislava",
    country: "Slovak Republic",
    typeLabel: "Sales Office",
    address: "EINPARK Offices by Corwin, Einsteinova 33, 851 01, Bratislava, Slovak Republic",
    phones,
    email: "information@palvan.sk",
    mapSrc:
      "https://www.google.com/maps?q=Einsteinova+33,+851+01+Bratislava&output=embed",
  },
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
      <Seo
        title="Contact PALVAN — Defence Sales & Trade Inquiries"
        description="Contact PALVAN's Košice and Bratislava offices for defence trade, procurement, and lifecycle support inquiries. Responses within one business day."
        path="/contact"
      />
      <Navbar />
      <PageHeader subtitle={t("contactPage.subtitle")} title={t("contactPage.title")} titleAccent={t("contactPage.titleAccent")} description={t("contactPage.description")} backgroundImage={headquartersImg} />

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface-elevated">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: t("contactPage.emailUs"), value: "information@palvan.sk", action: "mailto:information@palvan.sk" },
              {
                icon: Phone,
                label: t("contactPage.callUs"),
                phones: [
                  { lang: "EN", number: "+421 905 616 418", href: "tel:+421905616418" },
                  { lang: "SK", number: "+421 917 600 610", href: "tel:+421917600610" },
                ],
              },
              { icon: Clock, label: t("contactPage.workingHours"), value: t("contactPage.workingHoursValue"), action: null },
              { icon: Globe, label: t("contactPage.globalPresence"), value: t("contactPage.globalPresenceValue"), action: null },
            ].map((item: any, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase mb-1">{item.label}</p>
                  {item.phones ? (
                    <div className="flex flex-col space-y-1">
                      {item.phones.map((p: any) => (
                        <a key={p.lang} href={p.href} className="text-foreground font-heading text-sm font-bold hover:text-primary transition-colors">
                          <span className="text-primary mr-2">{p.lang}</span>{p.number}
                        </a>
                      ))}
                    </div>
                  ) : item.action ? (
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
              <div className="space-y-6">
                {offices.map((office, i) => (
                  <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-border bg-card hover:border-primary/30 transition-all duration-500">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <h4 className="font-heading text-lg font-bold text-foreground">{office.city}</h4>
                      </div>
                      <p className="text-primary text-xs tracking-wider uppercase mb-2">{office.typeKey ? t(`contactPage.${office.typeKey}`) : office.typeLabel}</p>
                      <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                      <div className="flex flex-col space-y-1 mb-1">
                        {office.phones.map((p) => (
                          <a key={p.lang} href={p.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                            <span className="text-primary mr-2">{p.lang}</span>{p.number}
                          </a>
                        ))}
                      </div>
                      <a href={`mailto:${office.email}`} className="text-primary text-sm hover:text-gold-light transition-colors">{office.email}</a>
                    </div>
                    <div className="border-t border-border overflow-hidden">
                      <iframe
                        title={`${office.city} Office Location`}
                        src={office.mapSrc}
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      />
                    </div>
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
