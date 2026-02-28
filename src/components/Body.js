import RestaurantCard from "./RestaurantCard"
import {DUMMY_DATA as restaurants}  from "../utils/dummyData.js"
import { useState, useEffect } from "react"
const Body = ({topRated})=>{
    const [restaurantData,setRestaurantData] = useState([])
   useEffect(()=>{
     if(topRated){
        const newArray = restaurants.filter(res=>{
            return res['info'].avgRating>4.6;
        })
        setRestaurantData(newArray)
    }else{
        setRestaurantData(restaurants)
    }
    
   },[topRated])
                           
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