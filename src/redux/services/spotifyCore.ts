import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const getSpotifyKey = ()=>{
    const spotifyApiKey = process.env.SPOTIFY_API;

    if(!spotifyApiKey){
        throw new Error("No APIKey For Spotify Set");
    }
    return spotifyApiKey
}



export const spotifyApi = createApi({
    reducerPath:"spotifyApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://spotify23.p.rapidapi.com/",
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',getSpotifyKey());
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getUserPlaylist: builder.query({ query: (userId) => `user_profile/?id=${userId}&playlistLimit=10` }),
        getTopCharts: builder.query({query:(playlistId)=>`playlist_tracks/?id=${playlistId}&offset=0&limit=100`}),
        getPlaylistSongs:builder.query({query:(playlistId='37i9dQZF1DX4Wsb4d7NKfP')=>`playlist_tracks/?id=${playlistId}&offset=0&limit=100`}),
    })
});

export const {
    useGetUserPlaylistQuery,
    useGetTopChartsQuery,
    useGetPlaylistSongsQuery
} = spotifyApi;