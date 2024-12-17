"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}

export const BackButton = ({label, href}: BackButtonProps) => {
    return(
        <Button
        variant="link"
        effect="hoverUnderline"
        className="w-full font-normal text-blue-600"
        size="sm"
        asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};
