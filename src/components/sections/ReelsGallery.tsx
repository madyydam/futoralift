import { useState, useRef, memo, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Coffee, Cake, Play, Loader2, LayoutGrid } from "lucide-react";
import { reelsData, Reel } from "../../data/reels";

const categories = [
  { id: "gyms", label: "Gyms", icon: Dumbbell, color: "text-orange-400" },
  { id: "cafes", label: "Cafés", icon: Coffee, color: "text-amber-400" },
  { id: "cake-shops", label: "Cake Shops", icon: Cake, color: "text-pink-400" },
] as const;

// Optimized Reel Card with hover-to-load
const ReelCard = memo(({ reel, index }: { reel: Reel, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="snap-center shrink-0 w-[150px] sm:w-[170px] lg:w-[210px] aspect-[9/16] relative rounded-2xl overflow-hidden bg-charcoal border border-white/10 group shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#1a1a1f] to-midnight z-0" />
      
      {isHovered ? (
        <div className="absolute inset-0 z-10">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
              <Loader2 className="w-8 h-8 text-phoenix1 animate-spin" />
            </div>
          )}
          <iframe
            src={reel.driveLink}
            title={reel.title}
            loading="lazy"
            className={`w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            allow="autoplay; fullscreen; picture-in-picture"
            onLoad={() => setIsLoaded(true)}
            style={{ border: "none" }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gradient-to-b from-transparent via-black/30 to-black/80">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-phoenix1/20 group-hover:border-phoenix1 transition-all duration-300">
             <Play className="w-6 h-6 text-white group-hover:text-phoenix1 fill-white group-hover:fill-phoenix1 transition-colors ml-0.5" />
          </div>
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-3 opacity-60 group-hover:opacity-100 transition-opacity">Hover to Play</span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none">
        <h3 className="text-offwhite font-poppins font-medium text-xs leading-tight group-hover:text-phoenix1 transition-colors">
          {reel.title}
        </h3>
      </div>
    </div>
  );
});

const ReelsGallery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<typeof categories[number]["id"]>("gyms");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredReels = useMemo(() => reelsData.filter(r => r.category === activeTab), [activeTab]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.6;
    let isPaused = false;

    const scroll = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 1) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handlePause = () => { isPaused = true; };
    const handleResume = () => { isPaused = false; };

    scrollContainer.addEventListener("touchstart", handlePause, { passive: true });
    scrollContainer.addEventListener("touchend", handleResume, { passive: true });
    scrollContainer.addEventListener("touchcancel", handleResume, { passive: true });
    scrollContainer.addEventListener("mouseenter", handlePause);
    scrollContainer.addEventListener("mouseleave", handleResume);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("touchstart", handlePause);
        scrollContainer.removeEventListener("touchend", handleResume);
        scrollContainer.removeEventListener("touchcancel", handleResume);
        scrollContainer.removeEventListener("mouseenter", handlePause);
        scrollContainer.removeEventListener("mouseleave", handleResume);
      }
    };
  }, [activeTab]);

  return (
    <section id="reels" className="py-24 relative overflow-hidden bg-midnight border-y border-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-phoenix1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-phoenix1/15 border border-phoenix1/30 text-phoenix1 font-poppins font-semibold text-xs mb-4 shadow-[0_0_15px_rgba(251,146,60,0.1)]">
            <span className="w-2 h-2 rounded-full bg-phoenix1 animate-pulse" />
            100+ Reels Created
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-offwhite mb-6">
            Watch Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-phoenix1 to-phoenix2">Lift Brands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
            Explore our high-impact creative strategies optimized for every device.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-poppins font-medium ${
                  activeTab === cat.id 
                    ? "bg-phoenix1/10 border-phoenix1 text-offwhite shadow-[0_0_20px_rgba(251,146,60,0.15)]" 
                    : "bg-charcoal/50 border-white/5 text-muted-foreground hover:border-white/20"
                }`}
              >
                <cat.icon className={`w-5 h-5 ${activeTab === cat.id ? cat.color : "text-gray-400"}`} />
                {cat.label}
              </button>
            ))}
            
            {/* All Reels Option */}
            <button
              onClick={() => navigate("/all-reels")}
              className="flex items-center gap-3 px-6 py-3 rounded-full border bg-charcoal/50 border-white/5 text-muted-foreground hover:border-phoenix1/50 hover:text-offwhite transition-all duration-300 font-poppins font-medium group"
            >
              <LayoutGrid className="w-5 h-5 text-gray-400 group-hover:text-phoenix1 transition-colors" />
              All Content
            </button>
          </div>
        </div>

        <div 
          key={activeTab}
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar relative scroll-smooth"
        >
          {filteredReels.map((reel, index) => (
            <ReelCard key={`${activeTab}-${reel.id}`} reel={reel} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center md:hidden items-center gap-2 text-muted-foreground mt-4 text-sm animate-pulse">
            <span className="w-12 h-[1px] bg-border block" />
            Swipe to explore
            <span className="w-12 h-[1px] bg-border block" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        #reels { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default memo(ReelsGallery);
