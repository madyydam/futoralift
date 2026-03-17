import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { dashboardMetrics } from "@/data/clients";
import { Users, TrendingUp, DollarSign, BarChart3, PieChart, Utensils, Dumbbell, Cake, LucideIcon } from "lucide-react";

interface StatCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
    delay: number;
    subtitle?: string;
}

const StatCard = memo(({ label, value, icon: Icon, color, delay, subtitle }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="bg-charcoal/50 border border-border rounded-2xl p-6 hover:border-phoenix1/40 transition-all duration-300 group relative overflow-hidden will-change-transform"
    >
        <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}/5 blur-3xl -mr-8 -mt-8 group-hover:bg-${color}/10 transition-colors`} aria-hidden="true" />
        
        <div className="flex items-start justify-between relative z-10">
            <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">{label}</p>
                <h3 className={`text-2xl md:text-3xl font-poppins font-bold text-offwhite group-hover:text-${color} transition-colors`}>
                    {value}
                </h3>
                {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            <div className={`p-3 rounded-xl bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
        </div>
        
        <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r from-${color} to-transparent absolute bottom-0 left-0 transition-all duration-500`} aria-hidden="true" />
    </motion.div>
));

StatCard.displayName = "StatCard";

interface CategoryRowProps {
    title: string;
    revenue: number;
    serviceCharge: number;
    icon: LucideIcon;
    color: string;
    delay: number;
}

const CategoryRow = memo(({ title, revenue, serviceCharge, icon: Icon, color, delay }: CategoryRowProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-charcoal/30 border border-border group hover:border-phoenix1/30 transition-colors gap-4 will-change-transform"
    >
        <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg bg-${color}/10 text-${color}`}>
                <Icon size={20} />
            </div>
            <div>
                <h4 className="font-poppins font-bold text-offwhite group-hover:text-phoenix1 transition-colors">{title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Category Breakdown</p>
            </div>
        </div>
        <div className="flex gap-8 sm:text-right">
            <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold">Revenue</p>
                <p className="font-poppins font-bold text-phoenix1">₹{revenue.toLocaleString()}</p>
            </div>
            <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold">Service Charge</p>
                <p className="font-poppins font-bold text-cyan">₹{serviceCharge.toLocaleString()}</p>
            </div>
        </div>
    </motion.div>
));

CategoryRow.displayName = "CategoryRow";

const Dashboard = memo(() => {
    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-midnight overflow-hidden" id="dashboard">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-4">
                        Business <span className="text-phoenix1">Impact</span> Dashboard
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Real-time tracking of brand growth and marketing performance across our portfolio.
                    </p>
                </motion.div>

                {/* Primary Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatCard 
                        label="This Month Clients" 
                        value={dashboardMetrics.thisMonthClients} 
                        icon={Users} 
                        color="phoenix1" 
                        delay={0.1}
                    />
                    <StatCard 
                        label="Total Revenue" 
                        value={dashboardMetrics.totalRevenue} 
                        icon={DollarSign} 
                        color="phoenix1" 
                        delay={0.2}
                        subtitle="Combined SC + Ad Budgets"
                    />
                    <StatCard 
                        label="Total Service Charge" 
                        value={dashboardMetrics.totalServiceCharge} 
                        icon={PieChart} 
                        color="cyan" 
                        delay={0.3}
                        subtitle="Service Charge Revenue"
                    />
                    <StatCard 
                        label="Total Ad Budget" 
                        value={dashboardMetrics.totalAdBudget} 
                        icon={BarChart3} 
                        color="phoenix1" 
                        delay={0.4}
                        subtitle="Invested for Clients"
                    />
                </div>

                {/* Category Breakdowns */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <PieChart className="text-phoenix1" size={24} />
                        <h3 className="font-poppins font-bold text-xl md:text-2xl text-offwhite uppercase tracking-tight">Category Breakdown</h3>
                    </div>
                    
                    <CategoryRow 
                        title="Gyms"
                        revenue={dashboardMetrics.categories.gyms.revenue}
                        serviceCharge={dashboardMetrics.categories.gyms.serviceCharge}
                        icon={Dumbbell}
                        color="phoenix1"
                        delay={0.1}
                    />
                    <CategoryRow 
                        title="Cake Shops"
                        revenue={dashboardMetrics.categories.cakeShops.revenue}
                        serviceCharge={dashboardMetrics.categories.cakeShops.serviceCharge}
                        icon={Cake}
                        color="cyan"
                        delay={0.2}
                    />
                    <CategoryRow 
                        title="Cafés"
                        revenue={dashboardMetrics.categories.cafes.revenue}
                        serviceCharge={dashboardMetrics.categories.cafes.serviceCharge}
                        icon={Utensils}
                        color="phoenix1"
                        delay={0.3}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                        Live Dynamic Performance Metrics
                    </p>
                </motion.div>
            </div>
        </section>
    );
});

Dashboard.displayName = "Dashboard";

export default Dashboard;
