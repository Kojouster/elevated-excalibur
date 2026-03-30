import { motion } from "framer-motion";
import { ArrowRight, Shield, Target, Crosshair, Rocket } from "lucide-react";
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

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background bg-noise">
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

        {/* Featured product - large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer mb-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={products[0].image}
                alt={products[0].name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <products[0].icon className="w-8 h-8 text-primary mb-4" />
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">{products[0].category}</p>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {products[0].name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {products[0].description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {products[0].specs.map((spec) => (
                  <span key={spec} className="px-3 py-1.5 border border-border text-muted-foreground text-xs tracking-wider">
                    {spec}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                Discover More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span key={spec} className="px-2 py-1 border border-border text-muted-foreground text-[10px] tracking-wider">
                      {spec}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
