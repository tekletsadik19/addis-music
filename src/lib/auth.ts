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
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:'/login'
    },
    callbacks:{
        async session({ token, session }) {
        if (token) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.image = token.picture
        }
    
        return session
        },
        async jwt({ token, user }) {
          const dbUser = await prisma.user.findFirst({
            where: {
              email: token.email?token.email:'',
            },
          })
    
          if (!dbUser) {
            token.id = user!.id
            return token
          }
    
          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
          }
        },
        redirect() {
          return '/addis-hub'
        },
    },
}