import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"

//restaurant card
const RestaurantCard = ({name,location,imageurl})=>{

    return <div id="restaurant-item" >
        <img style={{borderRadius:"12px"}} width="100" height="100" src={imageurl}></img>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <button style={{margin:"10px", padding:"10px",fontFamily:"monospace",backgroundColor:"gray",color:"white",border:"2px red solid"}}>Browse Dishes</button>
    </div>
}

const Header = ()=>{
    return <div id="header-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img id="logo" style={{width:"100px",height:"50 px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1640812570037-ea415861315b"></img>
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

const Body = ()=>{
    const restaurants = [
        {
            "id":1,
            "imageurl":"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            "name":"Salad Days",
            "location":"Noida"
        },
        {
            "id":2,
            "imageurl":"https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df",
            "name":"Cultured Burgers",
            "location":"Noida"
        },
        {
            "id":3,
            "imageurl":"https://images.unsplash.com/photo-1642821372719-46b426afd8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "name":"Gurung's Kitchen",
            "location":"Noida"
        }
    ]
    return <div id="body-container" >
        {
            restaurants.map(r=>{
                return <div id="restaurant-cards" key={r.id}>
                    <RestaurantCard  name={r.name} location={r.location} 
                imageurl={r.imageurl}/>
                </div>
            })
        }
    </div>
}

const AppLayout = ()=>{
    return <div>
    <Header/>
    <Body/>
    </div>
}


//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


