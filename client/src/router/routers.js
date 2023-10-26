import Main from "../pages/Main"
import CreatePost from "../pages/CreatePost"
import Posts from "../pages/Posts"
import Post from "../pages/Post"
import User from "../pages/User"
import Settings from "../pages/Settings"
import History from "../pages/History"

export const privateRouters = [
    {path: "/create", element: CreatePost},
    {path: "/posts", element: Posts},
    {path: "/posts/:id", element: Post},
    {path: "/user/:id", element: User},
    {path: "/settings", element: Settings},
    {path: "/history", element: History},
]

export const publicRouters = [
    {path: "/", element: Main},
]