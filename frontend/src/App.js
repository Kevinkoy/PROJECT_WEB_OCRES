import React from 'react';
import './App.css';
/// Components
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2'

/// Grid = Gérer le display
<<<<<<< Updated upstream
import { Container, Row, Col } from 'react-grid-system';
=======
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
>>>>>>> Stashed changes

class App extends React.Component {
 
  render() {
<<<<<<< Updated upstream
=======

   

>>>>>>> Stashed changes
    return (

      <div>
        <Container>
          <Row>
<<<<<<< Updated upstream
            <Col sm={4}>
              <Widget1 />
            </Col>
            <Col sm={4}>
            
        </Col>
            <Col sm={4}>
            <Widget2/>
        </Col>
=======
            <Col sm={6}>
              <Widget1 />
            </Col>
            <Col sm={6}>
              <Widget3/>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Widget4/>
            </Col>
>>>>>>> Stashed changes
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
