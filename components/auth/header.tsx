import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
}

export const Header = ({label}: HeaderProps) => {
    return(
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", poppins.className)}>
                Citizen Corrects
            </h1>
            <p className="text-sm text-muted-foreground">
                {label}
            </p>
        </div>
    );
};
