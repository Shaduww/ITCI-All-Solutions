import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  ChevronRight, 
  Server, 
  Code, 
  ShieldCheck, 
  DatabaseBackup,
  Wrench,
  Globe,
  Settings,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Monitor
} from "lucide-react";

import { Button } from "@/components/ui/button";

function ITCILogo({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex-shrink-0 bg-primary rounded-xl flex flex-col items-center justify-center overflow-hidden shadow-lg shadow-primary/30"
    >
      <Monitor
        style={{ width: size * 0.75, height: size * 0.75 }}
        className="text-white/20 absolute"
        strokeWidth={1.5}
      />
      <span
        style={{ fontSize: size * 0.31, letterSpacing: "0.04em" }}
        className="relative z-10 font-display font-black text-white leading-none"
      >
        IT
      </span>
    </div>
  );
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Solutions", href: "#solutions" },
];

const services = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "IT Infrastructure Support",
    description: "Tier 1 & Tier 2 support tailored for Small & Midsize Businesses. Keep your operations running smoothly with reliable, expert assistance."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Virtualization",
    description: "Server Virtualization, Desktop Virtualization, and Application Virtualization to maximize efficiency and reduce hardware costs."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom Application Development using .NET, JAVA, PHP, VB, ASP, and robust databases like SQL, MySQL, and Oracle."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Design & Development",
    description: "From WordPress, Magento, Joomla, and Drupal to Custom CMS and Static HTML/CSS sites. We build your digital storefront."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "IT Security",
    description: "VPN, Firewall, Network Access Control, Security Audits, and SAN/NAS/iSCSI storage solutions to protect your critical data."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Turnkey Solutions",
    description: "End-to-end setup including Computers, Networking, Cabling, Phone systems, and Video Monitoring."
  }
];

const highlights = [
  { title: "Internet Marketing", desc: "Google, Facebook, Twitter & more" },
  { title: "Data Recovery", desc: "Secure backup & recovery solutions" },
  { title: "Troubleshooting", desc: "Rapid issue resolution" },
  { title: "Support", desc: "Remote & On-Site expert assistance" }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <ITCILogo size={44} />
            <div>
              <div className="font-display font-bold text-xl tracking-tight leading-none text-white">ITCI</div>
              <div className="text-[0.6rem] text-primary font-semibold uppercase tracking-widest leading-none mt-1">Consulting</div>
              <div className="text-[0.6rem] italic tracking-wide leading-none mt-1">
                <span className="text-white">We support </span><span className="text-primary">your dreams</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Phone className="w-4 h-4 text-primary" />
              647 335 2786
            </div>
            <Button className="font-semibold px-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Free Assessment
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col gap-6 md:hidden">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white border-b border-border pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-lg font-medium text-white">
              <Phone className="w-5 h-5 text-primary" />
              647 335 2786
            </div>
            <Button size="lg" className="w-full font-bold bg-primary text-primary-foreground text-lg">
              Free Assessment
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Data Center" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Trusted Technology Partner
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              All Solutions In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">One Place.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              The premier IT partner for small and midsize Canadian businesses. We transform technology challenges into reliable, scalable, and secure operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                Get a Free IT Assessment
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-border bg-card/50 hover:bg-card text-white transition-all backdrop-blur-sm">
                <Phone className="mr-2 w-4 h-4 text-primary" />
                Call 647-335-2786
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="border-y border-border/50 bg-card/30 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
            {highlights.map((item, i) => (
              <div key={i} className="py-8 px-6 lg:px-10 flex flex-col gap-2 group">
                <h3 className="text-white font-display font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Expertise</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                Enterprise-grade infrastructure for growing businesses.
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right">
              From foundational networking to advanced security and custom software, we deliver end-to-end technology solutions tailored to your scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="text-primary mb-6 relative z-10">{service.icon}</div>
                <h4 className="text-xl font-display font-bold text-white mb-3 relative z-10">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive / Infrastructure */}
      <section id="expertise" className="py-24 bg-card relative overflow-hidden border-y border-border">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img 
            src="/infrastructure.png" 
            alt="Infrastructure" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
              Why ITCI is the right choice for your infrastructure.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Uncompromising Security</h4>
                  <p className="text-muted-foreground">Rigorous VPN implementations, hardware firewalls, and network access controls to ensure your business data remains impenetrable.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <DatabaseBackup className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Resilient Data Architecture</h4>
                  <p className="text-muted-foreground">Enterprise SAN/NAS/iSCSI storage setups coupled with automated disaster recovery and data backup protocols.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Scalable Virtualization</h4>
                  <p className="text-muted-foreground">Modern server, desktop, and application virtualization strategies that reduce footprint and maximize hardware ROI.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Button className="font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground" variant="outline" size="lg">
                View All Capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Ready to stabilize your IT infrastructure?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Get a comprehensive, free IT assessment from our senior engineers. We'll identify vulnerabilities and optimization opportunities with zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-10 text-lg font-extrabold bg-background text-white hover:bg-background/90 shadow-xl">
              Claim Free IT Assessment
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm bg-transparent">
              Call 647 335 2786
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <ITCILogo size={44} />
                <div>
                  <div className="font-display font-bold text-xl tracking-tight leading-none text-white">ITCI</div>
                  <div className="text-[0.6rem] text-primary font-semibold uppercase tracking-widest leading-none mt-1">Consulting</div>
                </div>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                The trusted technology partner for small and midsize Canadian businesses. All solutions in one place, delivered with precision.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white font-medium">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>647 335 2786</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@iitciconsulting.com</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>iitciconsulting.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-6">Capabilities</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Infrastructure Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Virtualization</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Software Development</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">IT Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Turnkey Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Recovery</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Troubleshooting</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Remote Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">On-Site Support</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ITCI Consulting. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
