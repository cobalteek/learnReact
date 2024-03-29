import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostsIdPage from "../pages/PostsIdPage";
import Login from "../pages/Login";
export const privateRoutes = [
    { path: "/about", element: <About/>, exact: true },
    { path: "/posts", element: <Posts/>, exact: true },
    { path: "/posts/:id", element: <PostsIdPage/>, exact: true },
    { path: "*", element: <Error/>, exact: true },
]

export const publicRoutes = [
    { path: "*", element: <Login/>, exact: true },
]