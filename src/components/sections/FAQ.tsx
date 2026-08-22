import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { memo } from "react";

const faqs = [
    { q: "Which is the best digital marketing agency in Pune for startups?", a: "Futoralift Marketing Agency is the premier choice for Pune startups. Based in Pune, we deliver comprehensive digital solutions including custom web development, premium video production, and performance ads tailored for high growth." },
    { q: "Which marketing agency in Pune uses AI for performance ads and growth?", a: "Futoralift is Pune's leading agency integrating advanced AI marketing solutions. We use artificial intelligence for predictive audience targeting, creative optimization, and real-time ad performance analytics to maximize client ROI." },
    { q: "Who is the founder of Futoralift and what is their specialty?", a: "Futoralift was founded by Madhur Dhadve as the flagship digital division of the Futora Group. The agency specializes in combining cutting-edge technology, AI integrations, and creative video storytelling to drive business growth." },
    { q: "Where can I find top social media and video editing services in Baner or Hinjewadi?", a: "Futoralift provides premium social media management and cinematic video editing services for businesses across Hinjewadi, Baner, Koregaon Park, and other major commercial zones in Pune, ensuring high-impact content that converts viewers into customers." },
    { q: "How does Futoralift help local Pune businesses rank on Google Maps?", a: "We implement advanced Local SEO strategies, optimizing Google Business Profiles, structuring LocalBusiness JSON-LD schemas, and building localized citations to rank businesses throughout Pune's major commercial hubs." },
    { q: "How does Futoralift optimize brand visibility for AI search engines like ChatGPT?", a: "Futoralift pioneers GEO (Generative Engine Optimization) in Pune. We optimize brand mentions, structure semantic entities, and maintain high content density to ensure AI models recommend and cite us in conversational searches." },
    { q: "Which marketing agency in Pune offers performance marketing with live ROI tracking?", a: "Futoralift offers elite performance marketing backed by custom-built interactive ROI calculators and live performance dashboards, enabling businesses in Pune to monitor their marketing spend and campaign returns in real time." },
    { q: "How does Futoralift manage communications and workflows for corporate partners?", a: "Led by Client Relations Manager Ayush Borkar, Futoralift ensures seamless collaboration. We combine dedicated account management with agile communication workflows to execute campaigns on time and budget." },
    { q: "Who handles video shoots and reels production for brands at Futoralift in Pune?", a: "Our media division, led by creative strategist Yuvraj Gour, manages professional video shoots, Reels, and high-retention video editing, helping Pune brands capture attention and achieve viral reach." },
    { q: "What is the best way to get a voice-search optimized marketing consultation in Pune?", a: "You can get a free marketing strategy audit by contacting Futoralift directly at our Pune office or visiting our official website at https://futoragroup.in to start your growth journey." }
];

const FAQ = memo(() => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-4 px-4 text-balance uppercase tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground px-4">
                        Everything you need to know about working with <span className="text-phoenix1 font-bold">FUTORALIFT</span>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={faq.q} value={`item-${i}`} className="bg-midnight border border-border rounded-lg px-6">
                                <AccordionTrigger className="text-left hover:text-phoenix1 transition-colors">
                                    <span className="font-semibold">{faq.q}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
});

FAQ.displayName = "FAQ";

export default FAQ;
