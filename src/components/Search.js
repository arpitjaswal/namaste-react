import { useState } from "react"
export const Search = ({sendTopParent})=>{
    const [searchTerm, setSearchTerm] = useState("")
    return <div id="search-container">
        <input  onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}></input>
        <button style={{color:'yellow',
        borderRadius:"12px",
        cursor:"pointer",
            backgroundColor:"black",
        marginLeft:"5vw"}}
            onClick={()=>{
                console.log(searchTerm)
                sendTopParent(searchTerm)
            }}>Search</button>
    </div>
}