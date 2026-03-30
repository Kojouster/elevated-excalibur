import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Vehicles Delivered" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const MissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="mission" className="py-24 lg:py-32 bg-background bg-noise relative overflow-hidden" ref={containerRef}>
      {/* Parallax accent line */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
        className="absolute right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block"
      />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              TRUSTED PARTNER IN<br />
              <span className="text-gradient-gold">GLOBAL DEFENCE</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Excalibur Army is a leading European defence company specializing in the modernization,
                repair, and supply of military equipment. With decades of experience, we deliver
                reliable solutions that protect nations and their people.
              </p>
              <p>
                Our comprehensive portfolio spans armoured vehicles, artillery systems, and complete
                lifecycle support — backed by world-class engineering and an unwavering commitment to quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="group flex items-center gap-6 p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500"
              >
                <div className="font-heading text-4xl lg:text-5xl font-bold text-primary min-w-[120px]">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div>
                  <div className="h-px w-12 bg-primary/30 mb-2 group-hover:w-20 transition-all duration-500" />
                  <div className="text-foreground text-sm tracking-wider font-heading uppercase">
                    {stat.label}
                  </div>
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
