import { useState } from "react"


export const useRestaurantMenu = async function(){
    const [resData,setResData] = useState(null)
    const [menu,setMenu] = useState(null)
    const data = await fetch(SWIGGY_RES_API)
    const jsonData = await data?.json();
    setResData(jsonData);
    console.log(jsonData)
    setMenu(jsonData?.page_data?.order?.menuList?.menus)
    return [resData,menu];
}