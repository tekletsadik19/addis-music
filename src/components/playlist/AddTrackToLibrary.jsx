"use client"
import React,{ useEffect } from "react";
import { useTheme } from "next-themes";
import { AddCircleOutline } from "@mui/icons-material";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/DropdownMenu";
import Button from "@/ui/Button";
import Paragraph from "@/ui/Paragraph";
import { useDispatch,useSelector } from 'react-redux';
import {
	fetchLibrarys,
	setSelectedLibrary,
    updateLibrary
} from "@/redux/actions";

 
const AddTrackToLibrary = ({song}) => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.library);

	useEffect(() => {
		dispatch(fetchLibrarys());
	}, [dispatch]);
    const handleSelectedLibrary = (_id)=>{
        dispatch(setSelectedLibrary(_id));
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'sm'} className='sm:pr-2' >
                    <AddCircleOutline className="rotate-0 scale-100 transition-all hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100"/>
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" forceMount>
                {
                state.libraryList?.map(({ _id, name }) => (
                    <DropdownMenuItem key={_id} onClick={()=>handleSelectedLibrary(_id)}>
                        <Paragraph  className="cursor-pointer pl-5 pt-1">
                            { name }
                        </Paragraph>
                    </DropdownMenuItem>
				))
            }
            </DropdownMenuContent>
        </DropdownMenu>
    );   
}
 
export default AddTrackToLibrary;