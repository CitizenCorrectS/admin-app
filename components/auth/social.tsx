"use client"
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Social = () => {

    const onClick = (provider: "google" | "facebook") => {
        signIn(provider,{
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }
    return(
        <div className="flex flex-col items-center w-full gap-2">
            <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => onClick("google")}
            >
              Sign in with Google<FcGoogle className="w-5 h-5"/>  
            </Button>
            <Button
            size="lg"
            className="w-full"
            variant="outline"
            onClick={() => onClick("facebook")}
            >
              Sign in with Facebook<FaFacebook className="w-5 h-5"/>  
            </Button>
        </div>
    );
};

