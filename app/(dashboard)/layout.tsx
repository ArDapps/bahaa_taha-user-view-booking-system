"use client";

import { useLayout } from "@/components/providers/layout-context";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen, toggleSidebar } = useLayout();

  return (
    <div className="relative min-h-screen">
      <DashboardHeader />
      <div className="flex">
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 transition-all duration-300 md:ml-64",
            isSidebarOpen ? "ml-64" : "ml-0"
          )}
        >
          <div className="container mx-auto p-6 pt-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
