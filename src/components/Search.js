import { useState } from "react"
export const Search = ({sendTopParent})=>{
    const [searchTerm, setSearchTerm] = useState("")
    return <div id="search-container">
        <input  onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}></input>
        <button className="border-4"
            onClick={()=>{
                console.log(searchTerm)
                sendTopParent(searchTerm)
            }}>Search</button>
    </div>
}