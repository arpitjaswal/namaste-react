import { useNavigate } from "react-router"


const RestaurantCard = ({avgRating,totalRatingsString,name,location,imageurl})=>{
    const navigate = useNavigate();
    return <div className="flex-col justify-center items-center flex-wrap">
        <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageurl}></img>
        <h4 className="m-2 p-2 h-10">{name}</h4>
        <h5 className="m-2 p-2 h-10">{location}</h5>
        <h6 className="m-2 p-2">Rating: {avgRating+" ("+totalRatingsString+")"}</h6>
        <button className="w-50 cursor-pointer bg-amber-500 rounded-lg m-4 p-4" onClick={()=>{
            navigate("/restaurants/69")
        }}>Browse Dishes</button>
    </div>
}

export default RestaurantCard