import { Component } from "react";


class AboutUs extends Component{
    constructor(props){
        super(props)
        this.state ={
            userInfo:{}
        }
    }

    async componentDidMount(){
        try {
            const userProfile = await fetch("https://api.github.com/users/arpitjaswal")
            const user = await userProfile.json();
            console.log(user)
            this.setState({
                userInfo:user
            })
            const interval = 1000;
            this.timer = setInterval(() => {
                console.log("this is a set interval")
            }, interval);


        } catch (error) {
            
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log("prev state")
        console.log(prevState.userInfo)
        console.log("current state")
        console.log(this.state.userInfo)
        console.log("component did update")

    }

    componentWillUnmount(){
        console.log("compornnt did unmount")
        clearInterval(this.timer)
    }

    render(){
        const {userInfo}=this.state;
        return<div style={{display:"flex",justifyContent:"space-between",width:"100vw"}}>
            <div style={{display:"flex",margin:"auto",flexDirection:"column"}}>
            <h1>{userInfo.name}</h1>
            <h2>Public repos:{userInfo.public_repos}</h2>
            <h2>Public gists:{userInfo.public_gists}</h2>
            </div>
            <div style={{display:"flex",margin:"auto"}}>
                <img src={userInfo.avatar_url}></img>
            </div>
            
            
        </div>
    }
}

export default AboutUs















// export function AboutUS({name}){
//     return <div>
//         <h1>this is about us</h1>
//         <h3>Name: {name}</h3>
//     </div>
// }


