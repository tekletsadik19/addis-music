'use client'
import React from "react";
import Image from "next/image";
import { shuffle } from 'lodash';
import { useSession } from 'next-auth/react';
import {ChevronDown} from 'lucide-react';
import Header from "@/ui/Header";
import Paragraph from "@/ui/Paragraph";
import Songs from "@/components/Songs";



const Center = ()=>{
    const { data: session } = useSession();
    return(
        <div className="flex-grow text-grey-500 overflow-y-scroll scrollbar-hide select-none relative" >
            <header className="absolute mt-5 right-10" >
                <div className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2">
                    <Image className="rounded-full p-1" src={session?.user.image}
                        alt="user image" height={40} width={40} />
                    <Header size={'sm'}>{session?.user.name}</Header>
                    <Paragraph><ChevronDown className="h-5 w-5" /></Paragraph>
                </div>
            </header>
            <section
                className={`m-5 flex-grow flex items-end space-x-7  h-80  pl-5 pb-5`}
            >
                {/* <Image
                    className="h-44 w-44 shadow-2xl"
                    src={playlist?.images?.[0]?.url}
                    alt="album image"
                /> */}
                <div>
                <p>PLAYLIST</p>
                <h1 className="text-2xl md:text-3xl xl:text-5xl">Hey I did It Again</h1>
                </div>
            </section>
            <div>
                <Songs/>
            </div>
        </div>
    )
}

 
export default Center;