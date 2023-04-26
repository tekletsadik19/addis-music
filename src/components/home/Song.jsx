'use client'
import { millisToMinutesAndSeconds } from '@/lib/time';
import Image from 'next/image';
import Button from "@/ui/Button";
import { useDispatch } from "react-redux";
import { AddCircleOutline } from "@mui/icons-material";
import {playPause,setActiveSong,setActivePlaylist} from '@/redux/features/playerSlice';
import Paragraph from '../ui/Paragraph';
import PlayPause from '@/components/PlayPause';
import AddTrackToLibrary from "@/components/playlist/AddTrackToLibrary"

{/* @ts-expect-error */}

const Song = ({song,i,isPlaying, activeSong, data})=>{
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(setActivePlaylist(data))
        dispatch(playPause(true));
    };
     
    return(
        
        <div
            className="m-0 grid grid-cols-2 text-[#929292] bg-slate-200 dark:bg-slate-700 hover:text-white rounded-md mt-5 cursor-pointer"
            >    
            <div className="flex items-center  sm:pl-1 space-x-4 ">
                
                <Image
                    src={song?.album.images[0].url}
                    alt={song?.name}
                    height={50}
                    width={50}
                />
                <div className="">
                <Paragraph className="w-36 lg:w-[20rem] truncate">
                    {`${song?.name}`}
                </Paragraph>
                <Paragraph className="w-40">{song?.artists[0].name}</Paragraph> 
                </div>
            </div>

            <div className="flex items-center justify-between ml-auto md:ml-0 pr-10">
                <Paragraph className="hidden md:inline w-40 lg:w-96 truncate">
                 {song?.album.name} 
                </Paragraph>
                <Paragraph className='hidden md:inline'>{millisToMinutesAndSeconds(song?.duration_ms)}</Paragraph>  
                
                <AddTrackToLibrary song={song}/>
                
                <PlayPause 
                    isPlaying={isPlaying} 
                    song={song} 
                    activeSong={activeSong} 
                    handlePause={handlePauseClick} 
                    handlePlay={handlePlayClick}
                />
            </div>
        </div>
    )
}

export default Song;