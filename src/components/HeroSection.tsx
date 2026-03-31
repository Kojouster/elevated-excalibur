import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp, ChevronDown, Shield, Crosshair, Rocket, Radar, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import productMangust from "@/assets/product-mangust-hero.png";
import productVlra from "@/assets/product-vlra-mr24-hero.jpg";
import productZsu from "@/assets/product-zsu-hero.png";
import productXb30 from "@/assets/product-xb30-hero.png";

interface HeroSlide {
  name: string;
  category: string;
  image: string;
  icon: LucideIcon;
  description: string;
}

const useSlides = (t: (key: string) => string): HeroSlide[] => [
  {
    name: "BTR MANGUST",
    category: t("productsPage.armouredVehicles"),
    image: productMangust,
    icon: Shield,
    description: t("productsPage.mangustDescription"),
  },
  {
    name: "VLRA MR-24",
    category: t("productsPage.rocketLaunchers"),
    image: productVlra,
    icon: Rocket,
    description: t("productsPage.vlraDescription"),
  },
  {
    name: "ZSU 23-4M-A1",
    category: t("productsPage.airDefence"),
    image: productZsu,
    icon: Radar,
    description: t("productsPage.zsuDescription"),
  },
  {
    name: "XB-30",
    category: t("productsPage.combatModules"),
    image: productXb30,
    icon: Crosshair,
    description: t("productsPage.xb30Description"),
  },
];

const DotGrid = () => (
  <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
    <svg className="w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="hsl(43 52% 54%)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  </div>
);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { t } = useLanguage();
  const slides = useSlides(t);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <DotGrid />
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0">
          <img src={slide.image} alt={slide.name} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>
      </AnimatePresence>


      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-xl">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-primary tracking-[0.5em] text-sm font-body uppercase mb-6">{t("hero.subtitle")}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
            <span className="text-foreground">{t("hero.title1")}</span><br />
            <span className="text-gradient-gold">{t("hero.title2")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">{t("hero.description")}</motion.p>
          <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} href="#mission" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group">
            {t("hero.cta")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[480px] items-end">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: direction * 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: direction * -40 }} transition={{ duration: 0.6 }} className="w-full p-12 pb-32">
            <div className="border-l-2 border-primary pl-6">
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">{slide.category}</p>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-3">{slide.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{slide.description}</p>
              <a href="#products" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:gap-3 transition-all">
                {t("hero.discoverMore")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <button onClick={prev} className="p-2 text-muted-foreground hover:text-primary transition-colors mb-2"><ChevronUp className="w-6 h-6" /></button>
        {slides.map((s, i) => {
          const SIcon = s.icon;
          return (
            <button key={i} onClick={() => goTo(i)} className={`relative w-12 h-12 flex items-center justify-center transition-all duration-300 ${i === current ? "text-primary border border-primary" : "text-muted-foreground/40 border border-transparent hover:text-muted-foreground hover:border-border"}`}>
              <SIcon className="w-5 h-5" />
              {i === current && <motion.div layoutId="activeSideIcon" className="absolute inset-0 border border-primary" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
            </button>
          );
        })}
        <button onClick={next} className="p-2 text-muted-foreground hover:text-primary transition-colors mt-2"><ChevronDown className="w-6 h-6" /></button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-between bg-background/60 backdrop-blur-md border-t border-border">
          <div className="flex-1" />
          <div className="flex items-center gap-8 px-8 py-5">
            <div className="text-center">
              <span className="text-primary text-xs tracking-[0.3em] uppercase block">{t("hero.defenceLabel")}</span>
              <span className="text-foreground font-heading text-sm font-bold tracking-wider uppercase">{t("hero.technologyLabel")}</span>
            </div>
            <a href="#products" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 font-heading tracking-wider text-xs uppercase hover:bg-gold-light transition-colors group">
              {t("hero.discoverMore")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="h-0.5 bg-border">
          <motion.div key={current} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-primary" />
        </div>
      </div>

      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent origin-top hidden lg:block" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase">{t("hero.scroll")}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
