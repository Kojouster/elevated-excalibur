import { motion } from "framer-motion";
import { Wrench, ShieldCheck, GraduationCap, Truck } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Wrench,
    title: "Modernization & Upgrades",
    description: "Complete overhaul and modernization of military vehicles with cutting-edge technology integration.",
    detail: "We transform legacy platforms into modern combat systems, integrating new fire control, communications, and protection suites.",
    stat: "500+",
    statLabel: "Vehicles Upgraded",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Support",
    description: "Comprehensive lifecycle management including maintenance, spare parts, and technical assistance.",
    detail: "24/7 global support network with rapid response teams and strategic spare parts warehouses across multiple continents.",
    stat: "24/7",
    statLabel: "Global Support",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Professional training for crews and technical personnel on operation and maintenance procedures.",
    detail: "State-of-the-art simulation facilities and field training programs tailored to specific operational environments.",
    stat: "2000+",
    statLabel: "Personnel Trained",
  },
  {
    icon: Truck,
    title: "Logistics & Supply",
    description: "Global logistics network ensuring timely delivery of equipment and spare parts worldwide.",
    detail: "Integrated supply chain management with strategic hubs ensuring rapid delivery of mission-critical components.",
    stat: "60+",
    statLabel: "Countries Served",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-surface-elevated relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-12">
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
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className={`group relative p-8 border bg-card cursor-pointer transition-all duration-500 overflow-hidden ${
                  isActive ? "border-primary/50 shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.3)]" : "border-border"
                }`}
              >
                {/* Animated top border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  <div className={`w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-500 ${
                    isActive ? "border-primary bg-primary/10" : "border-border"
                  }`}>
                    <Icon className={`w-6 h-6 transition-all duration-500 ${
                      isActive ? "text-primary scale-110" : "text-muted-foreground"
                    }`} />
                  </div>
                  
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {isActive ? service.detail : service.description}
                  </p>

                  {/* Stat reveal on hover */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-border"
                  >
                    <div className="font-heading text-2xl font-bold text-primary">{service.stat}</div>
                    <div className="text-muted-foreground text-xs tracking-wider">{service.statLabel}</div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
