import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Index from "./pages/Index";
import CallPut from "./pages/CallPut";
import Greeks from "./pages/Greeks";
import VolatilitySurface from "./pages/VolatilitySurface";
import RiskVarSvar from "./pages/RiskVarSvar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Index />} />
            <Route path="call-put" element={<CallPut />} />
            <Route path="greeks" element={<Greeks />} />
            <Route path="volatility-surface" element={<VolatilitySurface />} />
            <Route path="risk-var-svar" element={<RiskVarSvar />} />
          </Route>
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
