import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import blLogo from "@/assets/bl-logo.png";
import { memo } from "react";

interface HeroProps {
    scrollToContact: () => void;
}

const Hero = memo(({ scrollToContact }: HeroProps) => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 pt-24">
            <div className="absolute inset-0 bg-gradient-to-br from-phoenix1/20 via-midnight to-midnight" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phoenix1/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <img src={blLogo} alt="Futoralift by Madhur Dhadve - Futora Group of Companies Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                        <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                            FUTORA<span className="text-phoenix1">LIFT</span>
                        </h1>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-semibold text-cyan">
                            A NAME YOUR BRAND NEEDS
                        </p>
                    </div>
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
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
