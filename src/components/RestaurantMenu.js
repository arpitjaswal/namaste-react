import { useState,useEffect } from "react";
import {SWIGGY_RES_API} from "../utils/constants"
import { ShimmerUI } from "../shimmer/ShimmerUI";
import { useRestaurantMenu } from "../customHooks/useRestaurantMenu";
const RestaurantMenu = async ()=>{
    const [resData,menu] = await useRestaurantMenu();

    if(menu==null)return <ShimmerUI/>
    return (
        <div>
            <h1>{resData?.page_info?.ogTitle}</h1>
            <h2>{resData?.page_info?.ogDescription}</h2>
            <h2>{resData?.location?.entityName}</h2>
            <div>
                {
                menu.map(ele=><div key={ele?.menu?.id}>
                    <h2 style={{color:'red'}}>{ele?.menu?.name}</h2>
                    
                    {ele?.menu?.categories?.map((it)=><div key={it?.category?.id} style={{color:'blue'}}>
                        {it?.category?.name || ""} 
                        {it?.category?.items?.map((i)=><h6 key={i?.id} style={{color:'gray'}}>
                            {i?.item?.name}
                            </h6>)}  
                            </div>  
                    )}
                </div>)
            }
            </div>
        </div>
    )
}

export default RestaurantMenu;