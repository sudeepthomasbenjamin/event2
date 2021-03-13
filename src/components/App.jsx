import React, { useState } from "react";

function App() {
 
 var [init,setStatefn]=useState(false)
 
 function over()
 {
setStatefn(true)
 }
 
 function out()
 {
setStatefn(false)
 }
 
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : init ? "black" : "pink"}} onMouseOver={over} onMouseOut={out}>Submit</button>
    </div>
  );
}

export default App;
