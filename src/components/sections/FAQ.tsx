import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { memo } from "react";

const faqs = [
    { q: "Why choose FutoraLift as a new agency?", a: "As a new agency, we bring fresh perspectives, cutting-edge strategies, and hungry dedication to your success. We're not set in our ways—we adapt quickly, innovate constantly, and treat every client like our first priority. Plus, our competitive pricing means you get premium quality without the premium price tag of established agencies." },
    { q: "What makes you different from other agencies?", a: "We combine strategic thinking with creative excellence. Our team handles everything in-house—from video editing and web development to social media and branding. This means seamless communication, faster turnarounds, and cohesive campaigns that actually work together. We're not just creatives; we're your growth partners." },
    { q: "How long does it take to see results?", a: "You'll see initial results within the first month—increased engagement, better content quality, and improved brand presence. Significant growth typically happens within 2-3 months as our strategies gain momentum. We provide weekly analytics so you can track progress every step of the way." },
    { q: "Do you work with startups and small businesses?", a: "Absolutely! We specialize in helping startups and small businesses punch above their weight. Our packages are designed to be affordable yet comprehensive. Whether you're launching your first campaign or scaling an existing business, we have solutions that fit your budget and goals." },
    { q: "What's included in the free awareness campaign?", a: "Every package includes a complimentary awareness campaign to jumpstart your brand's visibility. This includes strategic content planning, targeted social media posts, and community engagement tactics designed to build your initial audience and create buzz around your brand." },
    { q: "Can I upgrade or downgrade my package?", a: "Yes! We're flexible. You can upgrade to a higher tier anytime or adjust your package based on your needs and results. We'll work with you to find the perfect fit as your business evolves. No long-term contracts—just month-to-month partnerships built on results." },
    { q: "How do I get started?", a: "Simple! Fill out the contact form below or DM us on Instagram. We'll schedule a free consultation to understand your goals, discuss your brand vision, and recommend the best package for you. From there, we can have your first campaign live within 7-10 days." }
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
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about working with FutoraLift
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
                            <AccordionItem key={i} value={`item-${i}`} className="bg-midnight border border-border rounded-lg px-6">
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
