'use client'

import React,{ useEffect } from "react";
import { LibraryMusic,DeleteForeverOutlined, AddCircleOutline } from "@mui/icons-material";
import {setShowLibraryModal} from '@/redux/features/playerSlice';
import { useDispatch,useSelector } from 'react-redux';
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";
import {
	deleteLibrary,
	fetchLibrarys,
	setSelectedLibrary,
} from "@/redux/actions";

const SideBar = ()=>{
    {/* @ts-ignore*/}
    const dispatch = useDispatch();

    const state = useSelector((state) => state.library);

	useEffect(() => {
		dispatch(fetchLibrarys());
	}, [dispatch]);

    const handleLibModal = (showModal = false)=>{
        dispatch(setShowLibraryModal(showModal))
        
    }
    const handleSelectedLibrary = (_id)=>{
        dispatch(setSelectedLibrary(_id));
    }
    const handleDelete = (_id)=>{
        dispatch(deleteLibrary(_id));
    }
    return (
        <div>
            <div className="space-y-4">
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
                
                {
                
                state.libraryList?.map(({ _id, name }) => (
                    <div key={_id} className="flex" onClick={()=>handleSelectedLibrary(_id)}>
                        <Paragraph  className="cursor-pointer pl-5 pt-1">
                                {name}
                        </Paragraph>
                        <Button variant={'ghost'} className="ml-2 my-0 py-0" size={'sm'} onClick={()=>handleDelete(_id)}>
                            <DeleteForeverOutlined className="my-0  transition-all hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100"/>
                        </Button>
                    </div>
				))
                }
                                
            </div>
        </div>
    )
}
 
export default SideBar;

