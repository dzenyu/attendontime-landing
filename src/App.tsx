import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PajamaSoiree from "./pages/PajamaSoiree";
import Redirect from "./pages/Redirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pajama-soiree" element={<PajamaSoiree />} />
          {/* Redirect routes to app subdomain */}
          <Route path="/login" element={<Redirect to="/login" />} />
          <Route path="/register" element={<Redirect to="/register" />} />
          <Route path="/privacy" element={<Redirect to="/privacy" />} />
          <Route path="/terms" element={<Redirect to="/terms" />} />
          <Route path="/support" element={<Redirect to="/support" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
