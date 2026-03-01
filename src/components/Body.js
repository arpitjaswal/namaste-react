import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { ShimmerUI } from "../shimmer/ShimmerUI"

const Body = ({topRated})=>{
    const [restaurantData,setRestaurantData] = useState([])

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        try {
            fetchData();
        } catch (error) {
            console.log(error)
        }
    },[])

   useEffect(()=>{
     if(topRated){
        const newArray = restaurantData.filter(res=>{
            return res['info'].avgRating>4.6;
        })
        setRestaurantData(newArray)
    }else{
        setRestaurantData(restaurantData)
    }
    
   },[topRated])

   if(restaurantData?.length==0){
    return <ShimmerUI/>
   }
                           
    return <div id="body-container" >
        
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