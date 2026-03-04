import { useState, useCallback, memo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import blLogo from "@/assets/bl-logo.png";
import ScrollProgress from "@/components/ScrollProgress";
import BrandsWeLiftedPortfolio from "@/components/BrandsWeLiftedPortfolio";
import GlowCharts from "@/components/GlowCharts";
import ROICalculator from "@/components/ROICalculator";

// Sections
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";

// Icons for Nav
import { Menu, X, Instagram } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email: newsletterEmail }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

      setNewsletterEmail("");
    } catch (error: any) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: error.message?.includes("duplicate")
          ? "You're already subscribed!"
          : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  }, [newsletterEmail, toast]);

  return (
    <div className="min-h-screen bg-midnight text-offwhite font-inter">
      <ScrollProgress />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 group">
              <img src={blLogo} alt="Futoralift Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
              <span className="font-poppins font-bold text-xl text-phoenix1">FUTORALIFT</span>
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
              className="md:hidden text-offwhite"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-midnight/98 border-b border-border">
              <div className="flex flex-col py-4">
                {["home", "why-choose-us", "packages", "portfolio", "team", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors capitalize"
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

        <AboutSnapshot />

        <div className="py-12 bg-midnight overflow-hidden">
          <GlowCharts />
        </div>

        <WhyChooseUs />

        <div className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
          <ROICalculator />
        </div>

        <Packages scrollToContact={scrollToContact} />

        <Process />

        <BrandsWeLiftedPortfolio />

        <Team />

        <Contact
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <FAQ />

        <Newsletter
          newsletterEmail={newsletterEmail}
          setNewsletterEmail={setNewsletterEmail}
          handleNewsletterSubmit={handleNewsletterSubmit}
          isNewsletterSubmitting={isNewsletterSubmitting}
        />
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-border bg-midnight">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={blLogo} alt="Logo" className="w-6 h-6 object-contain" />
            <span className="font-poppins font-bold text-lg text-phoenix1 uppercase">Futoralift</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Futoralift | Futora Group of Companies. Founded by Madhur Dhadve.
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
