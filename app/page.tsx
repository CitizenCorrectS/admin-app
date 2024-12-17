"use client"
import { SliderProvider } from "@/components/slider-context";
import { Poppins } from "next/font/google";
import Hero from "@/components/landing/Hero";
import Grid from "@/components/landing/Grid";
import Footer from "@/components/landing/Footer";
import Clients from "@/components/landing/Clients";
import Approach from "@/components/landing/Approach";
import Experience from "@/components/landing/Experience";
import RecentProjects from "@/components/landing/RecentProjects";
import { FloatingNav } from "@/components/landing/ui/FloatingNavbar";




// import Image from "next/image";
// import ClientCanvas from "@/components/canvas/client-canvas";
// import { LoginButton } from "@/components/auth/login-button";
// import { SliderCarousel } from "@/components/slider-carousel";
// import { CanvasContainer } from "@/components/canvas/canvas-container"
// import Cube from "@/components/three/Cube";

// import { cn } from "@/lib/utils";
// import Pattern from "@/components/ui/pattern";
// import Tree from "@/components/three/Tree";
// import Earth from "@/components/three/Atmosphere";
// import Atmosphere from "@/components/three/Atmosphere";
// import { Sky } from "@react-three/drei";
// import { Spotlight } from "@/components/landing/Spotlight";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "Settings", link: "/settings" },
];



export default function Home() {
  return (
//     <>
//     <SliderProvider>

// {/* HEADER*/}
//     <header className="absolute top-4 w-full flex items-center justify-end px-8 py-4 mt-2 z-[12]">
//         <LoginButton mode="modal">
//           <button
//             className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
//           >
//             <span
//               className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
//             ></span>
//             <div className="flex items-center">
//               <span className="ml-1 text-white">Sign in</span>
//             </div>
//           </button>
//         </LoginButton>
//       </header>

// {/* LOGO */}
//       <div className="flex items-center">
//           <Image 
//             src="/logo-svg.svg"
//             alt="Citizen Corrects Logo"
//             width={100}
//             height={50}
//             className="absolute top-2 left-1/2 -translate-x-1/2 mx-auto"
//           />
//         </div>

// {/* <HERO TAGLINE /> */}
//       <div className="absolute w-full flex flex-col items-center justify-between mt-24">
//       <div className="space-y-6 text-center mt-[24px] pl-8 pr-8">
//         <h1 className={cn(
//           "text-5xl font-semibold text-white drop-shadow-lg",
//           poppins.className
//         )}>
//           India&apos;s First <span className="text-[#212121] font-outline-2">Carbon</span> Market
//         </h1>
//         {/* <h1 className="text-6xl font-semibold text-white drop-shadow-lg">
//           Enter India&apos;s <span className="text-[#212121] font-outline-2">Carbon</span> Market
//         </h1> */}
//       </div>
//     </div>


// {/* <Canvas /> */}
//       <CanvasContainer className="bg-red-100">
//           <ClientCanvas>
//             <Earth />
//           </ClientCanvas>
//         </CanvasContainer>


//     <main className="w-screen justify-center bg-[#212121] overflow-hidden">  
// {/* CARBON CREDIT Slider */}
//       <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] z-[20]">
//         <SliderCarousel />
//       </div>
// {/* <Spotlight /> */}

// {/* FOOTER */}
//       <footer className="absolute bottom-4 w-full flex items-center justify-center">
//           {/* EXPLORE BUTTON */}
//           <div className="relative flex items-center justify-center bg-none ">
//             <div className="relative group">
//               <button
//                 className="relative inline-block p-px font-semibold leading-6 text-white shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
//               >
//                 <span className="relative z-10 block px-6 py-3 rounded-xl">
//                   <div className="relative z-10 flex items-center space-x-2">
//                     <span className="transition-all duration-500 group-hover:translate-x-1">
//                       Know more
//                     </span>
//                     <svg
//                       className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
//                       data-slot="icon"
//                       aria-hidden="true"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         clip-rule="evenodd"
//                         d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//                         fill-rule="evenodd"
//                       ></path>
//                     </svg>
//                   </div>
//                 </span>
//               </button>
//             </div>
//           </div>
//       </footer>
//     </main>

// </SliderProvider>

//     </>
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      {/* <SliderProvider>
      </SliderProvider> */}
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

