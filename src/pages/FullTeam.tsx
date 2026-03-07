import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";
import blLogo from "@/assets/bl-logo.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";

const founders = [
    {
        name: "Madhur Dhadve",
        role: "Founder of Futora Group",
        initials: "MD",
        desc: "Visionary leader and full-stack creative mind who handles all technical aspects of client projects. He ensures every campaign blends creativity with performance."
    },
    {
        name: "Yuvraj Gour",
        role: "Co-founder",
        initials: "YG",
        desc: "Creative strategist and design perfectionist focused on video editing, shoots, and delivering visually stunning, high-impact campaigns."
    }
];

const departments = [
    {
        title: "Sales Team",
        members: [
            { name: "Bhushan", role: "Sales", initials: "B", desc: "Dedicated to client acquisition and driving strategic growth for partners." },
            { name: "Varun", role: "Sales", initials: "V", desc: "Expert in relationship management and market opportunity identification." },
            { name: "Aditya", role: "Sales", initials: "A", desc: "Focuses on delivering tailored solutions and ensuring client satisfaction." },
            { name: "Rohit", role: "Sales", initials: "R", desc: "Streamlining communication and optimizing sales workflows for efficiency." },
        ]
    },
    {
        title: "Videography",
        members: [
            { name: "Sandeep", role: "Videographer", initials: "S", desc: "Captures high-quality cinematic footage with technical excellence." },
            { name: "Yuvraj", role: "Videographer", initials: "Y", desc: "Specializes in dynamic shoots and creative visual storytelling." },
        ]
    },
    {
        title: "Video Editing",
        members: [
            { name: "Sandeep", role: "Video Editor", initials: "S", desc: "Refining visual narratives with precision and creative flair." },
            { name: "Rohan", role: "Video Editor", initials: "R", desc: "Expert in post-production, color grading, and visual effects." },
            { name: "Varun", role: "Video Editor", initials: "V", desc: "Crafting seamless edits that maintain high energy and engagement." },
            { name: "Yuvraj", role: "Video Editor", initials: "Y", desc: "Ensuring every frame aligns perfectly with the brand's vision." },
        ]
    }
];

const FullTeam = memo(() => {
    return (
        <div className="min-h-screen bg-midnight text-offwhite font-inter">
            <ScrollProgress />
            <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-border z-50">
                <div className="container max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={blLogo} alt="Futoralift Logo" className="w-8 h-8 object-contain" />
                        <span className="font-poppins font-bold text-xl text-phoenix1">FUTORALIFT</span>
                    </Link>
                    <Link to="/" className="text-sm hover:text-phoenix1 transition-colors flex items-center gap-2">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="container max-w-6xl mx-auto text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-poppins font-bold text-3xl md:text-5xl mb-4 bg-gradient-to-r from-offwhite to-muted-foreground bg-clip-text text-transparent"
                    >
                        Meet the Force
                    </motion.h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A dedicated team of experts bridging creativity with execution to lift your brand to new heights.
                    </p>
                </div>

                {/* Founders Section */}
                <div className="container max-w-5xl mx-auto mb-24">
                    <h2 className="font-poppins font-semibold text-lg md:text-xl mb-10 flex items-center gap-4 text-muted-foreground">
                        <span className="h-px flex-1 bg-border/30"></span>
                        Leadership
                        <span className="h-px flex-1 bg-border/30"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {founders.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="bg-charcoal border-phoenix1/20 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-phoenix1/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <CardContent className="p-8 relative">
                                        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                                            <div className="w-32 h-32 flex-shrink-0 rounded-full bg-gradient-to-br from-phoenix1 to-cyan p-1 shadow-lg shadow-phoenix1/20 transition-transform group-hover:scale-105">
                                                <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center text-4xl font-bold font-poppins">
                                                    {member.initials}
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <h3 className="font-poppins font-semibold text-2xl">{member.name}</h3>
                                                    <p className={`text-sm font-medium ${i === 0 ? 'text-phoenix1' : 'text-cyan'}`}>{member.role}</p>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                                    {member.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Departments Section */}
                {departments.map((dept, deptIdx) => (
                    <div key={deptIdx} className="container max-w-6xl mx-auto mb-20 last:mb-0">
                        <h2 className="font-poppins font-bold text-xl md:text-2xl mb-8 text-left border-l-4 border-phoenix1 pl-4">
                            {dept.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dept.members.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <Card className="bg-charcoal/30 border-border/50 hover:border-phoenix1/30 transition-all duration-300 h-full group">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center text-lg font-bold font-poppins group-hover:bg-phoenix1 group-hover:text-white transition-colors">
                                                    {member.initials}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-base group-hover:text-phoenix1 transition-colors">{member.name}</h4>
                                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{member.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                                {member.desc}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>

            <footer className="py-12 px-6 md:px-12 border-t border-border bg-midnight text-center">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Futoralift | Futora Group of Companies.
                </p>
            </footer>
        </div>
    );
});

FullTeam.displayName = "FullTeam";

export default FullTeam;
