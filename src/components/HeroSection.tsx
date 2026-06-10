import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import headquartersImg from "@/assets/headquarters.jpg";
import { useHomeContent } from "@/i18n/useHomeContent";

const HeroSection = () => {
  const h = useHomeContent().hero;
  const badgeIcons = [ShieldCheck, Globe2, FileCheck2];

  return (
    <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={headquartersImg}
          alt="PALVAN corporate headquarters"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="hsl(43 52% 54%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary tracking-[0.5em] text-sm font-body uppercase mb-6"
          >
            {h.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8"
          >
            <span className="text-foreground">{h.title1}</span>
            <span className="text-gradient-gold">{h.titleAccent}</span>
            <br />
            <span className="text-foreground">{h.title2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl"
          >
            {h.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group"
            >
              {h.ctaInquiry}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:border-primary hover:text-primary transition-colors"
            >
              {h.ctaCapabilities}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex flex-wrap gap-3"
          >
            {h.badges.map((label, i) => {
              const Icon = badgeIcons[i] ?? ShieldCheck;
              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background/60 backdrop-blur-sm text-xs tracking-wider uppercase text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase">{h.scroll}</span>
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

