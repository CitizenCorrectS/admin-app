"use client";
// import Grid from "@/components/landing/Grid";
import { SliderProvider } from "@/components/slider-context";
import Homep from "@/components/auth/homep";
import Ugrid from "@/components/user/Ugrid";



const HomePage = () => {   

    return (
        <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <Homep />

           <SliderProvider>
                <Ugrid />
            </SliderProvider>
       </div>
       </main>
   );
}
export default HomePage;