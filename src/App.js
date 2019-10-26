import React from 'react';
import Boxes from "./Boxes";


const styless = {
  fontStyle : {
    textAlign: "center"
  }
}
function App() {

  
  return (
    <div>
      <h1 style={styless.fontStyle}>DBZ Memory Game</h1>
      <h2 style={styless.fontStyle}>Click each character once and you win!</h2>

      <Boxes />
    </div>
  );
}

export default App;
