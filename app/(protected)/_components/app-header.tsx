"use client";
// import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Separator } from "@/components/ui/separator";
  import {
    SidebarTrigger,
  } from "@/components/ui/sidebar";


  const AppHeader = () => {
    // const user = useCurrentUser();
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    const name = pathSegments[pathSegments.length - 2] || "Settings";
    const page = pathSegments[pathSegments.length - 1] || "General";
    const { setTheme } = useTheme();


    return (
        <>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="mr-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                </div>
          </header>
        </>
    )
  }

  export default AppHeader;