import { Component } from "react";

class AboutUsGrandChild extends Component{

    //constructor
    constructor(props){
        super(props)
        console.log(props.title+"constructor")
    }

    componentDidMount(){
        console.log(this.props.title+"component did mount")
    }


    render(){
        console.log(this.props.title+"render")
        const {title} = this.props;
        return <div>
            <h6>Grand Child: {title}</h6>
        </div>
    }

}

export default AboutUsGrandChild;