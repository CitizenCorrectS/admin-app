"use client";
import animationData from "@/data/confetti.json";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import Logoutani from "@/components/ui/logoutani";
import { useTheme } from "next-themes";
import { SliderProvider } from "@/components/slider-context";
import { useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import Lottie from "react-lottie";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MagicButton from "@/components/landing/MagicButton";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Moon, Sun} from "lucide-react";


const Homep = () => {
    const user = useCurrentUser();
    const [copied, setCopied] = useState(false);    
    const { setTheme } = useTheme();
    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    // const onClick = () => {
    //     console.log("Logout button clicked");
    //     logout();
    // }

    const handleCopy = () => {
        const text = "citizencorrects@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };
    
    return(
        <>
        <div className="pt-12 overflow-hidden">
            <div className="h-full w-full flex flex-row items-center justify-between px-8">
                {/* LOGO */}
                <div className="left-0">
                    <svg width="60" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.3612 135.203C90.7321 136.626 64.3275 98.9876 52.2451 89.4198C53.4669 89.4198 90.3231 112.827 90.7321 112.43C94.3976 108.872 108.245 64.5117 109.059 64.5117C111.503 66.4095 132.07 98.276 145.306 109.821C143.881 109.821 111.707 88.2337 110.485 89.4198C109.059 89.4198 94.6012 135.203 92.3612 135.203Z" fill="#1CDBF5"/>
                        <path d="M76.6002 87.5533L83.2653 99.9989C60.7065 63.6532 24.659 75.4493 23.9216 99.9989C23.3534 118.91 39.2055 127.462 64.7712 115.202C62.7389 120.349 53.9999 131.499 35.3025 134.919C-12.009 141.003 -10.0182 59.1396 30.8314 59.1396C53.7967 59.1396 71.3839 77.3385 76.6002 87.5533Z" fill="#267EE5"/>
                        <path d="M122.153 110.472L115.787 97.78C137.475 134.949 173.847 124.343 175.189 99.7741C176.222 80.8478 160.565 71.7479 134.673 83.1708C136.834 78.0829 145.855 67.2074 164.655 64.4087C212.162 59.904 208.158 141.847 167.268 140.474C144.28 139.703 127.123 120.88 122.153 110.472Z" fill="#267EE5"/>
                        <path d="M78.103 89.7084L83.2652 99.372C65.7932 71.1506 37.8741 80.31 37.3029 99.372C36.8629 114.056 49.1404 120.697 68.9413 111.177C67.3673 115.174 60.5988 123.831 46.1175 126.487C9.47433 131.21 11.0162 67.646 42.6546 67.646C60.4414 67.646 74.0629 81.7769 78.103 89.7084Z" fill="#1CDBF5"/>
                        <path d="M121.113 107.528L115.918 97.9372C133.501 125.945 161.597 116.855 162.172 97.9372C162.614 83.3642 150.259 76.7742 130.333 86.2216C131.917 82.2554 138.728 73.6639 153.301 71.0279C190.176 66.34 188.625 129.423 156.786 129.423C138.887 129.423 125.179 115.399 121.113 107.528Z" fill="#1CDBF5"/>
                    </svg>
                </div>   
                
                {/* Logout button */}
                <div className="flex flex-row gap-2 items-center">
                <div>
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="bg-transparent">
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
                <Logoutani />
                </div>
            </div>
        </div>
       <div className="flex flex-col items-center justify-center min-h-full mt-0 p-4">
           <Card className="w-full max-w-2xl bg-[#1d2031]">
               <CardHeader>
                   <CardTitle>Welcome, {user?.name}!</CardTitle>
                   <CardDescription>
                       Get latest updates on carbon trading & auctions.
                   </CardDescription>
               </CardHeader>
               <CardContent>
               <div className="mt-0 relative">
                {/* button border magic from tailwind css buttons  */}
                {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                {/* add handleCopy() for the copy the text */}
                <div
                    className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                    }`}
                >
                    {/* <img src="/confetti.gif" alt="confetti" /> */}
                    <Lottie options={defaultOptions} height={200} width={400} />
                </div>
                
                <a href="https://wa.me/918837793738?text=I%27m%20interested%20to%20know%20about%20green%20investment%20and%20carbon%20trading" target="_blank">
                <MagicButton
                    title={copied ? "Message sent!" : "WhatsApp"}
                    icon={<FaWhatsapp size={'2rem'}/>}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                />
                </a>
                 </div>
               </CardContent>
           </Card>
        </div>
        </>
    );
} 

export default Homep;