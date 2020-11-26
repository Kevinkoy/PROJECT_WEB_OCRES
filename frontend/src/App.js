import React from 'react';
import './App.css';
/// Grid = Gérer le display
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

/// Components
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';
//import Widget2 from './Components/Widget2'
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
//import Widget7 from './Components/Widget7';
import Button from '@storybook/react/dist/demo/Button';
import Admin from './Admin';
//import { action } from '@storybook/addon-actions';

/// Routes

import { Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div>
        <Navbar/> 
        {/* CONTAINERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}
        <Container>
          <Row>    {/* 1er LIGNE */}
            <Col sm={4}>
              <Widget1 /> {/* Widget */}
            </Col>
            <Col sm={4}>
              <Widget3 /> {/* Widget */}
            </Col>
            <Col sm={4}>

            </Col>
          </Row>
          <Row> {/* 2EME LIGNE */}
            <Col sm={4}>
              <Widget4 /> {/* Widget */}
            </Col>
            <Col sm={4}>
              <Widget5 /> {/* Widget */}
            </Col>
            <Col sm={4}>
              {/* Vide */}
            </Col>
          </Row>
        </Container>

      </div>
    )
  }

}

export default App;
