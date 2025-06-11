import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import newly created pages
import AccountsDashboardPage from "./pages/AccountsDashboardPage";
import FundTransferPage from "./pages/FundTransferPage";
import CardControlsPage from "./pages/CardControlsPage";
import TransactionDetailsModalPage from "./pages/TransactionDetailsModal";

import NotFound from "./pages/NotFound"; // Always Must Include (Assuming we already have NotFound.tsx)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Assuming AccountsDashboardPage is the main page after login */}
          <Route path="/" element={<AccountsDashboardPage />} /> 
          <Route path="/accounts-dashboard" element={<AccountsDashboardPage />} />
          <Route path="/fund-transfer" element={<FundTransferPage />} />
          <Route path="/card-controls" element={<CardControlsPage />} />
          <Route path="/transaction-details" element={<TransactionDetailsModalPage />} /> 
          {/* Example of how transaction details might take an ID, though the page currently uses a static/state-passed ID */}
          {/* <Route path="/transaction-details/:transactionId" element={<TransactionDetailsModalPage />} /> */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
           <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;