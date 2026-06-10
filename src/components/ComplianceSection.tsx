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

        {/* License Record */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="border border-border bg-card">
            <div className="flex items-center gap-3 px-6 lg:px-8 py-5 border-b border-border">
              <span className="w-10 h-10 flex items-center justify-center border border-primary/40 bg-primary/10 flex-shrink-0">
                <FileCheck2 className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="text-primary tracking-[0.3em] text-xs uppercase">License Record</p>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-foreground">
                  Pal.Van., s.r.o.
                </h3>
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-8">
              <div>
                <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">
                  Permit for Trading in Defence Industry Products
                </h4>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Issuing Authority</dt>
                    <dd className="text-foreground">Ministry of Economy of the Slovak Republic</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Permit Number</dt>
                    <dd className="text-foreground font-mono">PO32025-1050</dd>
                  </div>
                  <div className="hidden">
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1"></dt>
                    <dd className="text-foreground"></dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Holder</dt>
                    <dd className="text-foreground">Pal.Van., s.r.o.</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">
                  Company Details
                </h4>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Company ID</dt>
                    <dd className="text-foreground font-mono">36199206</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Tax ID</dt>
                    <dd className="text-foreground font-mono">SK2021524582</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Registered Address</dt>
                    <dd className="text-foreground">Južná trieda 82B, 040 17 Košice – Juh, Slovakia</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">
                  Scope of Authorization
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">›</span>
                    <span>Domestic trade in defence industry products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">›</span>
                    <span>Foreign trade activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">›</span>
                    <span>Transfer of defence industry products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">›</span>
                    <span>Brokerage activity</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">
                  Compliance Notes
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All activities under this permit are conducted in accordance with Slovak Act
                  No. 392/2011 Coll. on trading in defence industry products and the related
                  reporting obligations toward the competent authorities of the Slovak Republic.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;
