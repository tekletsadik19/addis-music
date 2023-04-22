'use client'
import React from "react";
import Discover from "@/components/discover/Discover";
import Link from "next/link";
import { LibraryMusic,Favorite, AddCircleOutline } from "@mui/icons-material";
import {useGetPlaylistSongsQuery} from "@/redux/services/spotifyCore";
import { useDispatch } from "react-redux";
import connectMongo from "@/lib/mongodb";
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";



const SideBar = ()=>{
    {/* @ts-expect-error*/}
    const {data,isFetching,error} = useGetPlaylistSongsQuery();

    const handlePlaylist = async()=>{
        await connectMongo()
    }

    return (
        <div className="hidden md:flex text-grey-500 overflow-y-scroll scrollbar-hide h-screen" >
            <div className="space-y-4">
                <Button variant={'link2'} className="flex align-center">
                    <Favorite className="w-5 h-5"/>
                    <Paragraph size={'sm'}>My Favourite</Paragraph>
                </Button>
                <Button variant={'link2'} className="flex align-center" onClick={handlePlaylist}>
                    <AddCircleOutline className="w-5 h-5"/>
                    <Paragraph size={'sm'}>Create Playlist</Paragraph>
                </Button>
                <Button variant={'link2'} className="flex align-center">
                    <LibraryMusic className="w-5 h-5"/>
                    <Paragraph size={'sm'}>My Library</Paragraph>
                </Button>
                <hr className="border-t-[0.1px] border-gray-400"/>
                <Paragraph className="cursor-pointer pl-5"></Paragraph>                
            </div>
        </div>
    )
}
 
export default SideBar;