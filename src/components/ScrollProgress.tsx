import { useEffect, useState, memo } from "react";

const ScrollProgress = memo(() => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateScrollProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollRatio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
            setScrollProgress(scrollRatio);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        updateScrollProgress();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-midnight/50 z-[100] pointer-events-none">
            <div
                className="h-full w-full bg-gradient-to-r from-phoenix1 to-cyan shadow-lg shadow-phoenix1/50 origin-left will-change-transform"
                style={{
                    transform: `scaleX(${scrollProgress})`,
                    transition: "transform 75ms ease-out",
                }}
            />
        </div>
    );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
