import { AdminAppSidebar } from "@/components/sidebar/AdminAppSiderbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminAppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
