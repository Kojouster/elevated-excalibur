import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import palvanLogo from "@/assets/palvan-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.company"), href: "/company" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={palvanLogo} alt="PALVAN" className="h-14 w-auto invert mix-blend-screen bg-background" />
            <div className="font-heading text-foreground">
              <div className="text-sm font-bold tracking-[0.3em] leading-none"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-sm font-body tracking-wider uppercase transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            {/* Language Switcher */}
            <div className="flex items-center border border-border overflow-hidden">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-heading tracking-wider transition-all duration-300 ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("sk")}
                className={`px-3 py-1.5 text-xs font-heading tracking-wider transition-all duration-300 ${
                  language === "sk"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                SK
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-heading tracking-wider uppercase transition-colors ${
                    location.pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-heading tracking-wider transition-all ${
                    language === "en" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("sk")}
                  className={`px-4 py-2 text-sm font-heading tracking-wider transition-all ${
                    language === "sk" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
                >
                  SK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
