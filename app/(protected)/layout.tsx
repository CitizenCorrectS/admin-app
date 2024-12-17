"use client";
// import { ThemeProvider } from "@/components/theme-provider"
interface ProtectedLayoutProps {
    children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
    return (
        // <ThemeProvider
        //     attribute="class"
        //     defaultTheme="light"
        //     enableSystem
        //     disableTransitionOnChange
        //   >
        // </ThemeProvider>
        <div className="size-full flex flex-col items-center justify-center gap-y-10">
            {children}
        </div>
    );
};


