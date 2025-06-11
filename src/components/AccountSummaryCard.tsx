import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRightCircle, CreditCard, ListChecks } from 'lucide-react'; // Example icons

interface AccountSummaryCardProps {
  accountId: string;
  accountName: string;
  accountType: string; // e.g., "Current Account", "Savings Account"
  accountNumber: string; // Masked or full, depending on context
  sortCode?: string; // Optional
  balance: number;
  currencySymbol?: string;
  onMoveMoneyClick: (accountId: string) => void;
  onCardControlsClick: (accountId: string) => void;
  // Mock recent activity for now
  recentActivity?: { id: string, description: string, amount: string, date: string }[];
}

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = ({
  accountId,
  accountName,
  accountType,
  accountNumber,
  sortCode,
  balance,
  currencySymbol = '£',
  onMoveMoneyClick,
  onCardControlsClick,
  recentActivity = [],
}) => {
  console.log("Rendering AccountSummaryCard for:", accountName, accountId);

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{accountName}</CardTitle>
            <CardDescription>{accountType}</CardDescription>
          </div>
          {/* Potentially an icon for the account type here */}
        </div>
        <div className="text-xs text-muted-foreground pt-1">
          <span>A/N: {accountNumber}</span>
          {sortCode && <span className="ml-2">S/C: {sortCode}</span>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Available Balance</p>
          <p className="text-3xl font-bold text-primary">
            {currencySymbol}{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        {recentActivity && recentActivity.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="recent-activity">
              <AccordionTrigger>
                <div className="flex items-center text-sm">
                  <ListChecks className="h-4 w-4 mr-2" /> Recent Activity
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="text-xs space-y-2 max-h-32 overflow-y-auto pr-2">
                  {recentActivity.map(activity => (
                    <li key={activity.id} className="flex justify-between items-center">
                      <span>{activity.description} <em className="text-muted-foreground">({activity.date})</em></span>
                      <span className="font-medium">{activity.amount}</span>
                    </li>
                  ))}
                   {/* Placeholder if empty for demo */}
                   {recentActivity.length === 0 && <li>No recent transactions.</li>}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 p-4">
        <Button 
          className="w-full sm:w-auto flex-1" 
          onClick={() => onMoveMoneyClick(accountId)}
          aria-label={`Move money from ${accountName}`}
        >
          <ArrowRightCircle className="h-4 w-4 mr-2" /> Move money
        </Button>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto" 
          onClick={() => onCardControlsClick(accountId)}
          aria-label={`Card controls for ${accountName}`}
        >
          <CreditCard className="h-4 w-4 mr-2" /> Card controls
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountSummaryCard;