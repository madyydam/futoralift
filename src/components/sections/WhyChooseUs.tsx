import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Zap, TrendingUp, Palette } from "lucide-react";
import { memo } from "react";

const features = [
    { icon: Target, title: "Strategic Focus", desc: "Data-driven decisions that hit the mark" },
    { icon: Zap, title: "Rapid Execution", desc: "From concept to launch in record time" },
    { icon: TrendingUp, title: "Growth Mindset", desc: "Scalable solutions that evolve with you" },
    { icon: Palette, title: "Creative Excellence", desc: "Designs that captivate and convert" }
];

const WhyChooseUs = memo(() => {
    return (
        <section id="why-choose-us" className="py-16 md:py-24 px-6 md:px-12">
            <div className="container max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16"
                >
                    Why Choose Us
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="bg-charcoal border-border hover:border-phoenix1 hover:-translate-y-2 hover:shadow-xl hover:shadow-phoenix1/20 transition-all group h-full">
                                <CardHeader>
                                    <item.icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                                    <CardTitle className="text-xl font-poppins">{item.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;
