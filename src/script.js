import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";

import { Search } from "./components/Search";
import { useState,lazy,Suspense } from "react";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";

import AboutUsCombined  from "./components/AboutUsCombined";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { useCheckOnlineStatus } from "./customHooks/useCheckOnlineStatus.js";
import cat from "./assets/touch_grass_offline.jpeg"
import { UserContext } from "./utils/UserContext.js";

const AboutUs = lazy(()=>import("./components/AboutUs"))
const Body = lazy(()=>import("./components/Body"))
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
            element:<Suspense fallback={<div>Loading body..</div>}>
           <Body />
        </Suspense>
        },
    {
        path:"/aboutus", 
        element:<Suspense fallback={<div>Loading about us...</div>}>
            <AboutUs />
        </Suspense>
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


