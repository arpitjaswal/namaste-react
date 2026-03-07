import React from "react";

class AboutUsClass extends React.Component{

    constructor(props){
        super(props)
        console.log("child constructor")
        this.state={
            count:0,
            count2:0
        }
    }

    componentDidMount(){
        console.log("child component did mount")
    }

    


    render(){
        const {count, count2} = this.state;
        const {name} = this.props;
        console.log("child render")
       return <div>
        <h1>this is about us</h1>
        <h3>Name: {name}</h3>
        <h3>Count: {count}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count Increase</button>
    </div>
    }
}

export default AboutUsClass