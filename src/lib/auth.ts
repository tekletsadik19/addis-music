import { NextAuthOptions } from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';

const getGoogleCredentials = ()=>{
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if(!clientId || clientSecret?.length === 0){
        throw new Error("No ClientID For Google Provider Set");
    }
    if(!clientSecret || clientId?.length === 0){
        throw new Error("No ClientSecret For Google Provider Set");
    }
    return {clientId,clientSecret}
}

const prisma = new PrismaClient();

export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:getGoogleCredentials().clientId,
            clientSecret:getGoogleCredentials().clientSecret
        })
    ],
}