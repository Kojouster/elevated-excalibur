import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Shield, Target, Crosshair, Rocket, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import productApc from "@/assets/product-apc.jpg";
import productHowitzer from "@/assets/product-howitzer.jpg";
import productTank from "@/assets/product-tank.jpg";
import productRocket from "@/assets/product-rocket.jpg";
import heroImage from "@/assets/hero-military.jpg";

const categories = ["All", "Armoured Vehicles", "Main Battle Tanks", "Self-Propelled Howitzers", "Rocket Launchers"];

const products = [
  {
    id: 1, name: "PATRIOT I", category: "Armoured Vehicles", image: productApc, icon: Shield,
    description: "Multi-purpose platform featuring superior off-road mobility and advanced crew protection systems.",
    specs: { crew: "2+8", weight: "22,000 kg", engine: "450 HP Diesel", speed: "110 km/h", range: "800 km", armour: "STANAG 4569 Level 4" },
    features: ["Mine blast protection", "NBC filtration system", "Modular weapon station", "Amphibious capability", "Central tire inflation"],
    gallery: [productApc, heroImage],
  },
  {
    id: 2, name: "PATRIOT II", category: "Armoured Vehicles", image: productApc, icon: Shield,
    description: "Enhanced variant with improved armour package and integrated battlefield management system.",
    specs: { crew: "2+10", weight: "26,000 kg", engine: "500 HP Diesel", speed: "105 km/h", range: "750 km", armour: "STANAG 4569 Level 5" },
    features: ["Enhanced mine protection", "Remote weapon station", "Integrated BMS", "Night vision suite", "Self-recovery winch"],
    gallery: [productApc, heroImage],
  },
  {
    id: 3, name: "T-72 EA", category: "Main Battle Tanks", image: productTank, icon: Crosshair,
    description: "Renowned tank with extensive logistic support and potential for powerpack and crew safety enhancement.",
    specs: { crew: "3", weight: "46,000 kg", engine: "840 HP", speed: "60 km/h", range: "500 km", armour: "Composite + ERA" },
    features: ["125mm smoothbore gun", "Autoloader system", "ERA reactive armour", "Thermal imaging", "Laser rangefinder"],
    gallery: [productTank, heroImage],
  },
  {
    id: 4, name: "T-72 M4CZ", category: "Main Battle Tanks", image: productTank, icon: Crosshair,
    description: "Deeply modernized T-72 with new fire control system, power pack, and enhanced protection suite.",
    specs: { crew: "3", weight: "48,000 kg", engine: "1000 HP", speed: "65 km/h", range: "450 km", armour: "Advanced Composite" },
    features: ["Digital fire control", "Hunter-killer capability", "New powerpack", "Auxiliary power unit", "Commander panoramic sight"],
    gallery: [productTank, heroImage],
  },
  {
    id: 5, name: "DANA M2", category: "Self-Propelled Howitzers", image: productHowitzer, icon: Target,
    description: "The most advanced variant of the 152mm self-propelled gun howitzer with greater accuracy and fast operation.",
    specs: { crew: "4", weight: "29,000 kg", calibre: "152 mm", range: "39.6 km", rate: "6 rds/min", traverse: "360°" },
    features: ["Automated loading system", "Digital fire control", "GPS/INS navigation", "Onboard ballistic computer", "Autonomous operation"],
    gallery: [productHowitzer, heroImage],
  },
  {
    id: 6, name: "RM-70 M1", category: "Rocket Launchers", image: productRocket, icon: Rocket,
    description: "Mobile artillery system providing concentrated fire support with 80 carried rockets.",
    specs: { crew: "3", weight: "33,000 kg", calibre: "122 mm", range: "20.4 km", capacity: "40+40", reload: "3 min" },
    features: ["Automatic aiming system", "Double launcher pack", "Rapid reload capability", "All-weather operation", "Digital fire control"],
    gallery: [productRocket, heroImage],
  },
];

type Product = typeof products[0];

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
        {/* Close */}
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
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">{product.name}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">{product.description}</p>

          {/* Specs Grid */}
          <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="p-4 border border-border bg-background">
                <div className="text-muted-foreground text-xs tracking-wider uppercase mb-1">{key}</div>
                <div className="font-heading text-lg font-bold text-foreground">{value}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <h3 className="font-heading text-sm font-bold text-foreground tracking-wider uppercase mb-4">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{f}</span>
              </div>
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
        description="Comprehensive portfolio of combat-proven military platforms designed for modern battlefield requirements."
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

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer bg-card border border-border hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.2)] transition-all duration-500 overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img src={product.image} alt={product.name} loading="lazy" width={800} height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      <div className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-all">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
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
