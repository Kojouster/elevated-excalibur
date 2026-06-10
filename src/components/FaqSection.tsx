import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useHomeContent } from "@/i18n/useHomeContent";

const FaqSection = () => {
  const f = useHomeContent().faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Heading column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-10 flex items-center justify-center border border-primary/40 bg-primary/10">
                <HelpCircle className="w-5 h-5 text-primary" />
              </span>
              <p className="text-primary tracking-[0.5em] text-sm uppercase">{f.eyebrow}</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {f.title1}<span className="text-gradient-gold">{f.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>

          {/* Accordion column */}
          <div className="lg:col-span-7 space-y-3">
            {f.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`border bg-card transition-colors ${
                    isOpen ? "border-primary/40" : "border-border hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base lg:text-[1.05rem] text-primary tabular-nums w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-heading text-base lg:text-lg font-bold text-foreground tracking-wide">
                      {item.q}
                    </span>
                    <span
                      className={`w-9 h-9 flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isOpen ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 lg:px-6 pb-6 pl-[4.25rem] text-muted-foreground leading-relaxed text-sm">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
