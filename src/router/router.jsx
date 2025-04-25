import{
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/signin',
                element:<SignIn></SignIn>
            }
            
        ]
    },
]);
export default router;