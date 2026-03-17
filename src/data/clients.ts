import fitnessTouch from "@/assets/fitness-touch.png";
import stories12am from "@/assets/12am-stories.jpg";
import tcwLogo from "@/assets/tcw-logo.png";
import cakeCarnival from "@/assets/the-cake-carnival.png";

export interface Client {
    id: number;
    name: string;
    initials: string;
    location: string;
    services: string[];
    whatWeDid: string[];
    image?: string;
    instagramUrl?: string;
    websiteUrl?: string;
    totalAmount?: string;
    // Real Data Metrics (Numeric)
    serviceCharge: number;
    adBudget: number;
}

export interface CategoryConfig {
    label: string;
    accent: string;
    accentBg: string;
    clients: Client[];
}

export const categoryData: Record<string, CategoryConfig> = {
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
                services: ["4 Reels", "4 Carousels", "2 Meta Ad Creative Setup", "₹25,000 Service Charge"],
                whatWeDid: [
                    "Instagram Reels – 4 per month",
                    "Instagram Carousels / Posts – 4 per month",
                    "2 Meta Ad Creative Setup with ₹10000 budget",
                    "₹25,000 - Service Charge",
                ],
                image: fitnessTouch,
                instagramUrl: "https://www.instagram.com/fitnesstouchgym82?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                serviceCharge: 25000,
                adBudget: 10000,
            }
        ],
    },
    cafes: {
        label: "Cafés",
        accent: "text-cyan",
        accentBg: "bg-cyan/10",
        clients: [],
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
                services: ["Instagram Reels ×15", "Instagram Carousels / Posts ×5", "Website Development"],
                whatWeDid: [
                    "Instagram Reels – 15 per month",
                    "Instagram Carousels / Posts – 5 per month",
                    "Website Development",
                    "₹13,000 - Service Charge",
                ],
                totalAmount: "Total Project Cost - ₹13,000",
                image: stories12am,
                instagramUrl: "https://www.instagram.com/12am_stories_/",
                websiteUrl: "https://12amstories.vercel.app/",
                serviceCharge: 13000,
                adBudget: 0,
            },
            {
                id: 2,
                name: "The Creamy Walnut",
                initials: "CW",
                location: "Vetal Baba Chowk, Narhe, Pune, Maharashtra 411041",
                services: ["Instagram Reels ×4", "Instagram Carousels / Posts ×10", "Website Development", "2 Meta Ad Creative Setup"],
                whatWeDid: [
                    "Instagram Reels – 4 per month",
                    "Instagram Carousels / Posts – 10 per month",
                    "Website Development",
                    "2 Meta Ad Creative Setup with ₹4000 budget",
                    "₹9,000 - Service Charge",
                ],
                totalAmount: "Total Project Cost - ₹13,000",
                instagramUrl: "https://www.instagram.com/thecreamywalnut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                websiteUrl: "https://TheCreamyWalnut.vercel.app",
                image: tcwLogo,
                serviceCharge: 9000,
                adBudget: 4000,
            },
            {
                id: 3,
                name: "The Cake Carnival",
                initials: "TCC",
                location: "Narhe Gaon Rd, Narhe, Pune, Maharashtra 411041",
                services: ["Instagram Reels ×5", "Instagram Carousels / Posts ×10", "1 Meta Ad Creative Setup"],
                whatWeDid: [
                    "Instagram Reels – 5 per month",
                    "Instagram Carousels / Posts – 10 per month",
                    "1 Meta Ad Creative Setup with ₹4000 budget",
                    "₹4,000 - Service Charge",
                ],
                totalAmount: "Total Project Cost - ₹8,000",
                image: cakeCarnival,
                serviceCharge: 4000,
                adBudget: 4000,
            },
        ],
    },
};

// Compute Dynamic Metrics
const allClients = Object.values(categoryData).flatMap(cat => cat.clients);
const totalServiceCharge = allClients.reduce((sum, c) => sum + c.serviceCharge, 0);
const totalAdBudget = allClients.reduce((sum, c) => sum + c.adBudget, 0);

// Helper to get category metrics
const getCatMetrics = (key: string) => {
    const clients = categoryData[key]?.clients || [];
    const sc = clients.reduce((sum, c) => sum + (c.serviceCharge || 0), 0);
    const ab = clients.reduce((sum, c) => sum + (c.adBudget || 0), 0);
    return {
        revenue: sc + ab,
        serviceCharge: sc
    };
};

export const dashboardMetrics = {
    thisMonthClients: allClients.length, 
    totalClients: allClients.length,
    totalRevenue: `₹${(totalServiceCharge + totalAdBudget).toLocaleString()}`,
    totalServiceCharge: `₹${totalServiceCharge.toLocaleString()}`,
    totalAdBudget: `₹${totalAdBudget.toLocaleString()}`,
    categories: {
        gyms: getCatMetrics("gyms"),
        cafes: getCatMetrics("cafes"),
        cakeShops: getCatMetrics("cake-shops")
    }
};
