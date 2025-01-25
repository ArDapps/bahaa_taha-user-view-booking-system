'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'Security Audit Complete',
      message: 'The security audit for Project Alpha has been completed.',
      time: '2 hours ago',
      icon: CheckCircle2,
      color: 'text-green-500',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur in 48 hours.',
      time: '5 hours ago',
      icon: AlertTriangle,
      color: 'text-yellow-500',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out the new analytics dashboard features.',
      time: '1 day ago',
      icon: Info,
      color: 'text-blue-500',
      read: true,
    },
  ];

  return (
    <main className="flex-1 bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with important alerts and messages
            </p>
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-4 p-4 rounded-lg border ${
                    notification.read ? 'bg-background' : 'bg-primary/5'
                  }`}
                >
                  <div className={`${notification.color}`}>
                    <notification.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
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