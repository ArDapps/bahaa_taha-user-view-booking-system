"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";
import { Menu, PanelLeftOpen } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLayout } from "./providers/layout-context";

export function MainNav() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toggleSidebar } = useLayout();

  useEffect(() => {
    // Check if user is logged in
    // For now, we'll just check if we're on the dashboard page
    setIsLoggedIn(pathname.startsWith("/dashboard"));
  }, [pathname]);

  const NavItems = () => (
    <>
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href="/services"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/services" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Services
      </Link>
      <Link
        href="/about"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
      {isLoggedIn && (
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
      )}
    </>
  );

  const AuthButtons = () => (
    <>
      {isLoggedIn ? (
        <Button
          variant="outline"
          onClick={() => {
            // Add logout logic here
            window.location.href = "/";
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
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            {isLoggedIn && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleSidebar}
              >
                <PanelLeftOpen className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            )}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Bahaa Taha</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium flex-1">
            <NavItems />
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <AuthButtons />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-6">
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                  </nav>
                  <div className="flex flex-col gap-3">
                    <AuthButtons />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
