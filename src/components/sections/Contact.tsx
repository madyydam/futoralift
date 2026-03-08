import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram } from "lucide-react";
import { useState, memo, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = memo(() => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from("contact_submissions")
                .insert([formData]);

            if (error) throw error;

            toast({
                title: "Success!",
                description: "Your message has been sent. We'll get back to you within 24 hours.",
            });

            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }, [formData, toast]);
    return (
        <section id="contact" className="py-16 md:py-24 px-6 md:px-12">
            <div className="container max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-3xl md:text-5xl text-center mb-16 px-4"
                >
                    Start Your Project
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-charcoal border-border h-full">
                            <CardHeader>
                                <CardTitle className="font-poppins">Get in Touch</CardTitle>
                                <CardDescription>Fill out the form and we'll reach out within 24 hours</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project..."
                                            className="bg-midnight border-border focus:border-phoenix1 focus:ring-phoenix1 min-h-32"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-phoenix1 hover:bg-phoenix2 text-lg py-6"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Start a Project"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        <h3 className="font-poppins font-semibold text-2xl">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-phoenix1 mt-1" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a href="mailto:futoralift@gmail.com" className="text-muted-foreground hover:text-phoenix1 transition-colors">futoralift@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-phoenix1 mt-1" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+918446653644" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 84466 53644</a>
                                        <a href="tel:+917887578006" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 78875 78006</a>
                                        <a href="tel:+918452854044" className="text-muted-foreground hover:text-phoenix1 transition-colors">+91 84528 54044</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Instagram className="w-6 h-6 text-phoenix1 mt-1" />
                                <div>
                                    <p className="font-semibold">Social Media</p>
                                    <div className="flex flex-col gap-2 text-muted-foreground">
                                        <span>@futoralift</span>
                                        <a
                                            href="https://www.instagram.com/futoralift?igsh=dGUyY3lvaHE4bWxh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block"
                                        >
                                            <Button className="bg-phoenix1 hover:bg-phoenix2 text-white">
                                                DM on Insta
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;
