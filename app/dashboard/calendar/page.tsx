'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Clock, Plus } from 'lucide-react';
import { DashboardHeader } from '@/components/dashboard/header';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: 'Smart Contract Review',
      client: 'Tech Solutions Inc.',
      time: '10:00 AM - 11:00 AM',
      type: 'Consultation',
    },
    {
      id: 2,
      title: 'DeFi Protocol Planning',
      client: 'DeFi Ventures',
      time: '2:00 PM - 3:30 PM',
      type: 'Project Meeting',
    },
    {
      id: 3,
      title: 'Security Audit Review',
      client: 'Crypto Secure Ltd',
      time: '4:00 PM - 5:00 PM',
      type: 'Technical Review',
    },
  ];

  return (
    <div className="flex-1 bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Calendar</h1>
            <p className="text-muted-foreground">
              Manage your schedule and appointments
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,380px]">
          {/* Calendar Card */}
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0
                }
                initialFocus
              />
            </CardContent>
          </Card>

          {/* Events Card */}
          <Card className="animate-slide-in">
            <CardHeader>
              <CardTitle>
                {date?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start space-x-4 p-4 rounded-lg border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.client}
                      </p>
                      <div className="flex items-center mt-2 text-sm">
                        <span className="text-muted-foreground">
                          {event.time}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-primary">{event.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}