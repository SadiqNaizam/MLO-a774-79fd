import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Keep if needed for other actions
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import SpendSaveCard from '@/components/SpendSaveCard';
import SpendSaveAccordion from '@/components/SpendSaveAccordion';
import ESavingsCard from '@/components/ESavingsCard';
import OverwriteRemainingSection from '@/components/OverwriteRemainingSection';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button'; // For custom styled TSB Button

const AccountsDashboardPage = () => {
  // const navigate = useNavigate(); // Keep if navigation from this page is needed
  const [isOverwriteOn, setIsOverwriteOn] = useState(false);

  // Mock data for new components
  const spendSaveData = { currentSpending: 750.50, budget: 1200 };
  const eSavingsData = { accountName: "My E-Savings", balance: 10250.75, progress: 65, interestRate: "1.25% AER" };

  // Example content for accordion
  const goalsContent = (
    <ul className="space-y-2">
      <li className="flex justify-between"><span>Holiday Fund</span> <span className="font-semibold text-tsb-dark-text">£500 / £2000</span></li>
      <li className="flex justify-between"><span>New Laptop</span> <span className="font-semibold text-tsb-dark-text">£800 / £1000</span></li>
      <li><Button variant="link" className="p-0 h-auto text-tsb-blue text-xs">View all goals</Button></li>
    </ul>
  );


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header pageTitle="Overview" />
      
      {/* Main content area with padding for fixed navs and screen edges */}
      <ScrollArea className="flex-grow" style={{ height: 'calc(100vh - 56px - 64px)' }}> {/* 56px Header, 64px BottomNav */}
        <main className="container mx-auto py-4 px-4 space-y-4"> {/* Screen padding already by container, py-4 for vertical */}
          
          <SpendSaveCard 
            currentSpending={spendSaveData.currentSpending} 
            budget={spendSaveData.budget} 
          />

          <SpendSaveAccordion title="Your Goals">
            {goalsContent}
          </SpendSaveAccordion>

          <ESavingsCard 
            accountName={eSavingsData.accountName}
            balance={eSavingsData.balance}
            progress={eSavingsData.progress}
            interestRate={eSavingsData.interestRate}
          />
          
          {/* Example of another E-Savings type card or other account summary */}
          <ESavingsCard 
            accountName="Emergency Fund"
            balance={5300.00}
            interestRate="0.50% AER"
          />

          <OverwriteRemainingSection 
            isToggleOn={isOverwriteOn}
            onToggleChange={setIsOverwriteOn}
          />

          {/* Placeholder for other content or if original AccountSummaryCards are to be listed */}
          {/* <div className="mt-6">
             <h2 className="text-xl font-semibold text-tsb-dark-text mb-3">Other Accounts</h2>
             Original AccountSummaryCard instances could go here if needed, 
             styled by the global theme changes and new radius.
          </div> */}

          {/* TSB Styled Button Example */}
           <div className="pt-4">
             <h3 className="text-md font-semibold mb-2 text-tsb-dark-text">Button Examples:</h3>
             <div className="flex space-x-2">
                <Button className="bg-tsb-blue text-tsb-white rounded-button hover:bg-tsb-blue/90">Primary Action</Button>
                <Button variant="outline" className="bg-tsb-white border-tsb-blue text-tsb-blue rounded-button hover:bg-tsb-blue/10 hover:text-tsb-blue">
                    TSB Outlined
                </Button>
                <Button variant="ghost" className="text-tsb-blue rounded-button hover:bg-tsb-blue/10">Ghost</Button>
             </div>
           </div>

        </main>
      </ScrollArea>
      
      <BottomNavigation />
    </div>
  );
};

export default AccountsDashboardPage;