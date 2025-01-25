'use client';

import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CalendarDays, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function BookPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1 bg-muted/50">
        {/* Hero Section */}
        <section className="bg-background border-b">
          <div className="container mx-auto py-12 px-4">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
              <p className="text-lg text-muted-foreground">
                Schedule a one-on-one session with our blockchain experts. Choose a
                date and time that works best for you.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calendar Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors animate-slide-in">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <CardTitle>Select Date</CardTitle>
                  </div>
                  <CardDescription>
                    Choose your preferred consultation date
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mx-auto"
                    disabled={(date) => 
                      date < new Date() || 
                      date.getDay() === 0 || 
                      date.getDay() === 6
                    }
                    initialFocus
                  />
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary/20" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-muted" />
                      <span>Unavailable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Time Slots Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors animate-slide-in animate-delay-100">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <CardTitle>Select Time</CardTitle>
                  </div>
                  <CardDescription>
                    {date 
                      ? `Available time slots for ${date.toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}`
                      : 'Please select a date first'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? 'default' : 'outline'}
                        className={`w-full relative ${
                          !slot.available && 'opacity-50 cursor-not-allowed'
                        }`}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!date || !slot.available}
                      >
                        {slot.time}
                        {selectedTime === slot.time && (
                          <CheckCircle2 className="w-4 h-4 absolute right-2" />
                        )}
                      </Button>
                    ))}
                  </div>

                  {/* Summary and Confirmation */}
                  {date && selectedTime && (
                    <div className="mt-8 space-y-6">
                      <Card className="bg-muted">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">Booking Summary</h4>
                          <div className="space-y-1 text-sm">
                            <p className="flex justify-between">
                              <span className="text-muted-foreground">Date:</span>
                              <span>{date.toLocaleDateString()}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span>{selectedTime}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="text-muted-foreground">Duration:</span>
                              <span>1 hour</span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Button className="w-full" size="lg">
                        Confirm Booking
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}