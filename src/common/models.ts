export interface IUser {
    email: string;
    id: number
    name: string
    phone: string
    username: string
    website: string
}

export interface IPost {
    title: string
    body: string
    id: number
    userId: number
}

export interface IComment {
    id: number,
    email: string,
    name: string,
    body: string
}