import { memo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowLeft, Loader2, LayoutGrid } from "lucide-react";
import { reelsData, Reel } from "../data/reels";

const ReelCard = memo(({ reel }: { reel: Reel }) => {
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
      className="relative rounded-2xl overflow-hidden bg-charcoal border border-white/10 group shadow-2xl aspect-[9/16]"
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

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-phoenix1/20 flex items-center justify-center backdrop-blur-sm border border-phoenix1/50">
            <Play className="w-2.5 h-2.5 text-phoenix1 fill-phoenix1" />
          </div>
          <h3 className="text-offwhite font-poppins font-medium text-xs truncate">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

const AllReels = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight text-offwhite pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-offwhite transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-poppins font-medium">Back to Home</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-phoenix1/10 flex items-center justify-center border border-phoenix1/20">
              <LayoutGrid className="w-5 h-5 text-phoenix1" />
            </div>
            <h1 className="font-poppins font-bold text-xl md:text-2xl">All Creative Reels</h1>
          </div>

          <div className="hidden md:block w-32" /> {/* Spacer for balance */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </motion.div>
      </main>

      {/* Footer Info */}
      <footer className="mt-20 text-center text-muted-foreground text-sm font-poppins">
         <p>© 2024 FutoraLift • Quality Content Marketing</p>
      </footer>
    </div>
  );
};

export default AllReels;
