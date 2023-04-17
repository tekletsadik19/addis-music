import type { Metadata } from "next";
import {genres} from "@/utils/constants";
import Discover from "@/components/discover/Discover";

export const metadata:Metadata={
    title:"Addis Music | Discover",
    description:"Music Hub for Addis" 
}



const AddisHub = () => {

    return ( 
        <div className='pt-20 pb-40 w-full mx-auto h-screen overflow-hidden'>
            <Discover/>
        </div> 
    );
}
 
export default AddisHub;


