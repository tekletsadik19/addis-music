import type { Metadata } from "next";
import SideBar from "@/components/SideBar";
import Center from "@/components/Center";
import MusicPlayer from "@/components/player/MusicPlayer";

export const metadata:Metadata={
    title:"Addis Music | Addis-Hub",
    description:"Music Hub for Addis" 
}



const AddisHub = () => {

    return ( 
        <div className='pt-20 w-full mx-auto h-screen overflow-hidden'>
            <main className="flex">
                <SideBar/>
                <Center/>
            </main>
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-indigo/70 backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer />
            </div>
        </div> 
    );
}
 
export default AddisHub;


