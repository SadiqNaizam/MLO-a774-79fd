import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import Footer from '@/components/layout/Footer';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign, Send, Settings, CreditCard } from 'lucide-react';

const AccountsDashboardPage = () => {
  console.log('AccountsDashboardPage loaded');
  const navigate = useNavigate();

  const mockAccounts = [
    {
      accountId: 'ACC123456',
      accountName: 'Current Account',
      accountType: 'Personal Current Account',
      accountNumber: '**** **** **** 6789',
      sortCode: '10-20-30',
      balance: 12540.75,
      currencySymbol: '£',
      recentActivity: [
        { id: 'txn1', description: 'Grocery Store', amount: '-£45.20', date: '2024-07-28' },
        { id: 'txn2', description: 'Salary Deposit', amount: '+£2500.00', date: '2024-07-25' },
        { id: 'txn3', description: 'Online Shopping', amount: '-£120.50', date: '2024-07-22' },
      ],
    },
    {
      accountId: 'ACC789012',
      accountName: 'Savings Account',
      accountType: 'Instant Access Saver',
      accountNumber: '**** **** **** 3456',
      sortCode: '10-20-31',
      balance: 58200.00,
      currencySymbol: '£',
      recentActivity: [
        { id: 'txn4', description: 'Interest Payment', amount: '+£50.15', date: '2024-07-01' },
      ],
    },
     {
      accountId: 'ACC345678',
      accountName: 'Credit Card',
      accountType: 'Platinum Rewards Card',
      accountNumber: '**** **** **** 1234',
      balance: -750.90, // Negative for credit card balance owed
      currencySymbol: '£',
      recentActivity: [
        { id: 'txn5', description: 'Restaurant Bill', amount: '-£85.00', date: '2024-07-29' },
        { id: 'txn6', description: 'Flight Tickets', amount: '-£450.00', date: '2024-07-20' },
      ],
    }
  ];

  const handleMoveMoney = (accountId: string) => {
    console.log(`Move money clicked for account: ${accountId}`);
    navigate('/fund-transfer', { state: { fromAccountId: accountId } });
  };

  const handleCardControls = (accountId: string) => {
    console.log(`Card controls clicked for account: ${accountId}`);
    // Assuming credit card account ID might be specifically checked or passed differently
    navigate('/card-controls', { state: { accountId: accountId } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header siteName="MyBank Dashboard" />
      
      <NavigationMenu className="bg-white border-b shadow-sm sticky top-16 z-40 py-2 justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/accounts-dashboard" className={navigationMenuTriggerStyle()}>
              <DollarSign className="h-4 w-4 mr-2" /> Accounts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/fund-transfer" className={navigationMenuTriggerStyle()}>
              <Send className="h-4 w-4 mr-2" /> Transfers
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/card-controls" className={navigationMenuTriggerStyle()}>
             <CreditCard className="h-4 w-4 mr-2" /> Card Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/settings" className={navigationMenuTriggerStyle()}> {/* Placeholder for settings */}
              <Settings className="h-4 w-4 mr-2" /> Settings
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Accounts</h1>
        <ScrollArea className="h-auto" style={{ maxHeight: 'calc(100vh - 250px)'}}> {/* Adjust height as needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAccounts.map((account) => (
              <AccountSummaryCard
                key={account.accountId}
                accountId={account.accountId}
                accountName={account.accountName}
                accountType={account.accountType}
                accountNumber={account.accountNumber}
                sortCode={account.sortCode}
                balance={account.balance}
                currencySymbol={account.currencySymbol}
                onMoveMoneyClick={handleMoveMoney}
                onCardControlsClick={handleCardControls}
                recentActivity={account.recentActivity}
              />
            ))}
          </div>
        </ScrollArea>
      </main>
      <Footer />
    </div>
  );
};

export default AccountsDashboardPage;