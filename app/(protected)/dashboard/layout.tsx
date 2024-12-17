"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/app-sidebar";
import { SliderProvider } from '../_components/ui/SliderContext'


const DashboardLayout = ({children}:{children: React.ReactNode}) => {
    return(
            <SidebarProvider>
            <AppSidebar />
            <SliderProvider>
            <main className="flex w-full">
                {children}
            </main>
            </SliderProvider>
            </SidebarProvider>
    )
}

export default DashboardLayout;
