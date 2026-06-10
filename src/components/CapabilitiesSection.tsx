import { motion } from "framer-motion";
import { useState } from "react";
import { Ship, PackageCheck, Globe, Users } from "lucide-react";
import { useHomeContent } from "@/i18n/useHomeContent";

const iconMap: Record<string, typeof Ship> = {
  sales: PackageCheck,
  export: Ship,
  import: Globe,
  advisory: Users,
};

const CapabilitiesSection = () => {
  const c = useHomeContent().capabilities;
  const [active, setActive] = useState(c.tabs[0].id);
  const current = c.tabs.find((t) => t.id === active) ?? c.tabs[0];
  const Icon = iconMap[current.id] ?? PackageCheck;

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-card/30 bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{c.eyebrow}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {c.title1}<span className="text-gradient-gold">{c.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{c.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {c.tabs.map((tab) => {
              const TIcon = iconMap[tab.id] ?? PackageCheck;
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex items-center gap-4 px-5 py-4 border text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-[200px] lg:min-w-0 ${
                    isActive
                      ? "border-primary bg-background text-foreground"
                      : "border-border bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                      isActive ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <TIcon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-heading text-sm tracking-wider uppercase">
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="capActive"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 p-8 lg:p-10 border border-border bg-background"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-primary/40 bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                {current.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{current.body}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 p-4 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="w-1.5 h-1.5 mt-2 bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
