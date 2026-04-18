import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy loading for secondary routes to optimize initial bundle size
const CategoryPortfolio = lazy(() => import("./pages/CategoryPortfolio"));
const FullTeam = lazy(() => import("./pages/FullTeam"));
const AllReels = lazy(() => import("./pages/AllReels"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      retry: 1,
    },
  },
});

const LoadingFallback = () => (
  <div className="min-h-screen bg-midnight flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-phoenix1/20 border-t-phoenix1 rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Preloader />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio/:categoryId" element={<CategoryPortfolio />} />
              <Route path="/team" element={<FullTeam />} />
              <Route path="/all-reels" element={<AllReels />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
