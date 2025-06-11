import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, Eye, AlertOctagon, Info } from 'lucide-react';

const CardControlsPage = () => {
  console.log('CardControlsPage loaded');
  const location = useLocation();
  const { accountId } = location.state || { accountId: 'defaultCardAccount' }; // Example accountId if not passed

  // Mock state for card controls, ideally fetched based on accountId
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [allowOnlinePayments, setAllowOnlinePayments] = useState(true);
  const [allowContactless, setAllowContactless] = useState(true);

  const cardDetails = { // Mock details for the card linked to accountId
    cardNumber: '**** **** **** 1234',
    cardType: 'Visa Debit',
    linkedAccount: accountId,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header siteName="MyBank Card Controls" />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <CreditCard className="mr-3 h-7 w-7 text-primary" /> Card Controls
            </CardTitle>
            <CardDescription>
              Manage your {cardDetails.cardType} ({cardDetails.cardNumber}) linked to account {cardDetails.linkedAccount}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Freeze Card Section */}
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <Label htmlFor="freeze-card" className="flex items-center text-lg font-medium">
                  <Lock className={`mr-2 h-5 w-5 ${isCardFrozen ? 'text-red-500' : 'text-green-500'}`} />
                  {isCardFrozen ? 'Card Frozen' : 'Freeze Card'}
                </Label>
                <Switch
                  id="freeze-card"
                  checked={isCardFrozen}
                  onCheckedChange={setIsCardFrozen}
                  aria-label={isCardFrozen ? 'Unfreeze card' : 'Freeze card'}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Temporarily block all transactions on your card if you've misplaced it.
              </p>
            </div>

            {/* Payment Type Controls */}
            <div className="p-4 border rounded-lg bg-white space-y-4">
              <h3 className="text-lg font-medium mb-3">Payment Settings</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="online-payments" className="flex-1">Allow Online Payments</Label>
                <Switch
                  id="online-payments"
                  checked={allowOnlinePayments}
                  onCheckedChange={setAllowOnlinePayments}
                  disabled={isCardFrozen}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="contactless-payments" className="flex-1">Allow Contactless Payments</Label>
                <Switch
                  id="contactless-payments"
                  checked={allowContactless}
                  onCheckedChange={setAllowContactless}
                  disabled={isCardFrozen}
                />
              </div>
            </div>

            {/* Other Actions Section */}
            <div className="p-4 border rounded-lg bg-white">
               <h3 className="text-lg font-medium mb-4">Card Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full justify-start" disabled={isCardFrozen}>
                  <Eye className="mr-2 h-4 w-4" /> View PIN
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  <AlertOctagon className="mr-2 h-4 w-4" /> Report Lost or Stolen
                </Button>
              </div>
            </div>
            
            {/* FAQ / Information Section */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">
                  <Info className="mr-2 h-5 w-5 text-blue-500" /> Important Information
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Freezing your card is a temporary measure. If your card is lost or stolen, please report it immediately.</p>
                  <p>Changes to payment settings may take a few minutes to apply.</p>
                  <p>For security reasons, PIN viewing may require additional authentication.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CardControlsPage;