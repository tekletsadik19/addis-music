"use client"

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SigninButtonProps {
    
}
 
const SigninButton: FC<SigninButtonProps> = () => {

    //Manage Loading state here with Redux
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const signInWithGoogle = async()=>{
       
        try {
            setIsLoading(true);
            await signIn('google')
            setIsLoading(false);
        } catch (error) {
            toast({
                title:"Error Signing In",
                message:"Please Try Again Later",
                type:"error"
            })
        }
        setIsLoading(false)
    }
    return ( <Button onClick={signInWithGoogle} isLoading={isLoading}>Sign in</Button> );
}
 
SigninButton.displayName = "Sign-In";

export default SigninButton;