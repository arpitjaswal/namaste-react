import { useState,useEffect } from "react";
import { ShimmerUI } from "../shimmer/ShimmerUI";
import { useRestaurantMenu } from "../customHooks/useRestaurantMenu";
import { Card } from "./Card";
const RestaurantMenu = ()=>{
    const [resData,menu] = useRestaurantMenu();
    const [ci,setci] = useState(-1)
    
    function setcurrentindex(i){
        if(ci==i){
            setci(-1)
        }else{
            setci(i)
        }
    }

    if(menu==null || resData == null)return <ShimmerUI/>

    return (
        <div key={menu?.id} className="flex-col justify-center items-center text-center mt-2">
            <h1 className="text-xl font-bold mb-1  bg-amber-200">{resData?.page_info?.ogTitle}</h1>
            <h2 className=" bg-sky-200 mb-1">{resData?.page_info?.ogDescription}</h2>
            <h2 className=" bg-gray-200 mb-1">{resData?.location?.entityName}</h2>
            <div >{menu.map((ele,index)=><div key={ele?.menu?.id} ><Card ele={ele} index={index} setcurrentindex={setcurrentindex} ci={ci} /></div>)}
            </div>
        </div>
    )
}

export default RestaurantMenu;