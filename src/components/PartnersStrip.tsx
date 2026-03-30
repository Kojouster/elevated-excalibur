import { motion } from "framer-motion";

const partners = [
  "NATO", "Czech MoD", "IDET", "EUROSATORY", "AUSA", "DSEI", "IDEX"
];

const PartnersStrip = () => {
  return (
    <section className="py-16 bg-surface-elevated border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-xs tracking-[0.4em] uppercase mb-10"
        >
          Trusted by Defence Organizations Worldwide
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-muted-foreground/40 hover:text-primary/60 transition-colors duration-500"
            >
              <span className="font-heading text-xl md:text-2xl font-bold tracking-[0.15em]">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersStrip;
