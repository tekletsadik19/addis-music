'use client'
import { millisToMinutesAndSeconds } from '@/lib/time';
import Image from 'next/image';


const Song = ()=>{
    return(
        <div
            className="pb-2 grid grid-cols-2 text-[#929292] bg-slate-200 dark:bg-slate-700 hover:text-white rounded-md mt-5 cursor-pointer"
            // onClick={playSong}
            >
            <div className="flex items-center pl-3 space-x-4 py-1">
                {/* <p>{order + 1}1</p>
                    <Image
                        src={""}
                        alt={""}
                        height={40}
                        width={40}
                    /> */}
                <div className="">
                <p className="w-36 lg:w-[20rem] truncate text-white">
                    MI4U{/* {track.track.name} */}
                </p>
                <p className="w-40">MI4U {/*{track.track.artists[0].name}*/}</p> 
                </div>
            </div>

            <div className="flex items-center justify-between ml-auto md:ml-0 pr-10">
                <p className="hidden md:inline w-40 lg:w-96 truncate">
                {/* {track.track.album.name} */}
                MI4U
                </p>
                {/* <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p> */}
            </div>
        </div>
    )
}

export default Song;