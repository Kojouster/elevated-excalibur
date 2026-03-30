import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-military.jpg";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const motionVal = { val: 0 };
          const controls = animate(motionVal, { val: target }, {
            duration: 2,
            ease: "easeOut",
            onUpdate: () => setCount(Math.round(motionVal.val)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const heroStats = [
  { value: 30, suffix: "+", label: "Years" },
  { value: 60, suffix: "+", label: "Countries" },
  { value: 1000, suffix: "+", label: "Vehicles" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Military armored vehicle in tactical operation"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary tracking-[0.5em] text-sm font-body uppercase mb-6"
          >
            Mission
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8"
          >
            <span className="text-foreground">PROTECT</span>
            <br />
            <span className="text-gradient-gold">YOUR WORLD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
          >
            We believe in a peaceful world where people are free to live and feel safe.
            Yet freedom and security are values that need to be protected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#mission"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group"
            >
              Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:border-primary hover:text-primary transition-colors"
            >
              View Products
            </a>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-10 md:gap-16"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-top hidden lg:block"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
