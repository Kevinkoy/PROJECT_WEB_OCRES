import React from 'react';
import Button from '@storybook/react/dist/demo/Button';
import { Link } from 'react-router-dom';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import './Navbar.css';


class Navbar extends React.Component {
    /// no Constructor
    /// Methode Render
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container"><a className="navbar-brand js-scroll-trigger" href="">Home</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-align-justify" /></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="Admin" style={{ width: '67px', height: '63px' }}>Admin<i className="fas fa-user-circle" style={{ fontSize: '47px' }} /></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*  <Row style={{backgroundColor:"white"}}>
                    <Button>
                        <Link to="/Admin"> Admin </Link>
                    </Button>
                </Row>
        */}
            </div>
        );
    }

}

export default Navbar;