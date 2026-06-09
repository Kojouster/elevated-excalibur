import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ShieldCheck, FileCheck2, Lock, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: FileCheck2,
    title: "Permits, Licenses & Documentation",
    body: "PALVAN operates with the necessary documentation, permits, and licenses required for activities in the defence and regulated-trade sector. All operations are conducted in line with applicable Slovak, EU, and international rules.",
  },
  {
    icon: ShieldCheck,
    title: "End-User Verification",
    body: "Every engagement includes appropriate end-user verification and documentation. We work only with authorized counterparties and decline activity that does not meet our compliance standards.",
  },
  {
    icon: Lock,
    title: "Confidentiality & Discretion",
    body: "Information shared with PALVAN is treated with strict confidentiality. Internal handling, communications, and record-keeping are aligned with the sensitivity of the sector we operate in.",
  },
  {
    icon: BadgeCheck,
    title: "Responsible Operations",
    body: "We take a long-term view of our role in the market. Decisions are made on the basis of legality, reliability, and professional responsibility — not short-term opportunity.",
  },
];

const ComplianceSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="compliance" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Compliance</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Professional, Licensed, and <span className="text-gradient-gold">Documented</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PALVAN has more than 27 years of experience in military sales, including export and
              import operations, and operates with all necessary documentation, permits, and
              licenses required by applicable regulations.
            </p>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              Compliance is not an add-on — it is the foundation on which every engagement is
              structured.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`border bg-card transition-colors ${
                    isOpen ? "border-primary/40" : "border-border hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                  >
                    <span
                      className={`w-11 h-11 flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isOpen ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="flex-1 font-heading text-base lg:text-lg font-bold text-foreground tracking-wide">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 lg:px-6 pb-6 pl-[4.75rem] text-muted-foreground leading-relaxed text-sm">
                      {item.body}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
