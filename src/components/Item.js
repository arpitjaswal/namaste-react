import { useState } from "react"


export const Item = ({it})=>{
    const [showItem,setShowItem] = useState(false)
    return<>
  <div key={it?.category?.id}>
      {
        showItem && <div className="bg-red-400 m-2 p-2 " key={it?.category?.id} >
                        {it?.category?.name || ""} 
                        {it?.category?.items?.map((i)=><div className="flex border-4" key={i?.item?.id}>
                            <h6 className="bg-amber-300 border-2 " >
                            {i?.item?.name}
                            </h6>
                            <img className="w-50 h-50" src={i?.item?.item_image_url || "http://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>
                             </div>
                        )}  
                            </div>  
    }
  </div>
    </>
}