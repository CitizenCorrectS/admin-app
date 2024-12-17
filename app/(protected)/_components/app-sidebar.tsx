"use client"
import * as React from "react"
import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import { Leaf, SunIcon, Sunset } from "lucide-react";


import {
  Bot,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
} from "lucide-react"

import { NavMain } from "./navbar/nav-main"
import { NavProjects } from "./navbar/nav-projects"
import { NavSecondary } from "./navbar/nav-secondary"
import { NavUser } from "./navbar/nav-user"
import { TeamSwitcher } from "./navbar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { logout } from "@/actions/logout";
import { usePathname } from "next/navigation";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/logo-png.png",
  },
  teams: [
    {
      name: "Marketing",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Sales",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Operations",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Solar",
          url: "#",
        },
        {
          title: "Biomass Briquetting",
          url: "/dashboard/biomass-briquetting",
        },
      ],
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Bot,
      items: [
        {
          title: "Solar",
          url: "/dashboard/projects/solar",
        },
        {
          title: "Biomass Briquetting",
          url: "/dashboard/projects/biomass-briquetting",
        },
        {
          title: "Carbon Market",
          url: "/dashboard/projects/carbon-market",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "List",
          url: "/dashboard/settings/list",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
  ],
  projects: [
    {
      name: "Solar Residential",
      url: "/dashboard/solar-residential",
      icon: SunIcon,
    },
    {
      name: "Solar Commercial",
      url: "/dashboard/solar-commercial",
      icon: Sunset,
    },
    {
      name: "Biomass Briquetting",
      url: "/dashboard/biomass-briquetting",
      icon: Leaf,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = useCurrentUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
