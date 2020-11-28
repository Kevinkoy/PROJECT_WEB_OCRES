import React from 'react';
import './App.css';
/// Grid = Gérer le display
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

/// Components
import Header from './Components/Header';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
//import Widget6 from './Components/Widget6';
//import Widget7 from './Components/Widget7';
import Widget8 from './Components/Widget8';
import Widget9 from './Components/Widget9';
import Widget11 from './Components/Widget11';

/// Routes
import { Link } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header> </Header>
        {/* Commentaire */}
        <Container fluid style={{overflow:'hidden'}} >
            <Row justify="around" debug>
              <Col xs={6} debug style={{marginTop:'200px', marginLeft:"30px", backgroundColor:"rgba(255, 122, 193, 0.19)", padding:'60px 110px'}}> <Widget2/> </Col>
              <Col xs={3}  style={{marginTop:'270px', backgroundColor: "rgba(0,0,0,0)"}}> <Widget1/> </Col>  
            </Row> 
            <br/>
            <br/>
            <Row justify="around" >
              <Col xs={2}  style={{marginLeft:"30px", background:"rgba(0,0,0,0)", marginTop:"35px"}}> <Widget11/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget5/> </Col>
              <Col xs={2}  style={{marginLeft:"20px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget9/> </Col>
              <Col xs={2}  style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"20px"}}> <Widget4/> </Col>
            </Row>
            <Row>
              <Col xs={4} > <Widget8/></Col>
            </Row>

        </Container>
        

      </div>
    )
  }

}

export default App;
