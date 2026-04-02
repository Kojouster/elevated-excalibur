import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg"; // Updated with new image source

const NewsSection = () => {
  const { t } = useLanguage();

  const articles = [
    { image: news1, date: t("news.article1Date"), category: t("news.article1Category"), title: t("news.article1Title"), excerpt: t("news.article1Excerpt") },
    { image: news2, date: t("news.article2Date"), category: t("news.article2Category"), title: t("news.article2Title"), excerpt: t("news.article2Excerpt") },
    { image: news3, date: t("news.article3Date"), category: t("news.article3Category"), title: t("news.article3Title"), excerpt: t("news.article3Excerpt") },
  ];

  return (
    <section id="news" className="py-24 lg:py-32 bg-background bg-noise">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">{t("news.subtitle")}</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{t("news.title")}</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:gap-3 transition-all">
            {t("news.viewAll")} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={article.image} alt={article.title} loading="lazy" width={768} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">{article.category}</span>
                  <span className="flex items-center gap-1.5 text-muted-foreground text-xs"><Calendar className="w-3 h-3" />{article.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
