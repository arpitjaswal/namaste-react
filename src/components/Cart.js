import { useDispatch, useSelector } from "react-redux"

import { clearItems } from "../redux/cartSlice"

export default function(){
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    return(
        <div className="flex-col items-center justify-center w-screen">
            <h2 className=" bg-red-200 rounded-3xl p-5 text-center text-5xl">Cart Items</h2>
            {
                cartItems && cartItems.map((item)=><div key={item?.item?.id} className="text-center m-5 p-5 bg-amber-100
                rounded-2xl">
                    {item?.item?.name}
                </div>)
            }
            <button onClick={()=>{
                alert("paisa hi paisa h bhai pe")
            }} className="w-screen border-8 p-2 bg-red-400 rounded-3xl text-2xl cursor-pointer">Proceed to Checkout</button>
             <button onClick={()=>{
                dispatch(clearItems());
            }} className="w-screen border-8 p-2 bg-red-400 rounded-3xl text-2xl cursor-pointer">Clear Cart</button>
        </div>
    )
}