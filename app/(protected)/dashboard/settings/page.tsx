"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import AppHeader from "../../_components/app-header";
import { SidebarInset } from "@/components/ui/sidebar";

  const SettingsPage = () => {
    const user = useCurrentUser();

    return (
        <>
        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
        </>
    )
  }

  export default SettingsPage;