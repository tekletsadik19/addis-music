'use client'
import React from "react";
import Image from "next/image";
import { useSession } from 'next-auth/react';
import {ChevronDown} from 'lucide-react';
import {useSelector } from 'react-redux';
import Header from "@/ui/Header";
import Paragraph from "@/ui/Paragraph";
import TopSongs from "@/components/home/TopSongs";
import CreatePlaylist from "@/components/playlist/CreatePlaylist";



const Center = ()=>{
    const { data: session } = useSession();
    const { showLibraryModal } = useSelector((state) => state.player);
    return(
        showLibraryModal?
        <div className="mb-32 flex-grow flex items-center justify-center">
            <CreatePlaylist/>
        </div>
        :(
            <div className="m-4 flex-grow text-grey-500 overflow-y-scroll scrollbar-hide h-screen  select-none relative" >
                <header className="absolute m-5 pl-20 right-10" >
                    <div className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2">
                        <Image className="rounded-full p-10" src={session?.user.image}
                            alt="user image" height={40} width={40} />
                        <Header size={'sm'}>{session?.user.name}</Header>
                        <Paragraph><ChevronDown className="h-5 w-5" /></Paragraph>
                    </div>
                </header>
                <div>
                    {/* <Header size={'sm'}>{session?.user.id}</Header> */}
                   <TopSongs/> 
                </div>
            </div>
        )
    )
}

 
export default Center;