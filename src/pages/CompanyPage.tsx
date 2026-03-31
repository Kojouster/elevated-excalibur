import { motion } from "framer-motion";
import { Eye, Award, Users, Globe, Building, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import PageHeader from "@/components/PageHeader";
import factoryImg from "@/assets/factory.jpg";
import headquartersImg from "@/assets/headquarters.jpg";

const timeline = [
  { year: "1995", title: "Company Founded", description: "Excalibur Army established in Šternberk, Czech Republic, as a military vehicle repair facility." },
  { year: "2000", title: "First Export Contract", description: "Secured first international contract, delivering modernized vehicles to a NATO partner nation." },
  { year: "2005", title: "Product Development", description: "Launched own product line including upgraded T-72 variants and wheeled armoured vehicles." },
  { year: "2010", title: "Global Expansion", description: "Expanded operations to serve over 40 countries across Europe, Asia, Africa, and the Middle East." },
  { year: "2015", title: "DANA M2 Launch", description: "Unveiled the DANA M2 self-propelled howitzer, the most advanced variant of the 152mm platform." },
  { year: "2020", title: "PATRIOT Programme", description: "Introduced the PATRIOT multi-purpose platform, setting new standards in crew protection." },
  { year: "2024", title: "Strategic Growth", description: "Surpassed 60 countries served with over 1,000 vehicles delivered worldwide." },
];

const values = [
  { icon: Eye, title: "Innovation", description: "Continuously pushing boundaries in defence technology to deliver cutting-edge solutions." },
  { icon: Award, title: "Excellence", description: "Maintaining the highest quality standards across all products and services." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships based on trust, transparency, and mutual respect." },
  { icon: Globe, title: "Responsibility", description: "Operating with integrity and commitment to global peace and security." },
];

const leadership = [
  { name: "Martin Koller", role: "Chief Executive Officer", initial: "MK" },
  { name: "Jan Dvořák", role: "Chief Technology Officer", initial: "JD" },
  { name: "Petr Novák", role: "VP of Global Sales", initial: "PN" },
  { name: "Eva Svobodová", role: "VP of Operations", initial: "ES" },
  { name: "Tomáš Havel", role: "Chief Financial Officer", initial: "TH" },
  { name: "Karel Procházka", role: "VP of Engineering", initial: "KP" },
];

const CompanyPage = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(timeline.length - 1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        subtitle="About Us"
        title="EXCALIBUR"
        titleAccent="ARMY"
        description="A leading European defence company with over 30 years of experience in military technology, modernization, and lifecycle support."
        backgroundImage={headquartersImg}
      />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-10 border border-border bg-card group hover:border-primary/30 transition-all duration-500"
            >
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left" transition={{ duration: 0.8 }} />
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">OUR MISSION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To protect nations and their people by delivering reliable, innovative defence solutions.
                We are committed to ensuring freedom and security through superior military technology,
                comprehensive lifecycle support, and unwavering partnership with our customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative p-8 lg:p-10 border border-border bg-card group hover:border-primary/30 transition-all duration-500"
            >
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left" transition={{ duration: 0.8, delay: 0.15 }} />
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">OUR VISION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted defence partner — recognized for engineering excellence,
                innovation, and the ability to deliver complete solutions that meet the evolving
                challenges of modern defence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={factoryImg} alt="Manufacturing facility" className="w-full h-full object-cover" loading="lazy" width={1200} height={600} />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Building className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              150,000 m² <span className="text-primary">Production Facility</span>
            </p>
            <p className="text-muted-foreground mt-2">Šternberk, Czech Republic</p>
          </motion.div>
        </div>
      </section>


      {/* Values */}
      <section className="py-20 lg:py-28 bg-background bg-noise">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">What Drives Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">OUR VALUES</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.2)] transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-surface-elevated">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-primary tracking-[0.5em] text-sm uppercase mb-4">Leadership</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">OUR TEAM</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group text-center p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-border group-hover:border-primary transition-colors duration-500 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-primary">{person.initial}</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-foreground">{person.name}</h4>
                <p className="text-muted-foreground text-xs mt-1">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default CompanyPage;
