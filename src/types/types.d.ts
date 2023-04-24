type User = {
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
    name: string
    imageUrl: string
    userId: string
    createdAt:Date
    updatedAt:Date
}    

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}