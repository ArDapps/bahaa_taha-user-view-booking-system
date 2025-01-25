'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Calendar,
  Settings,
  Bell,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarLinks = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    title: 'Billing',
    href: '/dashboard/billing',
    icon: Wallet,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-background z-30">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">BlockConsult</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Button
              key={link.href}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start space-x-3',
                isActive && 'bg-primary/10 hover:bg-primary/20'
              )}
              asChild
            >
              <Link href={link.href}>
                <link.icon className={cn(
                  'w-5 h-5',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )} />
                <span className={cn(
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {link.title}
                </span>
              </Link>
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">
              john@example.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}