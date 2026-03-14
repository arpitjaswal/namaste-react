import { useEffect, useState } from "react"
import {SWIGGY_RES_API} from "../utils/constants"

export function useRestaurantMenu(){
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
     fetchData()
     console.log(resData)
   },[])
    return [resData,menu];
}