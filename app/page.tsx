"use client"
// import { SliderProvider } from "@/components/slider-context";
import { Poppins } from "next/font/google";
import Hero from "@/components/landing/Hero";
import Grid from "@/components/landing/Grid";
import Footer from "@/components/landing/Footer";
// import Clients from "@/components/landing/Clients";
import Approach from "@/components/landing/Approach";
import Experience from "@/components/landing/Experience";
import RecentProjects from "@/components/landing/RecentProjects";
import { FloatingNav } from "@/components/landing/ui/FloatingNavbar";




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

