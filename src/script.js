import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

const AppLayout = ()=>{
    const [topRated,setTopRated] = useState(false)

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

//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


