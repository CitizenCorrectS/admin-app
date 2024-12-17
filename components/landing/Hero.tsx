import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { SliderCarousel } from "../slider-carousel";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-gray-400 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            India&apos;s First <span className="text-[#000319] font-outline-2">Carbon</span> Market
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Earn 💵 money by Saving the Planet 🌍"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          {/* <div className="flex flex-col items-center justify-between">
            <div className="space-y-6 text-center pl-8 pr-8">
                <h1 className={cn(
                "text-5xl font-semibold text-white drop-shadow-lg",
                poppins.className
                )}>
                Earn 💵 money by <br/> Saving the Planet 🌍
                </h1>
             </div>
            </div> */}


          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p> */}

          
            {/* <MagicButton
              title="Know more"
              icon={<ArrowBigRight />}
              position="right"
            /> */}
          
          
          

        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
            {/* <SliderCarousel /> */}
            <div className="relative flex items-center justify-center bg-none ">
             <div className="relative group">
             <a href="#about">
               <button
                className="relative inline-block p-px font-semibold leading-6 text-white shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 block px-6 py-3 rounded-xl">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Know more
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;


