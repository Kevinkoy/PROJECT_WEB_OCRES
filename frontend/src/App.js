import React from 'react';
import './App.css';
/// Grid = Gérer le display
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

/// Components
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2'
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
import Widget7 from './Components/Widget7';

class App extends React.Component {
 
  render() {

    return (

      <div>
        {/* Commentaire */}
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
            <Col sm={4}>
              <Widget4/>
            </Col>
            <Col sm={4}>
              <Widget5/>
            </Col>
            <Col sm={4}>
              <Widget7/>
            </Col>
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
