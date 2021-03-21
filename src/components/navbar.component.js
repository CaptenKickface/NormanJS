import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'



export default class NavBar extends Component {
    
    render() {
    //    console.log()
        return (
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Norman</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => this.props.handler('News')} >News</Nav.Link>                        
                        <Nav.Link onClick={() => this.props.handler('US')}>US</Nav.Link>
                        <Nav.Link onClick={() => this.props.handler('Canada')}>Canada</Nav.Link>
                        <Nav.Link onClick={() => this.props.handler('Schedule')}>Schedule</Nav.Link>                   
                        <Nav.Link onClick={() => this.props.handler('About')}>About</Nav.Link>                        
                        <NavDropdown title="Contact" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => this.props.handler('HR')}>HR</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.props.handler('CEO')}>CEO</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.props.handler('Ned')}>Ned</NavDropdown.Item>                            
                        </NavDropdown>
                        
                    </Nav>
                    <Nav>
                    <Nav.Link onClick={() => this.props.handler('Messages')}>Messages <Badge variant='light'>9</Badge></Nav.Link>
                        <Nav.Link eventKey={2} >
                            ^
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}