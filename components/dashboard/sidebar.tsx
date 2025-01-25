"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Settings,
  Bell,
  Wallet,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLayout } from "@/components/providers/layout-context";

const sidebarLinks = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: Wallet,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useLayout();

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-300 md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="ml-auto"
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeft className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start space-x-3",
                  isActive && "bg-primary/10 hover:bg-primary/20"
                )}
                asChild
              >
                <Link href={link.href}>
                  <link.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
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
              <span className="text-sm font-medium text-primary">BT</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Bahaa Taha</p>
              <p className="text-xs text-muted-foreground truncate">
                bahaa@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
