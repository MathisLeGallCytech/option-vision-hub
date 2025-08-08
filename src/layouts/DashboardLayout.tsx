import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset>
          <header className="h-14 flex items-center border-b px-4 gap-3">
            <SidebarTrigger />
            <Link to="/" className="story-link text-lg font-semibold">
              Equity Derivatives Dashboard
            </Link>
          </header>
          <div className="flex-1 p-6 container animate-fade-in">
            <Outlet />
          </div>
          <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            © 2025 – Projet Flask Derivatives
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
