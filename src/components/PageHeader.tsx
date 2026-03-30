import { motion } from "framer-motion";

interface PageHeaderProps {
  subtitle: string;
  title: string;
  titleAccent?: string;
  description?: string;
  backgroundImage?: string;
}

const PageHeader = ({ subtitle, title, titleAccent, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
      )}
      <div className="relative py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary tracking-[0.5em] text-sm uppercase mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6"
          >
            <span className="text-foreground">{title}</span>
            {titleAccent && (
              <>
                <br />
                <span className="text-gradient-gold">{titleAccent}</span>
              </>
            )}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default PageHeader;
