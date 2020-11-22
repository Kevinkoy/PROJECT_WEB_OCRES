import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
/// Grid = Gérer le display
import { Container, Row, Col } from 'react-grid-system'; 

class App extends React.Component {

  render() {
return (
    <div>
    <Container>
  <Row>
    <Col sm={4}>
      <Widget1></Widget1>
    </Col>
    <Col sm={4}>
      <Widget1></Widget1>
    </Col>
    <Col sm={4}>
      <Widget1></Widget1>
    </Col>
  </Row>
</Container>
    </div>  
  );
  }

}

export default App;
