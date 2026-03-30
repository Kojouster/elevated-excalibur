import { motion } from "framer-motion";
import { useState } from "react";
import { Wrench, ShieldCheck, GraduationCap, Truck, Settings, Cog, ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import factoryImg from "@/assets/factory.jpg";

const services = [
  {
    icon: Wrench,
    title: "Modernization & Upgrades",
    short: "Complete overhaul and modernization of military vehicles with cutting-edge technology.",
    details: [
      "Fire control system upgrades with digital ballistic computers",
      "Engine and transmission replacement for enhanced mobility",
      "Communication systems integration (NATO compatible)",
      "Night vision and thermal imaging installation",
      "Armour enhancement and ERA package fitting",
      "Turret stabilization system modernization",
    ],
    stat: "500+",
    statLabel: "Vehicles Modernized",
    image: factoryImg,
  },
  {
    icon: ShieldCheck,
    title: "Lifecycle Support",
    short: "Comprehensive lifecycle management including maintenance, spare parts, and technical assistance.",
    details: [
      "Scheduled and unscheduled maintenance programs",
      "Strategic spare parts warehousing worldwide",
      "Technical documentation and manuals",
      "Failure analysis and corrective actions",
      "Configuration management and tracking",
      "Performance monitoring and reporting",
    ],
    stat: "24/7",
    statLabel: "Global Availability",
    image: factoryImg,
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    short: "Professional training for crews and technical personnel on operation and maintenance.",
    details: [
      "Crew operational training programs",
      "Technical maintenance training courses",
      "Simulator-based training solutions",
      "Train-the-trainer programs",
      "Field exercises and live-fire training",
      "E-learning and distance education platforms",
    ],
    stat: "2000+",
    statLabel: "Personnel Trained",
    image: factoryImg,
  },
  {
    icon: Truck,
    title: "Logistics & Supply",
    short: "Global logistics network ensuring timely delivery of equipment and spare parts.",
    details: [
      "Integrated supply chain management",
      "Strategic spare parts pooling",
      "Rapid deployment logistics support",
      "Customs and export compliance",
      "Transportation and heavy-lift services",
      "Forward repair teams deployment",
    ],
    stat: "60+",
    statLabel: "Countries Served",
    image: factoryImg,
  },
  {
    icon: Settings,
    title: "Repair & Overhaul",
    short: "Complete repair and general overhaul services to restore vehicles to factory condition.",
    details: [
      "Complete vehicle disassembly and inspection",
      "Component-level repair and replacement",
      "Corrosion treatment and repainting",
      "Hydraulic and pneumatic system overhaul",
      "Electrical system rewiring and testing",
      "Factory acceptance testing and delivery",
    ],
    stat: "1000+",
    statLabel: "Vehicles Overhauled",
    image: factoryImg,
  },
  {
    icon: Cog,
    title: "Engineering Services",
    short: "Custom engineering solutions from concept design to prototype development and testing.",
    details: [
      "Feasibility studies and concept design",
      "3D modeling and FEA analysis",
      "Prototype development and testing",
      "Integration engineering for subsystems",
      "Homologation and certification support",
      "Technical publications and documentation",
    ],
    stat: "50+",
    statLabel: "Projects Delivered",
    image: factoryImg,
  },
];

const process = [
  { step: "01", title: "Consultation", description: "In-depth assessment of your requirements, operational environment, and strategic objectives." },
  { step: "02", title: "Analysis", description: "Technical evaluation, feasibility study, and development of tailored solution proposals." },
  { step: "03", title: "Development", description: "Engineering design, prototype creation, and comprehensive testing programmes." },
  { step: "04", title: "Delivery", description: "Production, quality assurance, delivery, and operator training with full documentation." },
  { step: "05", title: "Support", description: "Ongoing lifecycle management, technical assistance, and continuous improvement programmes." },
];

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        subtitle="What We Offer"
        title="OUR"
        titleAccent="SERVICES"
        description="End-to-end defence solutions from modernization and repair to training and lifecycle management."
        backgroundImage={factoryImg}
      />

      {/* Services Accordion */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isExpanded = expandedService === i;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`border transition-all duration-500 ${isExpanded ? "border-primary/40 shadow-[0_0_40px_-15px_hsl(43_52%_54%/0.2)]" : "border-border"}`}
                >
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : i)}
                    className="w-full flex items-center gap-6 p-6 lg:p-8 text-left group"
                  >
                    <div className={`w-14 h-14 flex items-center justify-center border flex-shrink-0 transition-all duration-500 ${
                      isExpanded ? "border-primary bg-primary/10" : "border-border group-hover:border-primary/30"
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${isExpanded ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm truncate">{service.short}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="hidden md:block text-right">
                        <div className="font-heading text-2xl font-bold text-primary">{service.stat}</div>
                        <div className="text-muted-foreground text-xs">{service.statLabel}</div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-8 pt-2">
                          <div className="border-t border-border pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.details.map((detail, di) => (
                                <motion.div
                                  key={di}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: di * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-6">
                              <a href="/contact" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:gap-3 transition-all">
                                Request Consultation <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">How We Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">OUR PROCESS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500"
              >
                <div className="font-heading text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-3">{p.step}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a <span className="text-gradient-gold">Custom Solution?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Contact our engineering team to discuss your specific requirements.</p>
            <a href="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
