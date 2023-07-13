import React,{Component} from "react";
class ClassComponent extends Component{
    render(){
        return(
            <div class="box boxtwo">
            <h1 class="heading">This is created using class Component</h1> <br/>
            <p class="ext">This is done using external CSS</p> <br/>
            <p style={{color:"blue",textAlign:"center"}}>This is done using inline CSS</p>
            </div>
        )
    }
}
export default ClassComponent;