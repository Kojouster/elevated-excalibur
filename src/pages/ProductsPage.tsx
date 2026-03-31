import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, Shield, Target, Crosshair, Rocket, X, ChevronLeft, ChevronRight, Filter, Radar, Truck, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import productVlra from "@/assets/product-vlra-mr24-hero.jpg";
import productMtlb from "@/assets/product-mt-lb-hero.jpg";
import productZsu from "@/assets/product-zsu-hero.jpg";
import productMangust from "@/assets/product-mangust-hero.jpg";
import productBtr70 from "@/assets/product-btr70td-hero.jpg";
import productBrdm from "@/assets/product-brdm2p-hero.jpg";
import productXb30 from "@/assets/product-xb30-hero.jpg";

const categories = ["All", "Armoured Vehicles", "Rocket Launchers", "Air Defence", "Combat Modules", "Reconnaissance"];

const products = [
  {
    id: 1, name: "BTR MANGUST", category: "Armoured Vehicles", image: productMangust, icon: Shield,
    subtitle: "6×6 Armoured Personnel Carrier with XB-30 Combat Module",
    description: "Modern 6×6 monocoque APC featuring Level 1 ballistic protection and Level 3A/2B mine protection. Equipped with XB-30 remote weapon station, 370 HP diesel engine, and automatic transmission for superior battlefield mobility.",
    specs: {
      "Combat Weight": "20 t",
      "Crew + Troops": "3+17",
      "Engine": "370 HP / 6-cyl Diesel",
      "Max Speed": "100 km/h",
      "Cruising Range": "800 km",
      "Protection": "Level 1 / 3A Mine",
      "Drive": "6×6 Permanent",
      "Transmission": "Automatic 6-speed",
    },
    features: [
      "XB-30 remote weapon station with 30mm cannon",
      "STANAG Level 1 ballistic protection",
      "Level 3A/2B mine blast protection",
      "Central Tire Inflation System (CTIS)",
      "Run-flat system on all wheels",
      "Climate control for crew comfort",
      "Hydraulic retarder braking",
      "Inter-wheel differential lock",
      "6S/6M ABS with deactivation option",
      "Rear ramp with double doors",
    ],
    gallery: [productMangust, productXb30],
  },
  {
    id: 2, name: "BTR-70TD", category: "Armoured Vehicles", image: productBtr70, icon: Shield,
    subtitle: "Modernized 8×8 Amphibious APC",
    description: "Extensively modernized BTR-70 with new DEUTZ turbocharged diesel engine, 8-gear manual or 6-gear automatic transmission, and enhanced armament suite. Fully amphibious with optional perforated add-on armour.",
    specs: {
      "GVW": "12,500 kg",
      "Dimensions": "7.55 × 2.8 × 2.32 m",
      "Clearance": "0.47 m",
      "Engine": "DEUTZ 7.2L Diesel",
      "Torque": "1050 Nm",
      "Fuel Tank": "300 L",
      "Fording": "Amphibious",
      "Armament": "14.5mm + 7.62mm",
    },
    features: [
      "14.5mm KPVT HMG with 500 rounds",
      "7.62mm PKT coaxial MG with 2000 rounds",
      "PP-61AM optical sight",
      "Perforated add-on armour option (7.62–14.5mm protection)",
      "Energy-absorbing seats",
      "GPS navigation system",
      "Day/night parking cameras",
      "Air conditioning system option",
      "Auxiliary power unit option",
      "Fully amphibious capability",
    ],
    gallery: [productBtr70],
  },
  {
    id: 3, name: "BRDM-2P", category: "Reconnaissance", image: productBrdm, icon: Eye,
    subtitle: "Modernized Amphibious Reconnaissance Vehicle",
    description: "Upgraded BRDM-2 with modern DEUTZ BF4M1013FC diesel engine and ZF 6-speed manual transmission. Features turret-mounted twin machine gun setup with energy-absorbing crew seating and optional anti-cumulative protection.",
    specs: {
      "GVW": "7,200 kg",
      "Dimensions": "5.75 × 2.35 × 2.37 m",
      "Clearance": "0.315 m",
      "Engine": "DEUTZ 4.76L Diesel",
      "Torque": "577 Nm",
      "Fuel Tank": "280 L (2×140)",
      "Fording": "Amphibious",
      "Armament": "14.5mm + 7.62mm",
    },
    features: [
      "14.5mm KPVT machine gun — 500 rounds",
      "7.62mm PKT machine gun — 2000 rounds",
      "PP-61AM optical sight",
      "Energy-absorbing modern seats",
      "Anti-cumulative perforated armour option",
      "Protection against 7.62–14.5mm BZ rounds",
      "ZF 6-speed manual transmission",
      "Fully amphibious operation",
    ],
    gallery: [productBrdm],
  },
  {
    id: 4, name: "MT-LB", category: "Armoured Vehicles", image: productMtlb, icon: Truck,
    subtitle: "Multi-Purpose Tracked Armoured Vehicle",
    description: "Versatile tracked platform with amphibious capability, upgraded YaMZ-238V turbocharged diesel engine, and energy-absorbing seats. Ideal for troop transport, command post, or weapons carrier roles.",
    specs: {
      "GVW": "11,300 kg",
      "Crew + Troops": "2+11",
      "Engine": "YaMZ-238V Turbo Diesel",
      "Max Power": "240 HP",
      "Cruising Range": "500 km",
      "Max Speed": "61.5 km/h",
      "Water Speed": "6 km/h",
      "Clearance": "0.415 m",
    },
    features: [
      "7.62mm PKM-B machinegun with 500 rounds",
      "Motorola DM-4601 & R-173 radio systems",
      "Fully amphibious",
      "Energy-absorbing advanced seats",
      "35° slope / 25° roll capability",
      "1.5m trench crossing",
      "0.5m wall climbing",
    ],
    gallery: [productMtlb],
  },
  {
    id: 5, name: "VLRA MR-24", category: "Rocket Launchers", image: productVlra, icon: Rocket,
    subtitle: "122mm Multiple Launch Rocket System",
    description: "Mobile 24-tube MLRS on a 4×4 VLRA chassis delivering concentrated rocket fire with 5–40 km range. Features hydraulic launcher drive, remote fire control, and rapid shoot-and-scoot capability.",
    specs: {
      "Calibre": "122 mm",
      "Tubes": "24",
      "Range": "5–40 km",
      "Full Volley": "10–12 sec",
      "Crew": "3",
      "Ready to Fire": "1 min 40 sec",
      "Chassis": "4×4 / 175 HP",
      "Max Speed": "110 km/h",
    },
    features: [
      "24 rocket guides with 122mm calibre",
      "Hydraulic (electromechanical) launcher drive",
      "Remote fire control up to 100m distance",
      "Mechanical sight Сб 00-19",
      "Vertical guidance: 0°–55°",
      "Horizontal rotation: ±90°",
      "1 min 15 sec position departure after volley",
      "Central Tire Inflation System option",
      "Run-flat capability",
      "1,400 km road range",
    ],
    gallery: [productVlra],
  },
  {
    id: 6, name: "ZSU 23-4M-A1", category: "Air Defence", image: productZsu, icon: Radar,
    subtitle: "Modernized Self-Propelled Anti-Aircraft System",
    description: "Deeply modernized ZSU-23-4 with new 3D X-band digital radar, capable of detecting aerial targets at 30 km and tracking up to 20 simultaneously. Enhanced capability against UAVs and cruise missiles.",
    specs: {
      "Radar Type": "3D X-band Digital",
      "Detection Range": "25 km (fighter)",
      "UAV Detection": "4–9 km",
      "Tracking Targets": "Up to 20",
      "Target Speed": "Up to 700 m/s",
      "Hit Probability": "0.35–0.4",
      "Processing Time": "0.2 sec",
      "Navigation": "GPS + GLONASS",
    },
    features: [
      "3D digital radar replacing analog system",
      "30 km aerial target detection range",
      "Simultaneous 16°×16° space scan",
      "Three-coordinate target determination (azimuth, range, height)",
      "UAV and cruise missile detection capability",
      "Digital ballistic calculator",
      "Automated external target data reception",
      "Built-in electronic crew training simulator",
      "Climate control system for improved crew comfort",
      "High noise immunity radar",
    ],
    gallery: [productZsu],
  },
  {
    id: 7, name: "XB-30", category: "Combat Modules", image: productXb30, icon: Crosshair,
    subtitle: "Remote Weapon Station with 30mm Cannon",
    description: "Advanced unmanned turret featuring a 30×173mm GTS-30/N automatic cannon, 7.62mm coaxial MG, and 902V smoke grenades. Integrated stabilized optoelectronic suite with thermal imaging and laser rangefinder.",
    specs: {
      "Main Gun": "30×173mm GTS-30/N",
      "Coaxial MG": "7.62mm FN Herstal",
      "Smoke Grenades": "6× 902V Tucha",
      "Thermal Imager": "640×512 / 8–12µm",
      "LRF Range": "6 km (max)",
      "Stabilization": "2-axis Digital",
      "Day Camera": "CMOS 1.3\"",
      "Detection": "8 km (tank)",
    },
    features: [
      "30×173mm automatic cannon GTS-30/N",
      "7.62×51mm FN Herstal coaxial machine gun",
      "6-tube 902V Tucha smoke grenade launchers",
      "Digital electromechanical 2-axis stabilizer",
      "Uncooled 640×512 microbolometer thermal imager",
      "Eye-safe laser rangefinder (λ 1.535µm, Class 1)",
      "Narrow FOV 2.2°×1.65° + Wide FOV 8°×6° day cameras",
      "LRF undetectable by MWIR/LWIR sensors",
      "Fog and smoke penetration capability",
      "Operator console with video monitor",
    ],
    gallery: [productXb30],
  },
];

