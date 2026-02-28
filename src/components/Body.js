import RestaurantCard from "./RestaurantCard"
import {DUMMY_DATA as restaurants}  from "../utils/dummyData.js"
import { useState, useEffect } from "react"
const Body = ({topRated})=>{
    const [restaurantData,setRestaurantData] = useState([])
    const [filteredData,setFilteredData] = useState([])
    const [actualData,setActualData] = useState([])
     useEffect(()=>{
        setRestaurantData(restaurants);
        const newArray = restaurants.filter(element=>{
            return element['info'].avgRating>4.6;
        })
        setFilteredData(newArray);
    },[restaurants])

    useEffect(()=>{
        if(topRated){
            setActualData(filteredData)
        }else{
            setActualData(restaurantData)
        }
    },[topRated,restaurantData,filteredData])
                           
    return <div id="body-container" >
        
        {
            setActualData && actualData.map(r=>{
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