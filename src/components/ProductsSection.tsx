import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Shield, Target, Crosshair, Rocket } from "lucide-react";
import { useRef } from "react";
import productApc from "@/assets/product-apc.jpg";
import productHowitzer from "@/assets/product-howitzer.jpg";
import productTank from "@/assets/product-tank.jpg";
import productRocket from "@/assets/product-rocket.jpg";

const products = [
  {
    name: "PATRIOT I",
    category: "Armoured Vehicles",
    description: "Multi-purpose platform featuring superior off-road mobility and advanced crew protection systems.",
    image: productApc,
    icon: Shield,
    specs: ["8x8 Configuration", "Level 4 Protection", "450 HP Engine"],
  },
  {
    name: "DANA M2",
    category: "Self-Propelled Howitzers",
    description: "Advanced 152mm self-propelled gun howitzer with fast operation and greater accuracy.",
    image: productHowitzer,
    icon: Target,
    specs: ["152mm Calibre", "39.6 km Range", "6 Rounds/Min"],
  },
  {
    name: "T-72 EA",
    category: "Main Battle Tanks",
    description: "Renowned tank with extensive logistic support and potential for powerpack upgrade.",
    image: productTank,
    icon: Crosshair,
    specs: ["125mm Smoothbore", "Composite Armour", "840 HP"],
  },
  {
    name: "RM-70 M1",
    category: "Rocket Launchers",
    description: "Mobile artillery system providing concentrated fire support with 80 carried rockets.",
    image: productRocket,
    icon: Rocket,
    specs: ["122mm Rockets", "80 Round Capacity", "20 km Range"],
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -8);
    rotateY.set(px * 8);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background bg-noise relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Defence Technology</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              OUR PRODUCTS
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Comprehensive portfolio of combat-proven military platforms designed for modern battlefield requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <TiltCard className="group relative overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-700 pointer-events-none" />
                  
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="p-6 lg:p-8 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors duration-700" />
                      <p className="text-primary text-xs tracking-[0.3em] uppercase">{product.category}</p>
                    </div>
                    
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-500">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Specs with animated reveal */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.specs.map((spec, si) => (
                        <motion.span
                          key={spec}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.12 + si * 0.08 }}
                          className="px-3 py-1.5 border border-border text-muted-foreground text-[11px] tracking-wider group-hover:border-primary/30 group-hover:text-foreground transition-all duration-500"
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-4 transition-all duration-500">
                      Discover More
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
