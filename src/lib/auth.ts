import { NextAuthOptions } from "next-auth";
import { db } from "@/lib/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(db),
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:'/login'
    },
    providers:[
        GoogleProvider({
            
        })
    ]
}