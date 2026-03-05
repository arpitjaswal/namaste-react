import { useState } from "react";
import { Link } from "react-router";

const Header = ()=>{
    const [logButton, setLogButton] = useState(false)
    return <div id="header-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img id="logo" style={{width:"100px",height:"50 px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1640812570037-ea415861315b"></img>
        </div>
        <div style={{width:"90vw"}}>
            <ul style={{listStyleType:"none",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <li className="nav-item">
                    <Link to={{
    pathname: "/",
  }}>Home</Link>
                </li>
                <li className="nav-item">
                    <a href="/aboutus">About Us</a>
                </li>
                <li className="nav-item">
                    Cart
                </li>
                <li className="nav-item">
                        <Link to={{
        pathname: "/contactus",
    }}>Contact Us</Link>
                </li>
                <button className="nav-item" onClick={()=>{
                    setLogButton(prev=>!prev)
                }}>
                    {logButton?"Login":"Logout"}
                </button>
            </ul>
        </div>
    </div>
}
export default Header;