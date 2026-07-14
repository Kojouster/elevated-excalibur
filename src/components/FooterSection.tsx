import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useHomeContent } from "@/i18n/useHomeContent";
import palvanLogo from "@/assets/palvan-logo.png";

const FooterSection = () => {
  const { t } = useLanguage();
  const f = useHomeContent().footer;

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={palvanLogo} alt="PALVAN company logo" className="h-14 w-auto invert" />
              <div className="font-heading">
                <div className="text-sm font-bold tracking-[0.3em] text-foreground leading-none"></div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">{f.capabilities}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/#capabilities" className="hover:text-primary transition-colors">{f.militarySales}</Link></li>
              <li><Link to="/#capabilities" className="hover:text-primary transition-colors">{f.exportOps}</Link></li>
              <li><Link to="/#capabilities" className="hover:text-primary transition-colors">{f.importOps}</Link></li>
              <li><Link to="/#compliance" className="hover:text-primary transition-colors">{f.compliance}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">{t("footer.companyTitle")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/company" className="hover:text-primary transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link to="/company" className="hover:text-primary transition-colors">{t("footer.ourMission")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><a href="https://www.google.com/maps/search/?api=1&query=Južná+trieda+82/B,+040+17,+Košice,+Slovak+Republic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Južná trieda 82/B, 040 17, Košice, Slovak Republic</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><a href="https://www.google.com/maps/search/?api=1&query=EINPARK+Offices+Einsteinova+33,+851+01,+Bratislava,+Slovak+Republic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">EINPARK Offices, Einsteinova 33, 851 01, Bratislava, Slovak Republic</a></li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <p>EN +421 905 616 418</p>
                  <p>SK +421 917 600 610</p>
                </div>
              </li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary flex-shrink-0" />information@palvan.sk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">{t("footer.copyright")}</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacyPolicy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.termsOfUse")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
