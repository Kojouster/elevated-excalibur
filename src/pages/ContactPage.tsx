import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, Globe, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";

const offices = [
  {
    city: "Šternberk",
    country: "Czech Republic",
    type: "Headquarters & Production",
    address: "Liechtensteinská 1414/7, 785 01 Šternberk",
    phone: "+420 585 085 111",
    email: "info@excaliburarmy.com",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    type: "Business Office",
    address: "Lazarská 13/8, 120 00 Prague 2",
    phone: "+420 221 595 111",
    email: "prague@excaliburarmy.com",
  },
  {
    city: "Bratislava",
    country: "Slovakia",
    type: "Regional Office",
    address: "Prievozská 32, 821 09 Bratislava",
    phone: "+421 2 2042 1111",
    email: "bratislava@excaliburarmy.com",
  },
];

const faqs = [
  { q: "What types of military vehicles do you work with?", a: "We work with a wide range of platforms including wheeled and tracked armoured vehicles, main battle tanks, self-propelled howitzers, rocket launchers, and logistic vehicles. Our expertise covers both Western and Eastern-origin platforms." },
  { q: "Do you provide complete lifecycle support?", a: "Yes, we offer comprehensive lifecycle management from initial delivery through modernization, spare parts supply, maintenance, training, and eventual disposal or replacement planning." },
  { q: "Can you customize solutions for specific requirements?", a: "Absolutely. Our engineering team specializes in tailoring solutions to specific operational requirements, climate conditions, and integration needs. Every project begins with a thorough consultation phase." },
  { q: "What certifications do you hold?", a: "We hold ISO 9001 quality management, ISO 14001 environmental management, and AQAP 2110 NATO quality assurance certifications, along with various national defence industry approvals." },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        subtitle="Get In Touch"
        title="CONTACT"
        titleAccent="US"
        description="Whether you need product information, partnership details, or technical support — our global team is ready to assist."
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface-elevated">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: "Email Us", value: "info@excaliburarmy.com", action: "mailto:info@excaliburarmy.com" },
              { icon: Phone, label: "Call Us", value: "+420 585 085 111", action: "tel:+420585085111" },
              { icon: Clock, label: "Working Hours", value: "Mon-Fri 8:00-17:00 CET", action: null },
              { icon: Globe, label: "Global Presence", value: "60+ Countries Worldwide", action: null },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500"
                >
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
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">SEND US A MESSAGE</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will respond within 24 hours.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 border border-primary/30 bg-primary/5 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for your inquiry. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Full Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Email *</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Company / Organization</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Subject *</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm focus:border-primary focus:outline-none transition-colors" required>
                      <option value="">Select a subject</option>
                      <option value="products">Product Inquiry</option>
                      <option value="services">Service Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Career Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">Message *</label>
                    <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" required />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Offices */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">OUR OFFICES</h3>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h4 className="font-heading text-lg font-bold text-foreground">{office.city}</h4>
                    </div>
                    <p className="text-primary text-xs tracking-wider uppercase mb-2">{office.type}</p>
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
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Questions</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">FAQ</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border transition-all duration-500 ${expandedFaq === i ? "border-primary/40" : "border-border"}`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
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
