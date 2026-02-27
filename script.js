import ReactDOM from "react-dom/client";
import "./script.css"
import { Header } from "./components/Header";
import { Body } from "./components/Body";





const AppLayout = ()=>{
    return <div>
    <Header/>
    <Body/>
    </div>
}


//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


