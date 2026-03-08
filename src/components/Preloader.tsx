import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";
import blLogo from "@/assets/bl-logo.png";
import { Check } from "lucide-react";

/**
 * Preloader - Performance Optimized Cinematic Splash Screen.
 * Highly optimized for 60fps performance on all devices.
 */
const Preloader = () => {
    const [status, setStatus] = useState<"verifying" | "verified">("verifying");
    const [isVisible, setIsVisible] = useState(true);

    // Memoize animation curve to prevent recalculation
    const zoomCurve = useMemo(() => [0.6, 0.05, 0.01, 0.9], []);

    // Scroll management with error boundary
    const setScroll = useCallback((hidden: boolean) => {
        try {
            document.body.style.overflow = hidden ? "hidden" : "";
        } catch (e) {
            console.error("Scroll management error:", e);
        }
    }, []);

    useEffect(() => {
        setScroll(true);

        const verifiedTimer = setTimeout(() => setStatus("verified"), 2500);
        const closeTimer = setTimeout(() => setIsVisible(false), 5500);

        return () => {
            setScroll(false);
            clearTimeout(verifiedTimer);
            clearTimeout(closeTimer);
        };
    }, [setScroll]);

    // Cleanup scroll specifically when visibility changes
    useEffect(() => {
        if (!isVisible) setScroll(false);
    }, [isVisible, setScroll]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ backgroundColor: "rgba(10, 10, 12, 1)" }}
            animate={{
                backgroundColor: status === "verified" ? "rgba(10, 10, 12, 0)" : "rgba(10, 10, 12, 1)"
            }}
            transition={{
                duration: 1.2,
                delay: status === "verified" ? 0.8 : 0,
                ease: "easeOut"
            }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0C] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
        >
            {/* Grid Background - Uses opacity for performance */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-12 w-full">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                            status === "verified"
                                ? {
                                    scale: [1, 2, 80],
                                    opacity: [1, 0.3, 0],
                                }
                                : {
                                    scale: 1,
                                    opacity: 1,
                                    y: [1, -12, 1],
                                }
                        }
                        transition={
                            status === "verified"
                                ? {
                                    duration: 2.2,
                                    ease: zoomCurve,
                                    times: [0, 0.15, 1],
                                    delay: 0.8
                                }
                                : {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                        }
                        // Hardware acceleration for the heavy scaling
                        style={{ willChange: "transform, opacity" }}
                    >
                        <img
                            src={blLogo}
                            alt="Company Logo"
                            className={`w-48 h-48 md:w-64 md:h-64 object-contain select-none pointer-events-none ${status === "verified"
                                    ? "drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                                    : "drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                                }`}
                        />
                    </motion.div>

                    {/* Laser Scan - Only active during verification */}
                    <AnimatePresence>
                        {status === "verifying" && (
                            <motion.div
                                key="scan-bar"
                                exit={{ opacity: 0 }}
                                className="absolute left-0 w-full h-[2px] z-20 bg-red-500 shadow-[0_0_12px_#ef4444] pointer-events-none"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{
                                    top: { duration: 1.8, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 0.05 }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Green Checkmark Layer */}
                    <AnimatePresence>
                        {status === "verified" && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                                transition={{ duration: 1.2 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="bg-green-500 rounded-full p-6 shadow-[0_0_40px_rgba(34,197,94,0.6)] backdrop-blur-sm">
                                    <Check className="w-16 h-16 text-white stroke-[4px]" aria-hidden="true" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Status HUD Container */}
                <div className="h-14 flex items-center">
                    <AnimatePresence mode="wait">
                        {status === "verifying" ? (
                            <motion.div
                                key="verifying"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-red-500/10 border border-red-500/30 px-8 py-3 rounded-md backdrop-blur-md"
                            >
                                <span className="text-red-500 font-poppins font-semibold tracking-[0.2em] text-sm">
                                    Verifying Identity
                                </span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="verified"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5 }}
                                className="bg-green-500/10 border border-green-500/30 px-8 py-3 rounded-md backdrop-blur-md"
                            >
                                <span className="text-green-500 font-poppins font-semibold tracking-[0.2em] text-sm">
                                    Verified
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
