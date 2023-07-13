import React from "react"
import '../index.css'
const FunctionalComponent=()=>{
     return(
        <div class="box boxone">
        <h1 class="heading">This is created using Functional Component</h1>
       <br/>
        <p class="ext">This is done using external CSS</p> <br/>
        <p style={{color:"blue",textAlign:"center"}}>This is done using inline CSS</p>
        </div>
     )
}
export default FunctionalComponent;