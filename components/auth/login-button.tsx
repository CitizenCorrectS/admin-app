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
        <DialogContent className="sm:max-w-[420px] flex flex-col justify-center items-center">
          {/* <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Sign in to your account to continue
            </DialogDescription>
          </DialogHeader> */}
         {/* <div className="grid gap-4 py-4">
             <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form> 
          </div>*/}
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
