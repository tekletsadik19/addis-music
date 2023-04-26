import type { Metadata } from "next";
import SideBar from "@/components/home/SideBar";
import Center from "@/components/home/Center";
import MusicPlayer from "@/components/player/MusicPlayer";
import { useDispatch, useSelector } from 'react-redux';

export const metadata:Metadata={
    title:"Addis Music | Addis-Hub",
    description:"Music Hub for Addis" 
}



const AddisHub = () => {
    
    return ( 
        <div className='pt-20 pb-40 w-full mx-auto h-screen overflow-hidden'>
            <main className="flex">
                
                <div className="hidden md:flex text-grey-500 overflow-y-scroll scrollbar-hide h-screen">
                    <SideBar/>
                </div>
                <Center/>
            </main>
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-indigo/70 backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer />
            </div>
        </div> 
    );
}
 
export default AddisHub;


