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
<<<<<<< HEAD
        {/* Commentaire */}
        <Container fluid style={{overflow:'hidden'}} >
            <Row justify="around" debug>
              <Col xs={6} debug style={{marginTop:'200px', marginLeft:"30px", backgroundColor:"rgba(255, 122, 193, 0.19)"}}> <Widget2/> </Col>
              <Col xs={3}  style={{marginTop:'200px', backgroundColor: "rgba(0,0,0,0)"}}> <Widget1/> </Col>  
            </Row> 
            <br />
            <br />
            <Row justify="around" >
              <Col xs={3}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget5/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", background:"rgba(0,0,0,0)"}}> <Widget3/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"20px"}}> <Widget4/> </Col>
            </Row>
=======
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
>>>>>>> master
        </Container>

      </div>
    )
  }

}

export default App;
