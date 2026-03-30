import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-military.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
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

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            href="#mission"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group"
          >
            Our Mission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-top hidden lg:block"
      />
    </section>
  );
};

export default HeroSection;
