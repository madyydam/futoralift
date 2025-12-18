import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-midnight/50 z-[100]">
            <div
                className="h-full bg-gradient-to-r from-phoenix1 to-cyan transition-all duration-150 ease-out shadow-lg shadow-phoenix1/50"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
