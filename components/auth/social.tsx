"use client"
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Social = () => {

    const onClick = async (provider: "google" | "facebook") => {
        await signIn(provider, {
            callbackUrl: "/auth/callback"
        });
    }
    return(
        <div className="flex flex-col items-center w-full gap-2 text-neutral-500">
            <Button
            size="lg"
            className="w-full bg-neutral-50 text-neutral-800"
            variant="outline"
            onClick={() => onClick("google")}
            >
            <FcGoogle className="w-5 h-5"/>Sign in with Google
            </Button>
            <Button
            size="lg"
            className="w-full"
            variant="secondary"
            onClick={() => onClick("facebook")}
            >
              <FaFacebook className="w-5 h-5"/>Sign in with Facebook  
            </Button>
        </div>
    );
};

