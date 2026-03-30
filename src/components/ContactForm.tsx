import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Get In Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              CONTACT US
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you need information about our products, services, or partnership opportunities,
              our team is ready to assist you. Send us a message and we'll respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-heading font-bold text-sm">HQ</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground tracking-wide">Headquarters</p>
                  <p className="text-muted-foreground text-sm">Šternberk, Czech Republic</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-heading font-bold text-sm">24/7</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground tracking-wide">Support</p>
                  <p className="text-muted-foreground text-sm">Global technical assistance available around the clock</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-card border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
