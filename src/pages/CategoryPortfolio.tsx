import { useState, memo, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";
import blLogo from "@/assets/bl-logo.png";
import { categoryData } from "@/data/clients";
import type { Client } from "@/data/clients";

// ─────────────────────────────────────────────
//  Client Card — ORIGINAL DESIGN (REVERTED)
// ─────────────────────────────────────────────

const ClientCard = memo(({ client, accent, index }: { client: Client; accent: string; accentBg: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="rounded-2xl border border-white/5 bg-[#0D0D0F]/80 backdrop-blur-xl overflow-hidden hover:border-phoenix1/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group flex flex-col"
    >
        <div className="p-5 flex flex-col gap-4 flex-grow">
            {/* Image Section */}
            {client.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-black/40 group-hover:border-phoenix1/20 transition-colors">
                    <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                        <span className="text-[8px] font-bold tracking-tighter text-white/50 uppercase">Project Spotlight</span>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="flex flex-col gap-4 flex-grow">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-phoenix1 to-cyan flex items-center justify-center font-poppins font-bold text-sm text-white shadow-xl shadow-phoenix1/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                            {client.initials}
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-poppins font-bold text-base leading-tight group-hover:text-phoenix1 transition-colors truncate">
                                {client.name}
                            </h3>
                            <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1.5 truncate">
                                <span className="w-1 h-1 rounded-full bg-cyan animate-pulse" />
                                {client.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                         <div className={`h-[1px] flex-grow bg-gradient-to-r from-phoenix1/20 to-transparent`} />
                         <p className={`text-[9px] font-bold uppercase tracking-[0.2em] ${client.totalAmount ? "text-[#27C93F]" : accent} whitespace-nowrap`}>
                            {client.totalAmount ? client.totalAmount : "Strategic Execution"}
                         </p>
                    </div>
                     
                    {client.whatWeDid.length > 0 && (
                        <ul className="grid grid-cols-1 gap-2">
                            {client.whatWeDid.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-[11px] text-offwhite/80 leading-relaxed font-medium group/item hover:text-white transition-colors">
                                    <span className="text-phoenix1 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform items-center justify-center flex">
                                        <div className="w-1 h-1 rounded-full bg-phoenix1 shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-3 flex flex-row gap-2.5">
                {client.websiteUrl && (
                    <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full gap-2 bg-phoenix1 hover:bg-phoenix2 text-white font-bold h-10 rounded-xl shadow-lg shadow-phoenix1/20 transition-all hover:shadow-phoenix2/40 active:scale-95 px-2 text-[10px]">
                            <Globe className="w-3.5 h-3.5" /> Live Demo
                        </Button>
                    </a>
                )}
                {client.instagramUrl && (
                    <a href={client.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full gap-2 border-white/10 hover:border-phoenix1/40 hover:bg-phoenix1/5 hover:text-phoenix1 font-semibold h-10 rounded-xl transition-all active:scale-95 px-2 text-[10px]">
                            <Instagram className="w-3.5 h-3.5" /> Social
                        </Button>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
));

// ─────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────

const CategoryPortfolio = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();

    const config = useMemo(() => categoryData[categoryId ?? ""], [categoryId]);

    const isResort = categoryId === "restaurants-resorts";

    if (!config) {
        return (
            <div className="min-h-screen bg-midnight text-offwhite flex items-center justify-center font-inter">
                <div className="text-center space-y-4">
                    <p className="text-2xl font-poppins font-bold">Category not found</p>
                    <Button onClick={() => navigate("/")} className="bg-phoenix1 hover:bg-phoenix2">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back Home
                    </Button>
                </div>
            </div>
        );
    }

    const { label, accent, accentBg, clients } = config;

    return (
        <div className="min-h-screen bg-midnight text-offwhite font-inter">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-border z-50">
                <div className="container max-w-6xl mx-auto px-6 md:px-12 flex items-center h-16 gap-3">
                    <a href="/" className="flex items-center gap-2 group">
                        <img src={blLogo} alt="Futoralift" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-poppins font-bold text-lg text-phoenix1">FUTORALIFT</span>
                    </a>
                    <span className="text-border text-sm">›</span>
                    <span className="text-muted-foreground text-sm">Portfolio</span>
                    <span className="text-border text-sm">›</span>
                    <span className={`text-sm font-semibold ${accent}`}>{label}</span>
                </div>
            </nav>

            {/* Header — compact */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-20 pb-6 px-6 md:px-12 border-b border-border bg-charcoal/30"
            >
                <div className="container max-w-6xl mx-auto">
                    <button
                        onClick={() => navigate("/#portfolio")}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-phoenix1 transition-colors mb-3 group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Portfolio
                    </button>
                    <div className="flex items-baseline gap-3">
                        <h1 className="font-poppins font-bold text-2xl md:text-3xl">
                            <span className="text-phoenix1">{label}</span> Clients
                        </h1>
                        {clients.length > 0 && (
                            <span className="text-sm text-muted-foreground">{clients.length} brand{clients.length > 1 ? "s" : ""} lifted</span>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Cards */}
            <div className="px-6 md:px-12 py-8">
                <div className={`container ${isResort ? "max-w-[1600px]" : "max-w-6xl"} mx-auto`}>
                    {clients.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center py-16 border border-border rounded-2xl bg-charcoal/30"
                        >
                            <p className="text-3xl mb-3">🚀</p>
                            <p className="font-poppins font-semibold text-lg mb-1">Coming Soon</p>
                            <p className="text-muted-foreground text-sm">
                                We're putting together our {label.toLowerCase()} portfolio.
                            </p>
                        </motion.div>
                    ) : (
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${isResort ? "xl:grid-cols-4 gap-6" : "xl:grid-cols-3 gap-8"}`}>
                            {clients.map((client, index) => (
                                <ClientCard key={client.id} client={client} accent={accent} accentBg={accentBg} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CategoryPortfolio;
