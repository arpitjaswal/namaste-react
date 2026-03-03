import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { Search } from "./components/Search";
import { useState } from "react";

const AppLayout = ()=>{
    const [topRated,setTopRated] = useState(false);
    const [searching,setSearching] = useState(false);
    const [searchTerm,setSearchTerm] = useState("")
    const handleTopRatedToggle = ()=>{
        setTopRated(prev=>!prev)
    }

    function sendTopParent(searchTerm){
        if(searchTerm.length>0){
            setSearching(true);
            setSearchTerm(searchTerm)
        }else{
            setSearching(false);
            setSearching(searchTerm)
        }
    }

    return <div>
    <Header/>
    <div id="btn-container">
        <Search sendTopParent={sendTopParent}/>
                <button id="button-toprated" onClick={handleTopRatedToggle}>Top Rated</button>
            </div>
    
    <Body topRated={topRated} searching={searching}
    searchTerm={searchTerm}/>
    </div>
}

//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


