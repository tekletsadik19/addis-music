'use client'
import React from "react";
import Paragraph from "@/ui/Paragraph";
import Button from "./ui/Button";
import { LibraryMusic,Favorite, AddCircleOutline } from "@mui/icons-material";
class SideBar extends React.Component{
    render(){
        return (
            <div className="text-grey-500 overflow-y-scroll scrollbar-hide h-screen" >
                <div className="space-y-4">
                    <Button variant={'link2'} className="flex align-center">
                        <LibraryMusic className="w-5 h-5"/>
                        <Paragraph size={'sm'}>My Library</Paragraph>
                    </Button>

                    <Button variant={'link2'} className="flex align-center">
                        <Favorite className="w-5 h-5"/>
                        <Paragraph size={'sm'}>My Favourite</Paragraph>
                    </Button>
                    <Button variant={'link2'} className="flex align-center">
                        <AddCircleOutline className="w-5 h-5"/>
                        <Paragraph size={'sm'}>Create Playlist</Paragraph>
                    </Button>
                    <hr className="border-t-[0.1px] border-gray-400"/>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                    <Paragraph className="cursor-pointer pl-5">Playlist Name...</Paragraph>
                </div>
            </div>
        )
    }
}
 
export default SideBar;