import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const articles = [
  {
    image: news1,
    date: "March 15, 2026",
    category: "Engineering",
    title: "New Modernization Program for NATO Allies Announced",
    excerpt: "Excalibur Army launches comprehensive vehicle upgrade packages meeting the latest NATO standards.",
  },
  {
    image: news2,
    date: "February 28, 2026",
    category: "Events",
    title: "IDEX 2026: Showcasing Next-Gen Defence Solutions",
    excerpt: "Our latest innovations drew significant interest at the premier international defence exhibition.",
  },
  {
    image: news3,
    date: "January 20, 2026",
    category: "Operations",
    title: "Successful Completion of Multi-National Training Exercise",
    excerpt: "Joint training program with allied forces demonstrates interoperability of upgraded platforms.",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 lg:py-32 bg-background bg-noise">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Stay Informed</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              LATEST NEWS
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:gap-3 transition-all"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
