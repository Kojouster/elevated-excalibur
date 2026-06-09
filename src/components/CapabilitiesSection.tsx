import { motion } from "framer-motion";
import { useState } from "react";
import { Ship, PackageCheck, Globe, Users } from "lucide-react";

const tabs = [
  {
    id: "sales",
    icon: PackageCheck,
    label: "Military Sales",
    title: "Professional Military Sales",
    body: "We support institutional clients through every stage of a regulated sale — from initial requirement and sourcing to contract execution and handover. Each engagement is handled with discretion, full documentation, and adherence to applicable end-use requirements.",
    bullets: [
      "Requirement analysis and sourcing",
      "Contract structuring and negotiation",
      "End-user verification and documentation",
      "Discreet handling of sensitive engagements",
    ],
  },
  {
    id: "export",
    icon: Ship,
    label: "Export Operations",
    title: "Cross-Border Export",
    body: "PALVAN manages export operations in line with applicable Slovak, EU, and international rules. We coordinate licensing, logistics, and compliance documentation so that cross-border movement is conducted lawfully and on schedule.",
    bullets: [
      "Export license preparation and filing",
      "Customs and freight coordination",
      "Compliance documentation and traceability",
      "Coordination with national authorities",
    ],
  },
  {
    id: "import",
    icon: Globe,
    label: "Import Operations",
    title: "Regulated Import",
    body: "Our import workflow combines technical understanding with regulatory expertise. We handle the full lifecycle of an import operation, including documentation, customs interaction, and delivery to authorized recipients.",
    bullets: [
      "Import authorization and clearance",
      "Technical and regulatory pre-checks",
      "Authorized recipient verification",
      "Secure logistics planning",
    ],
  },
  {
    id: "advisory",
    icon: Users,
    label: "Advisory",
    title: "Sector Advisory",
    body: "Drawing on more than 27 years in the field, we advise clients on feasibility, regulatory exposure, and the practical realities of operating in a regulated international market.",
    bullets: [
      "Feasibility and market assessment",
      "Regulatory exposure analysis",
      "Counterparty due diligence",
      "Strategic transaction planning",
    ],
  },
];

const CapabilitiesSection = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const Icon = current.icon;

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-card/30 bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Capabilities</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Military Sales, <span className="text-gradient-gold">Export &amp; Import</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A focused service offering built around the realities of regulated international
            defence trade. Each capability is delivered with the documentation, oversight,
            and professionalism the sector requires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {tabs.map((tab) => {
              const TIcon = tab.icon;
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

          {/* Panel */}
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
