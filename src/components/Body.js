import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { ShimmerUI } from "../shimmer/ShimmerUI"

const Body = ({topRated,searching
    ,searchTerm
})=>{
    const [restaurantData,setRestaurantData] = useState([])
    const [wholeData,setWholeData] = useState([])
    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setWholeData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log(searching)

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
        if(searching){
  const newArray = wholeData.filter(res=>{
    console.log(searching)
    console.log(wholeData)
    console.log(res['info'].name)
            return res['info'].name.includes(searchTerm);
        })
        setRestaurantData(newArray)
        }else{
  setRestaurantData(wholeData)
        }
    },[searching])

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
    return restaurantData?.length==0?<ShimmerUI/>:<div id="body-container" >
        
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
    </div>
}

export default Body