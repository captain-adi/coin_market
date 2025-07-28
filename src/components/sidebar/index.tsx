import { Home, Inbox, Search, Settings, Twitter, Linkedin, Github } from "lucide-react"

interface IAppSidebar {
  className?: string
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
import { Link } from "react-router-dom"

const items = [
  {
    title: "Cryptocurrencies",
    url: "/",
    icon: Home,
    color: "text-blue-400",
  },
  {
    title: "Trending",
    url: "/coins/trending",
    icon: Inbox,
    color: "text-green-400",
  },
  {
    title: "Top Gainers & Losers",
    url: "/coins/topgainers-and-loosers",
    icon: Search,
    color: "text-yellow-400",
  },
  {
    title: "API",
    url: "#",
    icon: Settings,
    color: "text-purple-400",
  },
]

const socialLinks = [
  {
    title: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: Twitter,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourhandle",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/yourhandle",
    icon: Github,
  },
]

export function AppSidebar({ className }: IAppSidebar) {
  return (
    <Sidebar className={`h-screen w-64  ${className}`}>
      <SidebarContent className="p-4 flex flex-col justify-between h-full">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-semibold mb-3 ">
              Application
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="hover:bg-gray-600"
                      >
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <span className="text-sm font-medium  hover:text-muted-foreground">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex gap-4 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label={link.title}
              >
                <link.icon className="h-5 w-5 hover:text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
