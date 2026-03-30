import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import productApc from "@/assets/product-apc.jpg";
import productHowitzer from "@/assets/product-howitzer.jpg";
import productTank from "@/assets/product-tank.jpg";
import productRocket from "@/assets/product-rocket.jpg";

const products = [
  {
    name: "PATRIOT I",
    category: "Armoured Vehicles",
    description: "Multi-purpose platform featuring superior off-road mobility and advanced crew protection.",
    image: productApc,
  },
  {
    name: "DANA M2",
    category: "Self-Propelled Howitzers",
    description: "Advanced 152mm self-propelled gun howitzer with fast operation and greater accuracy.",
    image: productHowitzer,
  },
  {
    name: "T-72 EA",
    category: "Main Battle Tanks",
    description: "Renowned tank with extensive logistic support and potential for powerpack upgrade.",
    image: productTank,
  },
  {
    name: "RM-70 M1",
    category: "Rocket Launchers",
    description: "Mobile artillery system providing concentrated fire support with 80 carried rockets.",
    image: productRocket,
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
          className="mb-16"
        >
          <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Defence Technology</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            OUR PRODUCTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body group-hover:gap-3 transition-all">
                  Discover More <ArrowRight className="w-4 h-4" />
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
