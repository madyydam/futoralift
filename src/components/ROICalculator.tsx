import { useState, useMemo, memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Users, Target, Coins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ROICalculatorProps {
    onButtonClick?: () => void;
}

interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
}

const ROICalculator = memo(({ onButtonClick }: ROICalculatorProps) => {
    const [adSpend, setAdSpend] = useState([5000]);
    const [cpc, setCpc] = useState([10]);

    const { projectedReach, lowerLeads, upperLeads, projectedROI } = useMemo(() => {
        const spend = adSpend[0];
        const costPerClick = Math.max(1, cpc[0]);

        // Data-driven Reach: ~187.5 reach per ₹1 spent
        const reach = Math.round(spend * 187.5);

        // Leads = budget / CPC (1 click = 1 lead)
        const potentialLeads = Math.round(spend / costPerClick);

        // 20% margin to account for GST (18%) and bidding fluctuations
        const lower = Math.round(potentialLeads * 0.8);

        // Value per lead estimated at ₹50
        const roi = spend > 0 ? Math.round(((potentialLeads * 50) / spend) * 100) : 0;

        return {
            projectedReach: reach,
            lowerLeads: lower,
            upperLeads: potentialLeads,
            projectedROI: roi,
        };
    }, [adSpend, cpc]);

    // Computed at top-level, not inside JSX — fixes Rules of Hooks violation
    const stats = useMemo<Stat[]>(() => [
        {
            label: "Est. New Reach",
            value: projectedReach.toLocaleString() + "+",
            icon: Target,
            color: "text-cyan",
        },
        {
            label: "Est. New Leads",
            value: `${lowerLeads.toLocaleString()} - ${upperLeads.toLocaleString()}`,
            icon: Users,
            color: "text-amber-400",
        },
        {
            label: "Potential ROI",
            value: projectedROI + "%",
            icon: TrendingUp,
            color: "text-green-400",
        },
    ], [projectedReach, lowerLeads, upperLeads, projectedROI]);

    const handleButtonClick = useCallback(() => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [onButtonClick]);

    return (
        <Card className="bg-charcoal/60 backdrop-blur-xl border-phoenix1/20 glow-card overflow-hidden">
            <CardHeader className="bg-phoenix1/10 pb-8">
                <CardTitle className="text-2xl font-poppins flex items-center gap-2">
                    <Calculator className="text-phoenix1" />
                    Growth ROI Calculator
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    Estimate your brand's potential growth with FutoraLift's strategic campaigns.
                </p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                    {/* Monthly Ad Budget */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Target className="w-4 h-4 text-cyan" />
                                Monthly Ad Budget (₹)
                            </label>
                            <span className="text-phoenix1 font-bold text-lg">
                                ₹{adSpend[0].toLocaleString()}
                            </span>
                        </div>
                        <Slider
                            value={adSpend}
                            onValueChange={setAdSpend}
                            min={500}
                            max={50000}
                            step={500}
                            className="py-4"
                        />
                    </div>

                    {/* CPC */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Coins className="w-4 h-4 text-cyan" />
                                Cost Per Click (CPC) (₹)
                            </label>
                            <span className="text-phoenix1 font-bold text-lg">₹{cpc[0]}</span>
                        </div>
                        <Slider
                            value={cpc}
                            onValueChange={setCpc}
                            min={1}
                            max={500}
                            step={1}
                            className="py-4"
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-midnight/40 p-4 rounded-xl border border-white/5 text-center flex flex-col justify-between"
                        >
                            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} aria-hidden="true" />
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                            <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={handleButtonClick}
                    className="w-full bg-phoenix1 hover:bg-phoenix2 text-white py-6 text-lg mt-4 shadow-lg shadow-phoenix1/20"
                >
                    Get This Strategy Now
                </Button>
            </CardContent>
        </Card>
    );
});

ROICalculator.displayName = "ROICalculator";

export default ROICalculator;
