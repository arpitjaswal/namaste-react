import React from "react";

class AboutUsClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }


    render(){
       return <div>
        <h1>this is about us</h1>
        <h3>Name: {this.props.name}</h3>
    </div>
    }
}

export default AboutUsClass