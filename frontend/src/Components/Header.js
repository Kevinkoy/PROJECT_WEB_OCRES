import React from 'react';
import Button from '@storybook/react/dist/demo/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class Header extends React.Component {

    /// Methode Render
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"> MyDashboard </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
               <Button>
               <Nav.Link href="/Admin"> Admin </Nav.Link>
               </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        

          
        );
    }

}

export default Header;