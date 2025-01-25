'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Download, DollarSign, Calendar } from 'lucide-react';

export default function BillingPage() {
  const invoices = [
    {
      id: 'INV-2024-001',
      date: 'Mar 1, 2024',
      amount: '$1,200.00',
      status: 'Paid',
    },
    {
      id: 'INV-2024-002',
      date: 'Feb 1, 2024',
      amount: '$950.00',
      status: 'Paid',
    },
    {
      id: 'INV-2024-003',
      date: 'Jan 1, 2024',
      amount: '$1,050.00',
      status: 'Paid',
    },
  ];

  return (
    <main className="flex-1 bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Billing</h1>
            <p className="text-muted-foreground">
              Manage your billing information and view payment history
            </p>
          </div>
          <Button>
            <CreditCard className="w-4 h-4 mr-2" />
            Update Payment Method
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Current Balance
                </p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Next Invoice
                </p>
                <p className="text-2xl font-bold">Apr 1, 2024</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Payment Method
                </p>
                <p className="text-lg font-bold">•••• 4242</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {invoice.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-medium">{invoice.amount}</p>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {invoice.status}
                    </span>
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}