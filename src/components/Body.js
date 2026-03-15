import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { ShimmerUI } from "../shimmer/ShimmerUI"
import { SWIGGY_API_URL } from "../utils/constants";
import { WithLabel } from "../HOF/WithLabel";
const Body = ()=>{
    const [searchTerm, setSearchTerm] = useState("")
    const [restaurantData,setRestaurantData] = useState([])
    const [topRated,setTopRated]=useState(false)
    const [wholeData,setWholeData] = useState([])
    async function fetchData(){
        const data = await fetch(SWIGGY_API_URL)
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setWholeData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //testing useEffect
    useEffect(()=>{
        console.log("useEffect should console once")
    },[])
    

    useEffect(()=>{
        try {
            fetchData();
        } catch (error) {
            console.log(error)
        }
    },[])
 
    useEffect(()=>{
        setRestaurantData(wholeData)
    },[wholeData])

    useEffect(()=>{
        if(searchTerm){
  const newArray = wholeData.filter(res=>{
            return res['info'].name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setRestaurantData(newArray)
        }else{
  setRestaurantData(wholeData)
        }
        console.log("useEffect should console with search change")
    },[searchTerm])

   function toggle(){
    if(topRated){
        const newArray = wholeData.filter(res=>{
            return res['info'].avgRating>4.6;
        })
        setRestaurantData(newArray)
        setTopRated(false)
    }else{
        
        setRestaurantData(wholeData)
        setTopRated(true)
    }
   }
 
   console.log(restaurantData)

       //conditonally rending shimmer ui or the component using ternary operator                    
    return wholeData?.length==0?<ShimmerUI/>:<div className="flex-col m-2 p-2">
        <div id="search-container" className="flex justify-center align-center mb-1">
        <input  className="border-2 p-3 w-100" onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}></input>
             <button id="button-toprated" className="bg-amber-300 border-2 ml-1 p-3" onClick={toggle}>Top Rated</button>
    </div>

    <div  className="m-2 p-2 flex flex-wrap justify-center">
        {
            restaurantData && restaurantData.map(r=>{
                const count=0;
                return <div className="border-red-500 border-3 m-2 p-3 w-65 rounded-lg  hover:bg-blue-200"  key={r['info'].id}>
                   {
                    WithLabel(RestaurantCard,r)
                   }
                </div>
            })
        }
        <div/>
    </div>
    </div>
}

export default Body