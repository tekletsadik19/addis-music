import type { Metadata } from "next";
import CustomCard from "@/components/ui/CustomCard";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

export const metadata:Metadata={
    title:"Addis Music | Addis-Hub",
    description:"Music Hub for Addis"
}

const AddisHub = () => {
    return ( 
        <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
            <CustomCard header="Create Library">
                <InputField variant={'ghost'} className="w-60" placeHolder="name">
                </InputField>
                <InputField variant={'ghost'} className="w-60" placeHolder="Info">
                </InputField>
                <Button size={'lg'} variant={'sassy'} >
                Add
                </Button>
            </CustomCard>
        </div> 
    );
}
 
export default AddisHub;