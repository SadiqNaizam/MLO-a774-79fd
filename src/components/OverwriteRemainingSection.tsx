import React from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

interface OverwriteRemainingSectionProps {
  isToggleOn: boolean;
  onToggleChange: (isOn: boolean) => void;
}

const OverwriteRemainingSection: React.FC<OverwriteRemainingSectionProps> = ({
  isToggleOn,
  onToggleChange,
}) => {
  return (
    <Card className="shadow-subtle">
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <Label htmlFor="overwrite-toggle" className="text-md font-semibold text-tsb-dark-text">
            Overwrite Remaining
          </Label>
          <p className="text-xs text-tsb-subtext-grey mt-1">
            Automatically move leftover funds to your savings.
          </p>
        </div>
        <Switch
          id="overwrite-toggle"
          checked={isToggleOn}
          onCheckedChange={onToggleChange}
          className="data-[state=checked]:bg-tsb-light-blue data-[state=unchecked]:bg-tsb-neutral-grey-medium"
          aria-label="Toggle overwrite remaining funds"
        />
      </CardContent>
    </Card>
  );
};

export default OverwriteRemainingSection;