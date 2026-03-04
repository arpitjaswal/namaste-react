import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { ShimmerUI } from "../shimmer/ShimmerUI"

const Body = ({topRated})=>{
    const [searchTerm, setSearchTerm] = useState("")
    const [restaurantData,setRestaurantData] = useState([])
    const [wholeData,setWholeData] = useState([])
    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
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

   useEffect(()=>{
     if(topRated){
        const newArray = wholeData.filter(res=>{
            return res['info'].avgRating>4.6;
        })
        setRestaurantData(newArray)
    }else{
        setRestaurantData(wholeData)
    }
    
   },[topRated])

       //conditonally rending shimmer ui or the component using ternary operator                    
    return wholeData?.length==0?<ShimmerUI/>:<div id="main-cont">
        <div id="search-container">
        <input style={{width:"32vw"}} onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}></input>
    </div>
    <div id="body-container" >
        {
            restaurantData && restaurantData.map(r=>{
                return <div id="restaurant-cards" key={r['info'].id}>
                    <RestaurantCard  name={r['info'].name} location={r['info'].locality} 
                    avgRating={r['info'].avgRating} 
                    totalRatingsString = {r['info'].totalRatingsString} 
                imageurl={r['info'].cloudinaryImageId}/>
                </div>
            })
        }
        <div/>
    </div>
    </div>
}

export default Body