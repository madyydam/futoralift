import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { memo } from "react";

interface NewsletterProps {
    newsletterEmail: string;
    setNewsletterEmail: (email: string) => void;
    handleNewsletterSubmit: (e: React.FormEvent) => void;
    isNewsletterSubmitting: boolean;
}

const Newsletter = memo(({ newsletterEmail, setNewsletterEmail, handleNewsletterSubmit, isNewsletterSubmitting }: NewsletterProps) => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-midnight border-t border-border">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-charcoal border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-phoenix1/10 blur-3xl -mr-16 -mt-16 group-hover:bg-phoenix1/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan/10 blur-3xl -ml-16 -mb-16 group-hover:bg-cyan/20 transition-colors" />

                    <div className="space-y-4 relative z-10">
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl">Stay Updated</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            Get the latest marketing insights and success stories delivered to your inbox.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" className="bg-phoenix1 hover:bg-phoenix2 gap-2" disabled={isNewsletterSubmitting}>
                                {isNewsletterSubmitting ? "Subscribing..." : "Subscribe"}
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground pt-2">
                            Join 500+ business owners. No spam, ever.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

Newsletter.displayName = "Newsletter";

export default Newsletter;
