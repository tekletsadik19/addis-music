"use client"

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignoutButtonProps {
    
}
 
const SignoutButton: FC<SignoutButtonProps> = () => {

    //Manage Loading state here with Redux
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const signUserOut = async()=>{
        try {
            setIsLoading(true);
            await signOut()
        } catch (error) {
            toast({
                title:"Error Signing Out",
                message:"Please Try Again Later",
                type:"error"
            })
        }
        setIsLoading(true);

    }
    return ( <Button onClick={signUserOut} isLoading={isLoading}>Sign Out</Button> );
}

SignoutButton.displayName = "sign-out";
 
export default SignoutButton;