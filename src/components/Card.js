import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItems } from "../redux/cartSlice";
export const Card =({ele,index,setcurrentindex,ci})=>{
    const dispatch = useDispatch();
    return<div className="mb-1 ml-5 mr-5" key={ele?.menu?.id}>
                    <h2 className="rounded-lg bg-olive-300 border-2 border-amber-600 cursor-pointer"
                    onClick={()=>{
                       setcurrentindex(index)
                    }}>{ele?.menu?.name}</h2>                  
                    { ci==index && ele?.menu?.categories?.map((it)=><div className="bg-red-200 m-2 p-10 flex-col" key={it?.category?.id} >
                        {it?.category?.name || ""} 
                        {it?.category?.items?.map((i)=><div className=" bg-red-400 flex justify-evenly items-center" key={i?.item?.id}>
                            <h6 className="bg-amber-300 border-2 m-4 p-4 w-200">
                            {i?.item?.name}
                            </h6>
                            <img className="w-30 h-30" src={i?.item?.item_image_url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>
                            <button className="border-2 p-2 rounded-2xl bg-yellow-300 cursor-pointer" onClick={()=>{
                                dispatch(addItems(i));
                            }}>Add to Cart</button>
                             </div>
                        )}  
                            </div>  
                    )}
                </div>
}