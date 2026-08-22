import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { categoryData } from "@/data/clients";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

// Derived once at module level — categoryData is a static import, never changes at runtime
const websites = Object.entries(categoryData).flatMap(([, cat]) =>
    cat.clients
        .filter(client => Boolean(client.websiteUrl))
        .map(client => ({
            ...client,
            categoryLabel: cat.label,
        }))
);

// Stable animation variants — defined outside component to avoid recreation on every render
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: Math.min(i * 0.05, 0.3) },
    }),
};

const Process = memo(() => {
    // Generate stable keys once per render (web.name is unique per website)
    const keys = useMemo(() => websites.map((w, i) => `${w.name}-${i}`), []);

    return (
        <section id="websites" className="py-16 md:py-24 px-6 md:px-12 bg-midnight/30">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                        Business Websites We Have <span className="text-phoenix1">Made</span> 💻
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Check out some of the high-converting and premium web experiences we have built for our clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {websites.map((web, i) => (
                        <motion.div
                            key={keys[i]}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.04 }}
                            viewport={{ once: true }}
                            variants={cardVariants}
                            // Use will-change only for the scale transform, not transition-all
                            style={{ willChange: "transform" }}
                            className="rounded-2xl border-2 border-cyan/40 bg-[#0D0D0F]/80 backdrop-blur-xl p-5 flex flex-col justify-between hover:border-phoenix1 hover:shadow-[0_15px_30px_rgba(255,107,0,0.25)] transition-[border-color,box-shadow] duration-300 group min-h-[150px] cursor-pointer"
                        >
                            <div className="flex items-center gap-3.5 mb-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center flex-shrink-0 bg-charcoal group-hover:scale-105 transition-transform duration-300 p-1">
                                    {web.image ? (
                                        <img
                                            src={web.image}
                                            alt={`${web.name} logo`}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <span className="font-poppins font-bold text-sm text-white">
                                            {web.initials}
                                        </span>
                                    )}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-poppins font-bold text-base leading-snug group-hover:text-phoenix1 transition-colors duration-300 break-words">
                                        {web.name}
                                    </h3>
                                    <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                                        {web.categoryLabel}
                                    </p>
                                </div>
                            </div>
                            <a
                                href={web.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-auto"
                                aria-label={`Visit ${web.name} website`}
                            >
                                <Button className="w-full gap-1.5 bg-phoenix1 hover:bg-phoenix2 text-white font-bold h-8 rounded-lg shadow-md shadow-phoenix1/10 transition-all hover:shadow-phoenix2/30 active:scale-95 text-[11px] py-1 px-3">
                                    <Globe className="w-3.5 h-3.5" aria-hidden="true" /> Visit Website
                                </Button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Process.displayName = "Process";

export default Process;
