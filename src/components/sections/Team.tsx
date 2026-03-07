import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
    {
        name: "Madhur Dhadve",
        role: "Founder of Futora Group",
        initials: "MD",
        desc: "Visionary leader and full-stack creative mind who handles all technical aspects of client projects from video editing and digital ads to websites, apps, and marketing systems. He ensures every campaign blends creativity with performance."
    },
    {
        name: "Yuvraj Gour",
        role: "Co-founder",
        initials: "YG",
        desc: "Creative strategist and design perfectionist focused on video editing, shoots, and delivering visually stunning, high-impact campaigns. Yuvraj brings ideas to life with precision, passion, and attention to every detail."
    }
];

const Team = memo(() => {
    return (
        <section id="team" className="py-16 md:py-24 px-6 md:px-12 bg-charcoal/50">
            <div className="container max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-poppins font-bold text-4xl md:text-5xl text-center mb-16"
                >
                    Meet the Team
                </motion.h2>
                <Card className="bg-charcoal border-phoenix1/20 max-w-4xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="member flex flex-col items-center text-center space-y-4 group"
                                >
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-phoenix1/50 transition-all">
                                        <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold font-poppins">
                                            {member.initials}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-poppins font-semibold text-xl">{member.name}</h3>
                                        <p className={`text-sm ${i === 0 ? 'text-phoenix1' : 'text-cyan'}`}>{member.role}</p>
                                        <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                                            {member.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-center">
                            <Button asChild variant="outline" className="border-phoenix1 text-phoenix1 hover:bg-phoenix1 hover:text-white group">
                                <Link to="/team" className="flex items-center gap-2">
                                    See full team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
});

Team.displayName = "Team";

export default Team;
