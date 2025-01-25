'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import { useEffect, useState } from 'react';

export function MainNav() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    // For now, we'll just check if we're on the dashboard page
    setIsLoggedIn(pathname.startsWith('/dashboard'));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">BlockConsult</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link
            href="/"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/services' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            About
          </Link>
          {isLoggedIn && (
            <Link
              href="/dashboard"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/dashboard' ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isLoggedIn ? (
            <Button
              variant="outline"
              onClick={() => {
                // Add logout logic here
                window.location.href = '/';
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}