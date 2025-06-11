import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, AlertTriangle } from 'lucide-react';

const FundTransferPage = () => {
  console.log('FundTransferPage loaded');
  const location = useLocation();
  const navigate = useNavigate();
  const { fromAccountId } = location.state || { fromAccountId: '' };

  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [selectedFromAccount, setSelectedFromAccount] = useState(fromAccountId || 'ACC123456'); // Default or passed
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formError, setFormError] = useState('');

  // Mock accounts for "From Account" dropdown
  const userAccounts = [
    { id: 'ACC123456', name: 'Current Account (**** 6789)', balance: 12540.75 },
    { id: 'ACC789012', name: 'Savings Account (**** 3456)', balance: 58200.00 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!selectedFromAccount || !toAccount || !amount || parseFloat(amount) <= 0) {
      setFormError('Please fill in all fields correctly. Amount must be positive.');
      return;
    }
    const fromAcc = userAccounts.find(acc => acc.id === selectedFromAccount);
    if (fromAcc && parseFloat(amount) > fromAcc.balance) {
        setFormError('Insufficient funds in the selected account.');
        return;
    }
    console.log('Transfer details:', { from: selectedFromAccount, to: toAccount, amount, reference });
    setShowConfirmation(true);
  };

  const handleConfirmTransfer = () => {
    console.log('Transfer confirmed');
    // Actual API call would go here
    setShowConfirmation(false);
    alert('Transfer successful!'); // Placeholder success message
    navigate('/accounts-dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header siteName="MyBank Transfers" />
      <main className="flex-grow container mx-auto px-4 py-12 flex justify-center items-center">
        <Card className="w-full max-w-lg shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><Send className="mr-2 h-6 w-6 text-primary" /> Fund Transfer</CardTitle>
            <CardDescription>Securely transfer funds between accounts or to external payees.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fromAccount">From Account</Label>
                <Select value={selectedFromAccount} onValueChange={setSelectedFromAccount}>
                  <SelectTrigger id="fromAccount">
                    <SelectValue placeholder="Select account to transfer from" />
                  </SelectTrigger>
                  <SelectContent>
                    {userAccounts.map(acc => (
                      <SelectItem key={acc.id} value={acc.id}>
                        {acc.name} - Balance: £{acc.balance.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="toAccount">Recipient Account Number</Label>
                <Input
                  id="toAccount"
                  type="text"
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  placeholder="e.g., 00112233445566"
                  required
                />
              </div>

              <div>
                <Label htmlFor="amount">Amount (£)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g., 50.00"
                  min="0.01"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <Label htmlFor="reference">Reference (Optional)</Label>
                <Input
                  id="reference"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g., Invoice payment"
                />
              </div>
              
              {formError && (
                <div className="text-sm text-red-600 bg-red-100 p-3 rounded-md flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" /> {formError}
                </div>
              )}

              <Button type="submit" className="w-full">
                Review Transfer
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Transfer</AlertDialogTitle>
            <AlertDialogDescription>
              Please review the details before confirming: <br />
              From: {userAccounts.find(acc => acc.id === selectedFromAccount)?.name} <br />
              To Account: {toAccount} <br />
              Amount: £{parseFloat(amount || '0').toFixed(2)} <br />
              Reference: {reference || 'N/A'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmTransfer}>Confirm & Send</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default FundTransferPage;