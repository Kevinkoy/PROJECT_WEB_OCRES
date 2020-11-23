import React from 'react';
import './App.css';
/// Components
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2'

/// Grid = Gérer le display
import { Container, Row, Col } from 'react-grid-system';

class App extends React.Component {

  render() {
    return (

      <div>
        <Container>
          <Row>
            <Col sm={4}>
              <Widget1 />
            </Col>
            <Col sm={4}>
            
        </Col>
            <Col sm={4}>
            <Widget2/>
        </Col>
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
