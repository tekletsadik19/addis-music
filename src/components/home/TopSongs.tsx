'use client'

import Image from 'next/image';
import {useGetUserPlaylistQuery} from "@/redux/services/spotifyCore";
import Header from '@/ui/Header';
import Songs from '@/components/home/Songs';
import Loader from '@/ui/Loader';

const TopSongs = ()=>{
    const {data,isFetching,error} =  useGetUserPlaylistQuery('spotify');
    // const {data,isFetching,error} = useGetPlaylistSongsQuery(playlistId);
    if(isFetching){
        return <Loader title={'Loading Playlist'}/>;
    }
    const playlistData = data?.public_playlists[0];
    const playlistId  =  playlistData.uri.split(":").pop();
    return(
        <div>
            <section
                className={`m-5 flex-grow flex items-end space-x-7  h-80  pl-5 pb-5`}
            >
                <Image
                    className="shadow-2xl"
                    src={playlistData?.image_url}
                    alt="album image"
                    height = {200}
                    width = {200}
                />
                <div>
                <Header>PLAYLIST</Header>
                <Header className="text-2xl md:text-3xl xl:text-5xl">
                    {`${playlistData?.name}`}
                </Header>
                </div>
            </section>
            <div className="px-6 flex flex-col mt-3 space-y-2 pb-28 text-white">
              <Songs playlistID={playlistId}/> 
            </div>     
        </div> 
    )
}

export default TopSongs;