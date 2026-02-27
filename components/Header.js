import {LOGO_URL} from "../utils/constants"


export const Header = ()=>{
    return <div id="header-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img id="logo" style={{width:"100px",height:"50 px",borderRadius:"80px"}} src={LOGO_URL}></img>
        </div>
        <div style={{width:"90vw"}}>
            <ul style={{listStyleType:"none",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    About Us
                </li>
                <li className="nav-item">
                    Cart
                </li>
                <li className="nav-item">
                    Contact Us
                </li>
            </ul>
        </div>
    </div>
}