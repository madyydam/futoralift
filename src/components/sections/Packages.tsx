import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { memo } from "react";

interface PackagesProps {
    scrollToContact: () => void;
}

const packages = [
    {
        title: "Starter",
        price: "Custom",
        desc: "Perfect for local businesses starting their digital journey.",
        features: [
            "10 Instagram Reels",
            "5 Social Media Posts",
            "Basic Profile Optimization",
            "Free Awareness Campaign"
        ]
    },
    {
        title: "Professional",
        price: "Custom",
        desc: "Comprehensive growth package for established brands.",
        features: [
            "15 Instagram Reels",
            "10 Social Media Posts",
            "Advanced Strategy & Planning",
            "Premium Video Editing",
            "Free Awareness Campaign"
        ],
        popular: true
    },
    {
        title: "Enterprise",
        price: "Custom",
        desc: "Full-scale digital dominance for market leaders.",
        features: [
            "Daily Content Creation",
            "Multi-platform Management",
            "Influencer Collaboration",
            "Website Development",
            "Free Awareness Campaign"
        ]
    }
];

const Packages = memo(({ scrollToContact }: PackagesProps) => {
    return (
        <section id="packages" className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Packages & Pricing</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transparent solutions designed to lift your brand and drive results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className={`bg-charcoal border-border h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-phoenix1/10 ${pkg.popular ? 'border-phoenix1 shadow-lg' : ''}`}>
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 bg-phoenix1 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        MOST POPULAR
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="font-poppins text-2xl">{pkg.title}</CardTitle>
                                    <div className="flex items-baseline gap-1 mt-2">
                                        <span className="text-3xl font-bold text-phoenix1">{pkg.price}</span>
                                    </div>
                                    <CardDescription className="mt-2">{pkg.desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className="text-cyan font-bold">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full ${pkg.popular ? 'bg-phoenix1 hover:bg-phoenix2' : 'variant-outline border-phoenix1 text-phoenix1 hover:bg-phoenix1 hover:text-white'}`}
                                        onClick={scrollToContact}
                                    >
                                        Choose Plan
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Packages.displayName = "Packages";

export default Packages;
