import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { gridOutline } from "ionicons/icons";
import { calendarOutline } from "ionicons/icons";

import { logOutOutline } from "ionicons/icons";
import { calendarClearOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const items = [
  {
    title: "Dashboard",
    url: "/employee/dashboard",
    icon: gridOutline,
  },
  {
    title: "Leaves",
    url: "/employee/leave",
    icon: calendarClearOutline,
  },
  {
    title: "Calendar",
    url: "/employee/calendar",
    icon: calendarOutline,
  },
  {
    title: "LogOut",
    url: "/login",
    icon: logOutOutline,
  },
];

export function EmployeeAppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">Employee</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.title === "LogOut" ? (
                      <button
                        onClick={() => {
                          navigate("/login");
                          localStorage.removeItem("token");
                          localStorage.removeItem("role");
                        }}
                      >
                        <IonIcon
                          icon={item.icon}
                          className="text-[25px] font-bold"
                        />
                        <span className="font-bold">{item.title}</span>
                      </button>
                    ) : (
                      <Link to={item.url}>
                        <IonIcon
                          icon={item.icon}
                          className="text-[25px] font-bold"
                        />
                        <span className="font-bold">{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
