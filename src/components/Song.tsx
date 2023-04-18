'use client'
import { millisToMinutesAndSeconds } from '@/lib/time';
import Image from 'next/image';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { playPause,setActiveSong} from '@/redux/features/playerSlice';
import Paragraph from './ui/Paragraph';
import PlayPause from '@/components/PlayPause';

{/* @ts-expect-error */}

const Song = ({song,i,isPlaying, activeSong, data})=>{
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {

        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };
     
    return(
        song?.album.name ? 
        <div
            className="grid grid-cols-2 text-[#929292] bg-slate-200 dark:bg-slate-700 hover:text-white rounded-md mt-5 cursor-pointer"
            >    
            <div className="flex items-center pl-3 space-x-4 py-1">
                
                <Image
                    src={song?.album.images[0].url}
                    alt={song?.album.name}
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
                <Paragraph>{millisToMinutesAndSeconds(song?.duration_ms)}</Paragraph> 
                <PlayPause 
                    isPlaying={isPlaying} 
                    song={song} 
                    activeSong={activeSong} 
                    handlePause={handlePauseClick} 
                    handlePlay={handlePlayClick}
                />
            </div>
        </div>:<></>
    )
}

export default Song;