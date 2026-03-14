import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { Search } from "./components/Search";
import { useState } from "react";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import AboutUs  from "./components/AboutUs";
import AboutUsCombined  from "./components/AboutUsCombined";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { useCheckOnlineStatus } from "./customHooks/useCheckOnlineStatus.js";
import cat from "./assets/touch_grass_offline.jpeg"
const AppLayout = ()=>{
    const onlineStatus = useCheckOnlineStatus();
    
    
    if(onlineStatus==false){
        return<div style={{display:"flex",alignItems:"center",justifyContent:"center",
        height:"100vh",width:"100vw"
    }}>
        <img src={cat}/>
        <h1>You are offline. Check your internet!</h1>
    </div>
    }

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
        element:<AboutUs />
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


