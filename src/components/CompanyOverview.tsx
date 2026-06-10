import { motion } from "framer-motion";
import { Building2, Compass, Handshake, ScrollText } from "lucide-react";
import { useHomeContent } from "@/i18n/useHomeContent";

const icons = [Building2, Compass, Handshake, ScrollText];

const CompanyOverview = () => {
  const c = useHomeContent().company;
  return (
    <section id="overview" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{c.eyebrow}</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {c.title1}<span className="text-gradient-gold">{c.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{c.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
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
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
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
  );
};

export default CompanyOverview;
