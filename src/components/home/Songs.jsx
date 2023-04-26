'use client'

import Song from "@/components/home/Song";
import {useGetPlaylistSongsQuery} from "@/redux/services/spotifyCore";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '@/ui/Loader';


const Songs = ({playlistID})=>{
    const {data,isFetching,error} = useGetPlaylistSongsQuery(playlistID);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    if(isFetching){
        return <Loader title={'Loading Songs'}/>;
    }
    return(
        <div className="sm:m-0 px-6 flex flex-col mt-3 space-y-2 pb-28 text-white">
            {
                data?.items.map((song, i) => (
                    <Song
                      key={song.id}
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