import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("contactForm.subtitle")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t("contactForm.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("contactForm.description")}</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-heading font-bold text-sm">HQ</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground tracking-wide">{t("contactForm.hqLabel")}</p>
                  <p className="text-muted-foreground text-sm">{t("contactForm.hqValue")}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-heading font-bold text-sm">24/7</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground tracking-wide">{t("contactForm.supportLabel")}</p>
                  <div className="flex flex-col text-muted-foreground text-sm">
                    <span>EN +421 905 616 418</span>
                    <span>SK +421 917 600 610</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder={t("contactForm.namePlaceholder")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
              <input type="email" placeholder={t("contactForm.emailPlaceholder")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
            </div>
            <input type="text" placeholder={t("contactForm.subjectPlaceholder")} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
            <textarea placeholder={t("contactForm.messagePlaceholder")} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" required />
            <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
              {t("contactForm.sendButton")} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
