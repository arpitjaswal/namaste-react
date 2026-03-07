import AboutUsClass from "./AboutUsClass"
import { AboutUs } from "./AboutUs"
import { Component } from "react"

class AboutUsCombined extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent did mount")
    }

    render(){
        console.log("parent render")
         return<>
<h1>class</h1>
<AboutUsClass name={"Arpit Jaswal (class)"}/>
<AboutUsClass name={"salman khan (class)"}/>
<AboutUsClass name={"frank ocean (class)"}/>
    </>
    }
}


function AboutUsCombined2(){
    return<>
<h1>class</h1>
<AboutUsClass name={"Arpit Jaswal (class)"}/>
<h1>function</h1>
<AboutUS name={"Arpit Jaswal(function)"}/>
    </>
}

export default AboutUsCombined