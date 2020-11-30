import React from 'react';
import './App.css';
/// Grid = Gérer le display
import { Container, Row, Col } from 'react-grid-system';

/// Components
import Header from './Components/Header';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
//import Widget6 from './Components/Widget6';
//import Widget7 from './Components/Widget7';
import Widget8 from './Components/Widget8';
import Widget9 from './Components/Widget9';
import Widget11 from './Components/Widget11';
import Widget6 from './Components/Widget6';


/// Routes




class App extends React.Component {

  render() {
    return (
      <div >
        <Header> </Header>
        {/* Commentaire */}
        <Container fluid style={{overflow:'hidden'}} >
            <Row justify="around" debug className="file1">
              <Col lg={6} md={12} xs={12} debug style={{marginTop:'200px', marginLeft:"30px", backgroundColor:"rgba(255, 122, 193, 0.19)", padding:'60px 110px'}}> <Widget2/> </Col>
              <Col lg={3} md={6} xs={6} style={{marginTop:'250px', backgroundColor: "rgba(0,0,0,0)"}}> 
               <Widget1/>
              </Col>  
            </Row> 
            <br/>
            <br/>
            <Row justify="around" >
              <div lg={2} sm={12} xs={6} ><Col style={{marginLeft:"30px", background:"rgba(0,0,0,0)", marginTop:"60px", position:'relative'}}> <Widget11/> </Col></div>
              <Col lg={2} md={5} xs={6} style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"35px"}}> <Widget5/> </Col>
              <Col lg={2} md={5} xs={6} style={{marginRight:"60px", backgroundColor:"rgba(0,0,0,0)", marginTop:"35px"}}> <Widget9/> </Col>
              <Col lg={2} md={4} xs={6} style={{marginLeft:"30px", backgroundColor:"rgba(0,0,0,0)", marginTop:"50px"}}> <Widget4/> </Col>
            </Row>
            <Row>
              <Col lg={4} md={12} xs={12} > <Widget8/></Col>
              <Col lg={4} md={12} xs={12} > <Widget6/> </Col>
              
        
            </Row>

        </Container>
        

      </div>
    )
  }

}

export default App;
