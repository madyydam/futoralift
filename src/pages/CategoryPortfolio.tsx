import { useState, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";
import blLogo from "@/assets/bl-logo.png";
import stories12am from "@/assets/12am-stories.jpg";
import fitnessTouch from "@/assets/fitness-touch.png";

// ─────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────

interface Client {
    id: number;
    name: string;
    initials: string;
    location: string;
    services: string[];
    whatWeDid: string[];
    image?: string;
    instagramUrl?: string;
    websiteUrl?: string;
}

interface CategoryConfig {
    label: string;
    accent: string;
    accentBg: string;
    clients: Client[];
}

// ─────────────────────────────────────────────
//  ⬇️  ADD YOUR CLIENTS HERE
// ─────────────────────────────────────────────

const categoryData: Record<string, CategoryConfig> = {
    gyms: {
        label: "Gyms",
        accent: "text-phoenix1",
        accentBg: "bg-phoenix1/10",
        clients: [
            {
                id: 1,
                name: "FITNESS TOUCH GYM",
                initials: "FT",
                location: "Jadhav Nagar, Vadgaon BK, Pune, Maharashtra 411041",
                services: ["4 Reels", "1 Ad Campaign", "100 Leads Generation", "4 Carousels"],
                whatWeDid: [
                    "4 Reels",
                    "1 Ad Campaign",
                    "100 Leads Generation",
                    "4 Carousels"
                ],
                image: fitnessTouch
            }
        ],
    },
    cafes: {
        label: "Cafés",
        accent: "text-cyan",
        accentBg: "bg-cyan/10",
        clients: [
            // Add café clients here
        ],
    },
    "cake-shops": {
        label: "Cake Shops",
        accent: "text-phoenix1",
        accentBg: "bg-phoenix1/10",
        clients: [
            {
                id: 1,
                name: "12AM Stories",
                initials: "12",
                location: "Choudhary Heights, Warje Malwadi Rd, Giridhar Nagar, Warje",
                services: ["Instagram Reels ×15", "Instagram Carousels/Posts ×5", "Website Development"],
                whatWeDid: [
                    "Instagram Reels – 15 per month",
                    "Instagram Carousels / Posts – 5 per month",
                    "Website Development",
                ],
                image: stories12am,
                instagramUrl: "https://www.instagram.com/12am_stories_/",
                websiteUrl: "https://12amstories.vercel.app/",
            },
            {
                id: 2,
                name: "The Creamy Walnut",
                initials: "CW",
                location: "Vetal Baba Chowk, Narhe, Pune, Maharashtra 411041",
                services: ["Instagram Reels ×4", "Instagram Carousels/Posts ×10", "Website Development"],
                whatWeDid: [
                    "Instagram Reels – 4 per month",
                    "Instagram Carousels / Posts – 10 per month",
                    "Website Development",
                ],
                instagramUrl: "https://www.instagram.com/thecreamywalnut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                websiteUrl: "https://TheCreamyWalnut.vercel.app",
            },
        ],
    },
};

// ─────────────────────────────────────────────
//  Client Card — all info visible, no click needed
// ─────────────────────────────────────────────

const ClientCard = memo(({ client, accent, accentBg, index }: { client: Client; accent: string; accentBg: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="rounded-xl border border-border bg-charcoal overflow-hidden hover:border-phoenix1/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-phoenix1/20 transition-all duration-300 group"
    >
        {/* Gradient top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-phoenix1 to-cyan" />

        <div className="p-5 flex flex-col gap-4">
            {/* Initials + Name + Location */}
            <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-phoenix1 to-cyan flex items-center justify-center font-poppins font-bold text-sm text-white shadow-lg flex-shrink-0">
                    {client.initials}
                </div>
                <div>
                    <h3 className="font-poppins font-bold text-base leading-tight group-hover:text-phoenix1 transition-colors">
                        {client.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{client.location}</p>
                </div>
            </div>

            {/* Image Placeholder or Actual Image */}
            {client.image && (
                <div className="w-full h-48 rounded-lg overflow-hidden border border-border shadow-inner bg-midnight/50">
                    <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            {/* What We Did */}
            <div>
                <p className={`text-xs font-semibold uppercase tracking-widest ${accent} mb-2.5`}>What FutoraLift Did</p>
                <ul className="space-y-1.5">
                    {client.whatWeDid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-cyan mt-0.5 flex-shrink-0 font-bold">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            {(client.instagramUrl || client.websiteUrl) && (
                <div className="flex flex-wrap gap-2 pt-1">
                    {client.instagramUrl && (
                        <a href={client.instagramUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="gap-1.5 bg-phoenix1 hover:bg-phoenix2 text-white text-xs h-8 shadow-md hover:shadow-phoenix1/40 transition-shadow">
                                <Instagram className="w-3.5 h-3.5" /> Instagram
                            </Button>
                        </a>
                    )}
                    {client.websiteUrl && (
                        <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="gap-1.5 border-border hover:border-phoenix1 hover:text-phoenix1 text-xs h-8 transition-colors">
                                <Globe className="w-3.5 h-3.5" /> Website
                            </Button>
                        </a>
                    )}
                </div>
            )}
        </div>
    </motion.div>
));

// ─────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────

const CategoryPortfolio = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();

    const config = categoryData[categoryId ?? ""];

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
                <div className="container max-w-6xl mx-auto">
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
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
