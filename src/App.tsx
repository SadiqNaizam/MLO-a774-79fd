import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import pages
import AccountsDashboardPage from "./pages/AccountsDashboardPage";
import FundTransferPage from "./pages/FundTransferPage";
import CardControlsPage from "./pages/CardControlsPage";
import TransactionDetailsModalPage from "./pages/TransactionDetailsModal";

import NotFound from "./pages/NotFound"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={300}> {/* Adjusted delay duration slightly */}
      <Toaster />
      <Sonner richColors /> {/* Enable rich colors for Sonner */}
      <BrowserRouter>
        <Routes>
          {/* Default route to AccountsDashboardPage */}
          <Route path="/" element={<Navigate to="/accounts-dashboard" replace />} /> 
          
          <Route path="/accounts-dashboard" element={<AccountsDashboardPage />} />
          <Route path="/fund-transfer" element={<FundTransferPage />} />
          <Route path="/card-controls" element={<CardControlsPage />} />
          <Route path="/transaction-details" element={<TransactionDetailsModalPage />} />
          
          {/* Placeholder routes for BottomNavigation example links, point them to relevant pages or NotFound */}
          <Route path="/accounts-overview" element={<AccountsDashboardPage />} /> {/* Example */}
          <Route path="/insights" element={<NotFound />} /> {/* Example */}
          <Route path="/card-services" element={<CardControlsPage />} /> {/* Example */}
          <Route path="/more" element={<NotFound />} /> {/* Example */}


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
           <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;