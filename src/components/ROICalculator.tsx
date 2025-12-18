import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Users, Target } from "lucide-react";

interface ROICalculatorProps {
    onButtonClick?: () => void;
}

const ROICalculator = ({ onButtonClick }: ROICalculatorProps) => {
    const [adSpend, setAdSpend] = useState([5000]);
    const [currentEngagement, setCurrentEngagement] = useState([1000]);

    // Based on latest data: ~80 reach per ₹1 spent (conservative average from data)
    const projectedReach = adSpend[0] * 80;
    // Lead/Follower conversion around 1.2% of reach + 10% of existing engagement
    const projectedFollowers = Math.round(projectedReach * 0.012 + currentEngagement[0] * 0.1);
    // Value per lead estimated at ₹45
    const projectedROI = Math.round(((projectedFollowers * 45) / adSpend[0]) * 100);

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
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Target className="w-4 h-4 text-cyan" />
                                Monthly Ad Budget (₹)
                            </label>
                            <span className="text-phoenix1 font-bold text-lg">₹{adSpend[0].toLocaleString()}</span>
                        </div>
                        <Slider
                            value={adSpend}
                            onValueChange={setAdSpend}
                            max={100000}
                            step={1000}
                            className="py-4"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Users className="w-4 h-4 text-cyan" />
                                Current Monthly Engagement
                            </label>
                            <span className="text-phoenix1 font-bold text-lg">{currentEngagement[0].toLocaleString()}</span>
                        </div>
                        <Slider
                            value={currentEngagement}
                            onValueChange={setCurrentEngagement}
                            max={50000}
                            step={500}
                            className="py-4"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {[
                        { label: "Est. New Reach", value: projectedReach.toLocaleString() + "+", icon: Target, color: "text-cyan" },
                        { label: "Est. New Leads", value: projectedFollowers.toLocaleString() + "+", icon: Users, color: "text-phoenix1" },
                        { label: "Potential ROI", value: projectedROI + "%", icon: TrendingUp, color: "text-green-400" }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-midnight/40 p-4 rounded-xl border border-white/5 text-center"
                        >
                            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                            <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={onButtonClick}
                    className="w-full bg-phoenix1 hover:bg-phoenix2 text-white py-6 text-lg mt-4 shadow-lg shadow-phoenix1/20"
                >
                    Get This Strategy Now
                </Button>
            </CardContent>
        </Card>
    );
};

export default ROICalculator;
