import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SpendSaveCardProps {
  currentSpending: number;
  budget: number;
  currencySymbol?: string;
}

const SpendSaveCard: React.FC<SpendSaveCardProps> = ({
  currentSpending,
  budget,
  currencySymbol = '£',
}) => {
  const progressPercentage = budget > 0 ? (currentSpending / budget) * 100 : 0;

  return (
    <Card className="shadow-subtle">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-tsb-dark-text">Spend & Save</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 space-y-3">
        {/* Custom Progress Bar */}
        <div className="w-full h-3 bg-tsb-neutral-grey-medium rounded-pill overflow-hidden">
          <div
            className="h-3 rounded-pill bg-gradient-to-r from-tsb-blue to-tsb-light-blue"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        <div>
          <p className="text-2xl font-bold text-tsb-blue">
            {currencySymbol}{currentSpending.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-tsb-subtext-grey">
            Spent of {currencySymbol}{budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} budget
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendSaveCard;