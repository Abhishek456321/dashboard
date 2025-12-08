import { gridOutline } from "ionicons/icons";
import { calendarOutline } from "ionicons/icons";
import { peopleOutline } from "ionicons/icons";
import { logOutOutline } from "ionicons/icons";
import { calendarClearOutline } from "ionicons/icons";

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
import { IonIcon } from "@ionic/react";

const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: gridOutline,
  },
  {
    title: "Employees",
    url: "/admin/employees",
    icon: peopleOutline,
  },
  {
    title: "Leaves",
    url: "/admin/leave",
    icon: calendarClearOutline,
  },
  {
    title: "Calendar",
    url: "/admin/calendar",
    icon: calendarOutline,
  },
  {
    title: "Logout",
    url: "/login",
    icon: logOutOutline,
  },
];

export function AdminAppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[20px] my-3">
            Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.title === "LogOut" ? (
                      <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("role");
                          navigate("/login");
                        }}
                      >
                        <IonIcon
                          icon={item.icon}
                          className="text-[25px] font-bold"
                        />
                        <span>{item.title}</span>
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
