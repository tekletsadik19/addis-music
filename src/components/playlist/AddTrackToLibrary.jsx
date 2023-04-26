"use client"
import React,{ useEffect } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/DropdownMenu";
import Button from "@/ui/Button";
import Paragraph from "@/ui/Paragraph";
import { useDispatch,useSelector } from 'react-redux';
import {
	fetchLibrarys,
    updateLibrary
} from "@/redux/actions";

 
const AddTrackToLibrary = ({song}) => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.library);

	useEffect(() => {
		dispatch(fetchLibrarys());
	}, [dispatch]);
    const handleSelectedLibrary = (library,song)=>{
        const updatedLibrary = { ...library, trackId: [...library.trackId,song.id] };
        dispatch(updateLibrary(updatedLibrary))
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
                state.libraryList?.map((library) => (
                    <DropdownMenuItem key={library._id} onClick={()=>handleSelectedLibrary(library,song)}>
                        <Paragraph  className="cursor-pointer pl-5 pt-1">
                            { library.name }
                        </Paragraph>
                    </DropdownMenuItem>
				))
            }
            </DropdownMenuContent>
        </DropdownMenu>
    );   
}
 
export default AddTrackToLibrary;