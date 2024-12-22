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
  { name: "Grow", link: "#about" },
  { name: "Subscribe", link: "#contact" },
];



export default function Home() {
  return (
  <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <SliderProvider>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </SliderProvider>
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

