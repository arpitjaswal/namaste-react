import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { Search } from "./components/Search";
import { useState } from "react";
import { createBrowserRouter,RouterProvider } from "react-router";
import { AboutUS } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Error } from "./components/Error";
const AppLayout = ()=>{
    const [topRated,setTopRated] = useState(false);
    const handleTopRatedToggle = ()=>{
        setTopRated(prev=>!prev)
    }


    return <div>
    <Header/>
    <div id="btn-container">
        
                <button id="button-toprated" onClick={handleTopRatedToggle}>Top Rated</button>
            </div>
    
    <Body topRated={topRated}/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/aboutus",
        element:<AboutUS/>,
        errorElement:<Error/>
    },
    {
        path:"/contactus",
        element:<ContactUs/>,
        errorElement:<Error/>
    }
])

//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)


