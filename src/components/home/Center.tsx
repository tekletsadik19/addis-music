'use client'
import React from "react";
import Image from "next/image";
import { useSession } from 'next-auth/react';
import {ChevronDown} from 'lucide-react';
import {useSelector } from 'react-redux';
import {useGetTopChartsQuery} from "@/redux/services/spotifyCore";
import Header from "@/ui/Header";
import Paragraph from "@/ui/Paragraph";
import TopSongs from "@/components/home/TopSongs";



const Center = ()=>{
    const { data: session } = useSession();
    
    return(
        <div className="flex-grow text-grey-500 overflow-y-scroll scrollbar-hide h-screen  select-none relative" >
            <header className="absolute mt-5 right-10" >
                <div className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2">
                    <Image className="rounded-full p-1" src={session?.user.image}
                        alt="user image" height={40} width={40} />
                    <Header size={'sm'}>{session?.user.name}</Header>
                    <Paragraph><ChevronDown className="h-5 w-5" /></Paragraph>
                </div>
            </header>
            <div>
                <TopSongs/>
            </div>
        </div>
    )
}

 
export default Center;