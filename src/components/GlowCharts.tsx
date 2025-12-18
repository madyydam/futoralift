import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const performanceData = [
    { name: "Day 1", reach: 12400, impressions: 18500 },
    { name: "Day 5", reach: 45000, impressions: 72000 },
    { name: "Day 10", reach: 89000, impressions: 145000 },
    { name: "Day 15", reach: 132000, impressions: 210000 },
    { name: "Day 20", reach: 177038, impressions: 241995 },
    { name: "Today", reach: 206135, impressions: 338187 },
];

const GlowCharts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-8 pb-12 px-2 md:px-4">
            {/* Reach Growth Chart */}
            <div className="bg-charcoal/40 p-4 md:p-6 rounded-2xl border border-phoenix1/20 glow-card backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-poppins font-semibold mb-6 text-phoenix1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-phoenix1 animate-pulse" />
                    Meta Ads Reach (Real)
                </h3>
                <div className="h-[250px] md:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData}>
                            <defs>
                                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#EB5E28" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#EB5E28" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
                            <XAxis
                                dataKey="name"
                                stroke="#718096"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#718096"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                                width={35}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1A202C", border: "1px solid #EB5E28", borderRadius: "8px" }}
                                itemStyle={{ color: "#EB5E28" }}
                                formatter={(value: number) => [value.toLocaleString(), "Reach"]}
                            />
                            <Area
                                type="monotone"
                                dataKey="reach"
                                stroke="#EB5E28"
                                fillOpacity={1}
                                fill="url(#colorReach)"
                                strokeWidth={3}
                                className="glow-area"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Impressions Chart */}
            <div className="bg-charcoal/40 p-4 md:p-6 rounded-2xl border border-cyan/20 glow-card backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-poppins font-semibold mb-6 text-cyan flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    Brand Impressions (Real)
                </h3>
                <div className="h-[250px] md:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
                            <XAxis
                                dataKey="name"
                                stroke="#718096"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#718096"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                                width={35}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1A202C", border: "1px solid #00BFFF", borderRadius: "8px" }}
                                itemStyle={{ color: "#00BFFF" }}
                                formatter={(value: number) => [value.toLocaleString(), "Impressions"]}
                            />
                            <Line
                                type="monotone"
                                dataKey="impressions"
                                stroke="#00BFFF"
                                strokeWidth={3}
                                dot={{ fill: "#00BFFF", strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                className="glow-line"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default GlowCharts;
