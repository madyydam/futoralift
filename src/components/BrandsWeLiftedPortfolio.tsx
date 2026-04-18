import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Dumbbell, Coffee, Cake, Hotel, Zap } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "restaurants-resorts",
    label: "Restaurants & Resorts",
    icon: Hotel,
    description: "Premium dining & luxury stays we've helped reach and delight more guests.",
    color: "text-emerald-400",
    borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/20",
  },
  {
    id: "gyms",
    label: "Gyms",
    icon: Dumbbell,
    description: "Fitness studios & training centres we've helped dominate their local market.",
    color: "text-orange-400",
    borderHover: "hover:border-orange-500/60 hover:shadow-orange-500/20",
  },
  {
    id: "cafes",
    label: "Cafés",
    icon: Coffee,
    description: "Cozy cafés & coffee shops we've helped build a loyal following online.",
    color: "text-amber-400",
    borderHover: "hover:border-amber-500/60 hover:shadow-amber-500/20",
  },
  {
    id: "cake-shops",
    label: "Cake Shops",
    icon: Cake,
    description: "Bakeries & cake studios we've helped go from home-bakers to buzzing brands.",
    color: "text-pink-400",
    borderHover: "hover:border-pink-500/60 hover:shadow-pink-500/20",
  },
  {
    id: "d2c-startups",
    label: "D2C Brands & Startups",
    icon: Zap,
    description: "From FMCG to tech startups, we help modern brands scale with performance marketing, creative strategy & high-converting funnels.",
    color: "text-violet-400",
    borderHover: "hover:border-violet-500/60 hover:shadow-violet-500/20",
  },
];

const BrandsWeLiftedPortfolio = memo(() => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-16 md:py-24 px-6 md:px-12 bg-midnight">
      <div className="container max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Brands We've <span className="text-phoenix1">Lifted</span> 🚀
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real businesses. Real growth. Real results.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`bg-charcoal border-border h-full ${cat.borderHover} hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                onClick={() => navigate(`/portfolio/${cat.id}`)}
              >
                <CardContent className="py-5 px-4 flex flex-col items-center text-center gap-3">
                  <div className={`p-2.5 rounded-2xl bg-charcoal border border-border group-hover:border-phoenix1/40 transition-colors`}>
                    <cat.icon className={`w-7 h-7 ${cat.color}`} />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg leading-tight">{cat.label}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-3">{cat.description}</p>
                  <div className="flex items-center gap-1 text-phoenix1 text-[10px] font-bold mt-auto pt-1 group-hover:gap-2 transition-all">
                    View Clients
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

BrandsWeLiftedPortfolio.displayName = "BrandsWeLiftedPortfolio";

export default BrandsWeLiftedPortfolio;
