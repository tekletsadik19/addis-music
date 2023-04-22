type Track = {
    id: number
    name?: string
    genre?: string
    url?: string
    album?: string
    artist?: string
    imageUrl?: string
}

type Favorite = {
    id: number
    trackId?: string
    userId?: string
}

type Library = {
    id: string
    spotifyId: string
    name: string
    album: string
    artist: string
    imageUrl: string
}    

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}