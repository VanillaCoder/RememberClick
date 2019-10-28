import React from 'react';
import Boxes from "./Boxes";
import "./App.scss";


const styless = {
  fontStyle : {
    textAlign: "center"
  }
}
function App() {

  
  return (
    <div>
      <h2 style={styless.fontStyle}>DBZ Memory Game</h2>
      <h3 style={styless.fontStyle}>Hover over each tile to uncover a character.<br></br> Click Each character once and you win!</h3>

      <Boxes />
    </div>
  );
}

export default App;
