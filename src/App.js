import React from "react";
import Photo from './Components/Photo';
import nasalogo from './assets/nasalogo.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={nasalogo} />
     <Photo />
    </div>
  );
}

export default App;
