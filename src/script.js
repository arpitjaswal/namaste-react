import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { Search } from "./components/Search";
import { useState } from "react";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import { AboutUS } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
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
        element:<AboutUS/>
    },
    {
        path:"/contactus",
        element:<ContactUs/>
    }
        ],
         errorElement:<Error/>
    },
    
])



//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)


