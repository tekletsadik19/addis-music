'use client'
import { ReactNode } from "react";
import {ThemeProvider} from "next-themes";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Providers = async ({children}:{children:ReactNode}) => {
    const session = await getServerSession(authOptions);
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    </ThemeProvider> ;
}
 
export default Providers;