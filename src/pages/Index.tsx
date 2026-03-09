import { useState, useCallback, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import blLogo from "@/assets/bl-logo.png";
import ScrollProgress from "@/components/ScrollProgress";

// Essential Sections
import Hero from "@/components/sections/Hero";

// Lazy Loaded Sections
const AboutSnapshot = lazy(() => import("@/components/sections/AboutSnapshot"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const Packages = lazy(() => import("@/components/sections/Packages"));
const Process = lazy(() => import("@/components/sections/Process"));
const Team = lazy(() => import("@/components/sections/Team"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const Newsletter = lazy(() => import("@/components/sections/Newsletter"));
const BrandsWeLiftedPortfolio = lazy(() => import("@/components/BrandsWeLiftedPortfolio"));
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

  return (
    <div className="min-h-screen bg-midnight text-offwhite font-inter">
      <ScrollProgress />


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 group">
              <motion.img
                src={blLogo}
                alt="Futoralift Logo"
                className="w-8 h-8 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-poppins font-bold text-lg md:text-xl text-phoenix1 group-hover:tracking-wider transition-all duration-300 uppercase">FUTORALIFT</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-phoenix1 transition-colors">Home</a>
              <a href="#why-choose-us" className="hover:text-phoenix1 transition-colors">Why Us</a>
              <a href="#packages" className="hover:text-phoenix1 transition-colors">Packages</a>
              <a href="#portfolio" className="hover:text-phoenix1 transition-colors">Portfolio</a>
              <a href="#team" className="hover:text-phoenix1 transition-colors">Team</a>
              <a href="#contact" className="hover:text-phoenix1 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-offwhite p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-midnight/98 border-b border-border shadow-xl">
              <div className="flex flex-col py-4">
                {["home", "why-choose-us", "packages", "portfolio", "team", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors capitalize text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.replace("-", " ")}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <Hero scrollToContact={scrollToContact} />

        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <AboutSnapshot />

          <div className="py-12 bg-midnight overflow-hidden min-h-[400px]">
            <GlowCharts />
          </div>

          <WhyChooseUs />

          <div className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50 min-h-[400px]">
            <ROICalculator />
          </div>

          <Packages scrollToContact={scrollToContact} />

          <Process />

          <BrandsWeLiftedPortfolio />

          <Team />

          <Contact />

          <FAQ />

          <Newsletter />
        </Suspense>
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-border bg-midnight">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <motion.img
              src={blLogo}
              alt="Logo"
              className="w-8 h-8 object-contain"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-poppins font-bold text-lg text-phoenix1 uppercase hover:tracking-widest transition-all duration-300 cursor-default">FUTORALIFT</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} FUTORALIFT | Futora Group of Companies. Founded by Madhur Dhadve.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/futoralift?igsh=dGUyY3lvaHE4bWxh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-phoenix1 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
