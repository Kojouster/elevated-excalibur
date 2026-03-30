import { motion } from "framer-motion";

const SectionDivider = ({ flipped = false }: { flipped?: boolean }) => {
  return (
    <div className="relative h-24 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent ${flipped ? "origin-right" : "origin-left"}`}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-primary/40 rotate-45"
      />
    </div>
  );
};

export default SectionDivider;
