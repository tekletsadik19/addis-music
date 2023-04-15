import type { Metadata } from "next";
import SideBar from "@/components/SideBar";
import Center from "@/components/Center";
export const metadata:Metadata={
    title:"Addis Music | Addis-Hub",
    description:"Music Hub for Addis"
}



const AddisHub = () => {

    return ( 
        <div className=' w-full mx-auto h-screen overflow-hidden'>
            <main className="pt-32 flex">
                <SideBar/>
                <Center/>
            </main>
        </div> 
    );
}
 
export default AddisHub;


