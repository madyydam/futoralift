import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Target, Zap, TrendingUp, Palette, Mail, Phone, Instagram, Menu, X, BarChart3, Calculator } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import blLogo from "@/assets/bl-logo.png";
import GlowCharts from "@/components/GlowCharts";
import ROICalculator from "@/components/ROICalculator";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  return (
    <div className="min-h-screen bg-midnight text-offwhite font-inter">
      <ScrollProgress />
      {/* Hidden SEO Content */}
      <div style={{ display: 'none' }}>
        FutoraLift by Madhur Dhadve, digital marketing agency, creative marketing solutions, marketing campaigns, social media marketing, business branding, FutoraLift services, marketing strategy by Madhur Dhadve, digital marketing agency India, creative agency for businesses, performance marketing solutions, brand identity design, social media campaigns, digital advertising agency, marketing consultant, business growth strategies, creative content agency
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="font-poppins font-bold text-xl text-phoenix1">FUTORALIFT</a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-phoenix1 transition-colors">Home</a>
              <a href="#why-choose-us" className="hover:text-phoenix1 transition-colors">Why Us</a>
              <a href="#packages" className="hover:text-phoenix1 transition-colors">Packages</a>
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
                <a
                  href="#home"
                  className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#why-choose-us"
                  className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Us
                </a>
                <a
                  href="#packages"
                  className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Packages
                </a>
                <a
                  href="#team"
                  className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 hover:bg-phoenix1/10 hover:text-phoenix1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-phoenix1/20 via-midnight to-midnight" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phoenix1/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              <img src={blLogo} alt="FutoraLift Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                FUTORA<span className="text-phoenix1">LIFT</span>
              </h1>
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-cyan">
              A NAME YOUR BRAND NEEDS
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Lifting Brands to New Heights 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-phoenix1 hover:bg-phoenix2 text-white shadow-lg hover:shadow-xl hover:shadow-phoenix1/50 transition-all active:scale-95"
                onClick={scrollToContact}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">About FutoraLift</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FutoraLift is a creative marketing agency that helps businesses grow through storytelling, strategy, and digital innovation. We build strong brand identities, design impactful visuals, and manage digital presence that delivers real results.
          </p>
        </div>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Reach", value: "206k+" },
              { label: "Impressions", value: "338k+" },
              { label: "Avg ROI", value: "480%+" },
              { label: "Client Satisfaction", value: "98%" }
            ].map((stat, i) => (
              <Card key={i} className="bg-charcoal border-phoenix1/20 hover:border-phoenix1 transition-colors text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl md:text-4xl font-bold text-phoenix1 font-poppins">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Strategic Focus", desc: "Data-driven decisions that hit the mark" },
              { icon: Zap, title: "Rapid Execution", desc: "From concept to launch in record time" },
              { icon: TrendingUp, title: "Growth Mindset", desc: "Scalable solutions that evolve with you" },
              { icon: Palette, title: "Creative Excellence", desc: "Designs that captivate and convert" }
            ].map((item, i) => (
              <Card key={i} className="bg-charcoal border-border hover:border-phoenix1 hover:-translate-y-2 hover:shadow-xl hover:shadow-phoenix1/20 transition-all group">
                <CardHeader>
                  <item.icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-poppins">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-midnight">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="p-3 rounded-2xl bg-phoenix1/10 text-phoenix1 mb-4 inline-block">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-white">Interactive Growth Estimator</h2>
            <p className="text-lg text-muted-foreground">
              See the direct impact of professional marketing on your brand's reach and lead generation.
            </p>
          </div>
          <ROICalculator onButtonClick={scrollToContact} />
        </div>
      </section>

      {/* Performance Analytics Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-midnight/50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-3 rounded-2xl bg-phoenix1/10 text-phoenix1 mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-white">Performance Analytics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time data insights showing how we transform brand engagement and drive measurable growth for our partners.
            </p>
          </div>
          <GlowCharts />
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Packages & Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Choose the perfect package for your business goals. All plans include professional content creation, strategic planning, and a complimentary awareness campaign to jumpstart your growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Basic",
                price: "₹19,999",
                period: "/month",
                recommended: false,
                features: ["5 Reels + 2 Carousels", "Content Planning", "Free Awareness Campaign"]
              },
              {
                name: "Growth",
                price: "₹29,999",
                period: "/month",
                recommended: true,
                features: ["10 Reels + 5 Carousels", "Advanced Planning", "Free Awareness Campaign"]
              },
              {
                name: "Premium",
                price: "₹34,999",
                period: "/month",
                recommended: false,
                features: ["15 Reels + 7 Carousels", "Full Strategy", "Free Awareness Campaign"]
              }
            ].map((pkg, i) => (
              <Card
                key={i}
                className={`relative ${pkg.recommended ? 'border-cyan shadow-xl shadow-cyan/20 scale-105' : 'border-border'} bg-charcoal hover:-translate-y-2 transition-all`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-midnight px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-poppins">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="text-cyan mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.recommended ? 'bg-cyan text-midnight hover:bg-cyan/90' : 'bg-phoenix1 hover:bg-phoenix2'}`}
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Our Process</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We follow a proven methodology that transforms your vision into reality, ensuring every campaign delivers exceptional results through strategic planning and creative execution.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and brand identity through in-depth research and consultation." },
              { step: "02", title: "Strategy", desc: "Crafting a custom marketing and content plan aligned with your business objectives." },
              { step: "03", title: "Creation", desc: "Producing engaging visuals, videos, and campaigns that capture attention." },
              { step: "04", title: "Launch", desc: "Executing strategies across digital platforms with precision timing." },
              { step: "05", title: "Growth", desc: "Monitoring results and optimizing for better ROI continuously." }
            ].map((phase, i) => (
              <div key={i} className="relative">
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-phoenix1 to-transparent" />
                )}
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-phoenix1 flex items-center justify-center text-2xl font-bold font-poppins">
                    {phase.step}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - exact DOM structure as specified */}
      <section id="team" className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Meet the Team</h2>
          <Card className="bg-charcoal border-phoenix1/20 max-w-6xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-phoenix1/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      MD
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Madhur Dhadve</h3>
                    <p className="text-phoenix1 text-sm">Founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Visionary leader and full-stack creative mind who handles all technical aspects of client projects from video editing and digital ads to websites, apps, and marketing systems. He ensures every campaign blends creativity with performance.
                    </p>
                  </div>
                </div>

                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      YG
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Yuvraj Gour</h3>
                    <p className="text-cyan text-sm">Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Creative strategist and design perfectionist focused on video editing, shoots, and delivering visually stunning, high-impact campaigns. Yuvraj brings ideas to life with precision, passion, and attention to every detail.
                    </p>
                  </div>
                </div>

                <div className="member flex flex-col items-center text-center space-y-4 group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan/50 transition-all">
                    <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold">
                      AM
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Aditya Mahure</h3>
                    <p className="text-cyan text-sm">Co-founder</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                      Client success and operations lead who manages client communication, project flow, and team coordination. Aditya bridges creativity with execution making sure every project runs smoothly from concept to completion.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 md:py-24 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16">Start Your Project</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-charcoal border-border">
              <CardHeader>
                <CardTitle className="font-poppins">Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll reach out within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1 min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-phoenix1 hover:bg-phoenix2 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Start a Project"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="font-poppins font-semibold text-2xl">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:futoralift@gmail.com" className="text-muted-foreground hover:text-phoenix1 transition-colors">futoralift@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919309312359" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 93093 12359</a>
                      <a href="tel:+917887578006" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 78875 78006</a>
                      <a href="tel:+918452854044" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 84528 54044</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-phoenix1 mt-1" />
                  <div>
                    <p className="font-semibold">Social Media</p>
                    <div className="flex flex-col gap-2 text-muted-foreground">
                      <span>@futoralift</span>
                      <a
                        href="https://www.instagram.com/futoralift?igsh=dGUyY3lvaHE4bWxh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="bg-phoenix1 hover:bg-phoenix2 text-white">
                          DM on Insta
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-midnight border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-poppins font-bold text-xl text-phoenix1 mb-4">FUTORALIFT</h4>
              <p className="text-sm text-muted-foreground">Lifting brands to new heights</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Social Media</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-phoenix1 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-phoenix1 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-phoenix1 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 FutoraLift. All rights reserved</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
