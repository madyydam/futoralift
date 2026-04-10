import { useState, useRef, memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Coffee, Cake, Play, Loader2, LayoutGrid } from "lucide-react";
import { reelsData, Reel } from "../../data/reels";

const categories = [
  { id: "gyms", label: "Gyms", icon: Dumbbell, color: "text-orange-400" },
  { id: "cafes", label: "Cafés", icon: Coffee, color: "text-amber-400" },
  { id: "cake-shops", label: "Cake Shops", icon: Cake, color: "text-pink-400" },
] as const;

// Optimized Reel Card with Intersection Observer
const ReelCard = memo(({ reel, index }: { reel: Reel, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="snap-center shrink-0 w-[200px] sm:w-[220px] lg:w-[260px] aspect-[9/16] relative rounded-2xl overflow-hidden bg-charcoal border border-white/10 group shadow-2xl"
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
      
      {isVisible ? (
        <div className="absolute inset-0 z-0">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
              <Loader2 className="w-8 h-8 text-phoenix1 animate-spin" />
            </div>
          )}
          <iframe
            src={reel.driveLink}
            className={`w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            allow="autoplay; fullscreen; picture-in-picture"
            onLoad={() => setIsLoaded(true)}
            style={{ border: "none" }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
           <Play className="w-8 h-8 text-white/20" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-phoenix1/20 flex items-center justify-center backdrop-blur-sm border border-phoenix1/50">
            <Play className="w-3 h-3 text-phoenix1 fill-phoenix1" />
          </div>
          <h3 className="text-offwhite font-poppins font-medium text-sm">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

const ReelsGallery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<typeof categories[number]["id"]>("gyms");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredReels = reelsData.filter(r => r.category === activeTab);

  return (
    <section id="reels" className="py-24 relative overflow-hidden bg-midnight border-y border-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-phoenix1/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-phoenix1 font-poppins font-semibold tracking-wider uppercase text-sm mb-4 block">
            Creative Reels
          </span>
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
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar relative"
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
