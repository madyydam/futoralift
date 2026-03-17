import { useState, useCallback, lazy, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import blLogo from "@/assets/bl-logo.png";
import ScrollProgress from "@/components/ScrollProgress";

// Essential Sections
import Hero from "@/components/sections/Hero";

// Lazy Loaded Sections
const AboutSnapshot = lazy(() => import("@/components/sections/AboutSnapshot"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const BrandsWeLiftedPortfolio = lazy(() => import("@/components/BrandsWeLiftedPortfolio"));
const Process = lazy(() => import("@/components/sections/Process"));
const Team = lazy(() => import("@/components/sections/Team"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Dashboard = lazy(() => import("@/components/sections/Dashboard"));
const GlowCharts = lazy(() => import("@/components/GlowCharts"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));

// Icons for Nav
import { Menu, X, Instagram } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navLinks = useMemo(() => [
    { id: "home", label: "Home" },
    { id: "why-choose-us", label: "Why Us" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" }
  ], []);

  return (
    <div className="min-h-screen bg-midnight text-offwhite font-inter selection:bg-phoenix1/30">
      <ScrollProgress />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
        <div className="container max-w-6xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-phoenix1 rounded-lg px-2 py-1 transition-all">
              <motion.img
                src={blLogo}
                alt="Futoralift Logo"
                className="w-8 h-8 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                loading="eager"
              />
              <span className="font-poppins font-bold text-lg md:text-xl text-phoenix1 group-hover:tracking-wider transition-all duration-300 uppercase">FUTORALIFT</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="text-sm font-medium hover:text-phoenix1 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-phoenix1 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-offwhite p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-midnight/98 border-b border-border shadow-2xl backdrop-blur-xl"
            >
              <div className="flex flex-col py-6 px-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="px-6 py-4 rounded-xl hover:bg-phoenix1/10 hover:text-phoenix1 transition-all capitalize text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        <Hero scrollToContact={scrollToContact} />

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-midnight/50 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-phoenix1/20 border-t-phoenix1 rounded-full animate-spin" />
        </div>}>
          <AboutSnapshot />

          <div className="py-12 bg-midnight overflow-hidden min-h-[400px]">
            <GlowCharts />
          </div>

          <WhyChooseUs />

          <BrandsWeLiftedPortfolio />

          <div className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50 min-h-[400px]">
            <ROICalculator />
          </div>

          <Process />

          <Team />

          <Contact />

          <Dashboard />
        </Suspense>
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-border bg-midnight relative z-10">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <motion.img
              src={blLogo}
              alt="Logo"
              className="w-10 h-10 object-contain"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
            <span className="font-poppins font-bold text-xl text-phoenix1 uppercase hover:tracking-widest transition-all duration-300 cursor-default">FUTORALIFT</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left font-medium opacity-80">
            © {new Date().getFullYear()} FUTORALIFT | Futora Group of Companies.
          </p>
          <div className="flex gap-8">
            <a 
              href="https://www.instagram.com/futoralift?igsh=dGUyY3lvaHE4bWxh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-phoenix1 transition-all hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
