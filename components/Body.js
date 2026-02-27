import {DUMMY_DATA} from "/utils/dummyData"
import { RestaurantCard } from "./RestaurantCard"
export const Body = ()=>{
    let restaurants= DUMMY_DATA
    return <div id="body-container" >
        {
            restaurants.map(r=>{
                return <div id="restaurant-cards" key={r['info'].id}>
                    <RestaurantCard  name={r['info'].name} location={r['info'].locality} 
                imageurl={r['info'].cloudinaryImageId}/>
                </div>
            })
        }
    </div>
}