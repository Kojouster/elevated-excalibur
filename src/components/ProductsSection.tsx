import { motion, useSpring } from "framer-motion";
import { ArrowRight, Shield, Rocket, Radar, Crosshair } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import productMangust from "@/assets/product-mangust-hero.png";
import productVlra from "@/assets/product-vlra-mr24-hero.jpg";
import productZsu from "@/assets/product-zsu-hero.png";
import productXb30 from "@/assets/product-xb30-hero.png";

const useProducts = () => {
  const { t } = useLanguage();
  return [
    {
      name: "BTR MANGUST",
      category: "Armoured Vehicles",
      description: t("productsPage.mangustDescription"),
      image: productMangust,
      icon: Shield,
      specs: ["6×6 Drive", "370 HP", "Level 3A Mine Protection"],
    },
    {
      name: "VLRA MR-24",
      category: "Rocket Launchers",
      description: t("productsPage.vlraDescription"),
      image: productVlra,
      icon: Rocket,
      specs: ["122mm / 24 Tubes", "5–40 km Range", "110 km/h"],
    },
    {
      name: "ZSU 23-4M-A1",
      category: "Air Defence",
      description: t("productsPage.zsuDescription"),
      image: productZsu,
      icon: Radar,
      specs: ["3D X-band Radar", "25 km Detection", "Up to 20 Targets"],
    },
    {
      name: "XB-30",
      category: "Combat Modules",
      description: t("productsPage.xb30Description"),
      image: productXb30,
      icon: Crosshair,
      specs: ["30×173mm Cannon", "Thermal Imaging", "6 km LRF"],
    },
  ];
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -8);
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 8);
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }} style={{ rotateX, rotateY, transformPerspective: 800 }} className={className}>
      {children}
    </motion.div>
  );
};

const ProductsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="products" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("productsSection.subtitle")}</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{t("productsSection.title")}</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">{t("productsSection.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div key={product.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.12, duration: 0.6 }}>
                <TiltCard className="group relative overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-700 pointer-events-none" />
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={product.image} alt={product.name} loading="lazy" width={1024} height={640} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors duration-700" />
                      <p className="text-primary text-xs tracking-[0.3em] uppercase">{product.category}</p>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-500">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.description[language]}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.specs.map((spec, si) => (
                        <motion.span key={spec} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 + si * 0.08 }} className="px-3 py-1.5 border border-border text-muted-foreground text-[11px] tracking-wider group-hover:border-primary/30 group-hover:text-foreground transition-all duration-500">
                          {spec}
                        </motion.span>
                      ))}
                    </div>
                    <Link to={`/products?product=${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-4 transition-all duration-500">
                      {t("productsSection.discoverMore")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-heading text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500">
            {t("productsSection.viewAll")} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
