import { motion } from "framer-motion";
import { memo } from "react";

const steps = [
    { title: "Consultation", desc: "Understanding your brand vision and goals." },
    { title: "Strategy", desc: "Developing a tailored marketing roadmap." },
    { title: "Creation", desc: "Bringing ideas to life with high-impact content." },
    { title: "Lifting", desc: "Executing and optimizing for maximum growth." }
];

const Process = memo(() => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Our Process</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A proven framework designed to lift your brand from inception to market leader.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-border z-0" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-midnight border-2 border-phoenix1 flex items-center justify-center font-bold text-phoenix1 font-poppins relative z-10">
                                    {i + 1}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-poppins font-semibold">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

Process.displayName = "Process";

export default Process;
