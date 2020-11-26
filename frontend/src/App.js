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



class App extends React.Component {
 
  render() {

    return (

      <div>
        {/* Commentaire */}
<<<<<<< HEAD
        <Container fluid >
            <Row justify="around" debug>
              <Col xs={6} debug style={{marginTop:'200px', marginLeft:"30px", backgroundColor:"rgba(255, 122, 193, 0.19)"}}> <Widget2/> </Col>
              <Col xs={3} debug style={{marginTop:'200px', backgroundColor: "rgba(0,0,0,0)"}}> <Widget1/> </Col>  
            </Row> 
            <br />
            <br />
            <Row justify="around" debug>
              <Col xs={2} debug style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)"}}> <Widget5/> </Col>
              <Col xs={2} debug style={{marginLeft:"30px", background:"rgba(0,0,0,0)"}}> <Widget3/> </Col>
              <Col xs={2} debug style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"20px"}}> <Widget4/> </Col>
            </Row>
=======
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
              <Widget4/>
            </Col>
            <Col sm={6}>
              <Widget7/>
            </Col>
            <Col sm={6}>
              <Widget9/>

            </Col>
          </Row>
>>>>>>> master
        </Container>

      </div>

    )
  }

}

export default App;
