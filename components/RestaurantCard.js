import {SWIGGY_IMG} from "../utils/constants"

export const RestaurantCard = ({name,location,imageurl})=>{
    return <div id="restaurant-item" >
        <img style={{borderRadius:"12px"}} width="100" height="100" src={SWIGGY_IMG+imageurl}></img>
        <h3>{name}</h3>
        <h4>{location}</h4>
        <button style={{margin:"10px", padding:"10px",fontFamily:"monospace",backgroundColor:"gray",color:"white",border:"2px red solid",cursor:"pointer"}}>Browse Dishes</button>
    </div>
}