import { motion } from "framer-motion";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Team = memo(() => {
    return (
        <section id="team" className="py-20 px-6 md:px-12 bg-charcoal/50 border-t border-border">
            <div className="container max-w-4xl mx-auto text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <span className="text-phoenix1 font-poppins font-semibold tracking-wider uppercase text-sm">
                        Our Team
                    </span>
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl text-offwhite">
                        Meet the Force
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
                        Discover the creative minds, strategists, and builders behind FutoraLift driving massive growth for brands.
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="pt-6"
                >
                    <Button asChild className="bg-phoenix1 hover:bg-phoenix2 text-white font-poppins font-bold px-8 py-6 rounded-xl text-base transition-all active:scale-95 shadow-lg shadow-phoenix1/20 hover:shadow-phoenix1/40 group">
                        <Link to="/team" className="flex items-center gap-2">
                            Meet the Force
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
});

Team.displayName = "Team";

export default Team;
