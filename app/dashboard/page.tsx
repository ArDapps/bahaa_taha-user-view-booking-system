'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Calendar as CalendarIcon,
  Clock,
  FileText,
  Settings,
  Users,
} from 'lucide-react';

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingConsultations = [
    {
      id: 1,
      client: 'Tech Solutions Inc.',
      date: '2024-03-25',
      time: '10:00 AM',
      type: 'Smart Contract Review',
    },
    {
      id: 2,
      client: 'DeFi Ventures',
      date: '2024-03-27',
      time: '2:00 PM',
      type: 'Architecture Planning',
    },
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'DeFi Protocol Audit',
      status: 'Completed',
      date: '2024-03-20',
    },
    {
      id: 2,
      name: 'NFT Marketplace',
      status: 'In Progress',
      date: '2024-03-18',
    },
    {
      id: 3,
      name: 'Token Development',
      status: 'In Review',
      date: '2024-03-15',
    },
  ];

  const stats = [
    {
      title: 'Total Consultations',
      value: '48',
      icon: Users,
      description: 'Last 30 days',
    },
    {
      title: 'Active Projects',
      value: '12',
      icon: FileText,
      description: 'Currently in progress',
    },
    {
      title: 'Hours Consulted',
      value: '156',
      icon: Clock,
      description: 'This month',
    },
    {
      title: 'Revenue',
      value: '$24.5k',
      icon: BarChart3,
      description: 'Last 30 days',
    },
  ];

  return (
    <main className="flex-1 bg-muted/50 py-8">
      <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`animate-scale-in animate-delay-${index * 100}`}>
                <CardContent className="flex items-center p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Calendar and Consultations */}
            <Card className="animate-slide-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>Schedule</CardTitle>
                    <CardDescription>
                      Manage your upcoming consultations
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <CalendarIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="calendar">
                  <TabsList className="mb-4">
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  </TabsList>
                  <TabsContent value="calendar">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </TabsContent>
                  <TabsContent value="upcoming">
                    <div className="space-y-4">
                      {upcomingConsultations.map((consultation) => (
                        <div
                          key={consultation.id}
                          className="flex items-center justify-between p-4 rounded-lg border"
                        >
                          <div>
                            <p className="font-medium">{consultation.client}</p>
                            <p className="text-sm text-muted-foreground">
                              {consultation.type}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">
                              {consultation.date}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {consultation.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card className="animate-slide-in animate-delay-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>Recent Projects</CardTitle>
                    <CardDescription>
                      Track your ongoing and completed projects
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {project.date}
                        </p>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            project.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : project.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
}