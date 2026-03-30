import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaBanner from "@/assets/cta-banner.jpg";

const CtaBanner = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBanner}
          alt="Military convoy in desert"
          loading="lazy"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary tracking-[0.5em] text-sm uppercase mb-4"
        >
          Partner With Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          READY TO<br />
          <span className="text-gradient-gold">STRENGTHEN YOUR DEFENCE?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
        >
          Contact our team of specialists to discuss tailored solutions for your defence requirements.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="#contact"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-heading tracking-wider text-sm uppercase hover:bg-gold-light transition-colors group"
        >
          Get In Touch
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};

export default CtaBanner;
