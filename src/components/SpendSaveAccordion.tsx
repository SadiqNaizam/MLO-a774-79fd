import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { PlusCircle } from 'lucide-react'; // Using lucide-react for consistency

interface SpendSaveAccordionProps {
  title: string;
  children: React.ReactNode; // Content for the accordion
}

const SpendSaveAccordion: React.FC<SpendSaveAccordionProps> = ({ title, children }) => {
  return (
    <Card className="shadow-subtle overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex justify-between items-center w-full">
              <span className="text-md font-semibold text-tsb-dark-text">{title}</span>
              {/* Custom Plus icon, default chevron is hidden by group state in ShadCN */}
              <PlusCircle className="h-6 w-6 text-tsb-light-blue stroke-[1.5px] group-data-[state=open]:rotate-45 transition-transform duration-300" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-0 text-sm text-tsb-subtext-grey">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default SpendSaveAccordion;