type Product = typeof products[0];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -6);
    rotateY.set(px * 6);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-md flex items-start justify-center overflow-y-auto py-20 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl bg-card border border-border relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={product.gallery[galleryIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          {product.gallery.length > 1 && (
            <>
              <button onClick={() => setGalleryIndex((p) => (p - 1 + product.gallery.length) % product.gallery.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setGalleryIndex((p) => (p + 1) % product.gallery.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
        </div>

        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">{product.category}</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-1">{product.name}</h2>
          <p className="text-primary/70 text-sm tracking-wider mb-4">{product.subtitle}</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">{product.description}</p>

          {/* Specs Grid */}
          <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {Object.entries(product.specs).map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 border border-border bg-background"
              >
                <div className="text-muted-foreground text-[10px] tracking-wider uppercase mb-1">{key}</div>
                <div className="font-heading text-sm font-bold text-foreground">{value}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">Key Features & Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-3 py-2"
              >
                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0 mt-1.5" />
                <span className="text-muted-foreground text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        subtitle="Defence Technology"
        title="OUR"
        titleAccent="PRODUCTS"
        description="Combat-proven military platforms, modernization packages, and weapon systems for modern armed forces."
      />

      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12 overflow-x-auto pb-4"
          >
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-heading text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Count */}
          <p className="text-muted-foreground text-xs tracking-wider uppercase mb-8">
            Showing {filtered.length} of {products.length} products
          </p>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <TiltCard className="group cursor-pointer bg-card border border-border hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)] transition-all duration-500 overflow-hidden h-full">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={product.image} alt={product.name} loading="lazy" width={1024} height={640}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                        <div className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-all">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-1">{product.category}</p>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-1">{product.name}</h3>
                        <p className="text-primary/60 text-xs tracking-wider mb-3">{product.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                        {/* Quick specs */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {Object.entries(product.specs).slice(0, 3).map(([k, v]) => (
                            <span key={k} className="px-2 py-1 border border-border text-[10px] tracking-wider text-muted-foreground group-hover:border-primary/30 transition-colors">
                              {v}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default ProductsPage;
