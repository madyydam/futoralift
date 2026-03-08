import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import blLogo from "@/assets/bl-logo.png";
import { memo } from "react";

interface HeroProps {
    scrollToContact: () => void;
}

const Hero = memo(({ scrollToContact }: HeroProps) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-24">
            <div className="absolute inset-0 bg-gradient-to-br from-phoenix1/20 via-midnight to-midnight" />

            {/* Moving Scan Line Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-phoenix1/5 to-transparent h-[200px] w-full z-0 pointer-events-none"
                animate={{
                    top: ["-200px", "100%"]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-phoenix1/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.img
                            src={blLogo}
                            alt="Futoralift by Madhur Dhadve - Futora Group of Companies Logo"
                            className="w-32 h-32 md:w-48 md:h-48 object-contain"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, -5, 5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.h1
                            className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight flex flex-wrap justify-center cursor-default gap-0"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    }
                                }
                            }}
                        >
                            {"FUTORA".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    whileHover={{
                                        scale: 1.15,
                                        color: "#FF6B00",
                                        textShadow: "0 0 20px rgba(255,107,0,0.6)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="text-phoenix1 flex">
                                {"LIFT".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        whileHover={{
                                            scale: 1.15,
                                            color: "#00E5FF",
                                            textShadow: "0 0 20px rgba(0,229,255,0.6)",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>
                    </div>
                    <div>
                        <motion.p
                            className="text-3xl md:text-4xl font-semibold text-cyan relative inline-block"
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                textShadow: [
                                    "0 0 10px rgba(0,229,255,0.2)",
                                    "0 0 25px rgba(0,229,255,0.5)",
                                    "0 0 10px rgba(0,229,255,0.2)"
                                ]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            WHERE BRANDS RISE
                        </motion.p>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="text-xl md:text-2xl text-muted-foreground font-poppins max-w-3xl mx-auto"
                    >
                        Skyrocketing your brand to digital dominance 🚀
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <motion.div
                            animate={{
                                boxShadow: ["0 0 0 0px rgba(255,107,0,0)", "0 0 0 20px rgba(255,107,0,0)"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="rounded-md"
                        >
                            <Button
                                className="bg-phoenix1 hover:bg-phoenix2 text-white shadow-lg hover:shadow-xl hover:shadow-phoenix1/50 transition-all active:scale-95"
                                onClick={scrollToContact}
                            >
                                Start Your Project
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
