import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 


export const spotifyMetaApi = createApi({
    reducerPath:"spotifyApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://spotify-scraper.p.rapidapi.com/v1/",
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',process.env.RAPID_API);
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getPlaylistSongs:builder.query({query:(playlistId='37i9dQZF1DX4Wsb4d7NKfP')=>`playlist_tracks/?id=${playlistId}&offset=0&limit=100`}),
    })
});

export const {
    useGetPlaylistSongsQuery
} = spotifyMetaApi;