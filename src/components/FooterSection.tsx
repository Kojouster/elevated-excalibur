import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="font-heading text-primary font-bold text-lg">EA</span>
              </div>
              <div className="font-heading">
                <div className="text-sm font-bold tracking-[0.3em] text-foreground leading-none">EXCALIBUR</div>
                <div className="text-xs tracking-[0.3em] text-foreground leading-none mt-0.5">ARMY</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading European defence company specializing in military technology and lifecycle support.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Armoured Vehicles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Main Battle Tanks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Self-Propelled Howitzers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rocket Launchers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Šternberk, Czech Republic
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +420 585 085 111
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@excaliburarmy.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Excalibur Army. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
