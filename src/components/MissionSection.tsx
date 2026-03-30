import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "60+", label: "Countries Served" },
  { value: "1000+", label: "Vehicles Delivered" },
  { value: "24/7", label: "Global Support" },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-background bg-noise relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              TRUSTED PARTNER IN<br />
              <span className="text-gradient-gold">GLOBAL DEFENCE</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Excalibur Army is a leading European defence company specializing in the modernization,
              repair, and supply of military equipment. With decades of experience, we deliver
              reliable solutions that protect nations and their people.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive portfolio spans armoured vehicles, artillery systems, and complete
              lifecycle support — backed by world-class engineering and an unwavering commitment to quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border bg-card text-center"
              >
                <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
