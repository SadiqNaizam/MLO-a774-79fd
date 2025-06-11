import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ReceiptText } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  type: 'Credit' | 'Debit';
  category: string;
  status: string;
  merchantName?: string;
  merchantLogo?: string; // URL to merchant logo
  referenceNumber?: string;
}

// Mock function to fetch transaction details
const fetchTransactionDetails = async (transactionId: string): Promise<Transaction | null> => {
  console.log(`Fetching details for transaction: ${transactionId}`);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  if (transactionId === 'txn1') {
    return {
      id: 'txn1',
      date: '2024-07-28 14:35:12',
      description: 'Grocery Store Purchase',
      amount: '£45.20',
      type: 'Debit',
      category: 'Groceries',
      status: 'Completed',
      merchantName: 'SuperMart',
      merchantLogo: 'https://via.placeholder.com/40?text=SM',
      referenceNumber: 'TXNREF12345ABC',
    };
  }
  return null; // Or a default transaction object
};


const TransactionDetailsModalPage = () => {
  console.log('TransactionDetailsModalPage loaded');
  const navigate = useNavigate();
  const location = useLocation();
  // Example: expecting transactionId from query params or state
  // For this example, we'll use a static ID or one passed via state
  const transactionId = location.state?.transactionId || 'txn1'; 

  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (transactionId) {
      fetchTransactionDetails(transactionId).then(data => {
        setTransaction(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
      // Potentially set a default or error state if no ID
      console.warn("No transaction ID provided for details page.");
    }
  }, [transactionId]);

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl">Loading transaction details...</div>
      </div>
    );
  }

  if (!transaction) {
     return (
      <Dialog open={true} onOpenChange={(isOpen) => !isOpen && handleClose()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Transaction Not Found</DialogTitle>
            <DialogDescription>
              The details for the selected transaction could not be found.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleClose}><ArrowLeft className="mr-2 h-4 w-4" /> Go Back</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    // This page renders a Dialog by default.
    // The `open` prop controls visibility, and `onOpenChange` handles closing (e.g., by Escape key or overlay click).
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <ReceiptText className="h-6 w-6 mr-2 text-primary" />
            Transaction Details
          </DialogTitle>
          <DialogDescription>
            Detailed view of transaction ID: {transaction.id}
          </DialogDescription>
        </DialogHeader>
        
        <Card className="border-none shadow-none mt-4">
          <CardContent className="space-y-3 text-sm">
            {transaction.merchantLogo && transaction.merchantName && (
                <div className="flex items-center space-x-3 mb-4">
                    <img src={transaction.merchantLogo} alt={transaction.merchantName} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                        <p className="font-semibold">{transaction.merchantName}</p>
                        <p className="text-xs text-muted-foreground">{transaction.category}</p>
                    </div>
                </div>
            )}
            <div className="flex justify-between">
              <Label>Description:</Label>
              <span>{transaction.description}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <Label>Date & Time:</Label>
              <span>{transaction.date}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <Label>Amount:</Label>
              <span className={`font-semibold ${transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'Credit' ? '+' : '-'}{transaction.amount}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <Label>Type:</Label>
              <span>{transaction.type}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <Label>Status:</Label>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">{transaction.status}</span>
            </div>
            {transaction.referenceNumber && (
              <>
                <Separator />
                <div className="flex justify-between">
                  <Label>Reference:</Label>
                  <span>{transaction.referenceNumber}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <DialogFooter className="sm:justify-start mt-6">
          <DialogClose asChild>
            <Button type="button" variant="outline" onClick={handleClose}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetailsModalPage;