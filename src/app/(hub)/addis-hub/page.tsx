import type { Metadata } from "next";
import MediaControlCard from '@/components/player/MediaControlCard'
import CreatePlaylist from "@/components/player/CreatePlaylist";
export const metadata:Metadata={
    title:"Addis Music | Addis-Hub",
    description:"Music Hub for Addis"
}



const AddisHub = () => {
  

    return ( 
        <div className='container sm:justify-center pt-32 w-full mx-auto h-full'>
            <CreatePlaylist/>
        </div> 
    );
}
 
export default AddisHub;


