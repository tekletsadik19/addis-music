import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 


export const spotifyApi = createApi({
    reducerPath:"spotifyApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://spotify23.p.rapidapi.com/",
        prepareHeaders:(headers,params)=>{
            headers.set('X-RapidAPI-Key',"82ab688612mshb3728c18181c028p1cbf13jsn5ca48076390e");
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getPlaylists:builder.query({query:(playlistId='37i9dQZF1DX4Wsb4d7NKfP')=>`playlist/?id=${playlistId}`}),
    })
});

export const {
    useGetPlaylistsQuery
} = spotifyApi;