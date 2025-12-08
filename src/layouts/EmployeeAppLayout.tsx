import { EmployeeAppSidebar } from "@/components/sidebar/EmployeeAppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function EmployeeAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <EmployeeAppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
