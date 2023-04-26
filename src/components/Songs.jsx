'use client'

import Song from "@/components/home/Song";
import {useGetPlaylistSongsQuery} from "@/redux/services/spotifyCore";
import { useDispatch, useSelector } from 'react-redux';


const Songs = ({playlistID})=>{
    const {data,isFetching,error} = useGetPlaylistSongsQuery(playlistID);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    
    return(
        
        <div className="px-6 flex flex-col mt-3 space-y-2 pb-28 text-white">
            {

                isFetching?<div></div>:
                data?.items.map((song, i) => (
                    <Song
                      key={song.key}
                      song={song.track}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data}
                      i={i}
                    />
                  ))
                
            }
        </div>
    )
}

export default Songs;