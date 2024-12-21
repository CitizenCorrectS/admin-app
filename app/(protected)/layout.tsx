"use client";
import { ThemeProvider } from "@/components/theme-provider"
interface ProtectedLayoutProps {
    children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
    return (
        <div className="w-screen h-full flex flex-col items-center justify-center gap-y-10">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
            {children}
              </ThemeProvider>
        </div>
    );
};


