"use client"
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent, 
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoginForm } from "./login-form";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild,
}: LoginButtonProps) => {

    const router = useRouter();

   const onClick = () => {
    router.push("/auth/login");
   }

   if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <span className="cursor-pointer">
            {children}
          </span>
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
            <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return(
  <span onClick={onClick} className="cursor-pointer">
    {children}
  </span>
  );
};
