import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import AnswerHandler from './array-push.component.js'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Test from './test.component.js'

export default class NavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Norman</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => AnswerHandler('News')} >News</Nav.Link>                        
                        <Nav.Link onClick={() => AnswerHandler('US')}>US</Nav.Link>
                        <Nav.Link onClick={() => AnswerHandler('Canadian')}>Canadian</Nav.Link>
                        <Nav.Link onClick={() => AnswerHandler('Schedule')}>Schedule</Nav.Link>                   
                        <Nav.Link onClick={() => AnswerHandler('About')}>About</Nav.Link>                        
                        <NavDropdown title="Contact" id="collasible-nav-dropdown" onClick={() => AnswerHandler('Contact')}>
                            <NavDropdown.Item onClick={() => AnswerHandler('HR')}>HR</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => AnswerHandler('CEO')}>CEO</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => AnswerHandler('Ned')}>Ned</NavDropdown.Item>                            
                        </NavDropdown>
                        
                    </Nav>
                    <Nav>
                    <Nav.Link onClick={() => AnswerHandler('Messages')}>Messages <Badge variant='light'>9</Badge></Nav.Link>
                        <Nav.Link eventKey={2} >
                            ^
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}