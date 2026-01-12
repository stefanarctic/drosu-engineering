import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Kits from "./pages/Kits";
import KitDetails from "./pages/KitDetails";
import ModificariHardware from "./pages/Services/ModificariHardware";
import SuspensieSport from "./pages/Services/SuspensieSport";
import OptimizareAerodinamica from "./pages/Services/OptimizareAerodinamica";
import MentenantaSpecializata from "./pages/Services/MentenantaSpecializata";
import CeModificariPotFace from "./pages/Blog/CeModificariPotFace";
import Top5ModificariPerformanta from "./pages/Blog/Top5ModificariPerformanta";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Analytics />
          <VercelAnalytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/piese" element={<Kits />} />
            <Route path="/piese/kit-admisie" element={<KitDetails />} />
            <Route path="/servicii/modificari-hardware" element={<ModificariHardware />} />
            <Route path="/servicii/suspensie-sport" element={<SuspensieSport />} />
            <Route path="/servicii/optimizare-aerodinamica" element={<OptimizareAerodinamica />} />
            <Route path="/servicii/mentenanta-specializata" element={<MentenantaSpecializata />} />
            <Route path="/blog/ce-modificari-pot-face" element={<CeModificariPotFace />} />
            <Route path="/blog/top-5-modificari-performanta" element={<Top5ModificariPerformanta />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
