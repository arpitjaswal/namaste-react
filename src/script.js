import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { Search } from "./components/Search";
import { useState } from "react";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import AboutUsCombined  from "./components/AboutUsCombined";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
const AppLayout = ()=>{
    


    return <div>
    <Header/>
    <div id="btn-container">
        
               
            </div>
     
        <Outlet/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[{
            path:"/",
            element:<Body />
        },
    {
        path:"/aboutus", 
        element:<AboutUsCombined />
    },
    {
        path:"/contactus",
        element:<ContactUs/>
    },
    {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>,
        errorElement:<Error/>
    }
        ],
         errorElement:<Error/>
    }
])



//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)


