import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SignUp from "../Pages/Login&SignUp/SignUp";
import Login from "../Pages/Login&SignUp/Login";
import ToyDetails from "../Pages/Home/Toy/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;