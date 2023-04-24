'use client'

import React,{ useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LibraryMusic,Favorite, AddCircleOutline } from "@mui/icons-material";
import {setShowLibraryModal} from '@/redux/features/playerSlice';
import { useDispatch } from 'react-redux';
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";

const SideBar = ()=>{
    {/* @ts-ignore*/}
    const search = useSearchParams();
    const dispatch = useDispatch();
    const handleLibModal = (showModal = false)=>{
        dispatch(setShowLibraryModal(showModal))
    }
    return (
        <div className="hidden md:flex text-grey-500 overflow-y-scroll scrollbar-hide h-screen" >
            <div className="space-y-4">
                <Button variant={'link2'} className="flex align-center">
                    <Favorite className="w-5 h-5"/>
                    <Paragraph size={'sm'}>My Favourite</Paragraph>
                </Button>
                <Button 
                    variant={'link2'} 
                    className="flex align-center"
                    onClick={()=>handleLibModal(true)}
                >
                    <AddCircleOutline className="w-5 h-5"/>
                    <Paragraph size={'sm'}>Create Library</Paragraph>
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