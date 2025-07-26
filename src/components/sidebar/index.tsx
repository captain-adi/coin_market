import {  Home, Inbox, Search, Settings } from "lucide-react"


interface IAppSidebar{
    className?: string;
}

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Cryptocurrencies",
    url: "/",
    icon: Home,
  },
  {
    title: "Trading",
    url: "/coins/trading",
    icon: Inbox,
  },
  
  {
    title: "Top Gainers & Losers",
    url: "/coins/top-gainers-losers",
    icon: Search,
  },
  {
    title: "API",
    url: "/coins/api",
    icon: Settings,
  },
]

export function AppSidebar({ className }: IAppSidebar) {
  return (
    <Sidebar className={className}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}