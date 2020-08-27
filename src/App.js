import React from "react";
import Photo from './Components/Photo';
import nasalogo from './assets/nasalogo.png';
import { Container, CardImg } from 'reactstrap';

import "./App.css";

function App() {
  return (
    <Container>
    <div className="App">
      <CardImg style={styles.nasalogo} src={nasalogo} alt='Nasa Logo'/>
     <Photo />
    </div>
    </Container>
  );
}

const styles = {
  nasalogo: {
    height: "111px",
    width: "127.5px",
  },
}

export default App;
