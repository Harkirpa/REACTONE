// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{useState}from "react"
import ClassComponent from "./Component/ClassComponent";
import FunctionalComponent from "./Component/FunctionalComponent";
import './index.css'
function App(){
       const[fState,setfState]=useState(false)
       const[cState,setcState]=useState(false)
  return(
    <>
    <h1 class="heads" style={{textAlign:"center"}}>Styling using Functional and Class Component</h1>
    <button class="func" onClick={()=>setfState(!fState) }>To see Styling in Functional Components</button>
    <button  class="class1" onClick={()=>setcState(!cState)}>To see Styling in Class Components</button>
    {fState ? <FunctionalComponent/>:""}    
    {cState ? <ClassComponent/>:""}
    </>
  )
}
export default App;