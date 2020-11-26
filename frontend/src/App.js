import React from 'react';
import './App.css';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

///Widgets
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
import Widget6 from './Components/Widget6';
import Widget7 from './Components/Widget7';
import Widget9 from './Components/Widget9';
import Widget8 from './Components/Widget8';

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
              <Widget2/>
            </Col>
            <Col sm={6}>
              <Widget3/>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Widget8/>
            </Col>
            <Col sm={6}>
              <Widget7/>
            </Col>
            <Col sm={6}>
              <Widget9/>

            </Col>
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
