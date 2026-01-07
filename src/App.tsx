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
import CeModificariPotFace from "./pages/Blog/CeModificariPotFace";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Analytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/piese" element={<Kits />} />
            <Route path="/piese/kit-admisie" element={<KitDetails />} />
            <Route path="/servicii/modificari-hardware" element={<ModificariHardware />} />
            <Route path="/blog/ce-modificari-pot-face" element={<CeModificariPotFace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
