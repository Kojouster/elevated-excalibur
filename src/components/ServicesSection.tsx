import { motion } from "framer-motion";
import { Wrench, ShieldCheck, GraduationCap, Truck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Modernization & Upgrades",
    description: "Complete overhaul and modernization of military vehicles with cutting-edge technology integration.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Support",
    description: "Comprehensive lifecycle management including maintenance, spare parts, and technical assistance.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Professional training for crews and technical personnel on operation and maintenance procedures.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply",
    description: "Global logistics network ensuring timely delivery of equipment and spare parts worldwide.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            SERVICES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
