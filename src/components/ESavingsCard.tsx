import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, TrendingUp } from 'lucide-react'; // Example icons

interface ESavingsCardProps {
  accountName: string;
  balance: number;
  currencySymbol?: string;
  progress?: number; // Optional progress value (0-100)
  interestRate?: string; // Optional interest rate display
}

const ESavingsCard: React.FC<ESavingsCardProps> = ({
  accountName = "E-Savings Account",
  balance,
  currencySymbol = '£',
  progress,
  interestRate
}) => {
  return (
    <Card className="shadow-subtle overflow-hidden relative pl-1"> {/* Padding for accent line */}
      {/* Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tsb-teal-accent rounded-l-lg" />
      
      <CardContent className="p-4 flex items-center space-x-4 ml-1"> {/* ml-1 to account for border width */}
        <div className="flex-shrink-0 p-2 bg-tsb-light-blue/10 rounded-full">
          <PiggyBank className="h-6 w-6 text-tsb-light-blue" />
        </div>
        <div className="flex-grow">
          <h3 className="text-md font-semibold text-tsb-dark-text">{accountName}</h3>
          <p className="text-xl font-bold text-tsb-dark-text">
            {currencySymbol}{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          {interestRate && <p className="text-xs text-tsb-subtext-grey">Interest Rate: {interestRate}</p>}
        </div>
        {typeof progress !== 'undefined' && (
          <div className="flex-shrink-0 w-16 text-right">
            {/* Small circular or bar progress indicator */}
            <div className="relative h-8 w-8">
              <svg className="transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="16"
                  fill="none"
                  className="stroke-current text-tsb-neutral-grey-medium"
                  strokeWidth="2"
                />
                <circle
                  cx="18" cy="18" r="16"
                  fill="none"
                  className="stroke-current text-tsb-teal-accent"
                  strokeWidth="2"
                  strokeDasharray={`${progress}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-tsb-teal-accent">
                {progress}%
              </div>
            </div>
            <p className="text-xs text-tsb-subtext-grey mt-1">Goal</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ESavingsCard;