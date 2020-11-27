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
import Widget6 from './Components/Widget6';
import Widget7 from './Components/Widget7';
import Widget9 from './Components/Widget9';
import Widget8 from './Components/Widget8';

import Button from '@storybook/react/dist/demo/Button';
import Admin from './Admin';
//import { action } from '@storybook/addon-actions';

/// Routes

import { Link } from 'react-router-dom';
import Widget11 from './Components/Widget11';


class App extends React.Component {

  render() {

    return (
      <div>
        {/* Commentaire */}
        <Container fluid style={{overflow:'hidden'}} >
            <Row justify="around" debug>
              <Col xs={6} debug style={{marginTop:'200px', marginLeft:"30px", backgroundColor:"rgba(255, 122, 193, 0.19)"}}> <Widget9/> </Col>
              <Col xs={3}  style={{marginTop:'200px', backgroundColor: "rgba(0,0,0,0)"}}> <Widget1/> </Col>  
            </Row> 
            <br />
            <br />
            <Row justify="around" >
              <Col xs={2}  style={{marginLeft:"30px", background:"rgba(0,0,0,0)", marginTop:"20px"}}> <Widget11/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget5/> </Col>
              <Col xs={2}  style={{marginLeft:"20px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget9/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"20px"}}> <Widget4/> </Col>
            </Row>
            <Row>
              <Col md={4} > <Widget8/></Col>
            </Row>

        </Container>

      </div>
    )
  }

}

export default App;
