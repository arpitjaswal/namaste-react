import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "this is a text");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//type 2
const RenderFunctionalComponent2 = ()=><h1 className="heading2">coool devlper type shi</h1>

//functional component type 1
//component compoitions type shi
const RenderFunctionalComponent = ()=>{
    return <div>
        <RenderFunctionalComponent2/>
          <h1 className="heading">
        
        functional component hai laadle
    </h1>
    </div>
  
}


const helper = <div>
    <RenderFunctionalComponent2/>
    <RenderFunctionalComponent2></RenderFunctionalComponent2>
    {RenderFunctionalComponent2()}
</div>


const helper2 = React.createElement("div",{},[ ])

//jsx syntax
const jsxHeading = <h1 tabindex="0">this is jsx text</h1>
const practicingJSXbrother = <a tabindex="0" href="https://www.instagram.com/">go to instagram. cz brain rot</a>
console.log(jsxHeading)

root.render(helper);
