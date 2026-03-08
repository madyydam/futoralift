import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";

const stats = [
    { label: "Reach", value: "206k+" },
    { label: "Impressions", value: "338k+" },
    { label: "Avg ROI", value: "480%+" },
    { label: "Client Satisfaction", value: "98%" }
];

const AboutSnapshot = memo(() => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container max-w-6xl mx-auto text-center mb-12"
            >
                <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-4 text-balance uppercase tracking-tight">About <span className="text-phoenix1">Futora</span>lift</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                    FUTORALIFT is a premier growth agency specializing in high-impact content and strategic digital innovation to scale your brand.
                </p>
            </motion.div>

            <div className="container max-w-6xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <Card className="bg-charcoal border-phoenix1/20 hover:border-phoenix1 transition-colors text-center h-full">
                                <CardContent className="pt-6 px-2">
                                    <p className="text-2xl md:text-4xl font-bold text-phoenix1 font-poppins">{stat.value}</p>
                                    <p className="text-[10px] sm:text-sm text-muted-foreground mt-2 uppercase tracking-tight">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

AboutSnapshot.displayName = "AboutSnapshot";

export default AboutSnapshot;
