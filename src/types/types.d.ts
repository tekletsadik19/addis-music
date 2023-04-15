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