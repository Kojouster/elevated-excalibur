import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const startTime = performance.now();
          const step = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const milestones = [
  { year: "2000", text: "PALVAN founded in the Slovak Republic." },
  { year: "2005", text: "Expansion into international military trade operations." },
  { year: "2015", text: "Established long-term cross-border export and import workflows." },
  { year: "Today", text: "27+ years of continuous activity in the regulated defence sector." },
];

const stats = [
  { value: 27, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "", label: "Established Since", raw: true },
  { value: 100, suffix: "%", label: "Documented Operations" },
];

const TrustSignals = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-card/30 bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Track Record</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            A Long-Standing Presence in a <span className="text-gradient-gold">Serious Industry</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-border bg-background hover:border-primary/40 transition-all duration-500"
            >
              <div className="font-heading text-5xl lg:text-6xl font-bold text-primary mb-3">
                {s.raw ? s.value : <CountUp target={s.value} suffix={s.suffix} />}
              </div>
              <div className="h-px w-12 bg-primary/40 mb-3" />
              <div className="text-foreground text-sm tracking-wider font-heading uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex md:items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary -translate-x-1/2 mt-2 md:mt-0" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-heading text-2xl font-bold text-primary mb-2">{m.year}</div>
                  <p className="text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
