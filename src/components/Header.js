import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{
    const [logButton, setLogButton] = useState(false)
    const UserContextObject = useContext(UserContext)
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(UserContextObject)
    return <div id="header-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}} className=" border-2 sm:bg-blue-400 rounded-lg mb-0.5 bg-amber-400">
        <div style={{width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img id="logo" style={{width:"100px",height:"50 px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1640812570037-ea415861315b"></img>
        </div>
        <div style={{width:"90vw"}}>
            <ul style={{listStyleType:"none",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <li className="nav-item bg-red-400 p-2 rounded-lg border-2">
                    <Link to={{
    pathname: "/",
  }}>Home</Link>
                </li>
                <li className="nav-item bg-red-400 p-2 rounded-lg border-2">
                    <Link to={{
                        pathname:"/aboutus"
                    }}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item bg-red-400 p-2 rounded-lg border-2">
                   <Link to={{
                    pathname:"/cart"
                   }}>
                    Cart ({cartItems?.length})
                   </Link>
                </li>
                <li className="nav-item bg-red-400 p-2 rounded-lg border-2">
                        <Link to={{
        pathname: "/contactus",
    }}>Contact Us</Link>
                </li>
                <button className="nav-item border-2 bg-amber-200 w-20 rounded-lg p-2" onClick={()=>{
                    setLogButton(prev=>!prev)
                }}>
                    {logButton?"Login":"Logout"}
                </button>
                <li className="bg-amber-200 p-10 ">
                    {UserContextObject.loggedInUser}
                </li>
            </ul>
        </div>
    </div>
}
export default Header;