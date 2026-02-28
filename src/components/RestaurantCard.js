


const RestaurantCard = ({avgRating,totalRatingsString,name,location,imageurl})=>{

    return <div id="restaurant-item" >
        <img style={{borderRadius:"12px"}} width="100" height="100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageurl}></img>
        <h4>{name}</h4>
        <h5>{location}</h5>
        <h6>Rating: {avgRating+" ("+totalRatingsString+")"}</h6>
        <button style={{padding:"10px",fontFamily:"monospace",backgroundColor:"gray",color:"white",border:"2px red solid",cursor:"pointer"}}>Browse Dishes</button>
    </div>
}

export default RestaurantCard