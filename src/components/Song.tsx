'use client'
import { millisToMinutesAndSeconds } from '@/lib/time';


const Song = ()=>{
    return(
        <div
            className="grid grid-cols-2 text-[#929292] hover:text-white hover:bg-[#2b2d30] rounded-md mt-5 cursor-pointer"
            // onClick={playSong}
            >
            <div className="flex items-center pl-3 space-x-4 py-1">
                {/* <p>{order + 1}</p>
                <img
                className="h-10 w-10"
                src={track.track.album.images[0].url}
                alt={track.track.album.name}
                />
                <div className="">
                <p className="w-36 lg:w-[20rem] truncate text-white">
                    {track.track.name}
                </p>
                <p className="w-40">{track.track.artists[0].name}</p> 
                </div>*/}
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