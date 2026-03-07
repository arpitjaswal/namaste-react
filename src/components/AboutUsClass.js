import React from "react";
import AboutUsGrandChild from "./AboutUsGrandChild"
class AboutUsClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props.name+" child constructor")
        this.state={
            count:0,
            count2:0
        }
    }

    componentDidMount(){
        console.log(this.props.name+" child component did mount")
    }

    


    render(){
        const {count, count2} = this.state;
        const {name} = this.props;
        console.log(name+ " child render")
       return <div>
        <h1>this is about us</h1>
        <h3>Name: {name}</h3>
        <h3>Count: {count}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count Increase</button>
        <AboutUsGrandChild title={"grand child 1"} />
        <AboutUsGrandChild title={"grand child 2"} />
        <AboutUsGrandChild title={"grand child 3"} />
    </div>
    }
}

export default AboutUsClass