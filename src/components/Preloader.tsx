import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";
import blLogo from "@/assets/bl-logo.png";


/**
 * Preloader - Performance Optimized Cinematic Splash Screen.
 * Highly optimized for 60fps performance on all devices.
 */
const Preloader = () => {
    const [status, setStatus] = useState<"verifying" | "verified">("verifying");
    const [isVisible, setIsVisible] = useState(true);

    // Memoize animation curve to prevent recalculation
    const zoomCurve = useMemo(() => [0.6, 0.05, 0.01, 0.9] as const, []);

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

        const verifiedTimer = setTimeout(() => setStatus("verified"), 1200);
        const closeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2800);

        return () => {
            setScroll(false);
            clearTimeout(verifiedTimer);
            clearTimeout(closeTimer);
        };
    }, [setScroll]);

    // Cleanup scroll specifically when visibility changes
    useEffect(() => {
        if (!isVisible) {
            setScroll(false);
        }
    }, [isVisible, setScroll]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ backgroundColor: "rgba(10, 10, 12, 1)" }}
            animate={{
                backgroundColor: status === "verified" ? "rgba(10, 10, 12, 0)" : "rgba(10, 10, 12, 1)"
            }}
            transition={{
                duration: 0.8,
                delay: status === "verified" ? 0.2 : 0,
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
                                    duration: 1.2,
                                    ease: zoomCurve,
                                    times: [0, 0.15, 1],
                                    delay: 0.2
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
                            className="w-48 h-48 md:w-64 md:h-64 object-contain select-none pointer-events-none drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                        />
                    </motion.div>



                </div>


            </div>
        </motion.div>
    );
};

export default Preloader;
