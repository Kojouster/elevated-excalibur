import { motion } from "framer-motion";
import { Building2, Compass, HandshakeIcon, ScrollText } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Established 2000",
    text: "A Slovak Republic–based company operating continuously in the defence sector for more than two decades.",
  },
  {
    icon: Compass,
    title: "International Reach",
    text: "Cross-border experience covering both export and import operations for institutional clients.",
  },
  {
    icon: HandshakeIcon,
    title: "Trusted Partner",
    text: "Long-standing relationships built on discretion, reliability, and professional handling of every engagement.",
  },
  {
    icon: ScrollText,
    title: "Regulated Operations",
    text: "All activities conducted in accordance with applicable national and international regulations.",
  },
];

const CompanyOverview = () => {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Company</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Trusted Experience in <span className="text-gradient-gold">Military Export and Import</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PALVAN is a Slovakia-based company operating in the defence sector since 2000.
            Over more than two decades, we have built a reputation as a reliable, discreet, and
            professional partner for institutional clients engaged in regulated international trade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
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
