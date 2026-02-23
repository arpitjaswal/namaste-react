import React from "react"
import ReactDOM from "react-dom/client"



const anchor = React.createElement("a",{id:"anc",href:"https://www.dhli.in/uploaded_files/resumes/resume_3404.pdf"},"react")
const likhde = React.createElement("h3",{id:"likh"},"raand")
const parent  = React.createElement("div",{id:"pyo"},[anchor,likhde])
const rootDiv = ReactDOM.createRoot(document.getElementById("root"))
const pyodapyo = React.createElement("div",{id:'saareyaanDaBudhdha'},[parent,parent])
rootDiv.render(pyodapyo) 






