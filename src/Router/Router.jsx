import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import ServicesCard from "../Pages/Home/Services/ServicesCard";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import SingUp from "../Pages/SingUp/SingUp";
import ErrorePage from "../Shered/ErrorePage/ErrorePage";
import PrivateRoutes from "./Private/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorePage></ErrorePage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>,
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://genius-car-server-woad-nu.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>,
            },
            {
                path: '/service',
                element: <Services></Services>
            }
        ]
    },
])


export default router;