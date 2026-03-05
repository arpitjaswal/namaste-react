import { useState,useEffect } from "react";
import {SWIGGY_RES_API} from "../utils/constants"
import { ShimmerUI } from "../shimmer/ShimmerUI";
const RestaurantMenu = ()=>{
    const [resData,setResData] = useState(null)
    const [menu,setMenu] = useState(null)
    async function fetchData(){
        const data = await fetch(SWIGGY_RES_API)
        const jsonData = await data?.json();
        setResData(jsonData);
        console.log(jsonData)
        setMenu(jsonData?.page_data?.order?.menuList?.menus)
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(menu==null)return <ShimmerUI/>
    console.log(menu)
    

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