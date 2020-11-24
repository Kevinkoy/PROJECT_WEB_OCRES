import React from 'react';
import './App.css';
/// Components
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2'

/// Grid = Gérer le display
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
<<<<<<< Updated upstream
=======
import Widget7 from './Components/Widget7';
>>>>>>> Stashed changes

class App extends React.Component {
 
  render() {

   

    return (

      <div>
        <Container>
          <Row>
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
            <Col sm={6}>
<<<<<<< Updated upstream
              <Widget4/>
=======
              <Widget7/>
>>>>>>> Stashed changes
            </Col>
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
